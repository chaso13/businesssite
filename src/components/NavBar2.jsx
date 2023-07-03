import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import loadable from '@loadable/component'
const Drawer = loadable(() => import('./Drawer'))

export default function NavBar2() {
    const navigate = useNavigate()
    
    const [toggle,setToggle] = useState(false)
    
    const handler = () => {
        setToggle((prev) => !prev)
    }

    useEffect(() => {
        setToggle(false)
    }, [navigate])

    return (
        <header className="h-[85px] py-5 max-w-[100vw] ">
            <div className="">
                <div className="flex flex-row h-[45px] px-5 justify-between w-[100vw] ">
                    <div className="">
                        <a className="flex flex-row" href="/" target="_self">
                            <h1 className="font-crimsonPro sm:text-[45px] sm:leading-[45px] text-[35px] leading-[35px] font-extrabold">webambrosia</h1><h1 className="text-[#107bdf] font-crimsonPro text-[65px] sm:leading-[35px] leading-[25px] font-extrabold">.</h1>
                        </a>
                    </div>
                    <div class=""></div>
                    <div className="flex flex-row ">
                        <div className="ct-div-block flex flex-row">
                            <div style={{ background: 'linear-gradient(to right, #107bdf 50%, #000000 50%)', backgroundSize: '200% 100%', backgroundPosition: '100%', WebkitBackgroundClip: 'text' }} className="  flex mr-[30px] text-[24px] sm:leading-[45px] leading-[35px] bg-origin-padding bg-clip-text static  font-crimsonPro hover:animate-fill-text ">
                                <Link to="/case-studies/" className="" style={{ WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                                    see our portfolio
                                </Link>
                                </div>
                            <div style={{ background: 'linear-gradient(to right, #107bdf 50%, #000000 50%)', backgroundSize: '200% 100%', backgroundPosition: '100%', WebkitBackgroundClip: 'text' }} className="  sm:flex hidden mr-[30px] text-[24px] sm:leading-[45px] leading-[35px]  bg-origin-padding bg-clip-text static  font-crimsonPro hover:animate-fill-text ">

                            <Link to="/price-guide/" className="" style={{ WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                                    pricing guide
                            </Link>
                            </div>

                            <div id="-burger-trigger-47-25" class="oxy-burger-trigger h-[24px] w-[40px]">
                                <button onClick={handler} aria-label="Open menu" data-touch="click" class="hamburger hamburger--slider  flex" type="button" aria-expanded="false" aria-controls="-off-canvas-42-25-inner">
                                    <span class="RMP-squeeze h-[40px] w-[40px] inline-block relative">
                                        <span class={toggle === false ? ` RMP-inner flex flex-col absolute
                                        before:w-[40px] before:h-[4px] before:bg-black before:rounded-[4px] before:top-[-12px] before:flex before:absolute before:opacity-1 before:duration-250 before:ease-linear
                                        after:w-[40px] after:h-[4px] after:bg-black after:rounded-[4px] after:bottom-[-12px] after:flex after:absolute after:duration-250 after:ease-linear
                                        w-[40px] h-[4px] bg-black rounded-[4px] top-[22px] duration-250 ease-linear
                                        hamburger-inner` : ` RMP-inner flex flex-col absolute
                                        before:w-[40px] before:h-[4px] before:bg-black before:rounded-[4px] before:top-[0] before:flex before:absolute before:opacity-0 before:duration-250 before:ease-linear
                                        after:w-[40px] after:h-[4px] after:bg-black after:rounded-[4px] after:bottom-[0] after:flex after:absolute after:-rotate-90 after:top-0 after:duration-250 after:ease-linear
                                        w-[40px] h-[4px] bg-black rounded-[4px] top-[50%] rotate-45 duration-250 ease-linear
                                        hamburger-inner`}></span>
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


                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="overflow-x-hidden">
                <Drawer set={toggle} setter={setToggle} />
                </div>

            </div>
        </header>
    )
}
