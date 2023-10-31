import { useOutletContext } from "react-router-dom"

const AuthorCard = ({ data }) => {
  const { authorImagePath } = useOutletContext()
  return (
    <div className="mt-2 flex items-center gap-4">
      <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
        <img src={authorImagePath + data.author_image} alt={data.author_name} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span>{data.author_name}</span>
        <span className="text-sm opacity-60">{data.author_occupation}</span>
      </div>
    </div>
  )
}

export default AuthorCard
