import styled from '@emotion/styled';

export const SaveButton = styled.button`
  padding: 13px 20px;
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  width: 93%;

  &:hover {
    background-color: #5941a9;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.6);
  }
`;

export const CreateAbonementContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  max-width: 1200px;
  width: 100%;
  gap: 20px;
  background-color: #181818;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CenterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const FileInput = styled.input`
  padding: 15px;
  margin: 0;
  border: 1px solid #4f4f4f;
  border-radius: 8px;
  font-size: 16px;
  background-color: #2b2b2b;
  color: #f0f0f0;
  transition: border-color 0.3s;
  max-width: 465px;
  width: 85%;

  &:focus {
    border-color: #6a5acd;
    outline: none;
  }
`;

export const FileEditingInput = styled.input`
  padding: 15px;
  margin: 0;
  border: 1px solid #4f4f4f;
  border-radius: 8px;
  font-size: 16px;
  background-color: #2b2b2b;
  color: #f0f0f0;
  transition: border-color 0.3s;
  max-width: 465px;
  width: 70%;

  &:focus {
    border-color: #6a5acd;
    outline: none;
  }
`;


export const BlockHeader = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;

  h2 {
    font-size: 30px;
    line-height: 1.2;
    color: #fff;
    margin: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid #fff;
  }

  p {
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    margin: 0;
    padding: 0;
    padding-left: 2px;
  }

  @media (max-width: 1023px) {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 15px;
    }
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const PreviewButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 28px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;