import { useEffect, useState } from 'react';
import {
  Course,
  getCourses,
  updateCourse,
} from '../../pages/AdminDashboard/CourseService';
import { CreatedCourse } from '../CategoryAdmin/CategoryAdmin';
import CreateCourseModal from '../CreateCourseModal/CreateCourseModal';
import { toastError, toastSuccess } from '../../helpers/toastify';
import EditCourseModal from '../EditCourseModal';

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

      toastSuccess('Course updated successfully');
    } catch (error) {
      toastError('Error updating course');
    } finally {
      setCoursesModalOpen(false);
      setEditingItem(null);
    }
  };

  return (
    <div>
      <button
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
        Create course
      </button>
      <button
        onClick={() => {
          setEditingItem(courses[0]);
          if (courses[0].imageUrl) {
            setPreviewImage(courses[0].imageUrl);
          }

          setCoursesModalOpen(true);
        }}
      >
        Edit
      </button>

      {creatingItem && (
        <CreateCourseModal
          isOpen={coursesCreateModalOpen}
          onClose={() => {
            handleCloseModal();
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
    </div>
  );
};

export default CourseAdmin;
