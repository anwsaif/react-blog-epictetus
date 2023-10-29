export const getPosts = async () => {
  const response = await fetch('http://localhost:5173/data.json')
  const posts = await response.json()
  return posts
}
