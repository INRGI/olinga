import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #121212;
  min-height: 100vh;

  margin-top: 68px;
  @media (max-width: 1024px) {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    margin-top: 52px;
  }

  @media (max-width: 425px) {
    margin-top: 57.8px;
    padding: 20px;
  }

  @media (max-width: 425px) {
    margin-top: 51px;
  }

  @media (max-width: 320px) {
    margin-top: 43px;
  }
`;

export const Card = styled.div<{ background: string }>`
  position: relative;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  width: 450px;
  height: 450px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: flex-end;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.8);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
  margin: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  text-overflow: ellipsis;
`;

export const Content = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 16px;

    li {
      margin-bottom: 8px;
      font-size: 0.9em;
      
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    color: #d1d1d1;
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  background-color: #d1b567;
  color: #1c1c1c;
  border: none;
  border-radius: 6px;
  padding: 10px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0c072;
  }
`;

export const Placeholder = styled.div`
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  margin-top: 20px;
`;
