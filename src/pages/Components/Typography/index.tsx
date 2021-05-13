import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

export default (): React.ReactNode => {

  const intl = useIntl();
  const { Title, Paragraph } = Typography;

  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: ' 这个页面只有 admin 权限才能查看',
      })}
    >
      <Title level={3}>
        Typography can help create clear hierarchies, organize information, and guide users through a product or experience.
      </Title>
      <Title level={2}>
        Type tokens and sets
      </Title>
      <Paragraph>
        Carbon uses type tokens and themes to manage typography. Type tokens are pre-set configurations of typographic elements such as font size, weight, or leading (line height) that are specifically calibrated for use alongside IBM Plex in product. Selecting the appropriate type style is determined by layout or template structure. Layouts may have several levels of architecture or areas that require varying typographic hierarchies.
      </Paragraph>
      <Title level={4}>
        Productive vs. Expressive type sets
      </Title>
      <Paragraph>
        Productive type is reserved for use in web-based product design, where the user needs to focus on tasks. The Productive styles are curated to create a series of clear user expectations about hierarchy. Expressive type, on the other hand, allows for a more dramatic, graphic use of type in editorial and marketing design — which many users would find distracting in product.
      </Paragraph>
      <Paragraph>
        There are two heading sets, one Productive and one Expressive. The difference between the Productive and Expressive styles is mainly evident in the Headings. Aside from the token names, which are specifically calibrated for product vs. editorial designers (e.g. $label-01 vs. $caption-01) — the Supporting and Body styles have the same values in both the Productive and Expressive sets.
      </Paragraph>
      <Title level={2}>
        Typeface: IBM Plex
      </Title>
      <Paragraph>
        Carbon uses the open-source typeface IBM Plex. It has been carefully designed to meet IBM’s needs as a global technology company and reflect IBM’s spirit, beliefs, and design principles. IBM Plex can be accessed and downloaded from the Plex GitHub Repo.
      </Paragraph>

    </PageHeaderWrapper>
  );
};
