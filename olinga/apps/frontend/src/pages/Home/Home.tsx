import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import MapBlock from '../../components/MapBlock';
import { ToastContainer } from 'react-toastify';
import Reviews from '../../components/Reviews';

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
      {/* <ConsultationForm /> */}
      <Reviews />
      <MapBlock />
      <ToastContainer />
    </>
  );
};

export default Home;
