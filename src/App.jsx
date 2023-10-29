import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Category from './components/Category'
import { Post } from './components/Post'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:category" element={<Category />} />
            <Route path='post/:id' element={<Post />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
