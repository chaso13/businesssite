import React from 'react'
import { Link } from 'react-router-dom'

export default function Drawer({ set, setter }) {
    set ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'

    return (
        <div class={
            set === true ?
                `flex top-0 bg-white w-[100vw] h-[100vh] shadow-2xl z-[100] translate-x-[0vw] ease-in-out relative duration-700 px-[30px] ` :
                `flex top-0 bg-white w-[100vw] h-[100vh] z-[100] translate-x-[100vw] relative transition-all duration-700 px-[30px] `
        } data-aos-duration="400" data-oxy-pro-menu-dropdown-animation="fade-up" data-oxy-pro-menu-dropdown-animation-duration="0.4" data-entire-parent-toggles-dropdown="true" data-oxy-pro-menu-off-canvas-animation="slide-left" data-oxy-pro-menu-dropdown-links-on-mobile="toggle" data-aos="slide-left">

            <div class="grid grid-cols-2">
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
                                    <use xlink: href="#FontAwesomeicon-angle-down">
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
                </ul>
            </div>
            <div id="div_block-18-25" class="ct-div-block">
                <div id="div_block-61-25" class="ct-div-block">
                    <h2 id="headline-20-25" class="ct-headline ">
                        What we do
                    </h2>
                </div>
                <nav id="_nav_menu-22-25" class="oxy-nav-menu service-menu oxy-nav-menu-vertical">
                    <div class="oxy-menu-toggle">
                        <div class="oxy-nav-menu-hamburger-wrap">
                            <div class="oxy-nav-menu-hamburger">
                                <div class="oxy-nav-menu-hamburger-line"></div>
                                <div class="oxy-nav-menu-hamburger-line"></div>
                                <div class="oxy-nav-menu-hamburger-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-service-menu-container">
                        <ul id="menu-service-menu" class="oxy-nav-menu-list">
                            <li id="menu-item-852" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-852">
                                <a href="https://thrive.design/web-design/">
                                    Web Design
                                </a>
                            </li>
                            <li id="menu-item-851" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-851">
                                <a href="https://thrive.design/branding/">
                                    Branding
                                </a>
                            </li>
                            <li id="menu-item-3660495" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3660495">
                                <a href="https://thrive.design/search-engine-optimization/">
                                    Search Engine Optimization
                                </a>
                            </li>
                            <li id="menu-item-3661402" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3661402">
                                <a href="https://thrive.design/wordpress-support-and-development/">
                                    WordPress Support
                                </a>
                            </li>
                            <li id="menu-item-432" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-432">
                                <a href="https://thrive.design/care-plans/">
                                    Website Maintenance
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}