import { useEffect, useState } from "react"
import Posts, { fetchData } from "./Posts"
import { useParams } from "react-router-dom"
import { navItems } from "./Header"

const Category = () => {
  const [data, setData] = useState([])
  const { category } = useParams()

  useEffect(() => {
    console.log('so this is how it went')
    fetchData()
      .then(posts => posts.filter(post => post.category.toLowerCase().replaceAll(' ', '-') === category))
      .then(filteredPosts => setData(filteredPosts))
    
  }, [category])

  return (
    <Posts data={data} category={navItems.find(item => item.path === category).link} />
  )
}

export default Category
