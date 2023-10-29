import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Category from './components/Category'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:category" element={<Category />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
