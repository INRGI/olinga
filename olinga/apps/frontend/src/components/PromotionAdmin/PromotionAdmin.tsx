import { useEffect, useState } from 'react';
import { toastError, toastSuccess } from '../../helpers/toastify';
import {
  Container,
  PromotionContainer,
  HeaderContainer,
  LeftContainer,
  RightContainer,
} from './PromotionAdmin.styled';
import { ServicesBlockHeader } from '../CategoryAdmin/CategoryAdmin.styled';
import {
  getPromotion,
  updatePromotion,
} from '../../pages/AdminDashboard/PromotionService';
import FloatingLabelInput from '../FloatingLabelInput';

export interface Promotion {
  _id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  promotion_percent: number;
  promotion_code: string;
}

const PromotionAdmin: React.FC = () => {
  const [promotion, setPromotion] = useState<Promotion>({
    _id: '',
    title: {},
    description: {},
    promotion_percent: 0,
    promotion_code: '',
  });

  useEffect(() => {
    fetchPromotion();
  }, []);

  const fetchPromotion = async () => {
    const data = await getPromotion();
    setPromotion(data);
  };

  const handleUpdatePromotion = async (promotionData: Promotion) => {
    try {
      await updatePromotion(promotionData);

      fetchPromotion();
      toastSuccess('Promotion updated successfully');
    } catch (error) {
      toastError('Error updating promotion');
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <ServicesBlockHeader>
          <h2>Active promotion</h2>
        </ServicesBlockHeader>
      </HeaderContainer>
      <PromotionContainer>
        <LeftContainer>
          {['pl', 'uk', 'ru'].map((lang) => (
            <FloatingLabelInput
              key={`title-${lang}`}
              value={promotion.title[lang]}
              onChange={(e) =>
                setPromotion({
                  ...promotion,
                  title: { ...promotion.title, [lang]: e.target.value },
                })
              }
              placeholder={`Title (${
                lang === 'uk' ? 'UA' : lang.toUpperCase()
              })`}
            />
          ))}

          {['pl', 'uk', 'ru'].map((lang) => (
            <FloatingLabelInput
              key={`description-${lang}`}
              value={promotion.description[lang]}
              onChange={(e) =>
                setPromotion({
                  ...promotion,
                  description: {
                    ...promotion.description,
                    [lang]: e.target.value,
                  },
                })
              }
              placeholder={`Description (${
                lang === 'uk' ? 'UA' : lang.toUpperCase()
              })`}
            />
          ))}
        </LeftContainer>
        <RightContainer>
          <FloatingLabelInput
            value={promotion.promotion_percent}
            onChange={(e) =>
              setPromotion({
                ...promotion,
                promotion_percent: Number(e.target.value),
              })
            }
            placeholder="Promotion Percent (PLN)"
          />

          <FloatingLabelInput
            value={promotion.promotion_code}
            onChange={(e) =>
              setPromotion({
                ...promotion,
                promotion_code: e.target.value,
              })
            }
            placeholder="Promotion Code"
          />
        </RightContainer>
      </PromotionContainer>
    </Container>
  );
};

export default PromotionAdmin;
