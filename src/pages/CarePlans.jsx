import React from 'react'
import styles, { layout } from '../style';
import loadable from '@loadable/component'
import { svgPricing, moneyPlant } from '../assets';
import WhyGrid from '../sections/CarePlans/whyGrid/WhyGrid';
import WhatGrid from '../sections/CarePlans/whatGrid/WhatGrid';
import Accordion from '../sections/CarePlans/Accordion/Accordion';

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

                        <Accordion/>


                    {/* Care plan pricing and bullet list section */}


                    {/* faq section start*/}
                    
                       

                </div>
<<<<<<< HEAD
            </section>
            <section id="section-259-403" class=" ct-section">
                <div class="ct-section-inner-wrap">
                    <div id="div_block-260-403" class="ct-div-block">
                        <img id="image-261-403" alt="" src="https://thrive.design/wp-content/uploads/2022/03/Chat-Icon.svg" class="ct-image" />
                        <link data-minify="1" rel="stylesheet" id="oxygen-unslider-css" href="https://thrive.design/wp-content/cache/min/1/wp-content/plugins/oxygen/component-framework/vendor/unslider/unslider.css?ver=1687884264" type="text/css" media="all" />
                        <div id="slider-262-403" class="ct-slider ct_unique_slider_2199">
                            <div class="unslider">
                                <div class="oxygen-unslider-container unslider-horizontal" style="position: relative; overflow: hidden;">
                                    <ul class="unslider-wrap unslider-carousel" style="width: 500%; margin-left: -100%; left: -100%;">
                                        <li class="unslider-clone" style="width: 20%;"><
                                            div id="slide-267-403" class="ct-slide">
                                            <div id="_rich_text-268-403" class="oxy-rich-text">
                                                <h3 class="wpmtst-testimonial-heading testimonial-heading">
                                                    No more “update and pray”
                                                </h3>
                                                <p>
                                                    I had been updating my own plugins for years with at least 3 times a year my website blowing up due to plugin and other software conflicts. Happy to have Thrive Design take care of all that nonsense for me so that I can focus on my business.
                                                </p>
                                                <div class="wpmtst-testimonial-content  testimonial-content" data-infinite-loop="false">
                                                    <p>
                                                        <strong>
                                                            Sheryl Trim
                                                            <br />
                                                        </strong>
                                                        <strong>
                                                            Viviane Woodard
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        </li>
                                        <li class="" style="width: 20%;">
                                            <div id="slide-263-403" class="ct-slide">
                                                <div id="_rich_text-264-403" class="oxy-rich-text">
                                                    <h3>
                                                        Thrive's care plan saves me 10 hours per week
                                                    </h3>
                                                    <p>
                                                        We had a new staff member accidentally delete 6 blog posts we had in the queue. We called up Noah at Thrive and he had the website restored from the morning’s backup in less than 15 minutes. Boom!
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Jonathan Green
                                                            <br />
                                                        </strong>
                                                        <strong>
                                                            Hillel
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li style="width: 20%;" class="unslider-active">
                                            <div id="slide-265-403" class="ct-slide">
                                                <div id="_rich_text-266-403" class="oxy-rich-text">
                                                    <h3 class="wpmtst-testimonial-heading testimonial-heading">
                                                        I no longer wake up wondering if my website is down
                                                    </h3>
                                                    <p>
                                                        My website used to be down 3-4 times a week. After transferring my hosting to Thrive, my website went down a total of 14 minutes in all of 2019 and 2020 so far. One less thing for me to have to think about. Thanks guys!
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Laurie
                                                            <br />
                                                        </strong>
                                                        <strong>
                                                            Laurie Nichols Coaching
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li style="width: 20%;" class="">
                                            <div id="slide-267-403" class="ct-slide">
                                                <div id="_rich_text-268-403" class="oxy-rich-text">
                                                    <h3 class="wpmtst-testimonial-heading testimonial-heading">
                                                        No more “update and pray”
                                                    </h3>
                                                    <p>
                                                        I had been updating my own plugins for years with at least 3 times a year my website blowing up due to plugin and other software conflicts. Happy to have Thrive Design take care of all that nonsense for me so that I can focus on my business.</p><div class="wpmtst-testimonial-content  testimonial-content" data-infinite-loop="false">
                                                        <p>
                                                            <strong>
                                                                Sheryl Trim
                                                                <br />
                                                            </strong>
                                                            <strong>
                                                                Viviane Woodard
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="unslider-clone" style="width: 20%;">
                                            <div id="slide-263-403" class="ct-slide">
                                                <div id="_rich_text-264-403" class="oxy-rich-text">
                                                    <h3>
                                                        Thrive's care plan saves me 10 hours per week
                                                    </h3>
                                                    <p>
                                                        We had a new staff member accidentally delete 6 blog posts we had in the queue. We called up Noah at Thrive and he had the website restored from the morning’s backup in less than 15 minutes. Boom!
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Jonathan Green
                                                            <br />
                                                        </strong>
                                                        <strong>
                                                            Hillel
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a class="unslider-arrow next">
                                    Next
                                </a>
                                <a class="unslider-arrow prev">
                                    Prev
                                </a>
                            </div>
                        </div>
                        <script class="ct-slider-script">jQuery(document).ready(function($){$('#slider-262-403.ct_unique_slider_2199 .oxygen-unslider-container:not(.unslider-horizontal,.unslider-fade)').unslider({ autoplay: true, delay: 4000, animation: 'horizontal', speed: 750, arrows: true, nav: false, infinite: true })});
                        </script>
                    </div>
                </div>
            </section>
            <section id="section-270-403" class=" ct-section cta">
                <div class="ct-section-inner-wrap">
                    <div id="new_columns-271-403" class="ct-new-columns">
                        <div id="div_block-272-403" class="ct-div-block">
                            <h2 id="headline-273-403" class="ct-headline h2">
                                Want to get some care for your site?
                            </h2>
                            <div id="text_block-274-403" class="ct-text-block subheading">
                                no sales pitch, just an open conversation about your needs
                            </div>
                        </div>
                        <div id="div_block-275-403" class="ct-div-block">
                            <a id="link-276-403" class="ct-link button" href="https://thrive.design/contact-us/">
                                <div id="text_block-277-403" class="ct-text-block cta-label">
                                    Let's chat
                                </div>
                                <div id="code_block-278-403" class="ct-code-block arrow-icon">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle class="arrow-circle" cx="14.5" cy="14.5" r="13.5" stroke="#EC4176" stroke-width="2"></circle>
                                        <path class="arrow-only" fill-rule="evenodd" clip-rule="evenodd" d="M15.7347 7.27842L21.7243 13.3278C22.0919 13.6991 22.0919 14.3009 21.7243 14.6722L15.7347 20.7216C15.3672 21.0928 14.7713 21.0928 14.4037 20.7216C14.0361 20.3504 14.0361 19.7485 14.4037 19.3773L18.7866 14.9506H6.94118C6.42138 14.9506 6 14.525 6 14C6 13.475 6.42138 13.0494 6.94118 13.0494H18.7866L14.4037 8.62273C14.0361 8.25151 14.0361 7.64964 14.4037 7.27842C14.7713 6.90719 15.3672 6.90719 15.7347 7.27842Z" fill="#fff"></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
=======
            </div>
        </section>
    
>>>>>>> 446e72e1b3a35800037683e196bd593ba386688d
    )
}

export default CarePlans