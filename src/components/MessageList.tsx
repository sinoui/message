import React from 'react';
import Slide from 'sinoui-components/transitions/Slide';
import { TransitionGroup } from 'react-transition-group';
import { MessageInterface } from '../types';
import MessageListWrapper from './MessageListWrapper';
import Message from './Message';
import MessageIcon from './MessageIcon';

function MessageList({ messages }: { messages: MessageInterface[] }) {
  return (
    <TransitionGroup component={MessageListWrapper}>
      {messages.map((message) => (
        <Slide key={message.key} appear timeout={300} in direction="down">
          <Message>
            <MessageIcon type={message.type} />
            <div>{message.content}</div>
          </Message>
        </Slide>
      ))}
    </TransitionGroup>
  );
}

export default MessageList;
