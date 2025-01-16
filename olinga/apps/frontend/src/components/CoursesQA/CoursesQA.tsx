import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Container,
  CoursesQAHeader,
  ImageContainer,
  LeftContainer,
  RightContainer,
} from './CoursesQA.styled';
import { IoIosArrowDown } from "react-icons/io";

const CoursesQA: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(null);
    setTimeout(() => {
      setActiveIndex(activeIndex === index ? null : index);
    }, 100);
  };

  const questions = [
    { question: t('courses_qa.question1'), answer: t('courses_qa.answer1') },
    { question: t('courses_qa.question2'), answer: t('courses_qa.answer2') },
    { question: t('courses_qa.question3'), answer: t('courses_qa.answer3') },
    { question: t('courses_qa.question4'), answer: t('courses_qa.answer4') },
    { question: t('courses_qa.question5'), answer: t('courses_qa.answer5') },
  ];
  return (
    <Container>
      <LeftContainer>
        <CoursesQAHeader>
          <h2>{t('courses_qa.head')}</h2>
          <p>{t('courses_qa.subhead')}</p>
        </CoursesQAHeader>

        <Accordion>
          {questions.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader
                onClick={() => toggleAccordion(index)}
                isActive={activeIndex === index}
              >
                {item.question} <IoIosArrowDown size={20} style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
              </AccordionHeader>
              <AccordionContent
                className={activeIndex === index ? 'active' : ''}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <img src="/public/acordeon_img_1.webp" alt="courses_qa" />
        </ImageContainer>
        <ImageContainer>
          <img src="/public/acordeon_img_2.webp" alt="courses_qa" />
        </ImageContainer>
      </RightContainer>
    </Container>
  );
};

export default CoursesQA;
