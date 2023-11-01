import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import NoResults from "./NoResults";

export default function Posts({ data, category, message, query }){

  return (
    <section className="px-[30px] py-4 sm:mt-8 lg:mt-14">
      <div className="container mx-auto">
        {query ? <h1 className="py-14 text-center text-3xl">Search: {query}</h1> : ''}
        {category ? <h1 className="py-14 text-center text-3xl">Category: {category}</h1> : ''}
        {(data.length < 1) ? <NoResults message={message} /> : 
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-16">
          {data.map((d,i) => {
            return (
              <PostCard key={i} data={d} id={i}/>
            )
          })}
        </div>}
      </div>
    </section>
  )
}
