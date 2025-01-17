import { useState } from 'react';
import AdminModal from '../AdminModal';
import FloatingLabelInput from '../FloatingLabelInput';
import { toastError, toastSuccess } from '../../helpers/toastify';
import { CreatedCourse } from '../CategoryAdmin/CategoryAdmin';
import { createCourse } from '../../pages/AdminDashboard/CourseService';
import {
  BlockHeader,
  CenterContainer,
  Container,
  CreateCourseContainer,
  FileContainer,
  FileInput,
  LeftContainer,
  RightContainer,
  SaveButton,
} from './CreateCourseModal.styled';
import TextareaInput from '../TexteAreaInput/TextareaInput';
import DatePickerInput from '../DatePickerInput/DatePickerInput';

interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: CreatedCourse | null;
}

const CreateCourseModal: React.FC<CreateCourseModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [courseData, setCourseData] = useState<CreatedCourse>(
    initialData || {
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
    }
  );

  const [image, setImage] = useState<File | null>(null);

  const handleCreateCourse = async (courseData: CreatedCourse) => {
    const isFieldsValid =
      courseData.title.pl &&
      courseData.title.uk &&
      courseData.title.ru &&
      courseData.details.pl &&
      courseData.details.uk &&
      courseData.details.ru &&
      courseData.frequency.pl &&
      courseData.frequency.uk &&
      courseData.frequency.ru &&
      courseData.price > 0 &&
      courseData.dateStart;

    if (!isFieldsValid) {
      toastError('Please fill out all fields.');
      return;
    }
    if (!image) {
      toastError('Please upload an image.');
      return;
    }

    try {
      await createCourse(courseData, image);
      toastSuccess('Course created successfully');
    } catch (error) {
      toastError('Error creating course');
    } finally {
      onClose();
    }
  };

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <CreateCourseContainer>
        <BlockHeader>
          <h2>Create Course</h2>
        </BlockHeader>
        <Container>
          <LeftContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`title-${lang}`}
                value={courseData.title[lang]}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    title: { ...courseData.title, [lang]: e.target.value },
                  })
                }
                placeholder={`Title (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`frequency-${lang}`}
                value={courseData.frequency[lang]}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    frequency: {
                      ...courseData.frequency,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Frequency (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
          </LeftContainer>
          <CenterContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <TextareaInput
                key={`details-${lang}`}
                value={courseData.details[lang]}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    details: {
                      ...courseData.details,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Description (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
          </CenterContainer>
          <RightContainer>
            <DatePickerInput
              value={
                courseData.dateStart
                  ? courseData.dateStart.toISOString().split('T')[0]
                  : ''
              }
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  dateStart: new Date(e.target.value),
                })
              }
              placeholder="Start Date"
            />

            <FloatingLabelInput
              value={courseData.price}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  price: Number(e.target.value),
                })
              }
              placeholder="Price (PLN)"
            />
            <FileContainer>
              <FileInput
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </FileContainer>
            <SaveButton onClick={() => handleCreateCourse(courseData)}>
              Save
            </SaveButton>
          </RightContainer>
        </Container>
      </CreateCourseContainer>
    </AdminModal>
  );
};

export default CreateCourseModal;
