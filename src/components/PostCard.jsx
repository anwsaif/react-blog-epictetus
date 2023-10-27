import { useOutletContext } from "react-router-dom"

const PostCard = (props) => {
  const { postImagePath, authorImagePath } = useOutletContext()

  return (
    <div className="flex w-full grow flex-col gap-y-5 sm:w-2/5 lg:w-3/12">
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
        <img src={postImagePath + props.data.image} className='h-full w-full object-cover object-center' />
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.60)]">
          <span>{props.data.category}</span>
          <span className="h-1 w-1 rounded-full bg-[rgba(255,255,255,0.60)]"></span>
          <span>June 28, 2021</span>
        </div>
        <p className="text-xl">
          How to design a product that can grow itself 10x in year
        </p>
        <p className="opacity-60">
          Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.
        </p>
      </div>
      <div className="flex">
        <img src="" alt=""/>
      </div>
    </div>
  )
}

export default PostCard 
