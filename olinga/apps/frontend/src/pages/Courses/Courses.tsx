import React from 'react';
import MapBlock from '../../components/MapBlock';
import { ToastContainer } from 'react-toastify';
import BannerCourses from '../../components/BannerCourses';
import SertificateCourses from '../../components/SertificateCourses';
import CoursesBlock from '../../components/CoursesBlock';
import CoursesQA from '../../components/CoursesQA';

const Courses: React.FC = () => {
  return (
    <>
      <BannerCourses />
      <p>Some courses block</p>
      <SertificateCourses />
      <CoursesBlock />
      <CoursesQA />
      <MapBlock />
      <ToastContainer />
    </>
  );
};

export default Courses;
