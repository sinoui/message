import React from 'react';
import Info from '@sinoui/icons/Info';
import Warning from '@sinoui/icons/Warning';
import CheckCircle from '@sinoui/icons/CheckCircle';
import Error from '@sinoui/icons/Error';
import styled from 'styled-components';
import Progress from '@sinoui/core/Progress';
import { MessageType } from '../types';

const denseIconStyle = {
  fontSize: '16px',
  marginRight: '8px',
  display: 'inline-flex',
  height: '20px',
  alignItems: 'center',
};

const DenseProgress = styled(Progress)`
  margin-right: 8px;
  margin-top: 3px;
`;

const getIcon = (type: MessageType) => {
  switch (type) {
    case MessageType.success:
      return CheckCircle;
    case MessageType.error:
      return Error;
    case MessageType.warning:
      return Warning;
    default:
      return Info;
  }
};

function MessageIcon({ type }: { type: MessageType }) {
  const Icon: React.ReactType = getIcon(type);
  return type === MessageType.loading ? (
    <DenseProgress size={16} thickness={1.5} />
  ) : (
    <Icon
      color={type === MessageType.info ? 'primary' : type}
      style={denseIconStyle}
    />
  );
}

export default MessageIcon;
