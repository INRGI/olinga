import React from 'react';
import {
  BenefitsHeader,
  Container,
  ImageContainer,
  Item,
  LeftContainer,
  RightContainer,
} from './BenefitsBlock.styled';
import { useTranslation } from 'react-i18next';

const BenefitsBlock: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <LeftContainer>
        <BenefitsHeader>
          <h2>{t('benefits.head')}</h2>
          <p>{t('benefits.subhead')}</p>
        </BenefitsHeader>
        <Item>
          <img
            src="/public/adv_ico1.png"
            alt="Booksy"
            style={{ width: '60px', height: '60px' }}
          />
          <div>
            <h3>{t('benefits.title1')}</h3>
            <p>{t('benefits.text1')}</p>
          </div>
        </Item>
        <Item>
          <img
            src="/public/adv_ico2.png"
            alt="Booksy"
            style={{ width: '60px', height: '60px' }}
          />
          <div>
            <h3>{t('benefits.title2')}</h3>
            <p>{t('benefits.text2')}</p>
          </div>
        </Item>
        <Item>
          <img
            src="/public/adv_ico3.png"
            alt="Booksy"
            style={{ width: '60px', height: '60px' }}
          />
          <div>
            <h3>{t('benefits.title3')}</h3>
            <p>{t('benefits.text3')}</p>
          </div>
        </Item>
        <Item>
          <img
            src="/public/adv_ico4.png"
            alt="Booksy"
            style={{ width: '60px', height: '60px' }}
          />
          <div>
            <h3>{t('benefits.title4')}</h3>
            <p>{t('benefits.text4')}</p>
          </div>
        </Item>
      </LeftContainer>

      <RightContainer>
        <ImageContainer>
          <img src="/public/adventages1.jpg" alt="adventages1" />
        </ImageContainer>
        <ImageContainer>
          <img src="/public/adventages2.jpg" alt="adventages2" />
        </ImageContainer>
      </RightContainer>
    </Container>
  );
};

export default BenefitsBlock;
