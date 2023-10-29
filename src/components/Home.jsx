import { useEffect, useState } from "react"
import Posts, { fetchData } from "./Posts"

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
      .then(posts => setData(posts))
  }, [])

  return (
    <Posts data={data} />
  )
}

export default Home
