export default function PostCard(){
  const img = 'post-2.jpg';
  return (
    <div className="flex w-full flex-col gap-y-5 sm:w-1/3">
      <div className="relative h-[213px] w-auto overflow-hidden rounded-[10px]">
        <img src={img} className={`w-full absolute`} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.60)]">
          <span>INTERNET</span>
          <span className="h-1 w-1 rounded-full bg-[rgba(255,255,255,0.60)]"></span>
          <span>June 28, 2021</span>
        </div>
      </div>
    </div>
  )
}
