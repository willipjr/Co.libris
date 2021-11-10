import React, { useCallback } from 'react';
import { Logout24, Settings24, User24 } from '@carbon/icons-react';
import { Avatar, Menu, Spin } from 'antd';
import { useIntl, history, useModel } from 'umi';
import { stringify } from 'querystring';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import { outLogin } from '@/services/ant-design-pro/api';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  await outLogin();
  const { query = {}, pathname } = history.location;
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname,
      }),
    });
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {

  const { initialState, setInitialState } = useModel('@@initialState');
  const intl = useIntl();

  const onMenuClick = useCallback(
    (event: {
      key: React.Key;
      keyPath: React.Key[];
      item: React.ReactInstance;
      domEvent: React.MouseEvent<HTMLElement>;
    }) => {
      const { key } = event;
      if (key === 'logout' && initialState) {
        setInitialState({ ...initialState, currentUser: undefined });
        loginOut();
        return;
      }
      history.push(`/account/${key}`);
    },
    [initialState, setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.name) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>

      <Menu.Item key="center">
        <User24 className={styles.icon} />
        {intl.formatMessage({
          id: 'component.globalHeader.user.myPage',
          defaultMessage: 'Minha página'
        })}
      </Menu.Item>

      <Menu.Item key="settings">
        <Settings24 className={styles.icon} />
        {intl.formatMessage({
          id: 'component.globalHeader.user.settings',
          defaultMessage: 'Configurações'
        })}
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key="logout">
        <Logout24 className={styles.icon} />
        {intl.formatMessage({
            id: 'component.globalHeader.user.logout',
            defaultMessage: 'Sair'
          })}
      </Menu.Item>

    </Menu>
    
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar className={styles.avatar} src={currentUser.avatar} alt="avatar" />
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
