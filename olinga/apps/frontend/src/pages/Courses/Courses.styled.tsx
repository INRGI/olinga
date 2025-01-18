import styled from '@emotion/styled';

export const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const CoursesBlockHeader = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 25px;
  line-height: 1.2;
  color: black;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
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

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 425px) {
    width: 100%;
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
  }
`;

export const Button = styled.button`
  border: none;
  padding: 9px;
  text-decoration: none;
  background-color: #87bdd8;
  color: black;
  border: none;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  font-size: 20px;
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
  height: 60px;

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

export const DetailsContainer = styled.div`
padding: 0 5px;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 10px;

`;

export const TimeText = styled.div`
  padding: 0;
  margin: 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h4 {
    padding: 0;
    margin: 0;
  }

  p{
    padding: 0;
    margin: 0;
    font-weight: bold;
    color: #87bdd8;
  }
`;

export const PriceContainer = styled.div`
    padding: 0;
    margin: 0;
    text-align: end;

    h2{
      padding: 0;
      margin: 0;
      color: #87bdd8;
      font-size: 30px;
    }
`;
