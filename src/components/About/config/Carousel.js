import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="bg-neutral-900 p-5 rounded-md w-full h-72 md:h-60 space-y-5 border-2 border-white/10 flex flex-col justify-between">
      <div className=" space-y-2">
        <div className='flex justify-between'>
          <div className='flex space-x-2 items-center'>
            <div>{items[currentIndex].logo}</div>
            <h3 className={`text-xl font-bold ${items[currentIndex].color}`}>{items[currentIndex].institution}</h3>
          </div>
          <div onClick={handleNext} className="cursor-pointer">
            {items[currentIndex].flecha}
          </div>
        </div>

        <h4 className="font-semibold text-sm text-gray-600 dark:text-white">{items[currentIndex].title}</h4>
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-sm text-white/60">{items[currentIndex].description}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-white text-xs hover:text-green-500 py-1 px-4 bg-white/10 rounded-xl">{items[currentIndex].certification}</p>
        <time className="text-end text-xs text-gray-200/40">{items[currentIndex].date}</time>
      </div>
    </div>
  );
};

export default Carousel;
