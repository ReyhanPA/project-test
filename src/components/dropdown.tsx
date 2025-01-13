"use client";

import { useState } from "react";

interface DropdownProps {
  options?: string[];
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options = "10" } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleClick = () => {
    setIsOpen(!isOpen)
  };

  const handleOptionsClick = (index: number) => {
    setSelectedOption(options[index])
    setIsOpen(false)
  };

  return (
    <>
      <button
        data-popover-target="menu"
        className="rounded-full w-20 py-2 px-4 text-center text-sm text-black transition-all shadow-md hover:shadow-lg hover:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-4" type="button"
        onClick={handleClick}>
        {selectedOption}
      </button>
      {isOpen && (  
        <ul
          role="menu"
          data-popover="menu"
          data-popover-placement="bottom"
          className="absolute top-12 right-0 z-10 min-w-24 overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none"
        >
          {Array.from({ length: options.length }).map((_, index) => (
            <li
              key={index}
              role="menuitem"
              className="cursor-pointer text-slate-800 flex w-full text-sm justify-center items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 hover:bg-gray-100"
              onClick={() => handleOptionsClick(index)}
            >
              {options[index]}
            </li>
          ))}
        </ul>
      )}
    </>
  )
};

export default Dropdown;