import { BiChevronRight, BiChevronUp } from "react-icons/bi";

const Accordion = ({ title, text, isOpen, handleToggle }) => {
  return (
    <div
      className={`flex flex-col justify-between p-4 rounded-2xl border border-dark/20 gap-2 ${
        isOpen ? "open" : ""
      }`}
      onClick={handleToggle}
    >
      <div className="flex justify-between">
        <p className="w-[93%] text-black text-xl leading-normal">{title}</p>
        <p className="text-accent text-2xl">
          {isOpen ? <BiChevronUp /> : <BiChevronRight />}
        </p>
      </div>

      {isOpen && (
        <div className="w-[95%] text-black leading-normal">{text}</div>
      )}
    </div>
  );
};

export default Accordion;
