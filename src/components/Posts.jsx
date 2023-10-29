import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { useLocation, useParams } from "react-router-dom";
import { navItems } from "./Header";

export default function Posts(){
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const { category } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5173/data.json')
      const posts = await response.json()
      setData(posts)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filteredPosts = data.filter((item) => item.category.toLowerCase().replaceAll(' ', '-') === category) 
    setFilteredData(filteredPosts)
  }, [category])

  const path = useLocation().pathname
  const fullPath = path.split('/')

  const isCategory = fullPath[1] === 'category'

  return (
    <section className="px-[30px] sm:mt-8 lg:mt-14">
      <div className="container mx-auto">
        {isCategory ? <h1 className="p-14 text-center text-3xl font-bold">{navItems.find(c => c.path === category).link}</h1> : ''}
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-16">
          {(isCategory ? filteredData : data ).map((d,i) => {
            return (
              <PostCard key={i} data={d} id={i}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}
