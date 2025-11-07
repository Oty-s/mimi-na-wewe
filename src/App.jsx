import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PerformingArts from './pages/PerformingArts'
import VisualArts from './pages/VisualArts'
import LiteraryArts from './pages/LiteraryArts'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/performing-arts" element={<PerformingArts />} />
        <Route path="/visual-arts" element={<VisualArts />} />
        <Route path="/literary-arts" element={<LiteraryArts />} />
      </Routes>
    </Layout>
  )
}

export default App
