import React from 'react';
import MapBlock from '../../components/MapBlock';
import { ToastContainer } from 'react-toastify';
import Reviews from '../../components/Reviews';
import Statistic from '../../components/Statistic';

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
      <Statistic />
      <Reviews />
      <MapBlock />
      <ToastContainer />
    </>
  );
};

export default Home;
