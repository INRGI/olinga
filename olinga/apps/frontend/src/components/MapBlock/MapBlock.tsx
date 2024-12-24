import React from 'react';

import ConsultationForm from '../ConsultationForm';
import { Container, FormWrapper, MapContainer } from './MapBlock.styled';

const MapBlock: React.FC = () => {
  return (
    <Container>
      <MapContainer>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.544893631376!2d19.019932815938168!3d50.25888221780459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce59d263162f%3A0xc4fcbcf305fcde06!2sAleja%20Wojciecha%20Korfantego%2046%2C%2040-123%20Katowice%2C%20Poland!5e0!3m2!1sen!2sua!4v1700000000000!5m2!1sen!2sua&output=embed&layer=0&disableDefaultUI=true"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </MapContainer>
      <FormWrapper>
        <ConsultationForm />
      </FormWrapper>
    </Container>
  );
};

export default MapBlock;
