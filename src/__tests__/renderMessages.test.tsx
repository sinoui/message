import { unmountComponentAtNode } from 'react-dom';
import renderMessages, { id } from '../renderMessages';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  const rootElement = document.getElementById(id);
  if (!rootElement) {
    return;
  }

  unmountComponentAtNode(rootElement);
  rootElement.remove();
});

it('渲染列表', () => {
  renderMessages([
    {
      key: '1',
      content: '消息',
      duration: 300,
      type: 'info',
    },
  ]);

  const container = document.querySelector('#sinoui-global-message');

  expect(container).toHaveTextContent('消息');
});
