import React from 'react'
import { Link } from 'react-router-dom'

export default function WhatWeDoCard({ data: { source, alt, title, description, link } }) {
    return (
        <div className="p-[20px] ">
            <img src={source} alt={alt} className="mb-[20px] " />
            <h3 className="text-[32px] font-crimsonPro font-thin ">
                {title}
            </h3>
            <div className="mt-[20px] font-extralight ">
                {description}
            </div>
            <div className=""></div>
            <Link className="flex flex-row mt-[20px] group " to={link}>
                <div style={{ background: 'linear-gradient(to right, #107bdf 50%, #000000 50%)', backgroundSize: '200% 100%', backgroundPosition: '100%', WebkitBackgroundClip: 'text' }} className="  flex mr-[30px] text-[24px]  bg-origin-padding bg-clip-text static  font-crimsonPro group-hover:animate-fill-text ">
                    <span to="/case-studies/" className="" style={{ WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                        Learn More
                    </span>
                </div>
                <div className="ml-[20px] hover h-[29px] w-[29px] scale-150 translate-y-[-3px] ">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class="arrow-circle stroke-none transition  duration-500 group-hover:animate-filler-up  " cx="14.5" cy="14.5" r="13.5" stroke="#EC4176" stroke-width="2"></circle>
                        <path className="origin-center group-hover:rotate-180 duration-700  " fill-rule="evenodd" clip-rule="evenodd" d="M15.7347 7.27842L21.7243 13.3278C22.0919 13.6991 22.0919 14.3009 21.7243 14.6722L15.7347 20.7216C15.3672 21.0928 14.7713 21.0928 14.4037 20.7216C14.0361 20.3504 14.0361 19.7485 14.4037 19.3773L18.7866 14.9506H6.94118C6.42138 14.9506 6 14.525 6 14C6 13.475 6.42138 13.0494 6.94118 13.0494H18.7866L14.4037 8.62273C14.0361 8.25151 14.0361 7.64964 14.4037 7.27842C14.7713 6.90719 15.3672 6.90719 15.7347 7.27842Z" fill="#141414"></path>
                    </svg>
                </div>
            </Link>
        </div>
    )
}