import axios from 'axios';
import { apiUrl } from '../../i18n';

export interface Abonement {
  _id: string;
  imageUrl?: string;
  title: Record<string, string>;
  description: Record<string, string>;
  price: number;
  duration: string;
  details1: Record<string, string>;
  details2: Record<string, string>;
  details3: Record<string, string>;
  details4: Record<string, string>;
}

interface AbonementData extends Omit<Abonement, '_id'> {}

export const getAbonements = async (): Promise<any[]> => {
  try {
    const response = await axios.get(`${apiUrl}/abonements`);
    return response.data;
  } catch (error) {
    console.error('Error fetching abonements:', error);
    return [];
  }
};

export const createAbonement = async (
  abonementData: AbonementData,
  image: File
): Promise<any> => {
  const formData = new FormData();
  formData.append('body', JSON.stringify(abonementData));
  formData.append('image', image);

  const body = { abonementData, image };
  try {
    const response = await axios.post(`${apiUrl}/abonements`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating abonement:', error);
    return null;
  }
};

export const updateAbonement = async (
  abonementId: string,
  abonementData: AbonementData,
  image?: File | null
): Promise<any> => {
  try {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      await axios.put(`${apiUrl}/abonements/image/${abonementId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
    const body = { ...abonementData, imageUrl: undefined };
    const response = await axios.put(
      `${apiUrl}/abonements/${abonementId}`,
      body
    );
    return response.data;
  } catch (error) {
    console.error('Error updating abonement:', error);
    return null;
  }
};

export const deleteAbonement = async (abonementId: string): Promise<any> => {
  try {
    const response = await axios.delete(`${apiUrl}/abonements/${abonementId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting abonement:', error);
    return null;
  }
};
