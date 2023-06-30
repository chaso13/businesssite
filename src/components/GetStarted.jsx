
import styles from '../style';
import {arrowUpBlack} from '../assets';

const GetStarted = () => (

  <div className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full mr-[220px] bg-blue-gradient p-[2px] cursor-pointer  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none`}>
    <div className={`${styles.flexCenter} flex-col bg-white hover:bg-white  text-black  w-[100%] h-[100%] rounded-full `}>
      <div className={` ${styles.flexStart} flex-row`}>
        <p className='font-sansserif font-medium text-[18px] leading-[23px] mr-2'>
          <span>Get</span>
        </p>
        <img src={arrowUpBlack} className='w-[23px] h-[23px] object-contain fill-black  ' alt='arrow'/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span>Started</span>
        </p>
    </div>
  </div>
  
)

export default GetStarted