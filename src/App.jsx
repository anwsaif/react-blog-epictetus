import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Posts from './components/Posts'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path="category/:category" element={<Posts />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
