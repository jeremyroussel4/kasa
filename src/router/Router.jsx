// 4 novembre
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Housing from '../pages/Housing/Housing'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'


function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter

// exemple http://localhost:5174/housing/test fonctionne