import axios from 'axios';
import { apiUrl } from '../../i18n';

const API_URL = `${apiUrl}/categories`;

export const getMassagesByCategory = async (categoryId: string): Promise<any[]> => {
  try {
    const response = await axios.get(`${API_URL}/${categoryId}/massages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching massages:', error);
    return [];
  }
};

export const createMassage = async (
  categoryId: string,
  massageData: { name: string; description: string; price: number; duration: number; translations: Record<string, string> }
): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/${categoryId}/massages`, massageData);
    return response.data;
  } catch (error) {
    console.error('Error creating massage:', error);
    return null;
  }
};

export const updateMassage = async (
  categoryId: string,
  massageId: string,
  massageData: { name: string; description: string; price: number; duration: number; translations: Record<string, string> }
): Promise<any> => {
  try {
    const response = await axios.put(`${API_URL}/${categoryId}/massages/${massageId}`, massageData);
    return response.data;
  } catch (error) {
    console.error('Error updating massage:', error);
    return null;
  }
};

export const deleteMassage = async (categoryId: string, massageId: string): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}/${categoryId}/massages/${massageId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting massage:', error);
    return null;
  }
};
