const PostCard = () => {
  // const img = 'post-2.jpg';
  const img = 'https://source.unsplash.com/400x1000?billie+eilish'
  return (
    <div className="flex w-full flex-col gap-y-5 sm:w-2/5">
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
        <img src={img} className='h-full w-full object-cover object-center' />
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.60)]">
          <span>INTERNET</span>
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
