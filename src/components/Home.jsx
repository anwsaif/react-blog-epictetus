import { useEffect, useState } from "react"
import Posts from "./Posts"
import { getPosts } from "../posts"

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getPosts()
      .then(posts => setData(posts))
  }, [])

  return (
    <Posts data={data} />
  )
}

export default Home
