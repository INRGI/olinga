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