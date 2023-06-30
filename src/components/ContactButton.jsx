import { useState } from 'react'
import styles from '../style';
import { contactSVG } from '../assets';


const ContactButton = () => {
  const [toggle, setToggle] = useState(false)
  const handler = () => {
    toggle ?
      setToggle(false) :
      setToggle(true)
  }
  return (
    <div
      onClick={handler}
      className={
        toggle ?
          `${styles.flexCenter} cursor-pointer rounded h-[465px] w-[465px] bg-[#000000] fixed bottom-6 right-6 z-10 content-center` :
          `${styles.flexCenter} cursor-pointer rounded-full h-[65px] w-[65px] bg-[#3C1D97] fixed bottom-6 right-6 z-10 content-center`
      }
    >
      <div className='fill-white'>
        <img
        src={contactSVG}
        className={toggle ? `select-none hidden` : `select-none flex`} />
        <img
        src={contactSVG}
        className={toggle ? `select-none flex` : `select-none hidden`} />
      </div>
    </div>
  )
}

export default ContactButton