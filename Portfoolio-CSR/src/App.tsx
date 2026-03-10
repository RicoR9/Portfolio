import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/index'
import About from './pages/About'
import Contact from './pages/Contact'
import Information from './pages/Information'
import Shop from './pages/Shop'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
