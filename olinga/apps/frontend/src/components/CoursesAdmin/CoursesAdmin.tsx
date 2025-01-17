import { useState } from 'react';
import { Course } from '../../pages/AdminDashboard/CourseService';
import { CreatedCourse } from '../CategoryAdmin/CategoryAdmin';
import CreateCourseModal from '../CreateCourseModal/CreateCourseModal';

const CourseAdmin: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [coursesModalOpen, setCoursesModalOpen] = useState<boolean>(false);
  const [coursesCreateModalOpen, setCoursesCreateModalOpen] =
    useState<boolean>(false);
  const [creatingItem, setCreatingItem] = useState<CreatedCourse | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleCloseModal = async () => {
    setImage(null);
    setCreatingItem(null);
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

      {creatingItem && (
        <CreateCourseModal
          isOpen={coursesCreateModalOpen}
          onClose={() => {
            handleCloseModal();
          }}
          initialData={creatingItem}
        />
      )}
    </div>
  );
};

export default CourseAdmin;
