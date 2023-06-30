import styles from '../style'
import GetStarted from './GetStarted'
import { svgChart, svgBackground } from '../assets'



const Hero = () => (
  <section id='hero' className={` flex sm:flex-row flex-col ${styles.paddingY} mt-2 max-h-[100vh] bg-white`}>
    <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 py-10 z-[10]`}>
      <div className='flex flex-row justify-center items-center w-full'>
        <h1 className='flex-1 font-crimsonPro font-semibold ss:text-[3rem] text-[3.5rem] text-primary animate-fade-in'> Next <br className='sm:block hidden' /> {' '} <span className='text-gradient'> Generation</span> <br className='sm:block hidden' />{' '}
        </h1>
      </div>
      <h1 className='flex-1 font-crimsonPro font-semibold ss:text-[3rem] text-[2.5rem] text-primary  max-h-[15vh] mb-[10px] w-full animate-fade-in'>
        Web Development
      </h1>
      <p className={` font-poppins text-[18px] max-w-[470px] text-primary pt-[20px] pb-[20px] animate-fade-in`}>
        Welcome to Web Ambrosia! where our team of experienced developers is dedicated to delivering exceptional results for our clients.
      </p>
    </div>
    <div className={` ${styles.flexCenter} relative z-[3] animate-fade-in`}>
      <GetStarted />
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 bottom-0 right-0 min-h-[100vh] z-[0]`} >
        <img src={svgChart} alt='hero' className='  w-[45vw]  bottom-0 right-0  absolute z-[2] animate-in-up' />
        <img src={svgBackground} alt='hero' className='  w-[100vw]  bottom-0 right-0  absolute z-[1] animate-in-up' />
    </div>
   
  </section>
)

export default Hero