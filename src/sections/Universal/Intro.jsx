import { svgPricing } from '../../assets'

import styles, { layout } from '../../style'

export default function Intro({ heading, subheading }) {
  return (
    <section>
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='flex md:flex-row flex-col pb-[10vh]'>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 py-10 z-[10] min-h-[100vh] pt-[40vh]`}>
              <div className='flex flex-row justify-center items-center w-full'>
                <h1 className='flex-1 font-crimsonPro font-semibold ss:text-[4.5rem] text-[4.5rem] text-primary animate-fade-in'>
                  {heading}
                </h1>
              </div>
              <div className=' ml-[-25px] mt-[-45px] w-[3rem] h-[3rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
              <p className={` font-Jost text-[22px] max-w-[470px] text-primary pl-[150px] pt-[60px] pb-[10px] animate-fade-in inline-block font-semibold`}>
                {subheading}
              </p>
            </div>
            <div className={`${layout.sectionImgReverse} pb-[10px]`}>
              <img src={svgPricing} alt='budget' className='w-[75%] md:ml-[10vw] relative z-[5]' />
              <div className='absolute z-[9]  md:h-[60%] lg:h-[77%]  rounded-[100%] bg-[#107bdf22] left-0 right-0 md:ml-[5vw] animate-floater aspect-square' />
            </div>
          </div>
        <div>
        </div>
        </div>
      </div>
    </section>
  )
}