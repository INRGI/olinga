import axios from 'axios';
import { apiUrl } from '../../i18n';

const API_URL = `${apiUrl}/categories`;

export interface Massage {
  _id: string;
  categoryId: string;
  imageUrl?: string;
  title: Record<string, string>;
  description: Record<string, string>;
  price: number;
  duration: Record<string, string>;
  details1: Record<string, string>;
  details2: Record<string, string>;
  details3: Record<string, string>;
  details4: Record<string, string>;
}
export interface Category {
  _id: string;
  massages: Massage[];
  title: Record<string, string>;
  details: Record<string, string>;
  imageUrl?: string;
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

export const createCategory = async (
  categoryData: {
    title: Record<string, string>;
    details: Record<string, string>;
  },
  image: File
): Promise<any> => {
  const formData = new FormData();
  formData.append('body', JSON.stringify(categoryData));
  formData.append('image', image);

  const body = {categoryData, image};

  try {
    const response = await axios.post(API_URL, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating category:', error);
    return null;
  }
};

export const updateCategory = async (
  id: string,
  categoryData: {
    title?: Record<string, string>;
    details?: Record<string, string>;
  },
  image?: File | null
): Promise<any> => {
  const formData = new FormData();
  formData.append('body', JSON.stringify(categoryData));
  if (image) {
    formData.append('image', image);
  }

  try {
    const response = await axios.put(`${API_URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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
