import React from 'react';
import { Col, Row, Card, Typography, Alert, Button, Space } from 'antd';
import { useIntl } from 'umi';

import PageHeader from '../../components/PageHeader';
import BookCard from '../../components/BookCard';

export default (): React.ReactNode => {

  const intl = useIntl();
  const { Title, Paragraph } = Typography;

  return (
    <>
      <PageHeader />
      <Row>
        <Col
          xxl={{ span: 16, offset: 3 }}
          xl={{ span: 18, offset: 2 }}
          lg={{ span: 20, offset: 1 }}
        >
          <Row style={{ height: 'auto', marginTop: '4rem' }}>
            <BookCard />
          </Row>
        </Col>
      </Row>

    </>
  );
};
