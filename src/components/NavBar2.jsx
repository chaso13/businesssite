import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar2() {
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
                                <button aria-label="Open menu" data-touch="click" class="hamburger hamburger--slider  flex" type="button" aria-expanded="false" aria-controls="-off-canvas-42-25-inner">
                                    <span class="hamburger-box flex h-[40px]">
                                        <span class=" flex flex-col
                                        before:w-[40px] before:h-[4px] before:bg-black before:rounded-[4px] before:top-[-10px] before:flex 
                                        after:w-[40px] after:h-[4px] after:bg-black after:rounded-[4px] after:bottom-[20px] after:flex 
                                        w-[40px] h-[4px] bg-black rounded-[4px] 
                                        hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>


                            <div id="-pro-menu-57-25" class="oxy-pro-menu absolute left-0 translate-x-[100vw]">
                                <div class="oxy-pro-menu-mobile-open-icon  oxy-pro-menu-off-canvas-trigger oxy-pro-menu-off-canvas-left" data-off-canvas-alignment="left">
                                    <svg id="-pro-menu-57-25-open-icon">
                                        <use xlink:href="#ThriveThemeFilesicon-Hamburger-Icon">
                                        </use>
                                    </svg>
                                </div>


                                <div class="oxy-pro-menu-container oxy-pro-menu-dropdown-links-visible-on-mobile oxy-pro-menu-dropdown-links-toggle oxy-pro-menu-show-dropdown oxy-pro-menu-init absolute left-0 top-0 bg-slate-500 w-[100vw] h-[100vh] z-20" data-aos-duration="400" data-oxy-pro-menu-dropdown-animation="fade-up" data-oxy-pro-menu-dropdown-animation-duration="0.4" data-entire-parent-toggles-dropdown="true" data-oxy-pro-menu-off-canvas-animation="slide-left" data-oxy-pro-menu-dropdown-links-on-mobile="toggle" data-aos="slide-left">

                                    <div class="menu-mobile-menu-container">
                                        <ul id="menu-mobile-menu" class="oxy-pro-menu-list">
                                            <li id="menu-item-435" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-119 current_page_item menu-item-435">
                                                <Link to="/" aria-current="page">
                                                    Home
                                                    <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                                                </Link>
                                            </li>
                                            <li id="menu-item-368" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-368">
                                                <Link to="/about-us/">
                                                    About Us
                                                    <div class="oxy-pro-menu-dropdown-icon-click-area">
                                                    </div>
                                                </Link>
                                            </li>
                                            <li id="menu-item-79" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-79">
                                                <Link to="/what-we-do/">
                                                    What we do
                                                    <div class="oxy-pro-menu-dropdown-icon-click-area">
                                                        <svg class="oxy-pro-menu-dropdown-icon">
                                                            <use xlink:href="#FontAwesomeicon-angle-down">
                                                            </use>
                                                        </svg>
                                                    </div>
                                                </Link>
                                                <ul class="sub-menu" data-aos="fade-up" data-aos-duration="400">
                                                    <li id="menu-item-855" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-855">
                                                        <Link to="/branding/">
                                                            Branding
                                                            <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-856" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-856">
                                                        <Link to="/web-design/">
                                                            Web Design
                                                            <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-3660825" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3660825">
                                                        <Link to="/search-engine-optimization/">
                                                            Search Engine Optimization
                                                            <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-434" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-434">
                                                        <Link to="/care-plans/">
                                                            Website Maintenance
                                                            <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-766" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-766">
                                                <Link to="/price-guide/">
                                                    Price Guide
                                                    <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                                                </Link>
                                            </li>
                                            <li id="menu-item-505" class="menu-item menu-item-type-post_type_archive menu-item-object-case-studies menu-item-505">
                                                <Link to="/case-studies/">
                                                    Case Studies
                                                    <div class="oxy-pro-menu-dropdown-icon-click-area">
                                                    </div>
                                                </Link>
                                            </li>
                                            <li id="menu-item-433" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-433">
                                                <Link to="/contact-us/">
                                                    Contact Us
                                                    <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                                                </Link>
                                            </li>
                                        </ul></div>
                                    <div class="oxy-pro-menu-mobile-close-icon">
                                        <svg id="svg--pro-menu-57-25">
                                            <use xlink:href="#ThriveThemeFilesicon-Close">
                                            </use>
                                        </svg>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
