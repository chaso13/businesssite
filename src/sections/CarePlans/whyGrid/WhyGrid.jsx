import React from 'react'
import { whyGridArr } from "../constants";
import WhyGridItem from "./WhyGridItem";

const WhyGrid = () => {
  return (

    <div className='grid md:grid-cols-3 grid-cols-1 place-content-center'>
        {whyGridArr.map((whyGrid, index) => (
            <WhyGridItem key={index} whyGrid={whyGrid} />
        ))}
    </div>
  )
}

export default WhyGrid