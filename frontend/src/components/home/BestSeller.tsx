'use client';

import { useState, MouseEvent } from 'react';
import Heading from '../common/Heading';
import Image from 'next/image';
import image1 from '/public/assets/products/headphone3-1.png';
import image2 from '/public/assets/products/headphone3-2.png';
import image3 from '/public/assets/products/headphone3-3.png';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';

const filterBarItems = [
  {
    label: 'Top Products',
    value: 'topProducts',
  },
  {
    label: 'Headphone',
    value: 'headphone',
  },
  {
    label: 'Laptop',
    value: 'laptop&pc',
  },
  {
    label: 'Smart Phone',
    value: 'phone',
  },
  {
    label: 'Watch',
    value: 'watch',
  },
];

const BestSeller = () => {
  const [activeFilterItem, setActiveFilterItem] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<number>(0);

  const handleFilter = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    setActiveFilterItem(index);
  };

  const mainItemImages = [image1, image2, image3];

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        {/* heading and filter bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <Heading text="Best Sellers" classname="md:text-4xl" />

          {/* filter bar */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
            {filterBarItems.map((item, i) => (
              <button
                className={`relative font-semibold px-2 py-1 ${
                  activeFilterItem === i ? 'opacity-100' : 'opacity-50'
                }`}
                key={i}
                onClick={(e) => handleFilter(e, i)}
              >
                <span
                  className={`${
                    activeFilterItem === i ? 'w-full' : 'w-0'
                  } h-0.5 bg-themeColor absolute bottom-0 left-0 duration-500`}
                />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 md:mt-20">
          {/* main item */}
          <div className="bg-cardColor p-4 md:p-8 border-b lg:border-r lg:border-b-0 border-borderColor">
            <div className="text-center">
              <p className="text-sm uppercase font-medium text-themeColor">
                Headphone
              </p>
              <h6 className="text-xl font-bold mt-1 mb-2">
                SMS Audio SMS-WD-YLW Street
              </h6>
              <p className="uppercase font-medium text-lg">
                PRICE:{' '}
                <span className="text-themeColor font-bold">$250.00</span>
              </p>
            </div>
            <Image
              src={mainItemImages[activeImage]}
              alt="product"
              className="mx-auto max-w-[200px] sm:max-w-[380px] h-auto my-6 duration-300"
            />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* slider images */}
              <div className="flex gap-2 items-center">
                {mainItemImages.map((item, i) => (
                  <div
                    className={`w-20 h-20 flex justify-center items-center p-2 border rounded cursor-pointer duration-300 ${
                      activeImage === i
                        ? 'opacity-100 border-themeColor'
                        : 'opacity-75 border-borderColor'
                    }`}
                    key={i}
                    onClick={() => setActiveImage(i)}
                  >
                    <Image
                      src={item}
                      alt="product"
                      className="max-w-11 h-auto"
                    />
                  </div>
                ))}
              </div>
              {/* add to cart and preview button */}
              <div className="flex items-center gap-4">
                <button className="bg-themeColor p-2.5 flex justify-center items-center rounded-full text-white text-lg duration-300 hover:scale-125">
                  <MdAddShoppingCart />
                </button>
                <button className="bg-slate-600 p-2.5 flex justify-center items-center rounded-full text-white text-lg hover:bg-themeColor duration-300 hover:scale-110">
                  <FaEye />
                </button>
              </div>
            </div>
          </div>

          {/* sub items */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* item  */}
            <div className="bg-cardColor p-4 md:p-8 border-r border-borderColor">
              <div className="text-center">
                <p className="text-sm uppercase font-medium text-themeColor">
                  Headphone
                </p>
                <h6 className="text-lg font-bold mt-1 mb-2 line-clamp-1">
                  SMS Audio SMS-WD-YLW Street
                </h6>
                <p className="uppercase font-medium text-base">
                  PRICE:{' '}
                  <span className="text-themeColor font-bold">$250.00</span>
                </p>
              </div>
              <Image
                src={mainItemImages[activeImage]}
                alt="product"
                className="mx-auto max-w-[120px] h-auto my-6 duration-300"
              />
              {/* add to cart and preview button */}
              <div className="flex justify-center items-center gap-4 w-full mt-2">
                <button className="bg-themeColor p-2.5 flex justify-center items-center rounded-full text-white text-lg duration-300 hover:scale-125">
                  <MdAddShoppingCart />
                </button>
                <button className="bg-slate-600 p-2.5 flex justify-center items-center rounded-full text-white text-lg hover:bg-themeColor duration-300 hover:scale-110">
                  <FaEye />
                </button>
              </div>
            </div>

            {/* item  */}
            <div className="bg-cardColor p-4 md:p-8 border-r border-borderColor">
              <div className="text-center">
                <p className="text-sm uppercase font-medium text-themeColor">
                  Headphone
                </p>
                <h6 className="text-lg font-bold mt-1 mb-2 line-clamp-1">
                  SMS Audio SMS-WD-YLW Street
                </h6>
                <p className="uppercase font-medium text-base">
                  PRICE:{' '}
                  <span className="text-themeColor font-bold">$250.00</span>
                </p>
              </div>
              <Image
                src={mainItemImages[activeImage]}
                alt="product"
                className="mx-auto max-w-[120px] h-auto my-6 duration-300"
              />
              {/* add to cart and preview button */}
              <div className="flex justify-center items-center gap-4 w-full mt-2">
                <button className="bg-themeColor p-2.5 flex justify-center items-center rounded-full text-white text-lg duration-300 hover:scale-125">
                  <MdAddShoppingCart />
                </button>
                <button className="bg-slate-600 p-2.5 flex justify-center items-center rounded-full text-white text-lg hover:bg-themeColor duration-300 hover:scale-110">
                  <FaEye />
                </button>
              </div>
            </div>

            {/* item */}
            <div className="bg-cardColor p-4 md:p-8 border-r border-borderColor">
              <div className="text-center">
                <p className="text-sm uppercase font-medium text-themeColor">
                  Headphone
                </p>
                <h6 className="text-lg font-bold mt-1 mb-2 line-clamp-1">
                  SMS Audio SMS-WD-YLW Street
                </h6>
                <p className="uppercase font-medium text-base">
                  PRICE:{' '}
                  <span className="text-themeColor font-bold">$250.00</span>
                </p>
              </div>
              <Image
                src={mainItemImages[activeImage]}
                alt="product"
                className="mx-auto max-w-[120px] h-auto my-6 duration-300"
              />

              {/* add to cart and preview button */}
              <div className="flex justify-center items-center gap-4 w-full mt-2">
                <button className="bg-themeColor p-2.5 flex justify-center items-center rounded-full text-white text-lg duration-300 hover:scale-125">
                  <MdAddShoppingCart />
                </button>
                <button className="bg-slate-600 p-2.5 flex justify-center items-center rounded-full text-white text-lg hover:bg-themeColor duration-300 hover:scale-110">
                  <FaEye />
                </button>
              </div>
            </div>

            {/* item */}
            <div className="bg-cardColor p-4 md:p-8 border-r border-borderColor">
              <div className="text-center">
                <p className="text-sm uppercase font-medium text-themeColor">
                  Headphone
                </p>
                <h6 className="text-lg font-bold mt-1 mb-2 line-clamp-1">
                  SMS Audio SMS-WD-YLW Street
                </h6>
                <p className="uppercase font-medium text-base">
                  PRICE:{' '}
                  <span className="text-themeColor font-bold">$250.00</span>
                </p>
              </div>
              <Image
                src={mainItemImages[activeImage]}
                alt="product"
                className="mx-auto max-w-[120px] h-auto my-6 duration-300"
              />
              {/* add to cart and preview button */}
              <div className="flex justify-center items-center gap-4 w-full mt-2">
                <button className="bg-themeColor p-2.5 flex justify-center items-center rounded-full text-white text-lg duration-300 hover:scale-125">
                  <MdAddShoppingCart />
                </button>
                <button className="bg-slate-600 p-2.5 flex justify-center items-center rounded-full text-white text-lg hover:bg-themeColor duration-300 hover:scale-110">
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
