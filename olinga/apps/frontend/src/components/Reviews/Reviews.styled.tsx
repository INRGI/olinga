import styled from '@emotion/styled';

export const ReviewsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 20px;
  background-color: #282828;
`;

export const HeaderBox = styled.div`
  padding: 0 30px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: left;

  @media (max-width: 800px) {
    padding: 0 10px;
  }

  @media (max-width: 430px) {
    padding: 0 5px;
  }
`;

export const ReviewHeader = styled.div`
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
    h2{
       font-size: 22px;
    }
    p{
       font-size: 15px;
    }
  }

  @media (max-width: 430px) {
    h2{
       font-size: 16px;
    }
    p{
       font-size: 14px;
    }
  }
`;

export const MoreReview = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 10px;

  span {
    font-size: 20px;
    color: #fff;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Icons = styled.a`
  color: #fff;
  font-size: 32px;
  transition: transform 0.2s, color 0.2s;
  display: flex;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ReviewItem = styled.div`
  background: #1e1e1e;
  max-width: calc(45% - 10px);
  padding: 20px;
  border: 2px solid #fff2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 16px;
    color: #fff;
    line-height: 1.5;
  }

  span {
    text-align: right;
    font-size: 18px;
    font-weight: bold;
    color: #87bdd8;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;
