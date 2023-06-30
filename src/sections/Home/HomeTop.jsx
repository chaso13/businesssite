import React from 'react'
import styles, { layout } from '../../style'
import { svgPricing } from '../../assets'

export default function HomeTop() {
  return (
    <section className="mb-[10vh] ">
      <div className={``}>
        <div className={`${styles.boxWidth}`}>
          <div className='flex md:flex-row flex-col pb-[10vh]'>
            <div className={`flex-1 flex-col pl-[80px] py-10 z-[10] min-h-[100vh] pt-[120px]`}>
              <div className='flex flex-col justify-center items-center w-full p-[20px] '>
                <h1 className='flex-1 font-crimsonPro font-semibold ss:text-[64px] leading-[64px] text-[4.5rem] weight text-primary animate-fade-in'>
                  we’re a process driven seattle web design agency that will help your business thrive
                </h1>
                <a id="link-94-117" class="ct-link button flex flex-row self-baseline mt-[20px]  group" href="https://thrive.design/start-a-project/" target="_self">
                  <div id="text_block-95-117" class="ct-text-block button-label">
                    <span id="span-103-117" class="ct-span">
                      Start a project
                    </span>
                  </div>
                  <div id="code_block-96-117" class="ct-code-block arrow-icon ml-[20px] hover h-[29px] w-[29px] scale-150 translate-y-[-3px] ">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle class="arrow-circle stroke-none transition  duration-500 group-hover:animate-filler-up  " cx="14.5" cy="14.5" r="13.5" stroke="#EC4176" stroke-width="2"></circle>
                      <path className="origin-center group-hover:rotate-180 duration-700  " fill-rule="evenodd" clip-rule="evenodd" d="M15.7347 7.27842L21.7243 13.3278C22.0919 13.6991 22.0919 14.3009 21.7243 14.6722L15.7347 20.7216C15.3672 21.0928 14.7713 21.0928 14.4037 20.7216C14.0361 20.3504 14.0361 19.7485 14.4037 19.3773L18.7866 14.9506H6.94118C6.42138 14.9506 6 14.525 6 14C6 13.475 6.42138 13.0494 6.94118 13.0494H18.7866L14.4037 8.62273C14.0361 8.25151 14.0361 7.64964 14.4037 7.27842C14.7713 6.90719 15.3672 6.90719 15.7347 7.27842Z" fill="#141414"></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className=' ml-[-10px] mt-[200px] w-[3rem] h-[3rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
              <p className={` pl-[20px] font-Jost text-[22px] max-w-[470px] text-primary pt-[160px] pb-[10px] animate-fade-in inline-block font-semibold`}>
                our processes and our people work together to deliver the best results possible
              </p>
            </div>
            <div className={`${layout.sectionImgReverse} pb-[10px]`}>
              <img src={svgPricing} alt='budget' className='w-[75%] md:ml-[10vw] relative z-[5]' />
              <div className='absolute z-[9]  md:h-[60%] lg:h-[77%]  rounded-[100%] bg-[#107bdf22] left-0 right-0 md:ml-[5vw] animate-floater aspect-square' />
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </section>
  )
}
