import React from 'react';
import Heading from '../common/Heading';
import image1 from '/public/assets/products/headphone3-1.png';
import image2 from '/public/assets/products/headphone3-2.png';
import image3 from '/public/assets/products/headphone3-3.png';
import FeaturedCard from './FeaturedCard';

const featuredItems = [
  {
    image: image1.src,
    category: 'watch',
    title: 'Mens Hugo Boss Chrono Watch Mens Hugo Boss Chrono Watch',
    price: 250.0,
    link: '',
  },
  {
    image: image2.src,
    category: 'watch',
    title: 'Mens Hugo Boss Chrono Watch',
    price: 250.0,
    link: '',
  },
  {
    image: image3.src,
    category: 'watch',
    title: 'Mens Hugo Boss Chrono Watch Mens Hugo Boss Chrono Watch',
    price: 250.0,
    link: '',
  },
];

const AllTypes = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
          {/* featured */}
          <div>
            <div className="lg:min-h-[80px]">
              <Heading
                text="Featured Product"
                classname="md:text-lg lg:text-2xl"
              />
            </div>
            <div className="flex flex-col gap-1 mt-6 lg:mt-0">
              {featuredItems.map((item, i) => (
                <FeaturedCard item={item} key={i} />
              ))}
            </div>
          </div>

          {/* top review */}
          <div>
            <div className="lg:min-h-[80px]">
              <Heading text="Top Review" classname="md:text-lg lg:text-2xl" />
            </div>
            <div className="flex flex-col gap-1 mt-6 lg:mt-0">
              {featuredItems.map((item, i) => (
                <FeaturedCard item={item} key={i} />
              ))}
            </div>
          </div>

          {/* Popular */}
          <div>
            <div className="lg:min-h-[80px]">
              <Heading text="Popular" classname="md:text-lg lg:text-2xl" />
            </div>
            <div className="flex flex-col gap-1 mt-6 lg:mt-0">
              {featuredItems.map((item, i) => (
                <FeaturedCard item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTypes;
