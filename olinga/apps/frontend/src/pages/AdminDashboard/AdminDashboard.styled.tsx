import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #2b2b2b;
  background-image: linear-gradient(to bottom right, #1e1e1e, #3a3a3a);
  padding-top: 80px;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  
  & > :last-child {
    margin-left: auto;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#6a5acd' : '#3a3a3a')};
  padding: 13px 13px;
  display: inline-block;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;

  &:hover {
    background-color: #5941a9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.6);
  }
`;

export const Button = styled.button`
  padding: 13px 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #b22b36 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: #b22b36 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #b22b36 0 -3px 0 inset;
  }
`;

export const DoubleContainer = styled.div`
  display: flex;
  gap: 0px;
  align-content: center;
  
`;
