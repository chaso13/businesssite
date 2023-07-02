import { useState } from "react";
import { useRef } from "react";

const AccordionItem = ({ faq }) => {

  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { question, answer } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""} font-crimsonPro font-medium text-[28px] py-2 text-left`}>
      <button className="button" onClick={handleToggle}>
        {question}
        <span className="control font-crimsonPro font-medium text-[28px]">{clicked ? "—" : "+"} </span>
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper "
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer font-Jost font-normal text-[18px] py-3 ml-6">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
  