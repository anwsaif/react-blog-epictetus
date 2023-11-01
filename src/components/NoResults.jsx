const NoResults = ({message}) => {
  return (
    <div className="mx-auto flex w-full max-w-[525px] flex-col gap-[10px] !px-0 text-center">
      <h1 className="text-[64px]">No results 😥</h1>
      <p className="text-xl">{message}</p>
    </div>
  )
}

 export default NoResults
