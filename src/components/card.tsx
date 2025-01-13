"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string;
  picture?: string;
  date?: string;
  title?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const {id, picture = "/default-picture.jpg", date = "-", title = "-"} = props;

  return (
    <div className="w-48 h-60 rounded-lg shadow-md hover:shadow-2xl">
      <Link href={`/${id}`} className="w-full h-full"> 
        <div className="flex justify-center items-center w-full h-1/2 relative">
          <Image className="rounded-t-lg" src={picture} alt="Product Picture" loading="lazy" fill={true} />
        </div>
        <div className="flex flex-col items-start w-full h-1/2 p-4">
          <div className="flex w-full">
            <h5 className="text-sm font-thin text-gray-400 truncate">{date}</h5>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-base font-semibold text-gray-600 line-clamp-3">{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;