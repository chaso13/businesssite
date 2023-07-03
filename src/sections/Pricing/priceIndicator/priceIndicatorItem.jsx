import React from 'react'
import styles, { layout } from '../../../style';

const PriceIndicatorItem = ({priceIndicator}) => {
  const {image ,alt ,title ,description ,range } = priceIndicator;
  
    return (
     <div className='flex justify-center'>
        <div className='py-10 px-10'>
            <div className={layout.sectionImgReverse}>
                <img src={image} alt={alt} className='max-w-[100%] height-[150px] relative z-[5]' />
            </div>

            <div className='text-center'>
                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro `}> {title}</h2>
                <p className={`font-Jost font-light text-[18px] max-w-[470px] mt-5 text-justify xs:`}>
                    {description}
                </p>
                <div className='font-Jost font-semibold text-[18px] py-5 '>
                    <h2> Range: </h2>
                    <h2> {range} </h2>
                </div>
            </div>
        </div>
     </div>
  )
}

export default PriceIndicatorItem