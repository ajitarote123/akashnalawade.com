import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Work from './pages/Work'

const pages = {
  home: Home,
  about: About,
  work: Work,
}

export default function App({ page }) {
  const Page = pages[page] || Home
  return (
    <Layout page={page}>
      <Page />
    </Layout>
  )
}
