import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
const page = root?.dataset.page || 'home'

const app = (
  <StrictMode>
    <App page={page} />
  </StrictMode>
)

if (root) {
  if (root.hasChildNodes()) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
}
