import styles, { layout } from "../style"
import { Link } from 'react-router-dom'
import { svgLaptop,svgMobile, svgTablet, svgPricing, moneyPlant} from '../assets';

import DeadlyAccurateDesktop from '../assets/WebsitePreviews/Desktop/DeadlyAccurateDesktop.png'
import loadable from "@loadable/component"
import Insights from "../sections/OurWork/Performance/Insights"
const Performance = loadable(() => import("../sections/OurWork/Performance/Performance"))

export default function OurWork() {
  return (
    <div className="w-full h-full overflow-hidden my-36">
      <div className={`${styles.paddingX}`}>
        <div className={`flex flex-row`}>
          <div className={`w-1/2`}>
          <div className='flex md:flex-row flex-col pb-[10vh]'>

    <div className={`${layout.sectionImgReverse} pb-[10px]`}>
    <div alt='budget' className='w-[75%] md:ml-[10vw] relative z-[5]'><h1>Deadly Accurate Renovation and Solar</h1></div>
            <div  className='absolute z-[9]  md:h-[60%] lg:h-[77%]  rounded-[100%] bg-[#107bdf22] left-0 right-0 md:ml-[5vw] animate-floater aspect-square'/>
    </div>
    </div>
          </div>
          <div className={`w-1/2 h-screen flex flex-col`}>
            <Link to="https://deadly-accurate.com" target="_blank">
          <img src={DeadlyAccurateDesktop} className="h-96 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-[1.02] ease-in duration-300 absolute" />
          </Link>
          <div className="flex top-96 relative py-6">
          <Insights />
          </div>

          </div>
        </div>
        <div className={``}>
          <div className={``}>
            <Performance />
          </div>
        </div>
      </div>
    </div>
  )
}
