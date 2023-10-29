export const getPosts = async () => {
  const response = await fetch('http://localhost:5173/data.json')
  const posts = await response.json()
  return posts
}

export const getPost = async (id) => {
  const posts = await getPosts()
  const post = posts.find(post => post.id == id)
  return post
}
