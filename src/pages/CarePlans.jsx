import React from 'react'
import styles, { layout } from '../style';
import loadable from '@loadable/component'
import { svgPricing, moneyPlant } from '../assets';
import WhyGrid from '../sections/CarePlans/whyGrid/WhyGrid';
import WhatGrid from '../sections/CarePlans/whatGrid/WhatGrid';

const Intro = loadable(() => import('../sections/Universal/Intro'))
const ScrollForMore = loadable(() => import('../sections/Universal/ScrollForMore'))

const CarePlans = () => {
    return (
        <section>

             <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>

                    {/*Hero section start for Pricing */}
                    <div className='flex md:flex-row flex-col pb-[10vh]'>
                        <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 py-10 z-[10] min-h-[100vh] pt-[40vh]`}>
                            <div className='flex flex-row justify-center items-center w-full'>

                                <h1 className='flex-1 font-crimsonPro font-semibold ss:text-[4.5rem] text-[4.5rem] text-primary animate-fade-in'> website care plans
                                </h1>

                            </div>
                            <div className=' ml-[-25px] mt-[-45px] w-[3rem] h-[3rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>

                            <p className={` font-Jost text-[22px] max-w-[470px] text-primary pl-[150px] pt-[60px] pb-[10px] animate-fade-in inline-block font-semibold`}>
                                Keep your software up to date and running like a well oiled machine!
                            </p>
                        </div>


                        <div className={`${layout.sectionImgReverse} pb-[10px]`}>
                            <img src={svgPricing} alt='budget' className='w-[75%] md:ml-[10vw] relative z-[5]' />
                            <div className='absolute z-[9]  md:h-[60%] lg:h-[77%]  rounded-[100%] bg-[#107bdf22] left-0 right-0 md:ml-[5vw] animate-floater aspect-square' />
                        </div>

                    </div>


                    <ScrollForMore/> 

                     {/*Budget Section */}

                     <div className={layout.section}>

                        <div className={layout.sectionInfo}>
                            <h3 className='font-Jost text-[22px] font-semibold leading-none'> staying up to date is important </h3>
                            <h2 className='font-crimsonPro text-[40px] font-semibold leading-none'> keep your home <br /> on the web in tip top shape</h2>
                            <p className='block max-w-[986px] mt-5 font-Jost text-[18px]'>
                            Regardless of its impact, your website constantly represents your business, functioning tirelessly every moment of every day, all year long (including an additional day during leap years). Considering the substantial investment you've made to ensure your website effectively showcases your business, why would you overlook its maintenance once it's constructed?
                            </p>
                            <br />
                            <p className='block max-w-[986px] font-Jost text-[18px]'>
                            Essential tasks like ensuring security, optimizing performance, conducting continuous monitoring, performing regular backups, and more are crucial to keep your website secure and up to date. With the escalating number of hacking attempts worldwide occurring every second, websites are now facing unprecedented risks of compromise.

                            By enrolling in our care plan, we can provide the necessary assistance for any WordPress support you require, as well as fulfill your feature requests.
                            </p>
                        </div>

                        <div className={layout.sectionImgReverse}>
                            <img src={moneyPlant} alt='budget' className='w-[30%] relative z-[5]' />
                            <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                            <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                        </div>
                        </div>

                        <WhyGrid/>

                        <div className={`${layout.sectionInfo} py-[10vh]`}>
                            <h3 className='font-Jost text-[22px] font-semibold leading-none'> whats included </h3>
                            <h2 className='font-crimsonPro text-[40px] font-semibold leading-none'> website maintenance<br /> plan features</h2>
                        </div>

                        <WhatGrid/>


                        {/* Pricing components section start */}

                        <div className='pt-[30vh]'>
                        <h3 className=' text-[22px] flex justify-center font-Jost leading-none font-semibold'> price indicators</h3>
                        <div >
                            <h2 className=' text-[40px] flex justify-center font-crimsonPro leading-none font-semibold'> a rough idea of the required investment</h2>
                            <div className=' ml-[-670px] mt-[43px] w-[2.5rem] h-[2.5rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
                        </div>

                        <div className='flex justify-center'>
                            <p className='max-w-[980px] mt-5 flex text-center text-[18px] font-Jost'>

                            Regardless of its impact, your website constantly represents your business, functioning tirelessly every moment of every day, all year long (including an additional day during leap years). Considering the substantial investment you've made to ensure your website effectively showcases your business, why would you overlook its maintenance once it's constructed?

                            Essential tasks like ensuring security, optimizing performance, conducting continuous monitoring, performing regular backups, and more are crucial to keep your website secure and up to date. With the escalating number of hacking attempts worldwide occurring every second, websites are now facing unprecedented risks of compromise.

                            By enrolling in our care plan, we can provide the necessary assistance for any WordPress support you require, as well as fulfill your feature requests.

                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    
    )
}

export default CarePlans