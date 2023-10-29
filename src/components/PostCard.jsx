import { Link, useLocation, useOutletContext } from "react-router-dom"

const PostCard = ({ data, id }) => {
  const { postImagePath, authorImagePath } = useOutletContext()

  const isIndexAndFirst = useLocation().pathname === '/' && id === 0

  return (
    <Link to={`post/` + data.id} className={`post-card flex w-full grow flex-col transition duration-300 ease-in-out hover:scale-95 hover:opacity-80 gap-x-8 gap-y-5 sm:w-2/5 lg:w-3/12 ` + (isIndexAndFirst ? "lg:w-max lg:flex-row lg:items-center" : "") }>
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
        <img src={postImagePath + data.image} className='h-full w-full object-cover object-center' />
      </div>
      <div className={`flex flex-col gap-5 ` + (isIndexAndFirst ? "lg:w-[48%]" : '')}>

        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-3 text-[rgba(255,255,255,0.60)]">
            <span>{data.category}</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(255,255,255,0.60)]"></span>
            <span>{new Date(data.date_posted).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: "numeric"})}</span>
          </div>
          {/* <Link to={`post/` + data.id} className="flex flex-col gap-y-3 hover:opacity-100"> */}
            <p className="text-2xl hover:opacity-80">{data.title}</p>
            <p className="opacity-60">{data.content}</p>
          {/* </Link> */}
          {/* <p className="opacity-60">{data.content.slice(0,165)+'...'}</p> */}
        </div>
        <div className="flex items-center gap-4">
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
            <img src={authorImagePath + data.author_image} alt={data.author_name} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span>{data.author_name}</span>
            <span className="text-sm opacity-60">{data.author_occupation}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard 
