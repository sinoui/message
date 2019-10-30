import { defaultTheme } from '@sinoui/theme';
import MessageManager from '../MessageManager';
import renderMessages from '../renderMessages';
import { reset } from '../helpers/uuid';

jest.mock('../renderMessages');

afterEach(() => {
  jest.runAllTimers();
  (renderMessages as jest.Mock).mockReset();
});

afterEach(reset);

jest.useFakeTimers();

it('展示消息', () => {
  const messageManager = new MessageManager();

  messageManager.info('消息1');

  expect(renderMessages).toHaveBeenCalledWith(
    [
      {
        key: 'message-0',
        content: '消息1',
        duration: 3000,
        type: 'info',
      },
    ],
    defaultTheme,
  );
});

it('删除消息', () => {
  const messageManager = new MessageManager();

  const hide = messageManager.info('消息1');

  hide();

  expect(renderMessages).toBeCalledWith([], defaultTheme);
});

it('添加配置', () => {
  const messageManager = new MessageManager();

  messageManager.info('消息1');
  messageManager.info('消息2');
  messageManager.info('消息3');

  (renderMessages as jest.Mock).mockReset();

  messageManager.config({ max: 1 });

  expect(renderMessages).toBeCalledWith(
    [
      {
        key: 'message-2',
        content: '消息3',
        duration: 3000,
        type: 'info',
      },
    ],
    defaultTheme,
  );
});

it('显示不同类型的消息', () => {
  const messageManager = new MessageManager();

  messageManager.info('消息1');
  messageManager.success('消息2');
  messageManager.error('消息3');
  messageManager.loading('消息4');
  messageManager.warning('消息5');

  expect(renderMessages).toBeCalledTimes(5);
});

it('不自动清除的消息', () => {
  const messageManager = new MessageManager();

  messageManager.loading('消息1', 0);

  (renderMessages as jest.Mock).mockReset();
  jest.runAllTimers();

  expect(renderMessages).toBeCalledTimes(0);
});

it('替换消息', () => {
  const messageManager = new MessageManager();

  messageManager.loading('消息1', { key: '1' });

  messageManager.error('消息2', { key: '1' });

  expect(renderMessages).toBeCalledWith(
    [
      {
        key: '1',
        content: '消息2',
        duration: 3000,
        type: 'error',
      },
    ],
    defaultTheme,
  );
});
