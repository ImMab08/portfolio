import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="bg-neutral-900 p-5 rounded-md max-w-md h-72 md:h-60 space-y-5 flex flex-col justify-between">
      <div className=" space-y-2">
        <div className='flex justify-between'>
          <div className='flex space-x-2 items-center'>
            <div dangerouslySetInnerHTML={{ __html: items[currentIndex].logo }} />
            <h3 className={`text-xl font-bold ${items[currentIndex].color}`}>{items[currentIndex].institution}</h3>
          </div>
          <svg onClick={handleNext} viewBox="0 -6.5 38 38" width={25} height={25} version="1.1" fill="#ffffff" style={{ cursor: 'pointer' }}>
            <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1511.000000, -158.000000)" fill="#ffffff" fillRule="nonzero">
                <g id="1" transform="translate(1350.000000, 120.000000)">
                  <path d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z" id="right-arrow"></path>
                </g>
              </g>
            </g>
          </svg>
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
