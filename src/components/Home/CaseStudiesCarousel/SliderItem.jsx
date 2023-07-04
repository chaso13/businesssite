import React from 'react'
import { Link } from 'react-router-dom'

export default function SliderItem({ item: { source, title, description, link }}) {
  return (
    <div className=" w-[400px]" style={{ position: 'absolute', left: '0%' }}>
        <Link to={link} className="flex w-[400px] h-[300px] ">
            <div classNames="">
                <div className="" style={{ backgroundImage: `url(${source})`, backgroundSize: 'cover' }}></div>
                <h3 className="flex relative bottom-[3%]">
                    <span className="">
                        {title}
                    </span>
                </h3>
            </div>
        </Link>
        <div className="">
            <span className="">
                {description}
            </span>
        </div>
        <Link to={link} className="flex flex-row">
            <div className="">
                Read this
            </div>
            <div class="">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="arrow-circle" cx="9" cy="9" r="8.5" stroke="#EC4176"></circle>
                    <path class="arrow-only" fill-rule="evenodd" clip-rule="evenodd" d="M9.76638 4.51778L13.4841 8.2726C13.7122 8.50301 13.7122 8.87659 13.4841 9.107L9.76638 12.8618C9.53824 13.0922 9.16836 13.0922 8.94023 12.8618C8.71209 12.6314 8.71209 12.2578 8.94023 12.0274L11.6607 9.27981H4.30831C3.98568 9.27981 3.72414 9.01565 3.72414 8.6898C3.72414 8.36394 3.98568 8.09979 4.30831 8.09979H11.6607L8.94023 5.35218C8.71209 5.12177 8.71209 4.7482 8.94023 4.51778C9.16836 4.28737 9.53824 4.28737 9.76638 4.51778Z" fill="#141414"></path>
                </svg>
            </div>
        </Link>
    </div>
  )
}