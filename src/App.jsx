import Layout from './components/Layout'
import About from './pages/About'
import Credits from './pages/Credits'
import Home from './pages/Home'
import Sitemap from './pages/Sitemap'
import Terms from './pages/Terms'
import Work from './pages/Work'

const pages = {
  home: Home,
  about: About,
  work: Work,
  terms: Terms,
  credits: Credits,
  sitemap: Sitemap,
}

export default function App({ page }) {
  const Page = pages[page] || Home
  return (
    <Layout page={page}>
      <Page />
    </Layout>
  )
}
