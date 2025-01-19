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
  max-width: 470px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 20px;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const AbonementsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 0;
  height: auto;
  max-height: 400px;
  min-height: 400px;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: none;
  }
`;

export const AbonementCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5c5c5c;
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  height: auto;
  min-height: 50px;
  width: 92%;
  max-width: 440px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  h2 {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding-right: 15px;
    max-width: 90%;
  }

  div {
    display: flex;
    gap: 10px;
  }

  button {
    min-width: 80px;
  }
`;
