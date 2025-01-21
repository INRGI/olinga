import React from 'react';
import { BlockHeader, Container, Content } from './PrivacyPolicy.styled';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <BlockHeader>
        <h2>{t('footer.nav_policy')}</h2>
      </BlockHeader>
      <Content>
        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias, odio nihil voluptates corrupti consectetur temporibus molestiae animi, dolores reprehenderit officia itaque, cupiditate ex voluptate eaque. Tempora fuga cum itaque.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias, odio nihil voluptates corrupti consectetur temporibus molestiae animi, dolores reprehenderit officia itaque, cupiditate ex voluptate eaque. Tempora fuga cum itaque.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias, odio nihil voluptates corrupti consectetur temporibus molestiae animi, dolores reprehenderit officia itaque, cupiditate ex voluptate eaque. Tempora fuga cum itaque.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias, odio nihil voluptates corrupti consectetur temporibus molestiae animi, dolores reprehenderit officia itaque, cupiditate ex voluptate eaque. Tempora fuga cum itaque.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias, odio nihil voluptates corrupti consectetur temporibus molestiae animi, dolores reprehenderit officia itaque, cupiditate ex voluptate eaque. Tempora fuga cum itaque.
        `}
        
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;
