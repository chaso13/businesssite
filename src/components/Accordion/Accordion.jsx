import { faqs } from "../../constants";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <div>
      <div className='py-10 px-50'>
          <h2 className='font-crimsonPro text-[40px] font-semibold leading-none'> frequently asked questions </h2>
          <h3 className='font-Jost text-[22px] font-medium leading-none'> here are some answers to the questions we get the most.</h3>
          <div className=' ml-[-30px] mt-[-70px] w-[2.5rem] h-[2.5rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
          
      </div>
      <ul className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} faq={faq} />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;


{/*
import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);

  return (
      <div className='flex flex-col justify-center items-center'>
          <AccordionLayout 
            title="Accordion 1"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            This is Accordion 1 Content    
          </AccordionLayout>

          <AccordionLayout 
            title="Accordion 2"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            This is Accordion 2 Content    
          </AccordionLayout>
      </div>
  );
};
export default Accordion;

*/}