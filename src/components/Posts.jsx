import PostCard from "./PostCard"

export default function Posts(){
  return (
    <section className="px-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-16 lg:flex-nowrap">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
  )
}
