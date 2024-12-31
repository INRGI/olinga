import axios from 'axios';
import { apiUrl } from '../../i18n';

const API_URL = `${apiUrl}/categories`;

export interface Massage {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  translations: Record<string, string>;
}
export interface Category {
  _id: string;
  name: string;
  massages: Massage[];
  details: string;
  translations: Record<string, string>;
}

export const getCategories = async (): Promise<any[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const createCategory = async (categoryData: {
  name: string;
  details: string;
  translations: Record<string, string>;
}): Promise<any> => {
  try {
    const response = await axios.post(API_URL, categoryData);
    return response.data;
  } catch (error) {
    console.error('Error creating category:', error);
    return null;
  }
};

export const updateCategory = async (
  id: string,
  categoryData: { name: string; details: string; translations: Record<string, string> }
): Promise<any> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, categoryData);
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    return null;
  }
};

export const deleteCategory = async (id: string): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting category:', error);
    return null;
  }
};
