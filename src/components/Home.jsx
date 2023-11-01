import { useEffect, useState } from "react"
import Posts from "./Posts"
// import { getPosts } from "../posts"

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout( async (q='') => {
      const response = await fetch('http://localhost:5173/data.json')
      const posts = await response.json()
      setData(posts)
    }, 5000)
  })

  return (
    <>
    {data && <Posts data={data} />}
      {!data && <div>loading...</div>}
    </>
  )
}

export default Home
