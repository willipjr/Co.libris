import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Col, Row, Card, Typography, Alert, Button, Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import PageHeader from '../../../components/PageHeader';
import { useIntl } from 'umi';

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
          <Title level={3} style={{ marginTop: '48px' }}>
            Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
          </Title>
          <Alert
            message='Note'
            description='Note: Some of the examples we discuss here include fluid (full-span) and hanging buttons which are not available for production use. This guidance reflects our current understanding of these topics and we are working towards releasing this work in a future version of Carbon.'
            type='info'
            showIcon
          />
          <Title level={2}>
            Overview
          </Title>
          <Paragraph>
            Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.
          </Paragraph>
          <Paragraph strong>
            When to use
          </Paragraph>
          <Paragraph>
            Use buttons to communicate actions users can take and to allow users to interact with the page. Each page should have one primary button, and any remaining calls to action should be represented as lower emphasis buttons.
          </Paragraph>
          <Paragraph strong>
            When not to use
          </Paragraph>
          <Paragraph>
            Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.
          </Paragraph>
          <Title level={3}>
            Button variants
          </Title>
          <Paragraph>
            Each button variant has a particular function and its design signals that function to the user. It is therefore very important that the different variants are implemented consistently across products, so that they message the correct actions.
          </Paragraph>
          <Card style={{ width: '100%', margin: '16px' }}>
            <Space size='large'>
              <Button type='primary' size='large'>Primary button</Button>
              <Button size='large'>Default button</Button>
              <Button type='dashed' size='large'>Dashed button</Button>
              <Button danger size='large'>Danger button</Button>
              <Button type='link' size='large'>Link button</Button>
            </Space>
          </Card>
        </Col>
      </Row>

    </>
  );
};
