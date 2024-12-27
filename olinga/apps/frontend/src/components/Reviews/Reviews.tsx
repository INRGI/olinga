import React from 'react';

import { FaGoogle, FaBook } from 'react-icons/fa';
import {
  HeaderBox,
  Icons,
  MoreReview,
  ReviewContent,
  ReviewHeader,
  ReviewItem,
  ReviewsBlock,
} from './Reviews.styled';
import { useTranslation } from 'react-i18next';

const Reviews: React.FC = () => {
    const { t } = useTranslation();
  return (
    <ReviewsBlock>
      <HeaderBox>
        <ReviewHeader>
          <h2> {t('reviews.head')}</h2>
          <p>{t('reviews.sub_head')}</p>
        </ReviewHeader>
        <MoreReview>
          <span>{t('reviews.more')}: </span>
          
            <Icons
              href="https://studiomasazuzdrowiaiurodyolinga.booksy.com"
              aria-label="Booksy"
              target="_blank"
            >
              <img
              src="/public/booksy_review.png"
              alt="Booksy"
              style={{ width: '32px', height: '32px' }}
            />
            </Icons>
            <Icons
              href="https://maps.app.goo.gl/QqRgVHA97KVUng5K7"
              aria-label="Google Reviews"
              target="_blank"
            >
              <FaGoogle size={26}/>
            </Icons>
        </MoreReview>
      </HeaderBox>

      <ReviewContent>
        <ReviewItem>
          <p>
          {t('reviews.text1')}
          </p>
          <span>{t('reviews.name1')}</span>
        </ReviewItem>
        <ReviewItem>
          <p>
          {t('reviews.text2')}
          </p>
          <span>{t('reviews.name2')}</span>
        </ReviewItem>
        <ReviewItem>
          <p>
          {t('reviews.text3')}
          </p>
          <span>{t('reviews.name3')}</span>
        </ReviewItem>
        <ReviewItem>
          <p>
          {t('reviews.text4')}
          </p>
          <span>{t('reviews.name4')}</span>
        </ReviewItem>
      </ReviewContent>
    </ReviewsBlock>
  );
};

export default Reviews;
