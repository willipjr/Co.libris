import React from 'react';
import { AutoComplete, Input } from 'antd';
import type { AutoCompleteProps } from 'antd/es/auto-complete';
import { SearchOutlined } from '@ant-design/icons';
import { Search24 } from '@carbon/icons-react';
import { useIntl } from 'umi';
import useMergedState from 'rc-util/es/hooks/useMergedState';

import styles from './index.less';

export type OmniSearchProps = {
  onSearch?: (value?: string) => void;
  onChange?: (value?: string) => void;
  currentUserName?: string;
  options: AutoCompleteProps['options'];
  defaultValue?: string;
  value?: string;
};

const OmniSearch: React.FC<OmniSearchProps> = (props) => {

  const { defaultValue, currentUserName, ...restProps } = props;

  const intl = useIntl();

  const [value, setValue] = useMergedState<string | undefined>(defaultValue, {
    value: props.value,
    onChange: props.onChange,
  });

  return (

      <AutoComplete
        key="AutoComplete"
        className={styles.omniSearch}
        value={value}
        options={restProps.options}
        onChange={setValue}
      >
        <Input
          className={styles.input}
          size="small"
          prefix={<Search24 className={styles.icon} />}
          aria-label={intl.formatMessage({
            id: 'component.globalHeader.omniSearch.placeholder'
          }) + currentUserName + "?"}
          placeholder={intl.formatMessage({
            id: 'component.globalHeader.omniSearch.placeholder'
          }) + currentUserName + "?"}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (restProps.onSearch) {
                restProps.onSearch(value);
              }
            }
          }}
        />
      </AutoComplete>
  );
};

export default OmniSearch;
