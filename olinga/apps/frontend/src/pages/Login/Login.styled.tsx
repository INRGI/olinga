import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2b2b2b;
  background-image: linear-gradient(to bottom right, #1e1e1e, #3a3a3a);
  font-family: 'Arial', sans-serif;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #3a3a3a;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #f0f0f0;
`;

export const Input = styled.input`
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #4f4f4f;
  border-radius: 8px;
  font-size: 16px;
  background-color: #2b2b2b;
  color: #f0f0f0;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6a5acd;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 15px;
  margin: 15px 0;
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5941a9;
  }
`;

export const LinkText = styled.p`
  font-size: 14px;
  color: #b0b0b0;

  a {
    color: #6a5acd;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
