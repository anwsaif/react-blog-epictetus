import { useEffect, useState } from "react"
import Posts from "./Posts"
import { useParams, useSearchParams } from "react-router-dom"
import { navItems } from "./Header"
import { getPosts } from "../posts"

const Category = () => {
  const [data, setData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q')
  const message = "We couldn’t find any posts with the keyword `"+query+"`. Please try another keyword."

  useEffect(() => {
    // console.log('so this is how it went')
    getPosts(query)
      .then(posts => setData([]), window.scrollTo(0,0))
    
  }, [query])

  return (
    <Posts data={data} message={message} query={query} />
  )
}

export default Category
