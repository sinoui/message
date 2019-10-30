import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import TestWrapper from './TestWrapper';
import MessageListWrapper from '../MessageListWrapper';

describe('MessageListWrapper 镜像测试', () => {
  it('渲染MessageListWrapper', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <MessageListWrapper />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
