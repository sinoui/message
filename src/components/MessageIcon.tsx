import React from 'react';
import Icon from 'sinoui-components/Icon';
import { MdInfo, MdCancel, MdCheckCircle, MdError } from 'react-icons/md';
import styled from 'styled-components';

const DenseIcon = styled(Icon)`
  font-size: 16px;
  margin-right: 8px;
`;

const renderIcon = (type: string) => {
  if (type === 'success') {
    return <MdCheckCircle />;
  }
  if (type === 'error') {
    return <MdCancel />;
  }

  if (type === 'warning') {
    return <MdError />;
  }

  return <MdInfo />;
};

function MessageIcon({ type }: { type: string }) {
  return <DenseIcon color={type}>{renderIcon(type)}</DenseIcon>;
}

export default React.memo(MessageIcon);
