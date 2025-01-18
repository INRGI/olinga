import React, { useEffect, useState } from 'react';
import MapBlock from '../../components/MapBlock';
import { ToastContainer } from 'react-toastify';
import BannerCourses from '../../components/BannerCourses';
import SertificateCourses from '../../components/SertificateCourses';
import CoursesBlock from '../../components/CoursesBlock';
import CoursesQA from '../../components/CoursesQA';
import { Course, getCourses } from '../AdminDashboard/CourseService';
import {
  Button,
  Card,
  CardContainer,
  Container,
  Content,
  CoursesBlockHeader,
  DateContainer,
  DetailsContainer,
  Overlay,
  PriceContainer,
  TimeText,
  Title,
} from './Courses.styled';
import { useTranslation } from 'react-i18next';
import CountdownTimer from './CountdownTimer';
import CourseDetailsModal from '../../components/CourseDetailsModal';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const { t, i18n } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleOpenModal = (course: Course) => {
    setSelectedCourse(course);
    setModalIsOpen(true);
  };

  if (!courses || courses.length === 0) return null;

  return (
    <>
      <BannerCourses />

      <CardContainer>
        <CoursesBlockHeader>{t('courses_list.title')}</CoursesBlockHeader>

        <Container>
          {courses.map((course) => (
            <Card key={course._id} background={course?.imageUrl || ''}>
              <Overlay>
                <Title>
                  <h3>{course.title[i18n.language]}</h3>
                </Title>
                <Content>
                  <DetailsContainer>
                    <TimeText>
                      <h4>{t('courses_list.subtitle')}</h4>
                      <p>{t('courses_list.left')}</p>
                    </TimeText>
                    <PriceContainer>
                      <h2>{course.price} zł</h2>
                    </PriceContainer>
                  </DetailsContainer>
                  <DateContainer>
                    <CountdownTimer dateStart={course.dateStart} />
                    <Button onClick={() => handleOpenModal(course)}>
                      {t('courses.button')}
                    </Button>
                  </DateContainer>
                </Content>
              </Overlay>
            </Card>
          ))}
        </Container>
      </CardContainer>

      <SertificateCourses />
      <CoursesBlock />
      <CoursesQA />
      <MapBlock />
      <ToastContainer />
      <CourseDetailsModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        initialData={selectedCourse}
      />
    </>
  );
};

export default Courses;
