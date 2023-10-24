import { Link } from "react-router-dom"

export default function Navbar(){
  const navMenu = [
    { link: "UI Design", path: "ui-design" },
    { link: "Front-end", path: "front-end" },
    { link: "Back-end", path: "back-end" },
  ]
  return (
    <header className="flex items-center justify-between p-[30px]">
      <div>
        <div id="nav-button" className="hover:cursor-pointer md:hidden">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="hidden md:block">
          <ul className="gap-10 md:flex">
            {navMenu.map(({ link, path }) => <li key={path}><Link  to={path}>{link}</Link></li> )}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-3 text-lg md:order-first">
        <span className="flex h-[35px] w-[35px] items-center justify-center bg-[#4B5563] font-source">E</span>
        <span>Epictetus</span>
      </div>
      <div>
        search
      </div>
    </header>
  )
}
