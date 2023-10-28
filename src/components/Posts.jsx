import PostCard from "./PostCard";
import data from '../../public/data.json'

export default function Posts(){
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
