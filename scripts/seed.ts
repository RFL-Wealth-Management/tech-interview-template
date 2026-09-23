import {existsSync} from 'node:fs'
import {resolve} from 'node:path'
import {createClient} from '@sanity/client'
import {homePageContent} from './seed-content'

const API_VERSION = '2024-10-01'

function fail(message: string): never {
  console.error(`✗ ${message}`)
  process.exit(1)
}

function parseList(name: string): string[] {
  const items = (process.env[name] ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
  if (items.length === 0) fail(`${name} is empty. Set it in scripts/.env (see scripts/.env.example).`)
  return items
}

function loadTargets() {
  const envPath = resolve('scripts/.env')
  if (!existsSync(envPath)) fail('scripts/.env not found. Copy scripts/.env.example to scripts/.env and fill it in.')
  process.loadEnvFile(envPath)

  const projectIds = parseList('SANITY_PROJECT_IDS')
  const tokens = parseList('SANITY_TOKENS')
  const dataset = process.env.SANITY_DATASET?.trim()

  if (!dataset) fail('SANITY_DATASET is empty. Set it in scripts/.env.')
  if (projectIds.length !== tokens.length) {
    fail(
      `SANITY_PROJECT_IDS has ${projectIds.length} entries but SANITY_TOKENS has ${tokens.length}. ` +
        'They are matched by position, so the counts must be equal.',
    )
  }

  return projectIds.map((projectId, i) => ({projectId, token: tokens[i], dataset}))
}

// Sanity needs `_type` and a stable `_key` on every array item. Deterministic keys keep reruns idempotent.
const document = {
  ...homePageContent,
  benefits: homePageContent.benefits.map((benefit, i) => ({
    _type: 'benefit',
    _key: `benefit-${i + 1}`,
    ...benefit,
  })),
}

async function main() {
  const targets = loadTargets()
  let failed = 0

  for (const {projectId, token, dataset} of targets) {
    const client = createClient({projectId, dataset, token, apiVersion: API_VERSION, useCdn: false})
    try {
      await client.createOrReplace(document)
      console.log(`✓ seeded ${projectId}`)
    } catch (error) {
      failed++
      const message = error instanceof Error ? error.message : String(error)
      console.error(`✗ failed ${projectId}: ${message}`)
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} of ${targets.length} project(s) failed.`)
    // exitCode (not exit()) lets open HTTP sockets close first; exit() can crash libuv on Windows.
    process.exitCode = 1
  }
}

main()
