import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  max-width: 900px;
  min-width: 900px;
  width: 100%;
  height: 600px;
  color: #f5f5f5;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 740px;
    min-width: 740px;
  }

  @media (max-width: 425px) {
    max-width: 400px;
    min-width: 400px;
    height: 90vh;
  }

  @media (max-width: 375px) {
    max-width: 350px;
    min-width: 350px;
  }

  @media (max-width: 320px) {
    max-width: 300px;
    min-width: 300px;
    overflow: scroll;
  }
`;

export const ModalHeader = styled.h2`
  font-size: 25px;
  color: #ffffff;
  padding: 0;
  margin: 0;
`;

export const ModalDescription = styled.p`
  font-size: 16px;
  color: #d3d3d3;
  padding: 0;
  margin: 0;
  text-align: justify;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ModalDetails = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #cccccc;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    svg {
      margin-right: 8px;
      color: #888;
    }
  }
`;

export const LeftContainer = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: space-between;
  height: 90%;

  @media (max-width: 425px) {
    gap: 10px;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  overflow: hidden;
  height: 600px;

  @media (max-width: 1024px) {
    flex: 1;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    display: none;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e1e1e;
  overflow: hidden;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    filter: brightness(60%);
  }

  @media (max-width: 425px) {
    img {
      border-radius: 0;
      border-top-right-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
`;

export const DateContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 20px;

  h4 {
    padding: 0;
    margin: 0;

    @media (max-width: 425px) {
      font-size: 14px;
    }

    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;
