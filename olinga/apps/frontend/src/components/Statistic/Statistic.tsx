import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StatBlock, StatsContainer } from './Statistic.styled';

const AnimatedNumber = ({ target, startAnimation }: { target: number; startAnimation: boolean }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let currentValue = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= target) {
        currentValue = target;
        clearInterval(interval);
      }
      setValue(currentValue);
    }, 20);

    return () => clearInterval(interval);
  }, [startAnimation, target]);

  return <>{value}</>;
};

const Statistic = () => {
  const { t } = useTranslation();
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const stats = [
    { target: 95, subtitleKey: 'statistic.title1', showPercent: true, showMore: false, moreText: 'statistic.more' },
    { target: 32, subtitleKey: 'statistic.title2', showPercent: false, showMore: true, moreText: 'statistic.more' },
    { target: 10, subtitleKey: 'statistic.title3', showPercent: false, showMore: true, moreText: 'statistic.more' },
    { target: 6, subtitleKey: 'statistic.title4', showPercent: false, showMore: false, moreText: 'statistic.more' },
  ];

  return (
    <StatsContainer ref={ref}>
      {stats.map((stat, index) => (
        <StatBlock key={index}>
          <h2>
            {stat.showMore ? <span>{t(stat.moreText)} </span> : ''}
            <AnimatedNumber target={stat.target} startAnimation={startAnimation} />
            {stat.showPercent ? '%' : ''}
          </h2>
          <p>{t(stat.subtitleKey)}</p>
        </StatBlock>
      ))}
    </StatsContainer>
  );
};

export default Statistic;
