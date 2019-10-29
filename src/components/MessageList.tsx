import React from 'react';
import { MessageInterface } from '../types';
import MessageListWrapper from './MessageListWrapper';
import Message from './Message';
import MessageIcon from './MessageIcon';

function MessageList({ messages }: { messages: MessageInterface[] }) {
  return (
    <MessageListWrapper>
      {messages.map((message) => (
        <Message key={message.key}>
          <MessageIcon type={message.type} />
          <div>{message.content}</div>
        </Message>
      ))}
    </MessageListWrapper>
  );
}

export default MessageList;
