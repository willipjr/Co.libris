import React, { useState } from 'react';
import { Row, Col, Typography, Avatar, Button, Card, Tag, Tooltip } from 'antd';
import { PlayOutlineFilled32, Pin16, Notification16, ArrowRight24 } from '@carbon/icons-react';

import './index.less';

export default (): React.ReactNode => {

    const [pinState, setPinState] = useState(false);
    const [notificateState, setNotificateState] = useState(false);

    const { Text, Title, Paragraph } = Typography;
    const { CheckableTag } = Tag;

    return (

        <Card
            id='book-card-wrapper'>
            <Row id='book-card-header' >
                <PlayOutlineFilled32 id='book-card-status-icon' />
                <Text id='book-card-status-text' >Há 2 dias aguardando alterações</Text>
            </Row>
            <Row id='book-card-body' >
                <Row id='book-card-center-row' >
                    <Col span={20} >
                        <Title level={5} >Oportunidades enterradas</Title>
                        <Paragraph id='book-card-authorship-text' >Ivone Martins de Oliveira, David Rodrigues, Denise Meyrelles de Jesus </Paragraph>
                    </Col>
                    <Col id='book-card-checkabletags-column' >
                        <CheckableTag className='book-card-checkabletag' checked={pinState} onChange={checked => { setPinState(checked) }} >
                            <Pin16 />
                        </CheckableTag>
                        <CheckableTag className='book-card-checkabletag' checked={notificateState} onChange={checked => { setNotificateState(checked) }} >
                            <Notification16 />
                        </CheckableTag>
                    </Col>
                </Row>
                <Row id='book-card-bottom-row' >
                    <Avatar.Group maxCount={4} >
                        <Avatar src="https://nuvem.ufes.br/index.php/s/fPHH5L6d45Eykd4/preview" />
                        <Avatar src="https://nuvem.ufes.br/index.php/s/j3KAL8S96Mandty/preview" />
                        <Avatar src="https://nuvem.ufes.br/index.php/s/w7WpxtizJYrqTbx/preview" />
                        <Avatar src="https://nuvem.ufes.br/index.php/s/yqyWTogbx9eMfDJ/preview" />
                    </Avatar.Group>
                    <Button type='link' icon={<ArrowRight24 />} >
                        Detalhes
                    </Button>
                </Row>
            </Row>
        </Card >

    );

};