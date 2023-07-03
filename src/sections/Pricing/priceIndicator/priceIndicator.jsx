import React from 'react'
import { priceIndicators } from "../constants";
import PriceIndicatorItem from "./priceIndicatorItem";

const PriceIndicator = () => {
  return (

    <div className='grid md:grid-cols-2 grid-cols-1'>
        {priceIndicators.map((priceIndicator, index) => (
            <PriceIndicatorItem key={index} priceIndicator={priceIndicator} />
        ))}
    </div>
  )
}

export default PriceIndicator