import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@sinoui/theme';
import { MessageInterface } from './types';
import MessageList from './components/MessageList';

export const id = 'sinoui-global-message';
let rootElement: HTMLElement | null = null;

function getOrCreateRootElement() {
  if (!rootElement) {
    rootElement = document.getElementById(id);
    if (!rootElement) {
      rootElement = document.createElement('div');
      rootElement.setAttribute('id', id);
      document.body.append(rootElement);
    }
  }
  return rootElement;
}

/**
 * 渲染消息
 *
 * @param messages 消息列表
 */
export default function renderMessages(messages: MessageInterface[]) {
  ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
      <MessageList messages={messages} />
    </ThemeProvider>,
    getOrCreateRootElement(),
  );
}
