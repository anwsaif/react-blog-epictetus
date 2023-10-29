import { useLocation, useOutletContext } from "react-router-dom"

const PostCard = (props) => {
  const { postImagePath, authorImagePath } = useOutletContext()

  const isIndexAndFirst = useLocation().pathname === '/' && props.id === 0

  return (
    <div className={`post-card flex w-full grow flex-col gap-x-8 gap-y-5 sm:w-2/5 lg:w-3/12 ` + (isIndexAndFirst ? "lg:w-max lg:flex-row lg:items-center" : "") }>
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
        <img src={postImagePath + props.data.image} className='h-full w-full object-cover object-center' />
      </div>
      <div className={`flex flex-col gap-5 ` + (isIndexAndFirst ? "lg:w-[48%]" : '')}>

        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-3 text-[rgba(255,255,255,0.60)]">
            <span>{props.data.category}</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(255,255,255,0.60)]"></span>
            <span>June 28, 2021</span>
          </div>
          <p className="text-2xl">{props.data.title}</p>
          <p className="opacity-60">{props.data.content}</p>
          {/* <p className="opacity-60">{props.data.content.slice(0,165)+'...'}</p> */}
        </div>
        <div className="flex items-center gap-4">
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
            <img src={authorImagePath + props.data.author_image} alt={props.data.author_name} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span>{props.data.author_name}</span>
            <span className="text-sm opacity-60">{props.data.author_occupation}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard 
