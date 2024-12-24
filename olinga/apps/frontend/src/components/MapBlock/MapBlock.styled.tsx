import styled from '@emotion/styled';
export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;

  @media only screen and (max-width: 375px) {
    max-width: 375px;
  }
`;

export const MapContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 10;
  max-width: 350px;
  width: 100%;

  @media only screen and (max-width: 375px) {
    max-width: 270px;
    left: 10px;
  }
`;
