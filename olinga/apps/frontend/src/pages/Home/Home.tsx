import React from 'react';
import MapBlock from '../../components/MapBlock';
import { ToastContainer } from 'react-toastify';
import Reviews from '../../components/Reviews';
import Statistic from '../../components/Statistic';
import Galery from '../../components/Galery';
import AboutUs from '../../components/AboutUs';
import Sertificate from '../../components/Sertificate';
import CoursesBlock from '../../components/CoursesBlock';
import BenefitsBlock from '../../components/BenefitsBlock';
import Banner from '../../components/Banner';

const Home: React.FC = () => {
  return (
    <>
    <Banner />
    
      <BenefitsBlock/>
      <CoursesBlock />
      <Sertificate />
      <AboutUs />
      <Galery />
      <Statistic />
      <Reviews />
      <MapBlock />
      <ToastContainer />
    </>
  );
};

export default Home;
