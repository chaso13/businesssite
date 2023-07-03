import React from 'react'
import styles, { layout } from '../../../style';

const SoSpecialItem = ({soSpecial}) => {
    const { title , content } = soSpecial;
  
    return (
       
       <div className='flex justify-center'>
            <div className='py-10 px-10'>
                <div className={`text-center`}>
                    <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro`}> {title} </h2>
                    <p className={`font-Jost font-light text-[18px] max-w-[340px] mt-5 text-justify`}>
                        {content}
                    </p>
                </div>
            </div>
        </div>
  )
}

export default SoSpecialItem