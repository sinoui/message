import React from 'react';
import Icon from 'sinoui-components/Icon';
import { MdInfo, MdWarning, MdCheckCircle, MdError } from 'react-icons/md';
import styled from 'styled-components';
import Progress from 'sinoui-components/Progress';
import { MessageType } from '../types';

const DenseIcon = styled(Icon)`
  font-size: 16px;
  margin-right: 8px;
  display: inline-flex;
  height: 20px;
  align-items: center;
`;

const DenseProgress = styled(Progress)`
  margin-right: 8px;
  margin-top: 3px;
`;

const renderIcon = (type: MessageType) => {
  switch (type) {
    case MessageType.success:
      return <MdCheckCircle />;
    case MessageType.error:
      return <MdError />;
    case MessageType.warning:
      return <MdWarning />;
    default:
      return <MdInfo />;
  }
};

function MessageIcon({ type }: { type: MessageType }) {
  return type === MessageType.loading ? (
    <DenseProgress size={16} thickness={1.5} />
  ) : (
    <DenseIcon color={type}>{renderIcon(type)}</DenseIcon>
  );
}

export default React.memo(MessageIcon);
