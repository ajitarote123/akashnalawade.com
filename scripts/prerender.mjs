import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')

const routes = [
  { page: 'home', file: 'index.html' },
  { page: 'about', file: 'about/index.html' },
  { page: 'work', file: 'work/index.html' },
  { page: 'terms', file: 'terms/index.html' },
  { page: 'credits', file: 'credits/index.html' },
  { page: 'sitemap', file: 'sitemap/index.html' },
]

async function prerender() {
  console.log('[Prerender] Starting build-time SSG prerendering...')
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom',
  })

  try {
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx')

    for (const { page, file } of routes) {
      const filePath = path.join(distDir, file)
      if (!fs.existsSync(filePath)) {
        console.warn(`[Prerender] File not found: ${filePath}`)
        continue
      }

      const template = fs.readFileSync(filePath, 'utf-8')
      const appHtml = renderToString(React.createElement(App, { page }))

      // Match <div id="root" ...></div> with empty body
      const rootRegex = /(<div\s+id=["']root["'][^>]*>)(<\/div>)/
      if (rootRegex.test(template)) {
        const result = template.replace(rootRegex, `$1${appHtml}$2`)
        fs.writeFileSync(filePath, result, 'utf-8')
        console.log(`[Prerender] Pre-rendered: ${file} (${appHtml.length} chars)`)
      } else {
        console.warn(`[Prerender] <div id="root"> empty tag not matched in ${file}`)
      }
    }
    console.log('[Prerender] All pages successfully pre-rendered to static HTML!')
  } finally {
    await vite.close()
  }
}

prerender().catch((err) => {
  console.error('[Prerender] Error during prerendering:', err)
  process.exit(1)
})
