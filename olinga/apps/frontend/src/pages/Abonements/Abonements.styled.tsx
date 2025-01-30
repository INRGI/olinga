import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

export const ContainerEmpty = styled.div`
  padding: 20px;
  background-color: #121212;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  padding-bottom: 30px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
   padding-bottom: 10px;
  }
`;

export const AbonementsBlockHeader = styled.div`

  h2 {
    font-size: 25px;
    line-height: 1.2;
    color: white;
    margin: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid white;
  }

  p {
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 425px) {
    h2{
      font-size: 20px;
    }
    p{
      font-size: 14px;
    };
  }
`;

export const CardContainer = styled.div`
  padding: 20px;
  background-color: #121212;
  min-height: 100vh;
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    margin-top: 52px;
    padding: 20px;
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

  @media (max-width: 1024px) {
    width: 480px;
  }

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 425px) {
    width: 400px;
  }

  @media (max-width: 375px) {
    width: 350px;
  }

  @media (max-width: 320px) {
    width: 300px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: bold;
  width: 100%;
  margin: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;

  h3 {
    padding: 0;
    margin: 0;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    h3 {      
      max-width: 440px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
    h3 {
      font-size: 18px;
      max-width: 340px;
    }
  }

  @media (max-width: 425px) {
    h3 {
      font-size: 16px;
    }
  }

  @media (max-width: 375px) {
    h3 {
      max-width: 300px;
    }
  }
`;

export const Content = styled.div`
  padding: 10px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 16px;

    li {
      display: flex;
      padding: 0;
      align-items: center;
      margin-bottom: 8px;
      font-size: 14px;
      align-content: center;

      @media (max-width: 425px) {
        font-size: 12px;
      }
    }
  }
`;

export const Button = styled.button`
  border: none;
  padding: 9px;
  text-decoration: none;
  background-color: #87bdd8;
  color: black;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  max-width: 180px;
  width: 100%;
  margin: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
  align-items: center;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 425px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 70%;
    font-size: 13px;
  }
`;

export const Placeholder = styled.div`
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding-left: 10px;

  @media (max-width: 475px) {
    padding-left: 0px;
  }

  @media (max-width: 320px) {
    gap: 10px;
  }
`;

export const DateContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  h4 {
    padding: 0;
    margin: 0;

    @media (max-width: 425px) {
      font-size: 14px;
    }

    @media (max-width: 375px) {
      font-size: 12px;
    }
    @media (max-width: 320px) {
      font-size: 11px;
    }
  }
`;

export const ButtonBack = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  background-color: #1e1e1e;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
  max-width: 200px;

  &:hover {
    background-color: #444;
  }


  @media (max-width: 425px) {
    display: none;
  }
`;

export const ButtonOnlyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;