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


export const Button = styled.button`
  padding: 13px 13px;
  display: inline-block;
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;
  max-width: 50px;
  
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