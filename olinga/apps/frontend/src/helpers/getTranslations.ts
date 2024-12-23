import axios from 'axios';

export const getTranslations = async (lang: string) => {
  const response = await axios.get(`/api/translations/${lang}`);
  return response.data;
};
