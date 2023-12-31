import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout(){
  const host = "http://localhost:5173/"
  const postImagePath = `${host}posts/`
  const authorImagePath = `${host}authors/`

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <Outlet context={{ postImagePath, authorImagePath }} />
      <Footer />
    </div>
  )
}
