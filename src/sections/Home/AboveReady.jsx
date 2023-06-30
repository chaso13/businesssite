import React from 'react'

export default function AboveReady() {
    return (
        <div className="px-[40px] pb-[120px]">
            <div className="w-[90%] mx-[auto] flex flex-row items-center">
                <div className="w-[40%] p-[20px] min-h-[350px] justify-center">
                    <img alt="" src="https://thrive.design/wp-content/uploads/2022/02/Blog-Hero-Graphic.svg" className="" />
                </div>
                <div className="w-[60%] p-[40px] ">
                    <div className="">
                        <p className="font-extralight mb-[18px] ">
                            We're a Seattle based Web Design agency that focuses on helping
                            our clients show the world how great they really are. Over the
                            past 20 years, we've developed and continually refined the
                            systems and processes that help us deliver amazing results.&nbsp;
                        </p>
                        <p className="font-extralight mt-[18px] ">
                            We work with businesses that have outgrown their websites and need
                            something that better reflects who they are (or who they want to be).
                            Each team member brings their own experience and expertise to each
                            project, helping us go above and beyond for our clients.
                        </p>
                    </div>
                    <a className="ct-link button flex flex-row group " href="/about-us/">
                        <div id="text_block-176-119" className="ct-text-block button-label">
                            meet the team
                        </div>
                        <div id="code_block-96-117" class="ct-code-block arrow-icon ml-[20px] hover h-[29px] w-[29px] scale-150 translate-y-[-3px] ">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="arrow-circle stroke-none transition  duration-500 group-hover:animate-filler-up  " cx="14.5" cy="14.5" r="13.5" stroke="#EC4176" stroke-width="2"></circle>
                                <path className="origin-center group-hover:rotate-180 duration-700  " fill-rule="evenodd" clip-rule="evenodd" d="M15.7347 7.27842L21.7243 13.3278C22.0919 13.6991 22.0919 14.3009 21.7243 14.6722L15.7347 20.7216C15.3672 21.0928 14.7713 21.0928 14.4037 20.7216C14.0361 20.3504 14.0361 19.7485 14.4037 19.3773L18.7866 14.9506H6.94118C6.42138 14.9506 6 14.525 6 14C6 13.475 6.42138 13.0494 6.94118 13.0494H18.7866L14.4037 8.62273C14.0361 8.25151 14.0361 7.64964 14.4037 7.27842C14.7713 6.90719 15.3672 6.90719 15.7347 7.27842Z" fill="#141414"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}