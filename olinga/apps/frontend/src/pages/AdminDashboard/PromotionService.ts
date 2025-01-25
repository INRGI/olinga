import axios from 'axios';
import { apiUrl } from '../../i18n';
import { Promotion } from '../../components/PromotionAdmin/PromotionAdmin';

const API_URL = `${apiUrl}/promotion`;

export const getPromotion = async (): Promise<Promotion> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return {} as Promotion;
  }
};

export const updatePromotion = async (body: Promotion): Promise<any> => {
  try {
    const response = await axios.put(`${API_URL}`, body);
    return response.data;
  } catch (error) {
    return null;
  }
};
