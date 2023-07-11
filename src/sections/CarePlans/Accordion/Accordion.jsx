import { CarePlansFaqs } from "../constants";
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
        {CarePlansFaqs.map((faq, index) => (
          <AccordionItem key={index} faq={faq} />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;