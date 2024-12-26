import styled from '@emotion/styled';

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  border-top: 3px solid #fff2;
  border-bottom: 3px solid #fff2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatBlock = styled.div`
  background: #282828;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2.5rem;
    margin: 0;
    color: #fff;
  }

  p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
  }

  span {
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
  }
`;