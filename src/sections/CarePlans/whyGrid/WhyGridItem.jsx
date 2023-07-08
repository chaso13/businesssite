import React from 'react'


const WhyGridItem = ({whyGrid}) => {
  const {title ,content } = whyGrid;
  
    return (
     <div className='flex justify-center'>
        <div className='py-10 px-10'>

            <div className='text-center'>
                <h2 className={`text-[32px] text-center font-semibold text-gradient font-crimsonPro `}> {title}</h2>
                <p className={`font-Jost font-light text-[18px] max-w-[470px] mt-5 text-justify xs:`}>
                    {content}
                </p>
            </div>
        </div>
     </div>
  )
}

export default WhyGridItem