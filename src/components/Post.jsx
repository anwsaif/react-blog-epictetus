import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import { getPost } from "../posts"
import AuthorCard from "./AuthorCard"

export const Post = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const { postImagePath } = useOutletContext()

  useEffect(() => {
    async function getData() {
      const post = await getPost(id)
      window.scrollTo(0,0)
      setData(post)
    }
    getData()
  }, [])
  
  return (
    <section className="my-14 px-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8">
          <div className="flex flex-col items-center gap-y-5">
            <div className="flex items-center gap-3 text-[rgba(255,255,255,0.60)]">
              <span>{data.category}</span>
              <span className="h-1 w-1 rounded-full bg-[rgba(255,255,255,0.60)]"></span>
              <span>{new Date(data.date_posted).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: "numeric"})}</span>
            </div>
            <p className="max-w-lg text-center text-2xl">{data.title}</p>
            <AuthorCard data={data} />
          </div>
          <div className="relative aspect-video w-full grow overflow-hidden rounded-[10px] lg:aspect-[448/297] lg:w-4/5">
            <img src={postImagePath + data.image} className='h-full w-full object-cover object-center' />
          </div>
          <p className="max-w-[708px] text-xl">{data.content}</p>
        </div>
      </div>
    </section>
  )
}
