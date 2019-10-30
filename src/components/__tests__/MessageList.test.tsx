import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import TestWrapper from './TestWrapper';
import MessageList from '../MessageList';

describe('MessageList 镜像测试', () => {
  it('渲染MessageList--无数据', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <MessageList messages={[]} />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
