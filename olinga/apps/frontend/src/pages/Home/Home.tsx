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

const Home: React.FC = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <>Home</>
      <br></br>
      <br></br>
      <br></br>
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
