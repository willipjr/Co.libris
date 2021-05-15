import React from 'react';
import { Row, Col, Typography, Badge, Button, Tabs, Radio } from 'antd';
import { Time24, Data_224, Folders24, DocumentView24 } from '@carbon/icons-react';

import './index.less';

export default (): React.ReactNode => {

    const { Text, Title, Paragraph } = Typography;
    const { TabPane } = Tabs;

    const plainOptions = ['Histórico', 'Informações', 'Arquivos']

    return (

        <Row className='component-wrapper' >
            <Col
                className='content-column'
                xxl={{ offset: 3 }}
                xl={{ offset: 2 }}
                lg={{ offset: 1 }}
            >
                <Row style={{ marginBottom: '40px' }} >
                    <Badge
                        status='processing'
                        text={
                            <span>
                                <Text className='stage-text' strong >Em parecer técnico</Text>
                                <Text className='status-text' > . Há 2 dias aguardando avaliação</Text>
                            </span>
                        }
                    />
                </Row>
                <Row style={{ marginBottom: '32px', maxWidth: '768px' }} >
                    <Col>
                        <Title style={{ color: '#fff' }} level={4}>Belchior Monteiro Lima Neto</Title>
                        <Title style={{ color: '#fff', marginTop: '0' }} level={2}>Bandidos e elites citadinas na África Romana</Title>
                        <Paragraph className='book-subtitle'>Um estudo sobre a formação de estigmas com base nas Metamorphoses de Apuleio de Madaura (século II)</Paragraph>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '64px' }}  >
                    <Button type='primary' size='large' icon={<DocumentView24 />} >Avaliar correções enviadas</Button>
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