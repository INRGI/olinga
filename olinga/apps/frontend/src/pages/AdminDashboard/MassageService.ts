import axios from 'axios';
import { apiUrl } from '../../i18n';
import { Massage } from './CategoryService';

interface MassageData extends Omit<Massage, '_id'> {}

export const getMassagesByCategory = async (
  categoryId: string
): Promise<Massage[]> => {
  try {
    const response = await axios.get(`${apiUrl}/massages/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching massages:', error);
    return [];
  }
};

export const createMassage = async (
  massageData: MassageData,
  image: File
): Promise<any> => {
  const formData = new FormData();
  formData.append('body', JSON.stringify(massageData));
  formData.append('image', image);

  const body = { massageData, image };
  try {
    const response = await axios.post(`${apiUrl}/massages`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating massage:', error);
    return null;
  }
};

export const updateMassage = async (
  massageId: string,
  massageData: MassageData,
  image: File | null
): Promise<any> => {
  try {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      await axios.put(`${apiUrl}/image/${massageId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
    const body = { ...massageData, imageUrl: undefined };
    const response = await axios.put(`${apiUrl}/${massageId}`, body);
    return response.data;
  } catch (error) {
    console.error('Error updating massage:', error);
    return null;
  }
};

export const deleteMassage = async (massageId: string): Promise<any> => {
  try {
    const response = await axios.delete(`${apiUrl}/massages/${massageId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting massage:', error);
    return null;
  }
};
