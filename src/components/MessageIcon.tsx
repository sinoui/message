import React from 'react';
import Icon from 'sinoui-components/Icon';
import { MdInfo, MdCancel, MdCheckCircle, MdError } from 'react-icons/md';
import styled from 'styled-components';
import { MessageType } from '../types';

const DenseIcon = styled(Icon)`
  font-size: 16px;
  margin-right: 8px;
`;

const renderIcon = (type: MessageType) => {
  switch (type) {
    case MessageType.success:
      return <MdCheckCircle />;
    case MessageType.error:
      return <MdCancel />;
    case MessageType.warning:
      return <MdError />;
    default:
      return <MdInfo />;
  }
};

function MessageIcon({ type }: { type: MessageType }) {
  return <DenseIcon color={type}>{renderIcon(type)}</DenseIcon>;
}

export default React.memo(MessageIcon);
