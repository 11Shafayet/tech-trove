import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';

type Item = {
  title: string;
  image: string;
  category: string;
  price: number;
  link: string;
};

type FeaturedCardProps = {
  item: Item;
};

const FeaturedCard: React.FC<FeaturedCardProps> = ({ item }) => {
  const { title, category, image, link, price } = item;
  return (
    <div className="bg-gray-50 hover:bg-gray-100 p-4 lg:p-6">
      <div className="grid grid-cols-3 gap-4 w-full items-center">
        <div className="lg:pr-4 flex justify-center items-center">
          <Image
            src={image}
            alt="product"
            width={100}
            height={100}
            className="max-w-[80px] h-auto mx-auto"
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center">
          <p className="text-sm capitalize text-themeColor">{category}</p>
          <Link href={link} className="font-bold line-clamp-2 mb-2">
            {title}
          </Link>
          <p className="uppercase font-medium">
            PRICE: <span className="text-themeColor font-bold">${price}</span>
          </p>

          <div className="flex items-center gap-x-3 mt-3">
            <button className="bg-themeColor p-2 flex justify-center items-center rounded-full text-white duration-300 hover:scale-125">
              <MdAddShoppingCart />
            </button>
            <Link
              href={link}
              className="bg-slate-600 p-2 flex justify-center items-center rounded-full text-white hover:bg-themeColor duration-300 hover:scale-110"
            >
              <FaEye />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
