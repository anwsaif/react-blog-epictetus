import { useEffect, useState } from "react"
import { Link, Form } from "react-router-dom"

const navItems= [
  { "link": "UI Design", "path": "ui-design" },
  { "link": "Front-end", "path": "front-end" },
  { "link": "Back-end", "path": "back-end" },
  { "link": "Internet", "path": "internet" },
  { "link": "9 to 5", "path": "9-to-5" },
  { "link": "Inspirations", "path": "inspirations" }
]

export { navItems }
export default function Header(){
  const [isFixed, setIsFixed] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [ham, setHam] = useState()
  const nav = document.getElementById('nav-mobile')
  const lainnya = document.getElementById('nav-lainnya')
  const lainnyaBtn = document.getElementById('btn-lainnya')
  const searchBar = document.getElementById('search-bar')

  function searchToggle(){
    setIsSearch(!isSearch)
  }

  useEffect(() => {
    setHam(document.getElementById('nav-button'))
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if(isSearch) document.querySelector('input[name=q]').focus()
  }, [isSearch])

  useEffect(() => {
    window.addEventListener('click', closeNavbar)
    return () => window.removeEventListener('click', closeNavbar)
  })

  useEffect(() => {
    window.addEventListener('click', closeLainnya)
    return () => window.removeEventListener('click', closeLainnya)
  })

  useEffect(() => {
    window.addEventListener('click', closeSearch)
    return () => window.removeEventListener('click', closeSearch)
  })

  function closeSearch(e){
    if(!searchBar.contains(e.target) && !document.getElementById('search-btn').contains(e.target)){
      setIsSearch(false)
    }
  }

  function closeLainnya(e){
    if(!lainnyaBtn.contains(e.target)){
      lainnya.classList.add('scale-0')
      lainnya.classList.remove('scale-100')
    } 
  }

  function closeNavbar(e){
    if(!document.getElementById('navbar').contains(e.target) || nav.contains(e.target)) {
      if(!ham.contains(e.target) || nav.contains(e.target)){
        ham.classList.remove('hamburger-active')
        nav.classList.add('scale-0')
        nav.classList.remove('scale-1')
      } 
    }
  }

  function handleScroll(){
    if(window.scrollY > 95){
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }

  const [...navMenu] = navItems
  const toggleClass = (el, classn = 'hidden') => {
    el.classList.toggle(classn)
  }

  const onLainnyaClickHandler = () => {
    toggleClass(lainnya, 'scale-0')
    toggleClass(lainnya, 'scale-100')
  }

  const onHamburgerClickHandler = () => {
    toggleClass(ham, 'hamburger-active')
    toggleClass(nav, 'scale-0')
    toggleClass(nav, 'scale-1')
  }

  return (
    <>
    <header className={`navbar-fixed w-full px-[30px] transition duration-500 py-5 ` + (isFixed ? 'bg-[#374151]' : '')}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div id="navbar">
            <div className={(isSearch ? 'scale-0' : 'scale-1') + " relative transition duration-75 lg:hidden "}>
              <button id="nav-button" className=" hover:cursor-pointer" onClick={onHamburgerClickHandler}>
                <span className="origin-top-left"></span>
                <span></span>
                <span className="origin-bottom-left"></span>
              </button>
              <ul id="nav-mobile" className="absolute top-10 z-50 flex w-36 origin-top-left scale-0 flex-col gap-3 rounded-sm bg-[#374151] px-3 py-4 shadow-lg transition ease-in-out">
                {navMenu.map(({ link, path }) => {
                  return (
                    <li key={path}>
                      <Link to={`category/` + path}>{link}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <nav className="hidden lg:block">
              <ul className="gap-10 md:flex">
                {navMenu.splice(0,3).map(({ link, path }) => {
                  return (
                    <li key={path}>
                      <Link to={`category/` + path}>{link}</Link>
                    </li>
                  )
                })}
                <div className="relative">
                  <button id="btn-lainnya" className="ml-3 inline" onClick={onLainnyaClickHandler}>
                    Lainnya <span><svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> </span>
                  </button>
                  <ul id="nav-lainnya" className="absolute top-8 z-50 flex w-36 origin-top scale-0 flex-col gap-2 rounded-sm bg-[#374151] px-3 py-4 shadow-xl transition">
                    {navMenu.map(({ path, link }) => {
                      return (
                        <li key={path}>
                          <Link to={`category/` + path}>{link}</Link>
                        </li>  
                      )
                    })}
                  </ul>
                </div>
              </ul>
            </nav>
          </div>
          <Link to='/' className={(isSearch ? 'hidden' : 'flex') + " items-center gap-3 text-lg transition duration-300 hover:opacity-100 lg:order-first"}>
            <span className="flex h-[35px] w-[35px] items-center justify-center bg-[#4B5563] font-source">E</span>
            <span>Epictetus</span>
          </Link>
          <button id="search-btn" className={(isSearch ? 'hidden' : '') +` opacity-40 hover:cursor-pointer lg:hidden lg:opacity-10`} onClick={searchToggle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="1">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
          </button>
          <div id="search-bar" className={(isSearch ? '!static w-full scale-x-[1!important] bg-[rgba(31,41,55,0.60)!important]' : '') + ` absolute flex items-center gap-3 rounded-full lg:scale-x-100 lg:static bg-transparent pl-5 lg:w-full lg:max-w-[224px] lg:bg-[rgba(31,41,55,0.60)] transition duration-500 ease-in-out scale-x-0 origin-right`}>
            <span className={(isSearch ? 'block' : 'hidden') +" lg:block"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.1" clipPath="url(#clip0_5_30)">
                  <path d="M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.25 12.25L9.71251 9.71246" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_5_30">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <form className={(isSearch ? 'block' : 'hidden') +" w-full lg:block"} action="/search">
              <input name="q" className="w-full bg-transparent px-2 py-3 outline-none" placeholder="Search" />
            </form>
          </div>
          <button onClick={searchToggle} className={'ml-4 ' + (!isSearch ? 'hidden' : '')}>X</button>
        </div>
      </div>

    </header>
    <div className="h-[75px] w-full"></div>
    </>
  )
}
