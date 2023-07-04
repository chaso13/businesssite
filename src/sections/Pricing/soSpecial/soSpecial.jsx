import React from 'react'
import { soSpecials } from "../constants";
import SoSpecialItem from "./soSpecialItem";

  const SoSpecial = () => {
 
  
  return (
    
    <div className={` grid md:grid-cols-3 grid-cols-1 place-content-center `}>
        
        {soSpecials.map((soSpecial, index) => (
            <SoSpecialItem key={index} soSpecial={soSpecial} />
        ))}

    </div>
  )
}

export default SoSpecial