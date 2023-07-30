import React from 'react'
import { whatGridArr } from "../constants";
import WhatGridItem from "./WhatGridItem";

const WhatGrid = () => {
  return (

    <div className='grid md:grid-cols-2 grid-cols-1 place-content-center'>
        {whatGridArr.map((whatGrid, index) => (
            <WhatGridItem key={index} whatGrid={whatGrid} />
        ))}
    </div>
  )
}

export default WhatGrid