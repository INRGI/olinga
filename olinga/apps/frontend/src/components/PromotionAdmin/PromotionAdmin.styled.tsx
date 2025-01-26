import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #3a3a3a;
  padding: 25px;
  margin-left: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  width: 40%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const PromotionContainer = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  padding: 0;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;
  padding: 0;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;
  padding: 0;
`;

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
  width: 96%;

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