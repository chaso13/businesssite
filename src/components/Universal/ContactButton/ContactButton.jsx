import { useState } from 'react'
import styles from '../../../style';
import { contactSVG } from '../../../assets';
import Form from './Form';

const ContactButton = () => {
  const [toggle, setToggle] = useState(false)
  const handler = () => {
    toggle ?
      setToggle(false) :
      setToggle(true)
  }

  toggle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'

  return (
    <div
      onClick={toggle ? '' : handler}
      className={
        toggle ?
          `${styles.flexCenter} fixed bottom-[15vh] left-[30vw] right-[30vw] max-h-[80vh] z-[150] content-center transition-all duration-200` :
          `${styles.flexCenter} cursor-pointer rounded-full h-[65px] w-[65px] bg-[#117BDF] fixed bottom-6 right-6 z-[150] content-center transition-all duration-200`
      }
    >
      <div className='fill-white'>
        <img
          src={contactSVG}
          className={toggle ? `select-none hidden` : `select-none flex`} />
        {toggle ?
          <div className="flex flex-col relative overflow-hidden">
            <div className="flex">
              <div className=" text-center justify-around h-[40px] w-[40px] rounded-full flex flex-row absolute right-[20px]  pl-[2px] hover:scale-110 bg-[#ffffff]" onClick={handler}>
                <h1 className=" text-[#117BDF] h-[40px] w-[40px]  rotate-45 text-[40px] leading-[35px]  cursor-pointer  self-center">+</h1>
              </div>
            </div>
            <div>
              <Form />

            </div>
          </div> :
          <></>}
      </div>
    </div>
  )
}

export default ContactButton