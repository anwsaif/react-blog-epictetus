import { useEffect, useState } from "react"
import Posts from "./Posts"
import { useParams } from "react-router-dom"
import { navItems } from "./Header"
import { getPosts } from "../posts"

const Category = () => {
  const [data, setData] = useState([])
  const { category } = useParams()

  useEffect(() => {
    // console.log('so this is how it went')
    getPosts()
      .then(posts => posts.filter(post => post.category.toLowerCase().replaceAll(' ', '-') === category))
      .then(filteredPosts => setData(filteredPosts), window.scrollTo(0,0))
    
  }, [category])

  return (
    <Posts data={data} category={navItems.find(item => item.path === category).link} />
  )
}

export default Category
