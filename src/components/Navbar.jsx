import { Link } from "react-router-dom"

export default function Navbar(){
  const navMenu = [
    { link: "UI Design", path: "ui-design" },
    { link: "Front-end", path: "front-end" },
    { link: "Back-end", path: "back-end" },
    { link: "DevOps", path: "devops" },
    { link: "Cyber Security", path: "cyber-sec" },
  ]

  const onLainnyaClickHandler = () => {
    document.getElementById('nav-lainnya').classList.toggle('hidden')
  }

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
            {navMenu.splice(0,3).map(({ link, path }) => {
              return (
                <li key={path}>
                  <Link to={path}>{link}</Link>
                </li>
              )
            })}
            <div className="relative">
              <button className="inline" onClick={onLainnyaClickHandler}>
                Lainnya <span><svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> </span>
              </button>
              <ul id="nav-lainnya" className="absolute top-8 z-50 flex hidden w-32 flex-col gap-2 rounded-sm bg-[#374151] px-3 py-3 shadow-lg">
                {navMenu.map(({ path, link }) => {
                  return (
                    <li key={path}>
                      <Link to={path}>{link}</Link>
                    </li>  
                  )
                })}
              </ul>
            </div>
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
