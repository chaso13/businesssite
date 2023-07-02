import { Link } from 'react-router-dom'

import loadable from '@loadable/component'
const ScrollToSeeHow = loadable(() => import('../sections/Universal/ScrollToSeeHow'))
const OurStuffWorks = loadable(() => import('../sections/Home/OurStuffWorks'))
const ShortConnector = loadable(() => import('../sections/Home/ShortConnector'))
const LogoBanner = loadable(() => import('../sections/Home/LogoBanner'))
const CaseStudiesBanner = loadable(() => import('../sections/Home/CaseStudiesBanner'))
const CaseStudiesCarousel = loadable(() => import('../sections/Home/CaseStudiesCarousel'))
const WhatWeActuallyDo = loadable(() => import('../sections/Home/WhatWeActuallyDo'))
const WhoAreWe = loadable(() => import('../sections/Home/WhoAreWe'))
const AboveReady = loadable(() => import('../sections/Home/AboveReady'))
const VideoSection = loadable(() => import('../sections/Home/VideoSection'))
const ScrollForMore = loadable(() => import('../sections/Universal/ScrollForMore'))
const Footer2 = loadable(() => import('../components/Footer2'))
const Ready = loadable(() => import('../sections/Universal/Ready'))
const HomeTop = loadable(() => import('../sections/Home/HomeTop'))
const WhyWebAmbrosia = loadable(() => import('../sections/Home/WhyWebAmbrosia'))


export default function Home() {
  return (
    <div>
      <HomeTop />
      <ScrollForMore />
      <WhyWebAmbrosia />
      <VideoSection />
      <ScrollToSeeHow />
      <div class="py-[120px]">
        <div class="grid grid-cols-4 justify-center items-center mb-[120px] ">
        <div class="items-center flex flex-col p-[20px] h-[100%] "></div>
          <div className=" items-center text-center p-[20px] relative ">
            <img alt="" src="https://thrive.design/wp-content/uploads/2022/02/connector1.svg" class="ct-image right-[-10%] bottom-[-800%] absolute" />
          </div>
          <div class="items-center flex flex-col p-[20px] ">
            <img alt="" src="https://thrive.design/wp-content/uploads/2022/02/strategy.svg" className="mb-[20px] " />
            <h3 className="mb-[20px] text-[32px] font-crimsonPro font-extralight">
              first we plan
            </h3>
            <div id="text_block-47-119" class="ct-text-block card-text mt-[20px] ">
              It’s the strategies that make all the difference. Rather than just putting together
              pretty color combinations, we develop strategies to help achieve the business
              outcomes you really want to happen.
            </div>
          </div>
          <div className="p-[20px] h-[100%] "></div>
        </div>
        <div className="grid grid-cols-4 mb-[120px] ">
          <div className=""></div>
          <div class="items-center flex flex-col p-[20px] ">
            <img alt="" src="https://thrive.design/wp-content/uploads/2022/02/idea.svg" className="mb-[20px] " />
            <h3 className="mb-[20px] text-[32px] font-crimsonPro font-extralight">
              then we create
            </h3>
            <div class="leading-[140%] text-[18px] ">
              With a clear plan in mind, we are able to create something magnificent that not
              only appeals visually, but is carefully crafted to have the biggest chance of a
              successful outcome.
            </div>
          </div>
          <div className=" items-center text-center p-[20px] relative ">
            <img id="image-56-119" alt="" src="https://thrive.design/wp-content/uploads/2022/02/connector2.svg" class="absolute left-[-12%] top-[20%]  " />
          </div>
          <div id="div_block-57-119" class="ct-div-block"></div>
        </div>
        <div id="new_columns-58-119" class="ct-new-columns grid grid-cols-4">
          <div id="div_block-59-119" class="ct-div-block"></div>
          <div id="div_block-60-119" class="ct-div-block"></div>
          <div class="items-center flex flex-col p-[20px] ">
            <img id="image-62-119" alt="" src="https://thrive.design/wp-content/uploads/2022/02/grow.svg" className="mb-[20px] " />
            <h3 className="mb-[20px] text-[32px] font-crimsonPro font-extralight">
              so you grow!
            </h3>
            <div id="_rich_text-229-119" class="oxy-rich-text">
              <p>
                With our signature <Link to="/blueprint/"><strong>blueprint</strong></Link> approach, we help our clients successfully reach new heights in their businesses. Your business dreams can come true.
              </p>
            </div>
            <Link className="flex flex-row mt-[20px] group" to="/start-a-project/">
              <div className="font-crimsonPro ">
                let's have a chat
              </div>
                  <div id="code_block-96-117" class="ct-code-block arrow-icon ml-[20px] hover h-[29px] w-[29px] scale-150 translate-y-[-3px] ">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle class="arrow-circle stroke-none transition  duration-500 group-hover:animate-filler-up  " cx="14.5" cy="14.5" r="13.5" stroke="#EC4176" stroke-width="2"></circle>
                      <path className="origin-center group-hover:rotate-180 duration-700  " fill-rule="evenodd" clip-rule="evenodd" d="M15.7347 7.27842L21.7243 13.3278C22.0919 13.6991 22.0919 14.3009 21.7243 14.6722L15.7347 20.7216C15.3672 21.0928 14.7713 21.0928 14.4037 20.7216C14.0361 20.3504 14.0361 19.7485 14.4037 19.3773L18.7866 14.9506H6.94118C6.42138 14.9506 6 14.525 6 14C6 13.475 6.42138 13.0494 6.94118 13.0494H18.7866L14.4037 8.62273C14.0361 8.25151 14.0361 7.64964 14.4037 7.27842C14.7713 6.90719 15.3672 6.90719 15.7347 7.27842Z" fill="#141414"></path>
                    </svg>
                  </div>
            </Link>
          </div>
          <div id="div_block-68-119" class="ct-div-block"></div>
        </div>
        <div id="div_block-69-119" class="ct-div-block bigrightcircle motion-small w-[35px] h-[35px] "
          style={{ translate: 'none', rotate: 'none', scale: 'none', transition: 'unset', transform: 'translate(-13.968%, 6.984%) translate3d(0px, 0px, 0px)' }}></div>
        <div id="div_block-70-119" class="ct-div-block bigleftcircle motion-medium"
          style={{ translate: 'none', rotate: 'none', scale: 'none', transition: 'unset', transform: 'translate(13.968%, -13.968%) translate3d(0px, 0px, 0px)' }}></div>
      </div>
      <OurStuffWorks />
      <LogoBanner />
      <ShortConnector />
      <CaseStudiesBanner />
      <CaseStudiesCarousel />
      <WhatWeActuallyDo />
      <WhoAreWe />
      <AboveReady />
      <Ready />
      <Footer2 />
    </div>
  )
}