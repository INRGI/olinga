import { useEffect, useState } from 'react';
import AdminModal from '../AdminModal';
import FloatingLabelInput from '../FloatingLabelInput';
import { Course } from '../../pages/AdminDashboard/CourseService';
import {
  BlockHeader,
  CenterContainer,
  Container,
  CreateCourseContainer,
  FileContainer,
  FileInput,
  LeftContainer,
  PreviewButton,
  RightContainer,
  SaveButton,
} from '../CreateCourseModal/CreateCourseModal.styled';
import TextareaInput from '../TexteAreaInput/TextareaInput';
import DatePickerInput from '../DatePickerInput/DatePickerInput';
import { MdOutlinePreview } from 'react-icons/md';
import { FileEditingInput } from '../CreateMassageForm/CreateMassageForm.styled';

interface EditCourseModalProps {
  isOpen: boolean;
  course: Course | null;
  onClose: () => void;
  onSave: (updatedCourse: Course, image?: File | null) => void;
}
const EditCourseModal: React.FC<EditCourseModalProps> = ({
  isOpen,
  course,
  onClose,
  onSave,
}) => {
  const [editingCourse, setEditingCourse] = useState<Course | null>(course);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    course?.imageUrl || null
  );

  useEffect(() => {
    setEditingCourse(
      course
        ? {
            ...course,
            dateStart: course.dateStart ? new Date(course.dateStart) : null,
          }
        : null
    );
    setPreviewImage(course?.imageUrl || null);
  }, [course]);

  // useEffect(() => {
  //   setEditingCourse(course);
  //   setPreviewImage(course?.imageUrl || null);
  // }, [course]);

  if (!editingCourse) return null;

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
                value={editingCourse.title[lang]}
                onChange={(e) =>
                  setEditingCourse({
                    ...editingCourse,
                    title: { ...editingCourse.title, [lang]: e.target.value },
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
                value={editingCourse.frequency[lang]}
                onChange={(e) =>
                  setEditingCourse({
                    ...editingCourse,
                    frequency: {
                      ...editingCourse.frequency,
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
                value={editingCourse.details[lang]}
                onChange={(e) =>
                  setEditingCourse({
                    ...editingCourse,
                    details: {
                      ...editingCourse.details,
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
                editingCourse.dateStart instanceof Date
                  ? editingCourse.dateStart.toISOString().split('T')[0]
                  : ''
              }
              onChange={(e) =>
                setEditingCourse({
                  ...editingCourse,
                  dateStart: e.target.value ? new Date(e.target.value) : null,
                })
              }
              placeholder="Start Date"
            />

            <FloatingLabelInput
              value={editingCourse.price}
              onChange={(e) =>
                setEditingCourse({
                  ...editingCourse,
                  price: Number(e.target.value),
                })
              }
              placeholder="Price (PLN)"
            />
            <FileContainer>
              <FileEditingInput
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
              {previewImage && (
                <PreviewButton
                  href={`${previewImage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlinePreview />
                </PreviewButton>
              )}
            </FileContainer>
            <SaveButton
              onClick={() => {
                if (editingCourse) {
                  onSave(editingCourse, image);
                }
              }}
            >
              Save
            </SaveButton>
          </RightContainer>
        </Container>
      </CreateCourseContainer>
    </AdminModal>
  );
};

export default EditCourseModal;
