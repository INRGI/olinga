import axios from 'axios';
import { apiUrl } from '../../i18n';

const API_URL = `${apiUrl}/consultations`;

export interface Consultation {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  date?: string;
  status: string;
  createdAt: Date;
}

export const getConsultations = async (): Promise<Consultation[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching consultations:', error);
    return [];
  }
};

export const getConsultationById = async (id: string): Promise<Consultation | null> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching consultation:', error);
    return null;
  }
};

export const deleteConsultation = async (id: string): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting consultation:', error);
    return null;
  }
};
