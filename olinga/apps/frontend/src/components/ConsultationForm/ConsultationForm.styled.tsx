import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 324px;
  width: 100%;
  background-color: #3a3a3a;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  text-align: center;

  @media only screen and (max-width: 425px) {
    padding: 15px;
    max-width: 290px;
  }
`;

export const Header = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
  color: #f0f0f0;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 20px;
  color: #f0f0f0;
  padding: 0;
`;

export const Privacy = styled.p`
  font-size: 12px;
  margin: 0;
  color: #f0f0f0;
  padding: 0;
  cursor: pointer;
  
  &:hover + div {
    visibility: visible;
    opacity: 1;
  }
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
  background-color: #87bdd8;
  color: #2b2b2b;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  transition: color 0.3s;

  &:hover {
    background-color: #76a7c0;
    color: white;
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

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: relative;
  gap: 5px;
`;

export const Checkbox = styled.input`
  appearance: none;
  max-width: 20px;
  width: 100%;
  margin: 0;
  height: 22px;
  border: 2px solid #4f4f4f;
  border-radius: 4px;
  background-color: #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:checked {
    background-color: #87bdd8;
    border-color: #87bdd8;
  }

  &:focus {
    outline: none;
  }

  &::after {
    content: '✓';
    color: #2b2b2b;
    font-size: 16px;
    display: none;
  }

  &:checked::after {
    display: block;
  }
`;


export const Tooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 5%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
  width: 300px;
  z-index: 100;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 425px) {
    max-width: 260px;
  }
`;
