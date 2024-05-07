import React from 'react';
 const Block = ({title,para,icon}) => {
  return (
    <div className=" border-r border-gray-300 w-60 flex items-center gap-2 cursor-pointer px-3">
      {icon}
      <div>
        <h3 className=" font-bold">{title}</h3>
        <p className=" text-gray-400 text-xs line-clamp-1">
          {para}
        </p>
      </div>
    </div>
  )
}
export default Block;
