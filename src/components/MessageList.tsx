import React from 'react';
import { MessageInterface } from '../types';
import MessageListWrapper from './MessageListWrapper';

function MessageList({ messages }: { messages: MessageInterface[] }) {
  return (
    <MessageListWrapper>
      {messages.map((message) => (
        <div key={message.key}>{message.content}</div>
      ))}
    </MessageListWrapper>
  );
}

export default MessageList;
