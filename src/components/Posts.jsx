import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function Posts(){
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5173/data.json')
      const posts = await response.json()
      setData(posts)
    }
    fetchData()
  }, [])

  return (
    <section className="px-[30px] sm:mt-8 lg:mt-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-16">
          {data.map((d,i) => {
            return (
              <PostCard key={i} data={d} id={i}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}
