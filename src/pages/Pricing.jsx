import { svgPricing, moneyPlant, AwardSVG, ComplexSVG, LightSVG, CopySVG, SearchSVG, StandardSVG, } from '../assets';
import styles, { layout } from '../style';
import Accordion from '../components/Accordion/Accordion' ;


export default function Pricing() {
    return (

        <section >
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>

                    {/*Hero section start for Pricing */}
                    <div className='flex md:flex-row flex-col pb-[10vh]'>
                        <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 py-10 z-[10] min-h-[100vh] pt-[40vh]`}>
                            <div className='flex flex-row justify-center items-center w-full'>

                                <h1 className='flex-1 font-crimsonPro font-semibold ss:text-[4.5rem] text-[4.5rem] text-primary animate-fade-in'> Our Pricing
                                </h1>

                            </div>
                            <div className=' ml-[-25px] mt-[-45px] w-[3rem] h-[3rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>

                            <p className={` font-Jost text-[22px] max-w-[470px] text-primary pl-[150px] pt-[60px] pb-[10px] animate-fade-in inline-block font-semibold`}>
                                Pricing doesnt have to be complicated. Lets explore the possibilities together.
                            </p>
                        </div>


                        <div className={`${layout.sectionImgReverse} pb-[10px]`}>
                            <img src={svgPricing} alt='budget' className='w-[75%] md:ml-[10vw] relative z-[5]' />
                            <div className='absolute z-[9]  md:h-[60%] lg:h-[77%]  rounded-[100%] bg-[#107bdf22] left-0 right-0 md:ml-[5vw] animate-floater aspect-square' />
                        </div>

                    </div>


                    {/*Budget Section */}

                    <div className={layout.section}>

                        <div className={layout.sectionInfo}>
                            <h3 className='font-Jost text-[22px] font-semibold leading-none'> budget does not matter  </h3>
                            <h2 className='font-crimsonPro text-[40px] font-semibold leading-none'> unless there is a <br /> return on investment</h2>
                            <p className='block max-w-[986px] mt-5 font-Jost text-[18px]'>
                                While your budget is important, what matters even more is obtaining a website that effectively achieves your goals and generates a positive return on investment. </p>
                            <br />
                            <p className='block max-w-[986px] font-Jost text-[18px]'>Thats why, at Thrive, our primary focus is on strategy and ensuring your project aligns with your sales and marketing efforts. If we believe we cannot generate a substantial return on investment, we will not undertake your project.
                            </p>
                        </div>

                        <div className={layout.sectionImgReverse}>
                            <img src={moneyPlant} alt='budget' className='w-[30%] relative z-[5]' />
                            <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                            <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                        </div>
                    </div>


                    {/* Pricing components section start */}

                    <div className='pt-[30vh]'>
                        <h3 className=' text-[22px] flex justify-center font-Jost leading-none font-semibold'> price indicators</h3>
                        <div className='flex flex-row justify-center items-center w-full'>
                            <h2 className=' text-[40px] flex justify-center font-crimsonPro leading-none font-semibold'> a rough idea of the required investment</h2>
                            <div className=' ml-[-670px] mt-[43px] w-[2.5rem] h-[2.5rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
                        </div>

                        <div className='flex justify-center'>
                            <p className='max-w-[980px] mt-5 flex text-center text-[18px] font-Jost'>
                                We provide customized fixed prices for each project, tailored to the specific needs of the client, where we are confident in generating a positive return. However, its always helpful to have an idea of what to expect, right? To provide some clarity, we have compiled a general pricing guideline for your reference.
                            </p>
                        </div>
                    </div>

                    {/* Branding Price */}
                    <div className='flex md:flex-row flex-col justify-center'>
                        <div className='py-10 px-10'>
                            <div className={layout.sectionImgReverse}>
                                <img src={LightSVG} alt='Branding' className='max-w-[100%] height-[150px] relative z-[5]' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                            </div>

                            <div className='text-center'>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro `}> Branding</h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[470px] mt-5 text-justify xs:`}>
                                    Your brand encompasses so much more than a mere logo. It embodies your true essence, your powerful message, and the irresistible appeal that draws visitors to collaborate with you. Luckily, our team excels at capturing and conveying that essence flawlessly. Our basic package, which includes strategy, logo design, and a comprehensive style guide, starts at $10k. However, pricing may increase based on the level of strategy and additional assets required.
                                </p>
                                <div className='font-Jost font-semibold text-[18px] py-5 '>
                                    <h2> Range: </h2>
                                    <h2> $10,000 to $30,000 </h2>
                                </div>
                            </div>
                        </div>

                        {/* Standard Sites Price */}

                        <div className='py-10 px-10'>
                            <div className={layout.sectionImgReverse}>
                                <img src={StandardSVG} alt='Standard' className='max-w-[100%] height-[150px]relative z-[5]' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                            </div>

                            <div className='text-center'>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> Standard Sites</h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[470px] mt-5 text-justify`}>
                                    Are you looking to elevate your professionalism without requiring any extravagant website features? Our approach combines business experience, design expertise, and a strategic mindset to create websites that work like magic. Whether its generating leads, driving sales, or simply facilitating in-person selling, we have the skills to make it happen.
                                </p>
                                <div className='font-Jost font-semibold text-[18px] py-5 '>
                                    <h2> Range: </h2>
                                    <h2> $10,000 to $30,000 </h2>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Complex Sites Price */}

                    <div className='flex md:flex-row flex-col justify-center'>

                        <div className='py-10 px-10'>
                            <div className={layout.sectionImgReverse}>
                                <img src={ComplexSVG} alt='Complex' className='max-w-[100%] height-[150px] relative z-[5]' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                            </div>
                            <div className='text-center'>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> Complex Sites </h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[470px] mt-5 text-justify`}>
                                    Looking beyond the limitations of a basic brochure website, certain sites require more substantial functionality. Whether its e-commerce stores, membership platforms, learning systems, online courses, or anything else, when your website is your business, our expertise in development ensures that your business operates seamlessly as intended!
                                </p>
                                <div className='font-Jost font-semibold text-[18px] py-5 '>
                                    <h2> Range: </h2>
                                    <h2> $35,000 to $70,000 </h2>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Photography Price */}

                    <div className='flex md:flex-row flex-col justify-center'>

                        <div className='py-10 px-10'>
                            <div className={layout.sectionImgReverse}>
                                <img src={AwardSVG} alt='Photography' className='max-w-[100%] height-[150px] relative z-[5]' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                            </div>

                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> Photography </h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[470px] mt-5 text-justify`}>
                                    Our Premium Photography Packages are meticulously crafted to fulfill all your photography needs with exceptional quality and creativity. This service encompasses professional, high-resolution photoshoots perfect for personal, commercial, or corporate use.
                                </p>
                                <div className='font-Jost font-semibold text-[18px] py-5 '>
                                    <h2> Range: </h2>
                                    <h2> $1,800 to $3,600 </h2>
                                </div>
                            </div>
                        </div>

                        {/* Website Copy Price */}

                        <div className='py-10 px-10'>
                            <div className={layout.sectionImgReverse}>
                                <img src={CopySVG} alt='Copy' className='max-w-[100%] height-[150px] relative z-[5]' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                            </div>

                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> Website Copy</h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[470px] mt-5 text-justify`}>
                                    Professional copywriting is the key differentiator between visually appealing websites and truly impactful ones. We will extract all the rich goodness from your mind dont worry, it wont hurt, we promise and transform it into compelling words that inspire your visitors to take action.
                                </p>
                                <div className='font-Jost font-semibold text-[18px] py-5 '>
                                    <h2> Cost: </h2>
                                    <h2> $300 per page </h2>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* SEO Price */}

                    <div className='flex md:flex-row flex-col justify-center'>

                        <div className='py-10 px-10'>
                            <div className={layout.sectionImgReverse}>
                                <img src={SearchSVG} alt='SEO' className='max-w-[100%] height-[150px] relative z-[5]' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                            </div>

                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> SEO</h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[470px] mt-5 text-justify`}>
                                    If youre seeking to expand your online business, SEO can revolutionize your lead generation. Our team is dedicated to adhering to proper guidelines to elevate your sites rankings, without resorting to shortcuts.
                                </p>
                                <div className='font-Jost font-semibold text-[18px] py-5 '>
                                    <h2> Range: </h2>
                                    <h2> $2,000 to $3,500 per/month </h2>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*Why WebAmbrosia section*/}

                    <div className='py-[10vh]'>
                        <h3 className=' text-[22px] flex justify-center font-Jost leading-none font-semibold'> why WebAmbrosia ?</h3>
                        <div className='flex flex-row justify-center items-center w-full'>
                            <h2 className=' text-[40px] flex justify-center font-crimsonPro leading-none font-semibold'> what makes us so special anyway ?</h2>
                            <div className=' ml-[-570px] mt-[43px] w-[2.5rem] h-[2.5rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
                        </div>

                        <div className='flex justify-center'>
                            <p className='max-w-[980px] mt-5 flex text-center text-[18px] font-Jost'>
                                If you have been exploring various web design agencies, you may have encountered a range of prices. While it is true that Web Ambrosia may not be the least-expensive option on the market, we firmly believe that we offer unparalleled value. Our focus extends beyond merely delivering a product; we strive to create a meaningful, impactful, and sustainable digital presence for your business. Here is why investing in Web Ambrosia is worth every penny.
                            </p>
                        </div>
                    </div>

                    {/* Why Grid Section Start 3x2*/}
                    {/*Grid Row 1 md:*/}
                    <div className='flex md:flex-row flex-col justify-center gap-11 xs:px-[12vw]  md:px-[0vw]'>
                        {/* Experience grid item */}
                        <div className='py-10 px-10'>
                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> crazy experienced </h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[340px] mt-5 text-justify`}>
                                    At Web Ambrosia, we have no place for "Junior" staff. Every member of our team possesses a minimum of 12 years of experience in their respective specialties. This means that no matter which aspect of your project we are working on, you can rest assured that you will be assigned a seasoned expert who is dedicated to delivering exceptional results. Experience is invaluable, and we bring it abundantly to the table.
                                </p>
                            </div>
                        </div>
                        {/* Custom Design grid item*/}
                        <div className='py-10 px-10'>
                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> original design only </h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[340px] mt-5 text-justify`}>
                                    We never depend on templates, not at all. Our designs are entirely bespoke, meticulously crafted to fulfill the specific requirements of your company, target audience, and offerings. This approach ensures that your website will not blend in as just another generic site on the internet. Instead, it will shine as a remarkable, unmistakable, and individualized embodiment of your brand.
                                </p>
                            </div>
                        </div>
                        {/* Full Service grid item */}
                        <div className='py-10 px-10'>
                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> complete service </h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[340px] mt-5 text-justify`}>
                                    We go beyond web design; we are a comprehensive agency that offers a full range of services. This entails having a profound comprehension of how various components interconnect, including branding, marketing, websites, copywriting, and photography. Through seamless integration of these elements, we forge a unified and extensive digital strategy that enhances your brand and establishes a profound connection with your intended audience.
                                </p>
                            </div>
                        </div>

                    </div>
                    {/*Grid Row 2 md:*/}
                    <div className='flex md:flex-row flex-col justify-center gap-11 xs:px-[12vw] md:px-[0vw]'>
                        {/* Maximum Effort grid item */}
                        <div className='py-10 px-10'>
                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> maximum effort </h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[340px] mt-5 text-justify`}>
                                    Here at Web Ambrosia, we adhere to the principle of avoiding shortcuts. Each project we embark upon is given the highest level of dedication, exertion, and proficiency it merits. Our team is wholeheartedly dedicated to achieving the best outcomes imaginable, and we stand firm in our decision not to compromise on the excellence of our work.
                                </p>
                            </div>
                        </div>
                        {/* Small and Dedicated grid item */}
                        <div className='py-10 px-10'>
                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> small and dedicated </h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[340px] mt-5 text-justify`}>
                                    At our agency, our small size is a significant asset. We consider it a strength because it enables us to deliver personalized experiences, guaranteeing that every client receives the attention they truly deserve. Yet, we are also substantial enough to ensure that your project never slips through the cracks. With Thrive, you can have the best of both worlds, enjoying the advantages of a small agency with the assurance that your project will always receive the attention it requires.
                                </p>
                            </div>
                        </div>
                        {/* Latest Technology grid item */}
                        <div className='py-10 px-10'>
                            <div className={`text-center`}>
                                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> latest technology </h2>
                                <p className={`font-Jost font-light text-[18px] max-w-[340px] mt-5 text-justify`}>
                                    We pride ourselves on using only top-tier, cutting-edge technology to design your website. This ensures that your site is built to withstand future advancements, remains stable, and maintains a high level of security. We have a profound understanding of the pivotal role your website plays in your business, and we go to great lengths to ensure it is constructed on a strong and reliable foundation.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* The Proposal Process section Start*/}
                    <div >

                        <h3 className='font-Jost text-[22px] font-semibold leading-none'> figuring out price </h3>
                        <h2 className='font-crimsonPro text-[40px] font-semibold leading-none'> how we put together a proposal </h2>
                        <div className={layout.section}>
                            <div className={layout.sectionInfo}>
                                <p className='block max-w-[986px] mt-5 font-Jost text-[18px]'>
                                    Before we can provide a proposal, we require a deeper understanding of your identity and the specific assistance you require. After all, we only engage in projects where we know we can make a significant impact. </p>
                                <br />
                                <p className='block max-w-[986px] font-Jost text-[18px]'>
                                    Our initial step involves a brief clarity call to introduce ourselves and assess whether it's worth delving further into your project. After all, we might not be the right fit, or you might simply dislike our team. Either way, we find it beneficial to gauge compatibility before investing more time.
                                </p>
                                <br />
                                <p className='block max-w-[986px] font-Jost text-[18px]'>
                                    If we establish mutual interest, we proceed with a strategy call to delve into the problem you're facing, offer recommendations on potential solutions, and even provide an estimate of the cost involved in addressing that problem. If everything aligns, we will then send you a proposal with a fixed price to initiate our collaboration.
                                </p>
                            </div>

                            <div className={layout.sectionImgReverse}>
                                <img src={moneyPlant} alt='budget' className='w-[30%] relative z-[5]' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient' />
                                <div className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient' />
                            </div>
                        </div>
                    </div>

                     {/* Accordion Section */}
                    <div className={layout.sectionInfo} >
                        <div className='py-10 px-10'>
                            <h2 className='font-crimsonPro text-[40px] font-semibold leading-none'> frequently asked questions </h2>
                            <h3 className='font-Jost text-[22px] font-medium leading-none'> here are some answers to the questions we get the most.</h3>
                            <div className=' ml-[-30px] mt-[-70px] w-[2.5rem] h-[2.5rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
                            
                        </div>
                        <div className='py-10 px-10'>
                            <Accordion/>
                        </div>
                    </div>


                    {/*Final Thoughts*/}

                    <div className='py-[10vh]'>
                    <div className='flex flex-row justify-center items-center w-full'>
                    <h2 className=' text-[40px] flex justify-center font-crimsonPro leading-none font-semibold'> final thoughts on pricing </h2>
                    <div className=' ml-[0px] mt-[0px] w-[6rem] h-[6rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
                    </div>

                    <div className='flex flex-col justify-center px-[10vw]'>
                        <p className='max-w-[980px] mt-10 flex text-justify text-[18px] font-Jost'>
                        At Web Ambrosia, we prioritize the establishment of strong connections with our clients. We view this as more than a mere transaction; it is a partnership founded on clear, open communication, and mutual respect. Our dedication lies not only in upholding these principles throughout our entire process but also in ensuring that our clients feel heard, valued, and engaged at every step.
                        
                        <br/>
                    
                        The significance of all these elements cannot be emphasized enough. A website is not simply a digital brochure; it is a dynamic platform that reflects your brand, engages your audience, and propels your business towards its objectives. It is a versatile tool crafted to adapt, evolve, and grow alongside your business, delivering concrete results for years to come.
                    
                        <br/>
                    
                        When you choose to collaborate with Web Ambrosia, you are not just purchasing a product. You are making an investment in a comprehensive, strategic solution tailored to aid your business in succeeding within the ever-evolving digital landscape. Our pricing reflects our unwavering commitment to quality, expertise, and the unique value we offer.
                        
                        <br/>
                    
                        While our costs may exceed those of other agencies, we have confidence that the return on your investment with us will far surpass the price. We are dedicated to providing you with more than just a service—we are here to deliver results.
                    
                        <br/>
                        
                        Ultimately, our mission is to help your business flourish. We firmly believe in the value we bring, and we are enthusiastic about demonstrating how our expertise can revolutionize your digital presence.
                        </p>
                    </div>
                </div>


            </div>
            </div>

        </section>

    )
}