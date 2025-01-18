import { useEffect, useState } from 'react';
import {
  Course,
  deleteCourse,
  getCourses,
  updateCourse,
} from '../../pages/AdminDashboard/CourseService';
import { CreatedCourse } from '../CategoryAdmin/CategoryAdmin';
import CreateCourseModal from '../CreateCourseModal/CreateCourseModal';
import { toastError, toastSuccess } from '../../helpers/toastify';
import EditCourseModal from '../EditCourseModal';
import {
  Button,
  Container,
  CourseCard,
  CoursesContainer,
  DeleteButton,
  EditButton,
  HeaderContainer,
} from './CoursesAdmin.styled';
import { ServicesBlockHeader } from '../CategoryAdmin/CategoryAdmin.styled';
import { FaPlus } from 'react-icons/fa';

const CourseAdmin: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [coursesModalOpen, setCoursesModalOpen] = useState<boolean>(false);
  const [coursesCreateModalOpen, setCoursesCreateModalOpen] =
    useState<boolean>(false);
  const [creatingItem, setCreatingItem] = useState<CreatedCourse | null>(null);
  const [editingItem, setEditingItem] = useState<Course | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCloseModal = async () => {
    setImage(null);
    setCreatingItem(null);
    setEditingItem(null);
    setCoursesModalOpen(false);
    setCoursesCreateModalOpen(false);
  };

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleUpdateCourse = async (
    courseData: Course,
    image?: File | null
  ) => {
    try {
      if (image) {
        await updateCourse(courseData._id, courseData, image);
      }
      if (!image) {
        await updateCourse(courseData._id, courseData);
      }
      fetchCourses();
      toastSuccess('Course updated successfully');
    } catch (error) {
      toastError('Error updating course');
    } finally {
      setCoursesModalOpen(false);
      setEditingItem(null);
    }
  };

  const handleDeleteCourse = async (id: string) => {
    try {
      await deleteCourse(id);
      toastSuccess('Course deleted successfully');
      await fetchCourses();
    } catch (error) {
      toastError('Error deleting course');
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <ServicesBlockHeader>
          <h2>Courses</h2>
          <p>All courses below</p>
        </ServicesBlockHeader>
        <Button
          onClick={() => {
            setCreatingItem({
              title: {
                pl: '',
                uk: '',
                ru: '',
              },
              details: {
                pl: '',
                uk: '',
                ru: '',
              },
              frequency: {
                pl: '',
                uk: '',
                ru: '',
              },
              price: 0,
              dateStart: new Date(),
            });
            setCoursesCreateModalOpen(true);
          }}
        >
          <FaPlus />
        </Button>
      </HeaderContainer>
      <CoursesContainer>
        {courses?.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course._id}>
              <h2>{course.title.ru}</h2>
              <div>
                <EditButton
                  onClick={() => {
                    setEditingItem(course);
                    if (course.imageUrl) {
                      setPreviewImage(course.imageUrl);
                    }

                    setCoursesModalOpen(true);
                  }}
                >
                  Edit
                </EditButton>
                <DeleteButton onClick={() => handleDeleteCourse(course._id)}>
                  Delete
                </DeleteButton>
              </div>
            </CourseCard>
          ))
        ) : (
          <CourseCard>No courses available.</CourseCard>
        )}
      </CoursesContainer>

      {creatingItem && (
        <CreateCourseModal
          isOpen={coursesCreateModalOpen}
          onClose={() => {
            handleCloseModal();
            fetchCourses();
          }}
          initialData={creatingItem}
        />
      )}
      {editingItem && (
        <EditCourseModal
          isOpen={coursesModalOpen}
          onClose={() => handleCloseModal()}
          course={editingItem}
          onSave={handleUpdateCourse}
        />
      )}
    </Container>
  );
};

export default CourseAdmin;
