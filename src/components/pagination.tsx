"use client";

import React from "react";

interface PaginationProps {
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { pageSize } = props;
  const [active, setActive] = React.useState<number>(1);

  const handleNext = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const handlePrev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex items-center justify-center space-x-1">
      <button onClick={handlePrev} className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-orange-800 hover:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        Prev
      </button>
      {Array.from({ length: pageSize }).map((_, index) => (
        <button key={index} onClick={() => setActive(index + 1)} className={`min-w-9 rounded-md py-2 px-3 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg active:bg-slate-700 hover:bg-orange-800 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 ${active === index + 1 ? "bg-orange-800 text-white" : "text-black"}`}>
          {index + 1}
        </button>
      ))}
      <button onClick={handleNext} className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-orange-800 hover:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        Next
      </button>
    </div>
  );
}

export default Pagination;