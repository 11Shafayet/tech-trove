import Subscribe from '@/components/common/Subscribe';
import AllTypes from '@/components/home/AllTypes';
import BestSeller from '@/components/home/BestSeller';
import Featured from '@/components/home/Featured';
import Hero from '@/components/home/Hero';
import PopularProducts from '@/components/home/PopularProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <PopularProducts />
      <BestSeller />
      <AllTypes />
      <Subscribe />
    </>
  );
};

export default Home;
