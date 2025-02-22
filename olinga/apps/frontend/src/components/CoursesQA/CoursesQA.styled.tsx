import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  border-top: 4px solid #fff2;
  border-bottom: 4px solid #fff2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-content: center;
`;

export const RightContainer = styled.div`
  flex: 3;
  display: flex;
  gap: 10px;

  @media (max-width: 1024px) {
    flex: 2;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const CoursesQAHeader = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;

  h2 {
    font-size: 28px;
    line-height: 1.2;
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid white;
  }

  p {
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    margin: 0;
    padding: 0;
    padding-left: 2px;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e1e1e;
  overflow: hidden;

  img {
    width: 100%;
    height: 640px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  &:nth-of-type(2) {
    @media (min-width: 769px) and (max-width: 1024px) {
      display: none;
    }
  }

  &:nth-of-type(2) {
    @media (max-width: 430px) {
      display: none;
    }
  }
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AccordionItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #222;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const AccordionHeader = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${({ isActive }) => (isActive ? '#444' : '#333')};
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  border-bottom-left-radius: ${({ isActive }) => (isActive ? '0' : '12px')};
  border-bottom-right-radius: ${({ isActive }) => (isActive ? '0' : '12px')};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#555' : '#444')};
  }

  svg {
    margin-left: auto;
    min-width: 20px;
    transition: transform 0.3s ease;
  }

  @media (max-width: 430px) {
    font-size: 15px;
    svg {
      max-width: 16px;
      min-width: 16px;
    }
  }
`;

export const AccordionContent = styled.div`
  max-height: 0;
  overflow: hidden;
  padding: 0 20px;
  background-color: #2a2a2a;
  color: white;
  font-size: 16px;
  line-height: 1.5;
  border-top: 1px solid #444;
  border-radius: 0 0 12px 12px;
  transition: max-height 0.5s ease, padding 0.3s ease;

  &.active {
    max-height: 200px;
    padding: 15px 20px;
  }
`;
