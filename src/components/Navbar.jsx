import { Link } from "react-router-dom"

export default function Navbar(){
  const navMenu = [
    { link: "UI Design", path: "ui-design" },
    { link: "Front-end", path: "front-end" },
    { link: "Back-end", path: "back-end" },
  ]
  return (
    <header className="flex justify-between p-[30px]">
      <div>
        <div id="nav-button" className="md:hidden">
          <span>bu</span>
          <span>r</span>
          <span>ger</span>
        </div>
        <nav className="hidden md:block">
          <ul className="gap-10 md:flex">
            {navMenu.map(({ link, path }) => <li key={path}><Link  to={path}>{link}</Link></li> )}
          </ul>
        </nav>
      </div>
      <div className="md:order-first">
        <span>Epic</span>
        <span>tetus</span>
      </div>
      <div>
        search
      </div>
    </header>
  )
}
