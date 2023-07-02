import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Drawer from './Drawer'

export default function NavBar2() {
    const [toggle,setToggle] = useState(false)
    const handler = () => {
        setToggle((prev) => !prev)
    }

    return (
        <header className="h-[85px] p-5 max-w-[100vw] ">
            <div className="">
                <div className="flex flex-row h-[45px] px-5 justify-between ">
                    <div className="">
                        <a className="" href="/" target="_self">
                            Web Ambrosia
                        </a>
                    </div>
                    <div class=""></div>
                    <div className="flex flex-row ">
                        <div className="ct-div-block flex flex-row">
                            <div style={{ background: 'linear-gradient(to right, #107bdf 50%, #000000 50%)', backgroundSize: '200% 100%', backgroundPosition: '100%', WebkitBackgroundClip: 'text' }} className="  flex mr-[30px] text-[24px]  bg-origin-padding bg-clip-text static  font-crimsonPro hover:animate-fill-text ">
                                <Link to="/case-studies/" className="" style={{ WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                                    see our portfolio
                                </Link>
                                </div>
                            <div style={{ background: 'linear-gradient(to right, #107bdf 50%, #000000 50%)', backgroundSize: '200% 100%', backgroundPosition: '100%', WebkitBackgroundClip: 'text' }} className="  flex mr-[30px] text-[24px]  bg-origin-padding bg-clip-text static  font-crimsonPro hover:animate-fill-text ">

                            <Link to="/price-guide/" className="" style={{ WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                                    pricing guide
                            </Link>
                            </div>

                            <div id="-burger-trigger-47-25" class="oxy-burger-trigger h-[24px] w-[40px]">
                                <button onClick={handler} aria-label="Open menu" data-touch="click" class="hamburger hamburger--slider  flex" type="button" aria-expanded="false" aria-controls="-off-canvas-42-25-inner">
                                    <span class="hamburger-box flex h-[40px]">
                                        <span class=" flex flex-col
                                        before:w-[40px] before:h-[4px] before:bg-black before:rounded-[4px] before:top-[-10px] before:flex 
                                        after:w-[40px] after:h-[4px] after:bg-black after:rounded-[4px] after:bottom-[20px] after:flex 
                                        w-[40px] h-[4px] bg-black rounded-[4px] 
                                        hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>


                            <div id="-pro-menu-57-25" class="oxy-pro-menu relative left-0 top-0 overflow-x-hidden" onClick={handler}>
                                <div class=" absolute left-0" data-off-canvas-alignment="left">
                                    <svg id="-pro-menu-57-25-open-icon">
                                        <use xlink:href="#ThriveThemeFilesicon-Hamburger-Icon">
                                        </use>
                                    </svg>
                                </div>

                            <Drawer set={toggle} setter={setToggle} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
