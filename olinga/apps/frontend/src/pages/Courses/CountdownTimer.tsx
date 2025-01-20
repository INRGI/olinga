import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

interface CountdownTimerProps {
  dateStart: Date | null;
}

const CountdownContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.7);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 50px;
`;

const TimeBlock = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;

  .label {
    font-size: 12px;
    color: #e9e9e9;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0;
    margin: 0;

    @media (max-width: 320px) {
    font-size: 10px;
  }
  }

  .value {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CountdownTimer: React.FC<CountdownTimerProps> = ({ dateStart }) => {
  const { t } = useTranslation();
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (dateStart) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(dateStart).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [dateStart]);

  const getTimeUnits = (time: number) => ({
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((time / (1000 * 60)) % 60),
    seconds: Math.floor((time / 1000) % 60),
  });

  const timeUnits = getTimeUnits(timeRemaining);

  return (
    <CountdownContainer>
      {timeRemaining > 0 ? (
        Object.entries(timeUnits).map(([unit, value]) => (
          <TimeBlock key={unit}>
            <div className="label">{t(`courses_time.${unit}`)}</div>
            <div className="value">{value.toString().padStart(2, '0')}</div>
          </TimeBlock>
        ))
      ) : (
        <Text>{t('courses_time.started')}</Text>
      )}
    </CountdownContainer>
  );
};

export default CountdownTimer;
