import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Checkbox,
  CheckboxContainer,
  Description,
  Form,
  Header,
  Input,
  Privacy,
  Tooltip,
} from './ConsultationForm.styled';
import { useTranslation } from 'react-i18next';
import { toastError, toastSuccess } from '../../helpers/toastify';
import { apiUrl } from '../../i18n';

const ConsultationForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const isPhoneValid = (phone: string): boolean => {
    const phoneRegex = /^(\+?\d{1,3})?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;
    return phoneRegex.test(phone);
  };
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPhoneValid(formData.phone)) {
      toastError(t('consultation.invalid_phone')); 
      return;
    }

    try {
      await axios.post(`${apiUrl}/consultations`, formData);
      toastSuccess(t('consultation.success'));
      setFormData({ fullName: '', email: '', phone: '' });
    } catch (error) {
        toastError(t('consultation.error'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Header>{t('consultation.head')}</Header>
        <Description>{t('consultation.description')}</Description>
        <Input
          type="text"
          name="fullName"
          placeholder={t('consultation.name')}
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder={t('consultation.mail')}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="phone"
          placeholder={t('consultation.mobile')}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          <Privacy>{t('consultation.privacy_head')}</Privacy>
          <Tooltip>{t('consultation.privacy_text')}</Tooltip>
        </CheckboxContainer>
        <Button type="submit">{t('consultation.button')}</Button>
      </Form>
      
    </>
  );
};

export default ConsultationForm;
