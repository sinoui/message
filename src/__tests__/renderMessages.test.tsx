import { defaultTheme } from '@sinoui/theme';
import renderMessages, { id } from '../renderMessages';
import '@testing-library/jest-dom/extend-expect';
import { MessageType } from '../types';

jest.useFakeTimers();

afterEach(() => {
  const rootElement = document.getElementById(id);
  if (!rootElement) {
    return;
  }

  document.body.removeChild(rootElement);
});

const messages = [
  {
    key: '2',
    content: '消息2',
    duration: 300,
    type: MessageType.success,
  },
  {
    key: '3',
    content: '消息3',
    duration: 300,
    type: MessageType.warning,
  },
  {
    key: '4',
    content: '消息4',
    duration: 300,
    type: MessageType.info,
  },
  {
    key: '5',
    content: '消息5',
    duration: 300,
    type: MessageType.error,
  },
];

it('渲染列表', () => {
  renderMessages(messages, defaultTheme);

  const container = document.querySelector('#sinoui-global-message');

  expect(container).toHaveTextContent('消息2');
  expect(container).toHaveTextContent('消息3');
  expect(container).toHaveTextContent('消息4');
  expect(container).toHaveTextContent('消息5');

  renderMessages([], defaultTheme);
  jest.runAllTimers();

  expect(container).not.toHaveTextContent('消息2');
  expect(container).not.toHaveTextContent('消息3');
  expect(container).not.toHaveTextContent('消息4');
  expect(container).not.toHaveTextContent('消息5');
});
