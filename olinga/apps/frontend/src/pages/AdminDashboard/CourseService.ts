import axios from 'axios';
import { apiUrl } from '../../i18n';

export interface Course {
  _id: string;
  title: Record<string, string>;
  details: Record<string, string>;
  frequency: Record<string, string>;
  price: number;
  dateStart: Date | null;
  imageUrl?: string;
}

interface CourseData extends Omit<Course, '_id'> {}

export const getCourses = async (): Promise<Course[]> => {
  try {
    const response = await axios.get(`${apiUrl}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

export const createCourse = async (
  courseData: CourseData,
  image: File
): Promise<any> => {
  const formData = new FormData();
  formData.append('body', JSON.stringify(courseData));
  formData.append('image', image);

  const body = { courseData, image };
  try {
    const response = await axios.post(`${apiUrl}/courses`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating course:', error);
    return null;
  }
};

export const updateCourse = async (
  courseId: string,
  courseData: CourseData,
  image?: File | null
): Promise<any> => {
  try {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      await axios.put(`${apiUrl}/courses/image/${courseId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
    const body = { ...courseData, imageUrl: undefined };
    const response = await axios.put(`${apiUrl}/courses/${courseId}`, body);
    return response.data;
  } catch (error) {
    console.error('Error updating course:', error);
    return null;
  }
};

export const deleteCourse = async (courseId: string): Promise<any> => {
  try {
    const response = await axios.delete(`${apiUrl}/courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting course:', error);
    return null;
  }
};
