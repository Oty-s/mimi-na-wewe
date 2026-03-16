import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Community from './pages/Community'
import PerformingArts from './pages/PerformingArts'
import VisualArts from './pages/VisualArts'
import LiteraryArts from './pages/LiteraryArts'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import Events from './pages/Events'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Community />} />
        <Route path="/community" element={<Community />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/performing-arts" element={<PerformingArts />} />
        <Route path="/visual-arts" element={<VisualArts />} />
        <Route path="/literary-arts" element={<LiteraryArts />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Layout>
  )
}

export default App
