import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Posts from './components/Posts'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Posts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
