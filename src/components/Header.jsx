import { Link, Form } from "react-router-dom"

export default function Navbar(){
  const navMenu = [
    { link: "UI Design", path: "ui-design" },
    { link: "Front-end", path: "front-end" },
    { link: "Back-end", path: "back-end" },
    { link: "DevOps", path: "devops" },
    { link: "Cyber Security", path: "cyber-sec" },
  ]

  const toggleClass = (el, classn = 'hidden') => {
    el.classList.toggle(classn)
    console.log(el,classn)
  }

  const onLainnyaClickHandler = () => {
    toggleClass(document.getElementById('nav-lainnya'))
  }

  const onHamburgerClickHandler = () => {
    const nav = document.getElementById('nav-mobile')
    const ham = document.getElementById('nav-button')
    toggleClass(ham, 'hamburger-active')
    toggleClass(nav)
  }

  return (
    <header className="p-[30px] ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div>
            <div className="relative md:hidden">
              <button id="nav-button" className=" hover:cursor-pointer" onClick={onHamburgerClickHandler}>
                <span className="origin-top-left"></span>
                <span></span>
                <span className="origin-bottom-left"></span>
              </button>
              <ul id="nav-mobile" className="absolute -left-3 top-10 flex hidden w-32 flex-col gap-3 rounded-sm bg-[#374151] px-3 py-4 shadow-md">
                {navMenu.map(({ link, path }) => {
                  return (
                    <li key={path}>
                      <Link to={path}>{link}</Link>
                    </li>
                  )
                })}
              </ul>
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
          <div className="flex items-center gap-3 rounded-full bg-transparent pl-5 md:w-full md:max-w-[224px] md:bg-[rgba(31,41,55,0.60)]">
            <button className="opacity-40 hover:cursor-pointer md:hidden md:opacity-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="1">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </button>
            <span className="hidden md:block">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.1" clip-path="url(#clip0_5_30)">
                  <path d="M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.25 12.25L9.71251 9.71246" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_5_30">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <form className="hidden md:block">
              <input className="bg-transparent px-2 py-3 outline-none" placeholder="Search" />
            </form>
          </div>
        </div>
      </div>

    </header>
  )
}
