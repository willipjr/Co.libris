import React from 'react';
import { Row, Col, Typography, Badge, Button, Tabs } from 'antd';
import { Time24, Data_224, Folders24, DocumentView24 } from '@carbon/icons-react';

import './index.less';

export default (): React.ReactNode => {

    const { Text, Title, Paragraph } = Typography;
    const { TabPane } = Tabs;

    return (

        <Row className='component-wrapper' >
            <Col
                className='content-column'
                xxl={{ span: 16, offset: 3 }}
                xl={{ span: 18, offset: 2 }}
                lg={{ span: 20, offset: 1 }}
            >
                <Row>
                    <Badge status='processing' text={<Text className='stage-text' >Em parecer técnico . Há 2 dias aguardando avaliação</Text>} />
                </Row>
                <Row>
                    <Col>
                        <Title style={{ color: '#fff' }} level={4}>Belchior Monteiro Lima Neto</Title>
                        <Title style={{ color: '#fff', marginTop: '0' }} level={2}>Bandidos e elites citadinas na África Romana</Title>
                        <Paragraph className='book-subtitle'>Um estudo sobre a formação de estigmas com base nas Metamorphoses de Apuleio de Madaura (século II)</Paragraph>
                    </Col>
                </Row>
                <Row>
                    <Button type='primary' size='large' icon={<DocumentView24 style={{ marginRight: '8px' }} />} >Avaliar as correções enviadas</Button>
                </Row>
                <Row>
                    <Tabs type="card" >
                        <TabPane tab={
                            <span className='tabpane-span' >
                                <Time24 className='tabpane-span-icon' />
                                Histórico
                            </span>
                        } key="1" />
                        <TabPane tab={
                            <span className='tabpane-span' >
                                <Data_224 className='tabpane-span-icon' />
                                Dados e informações
                            </span>
                        } key="2" />
                        <TabPane tab={
                            <span className='tabpane-span' >
                                <Folders24 className='tabpane-span-icon' />
                                Arquivos
                            </span>
                        } key="3" />
                    </Tabs>
                </Row>
            </Col>
        </Row >

    );

};