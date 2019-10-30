import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import TestWrapper from './TestWrapper';
import Message from '../Message';

describe('Message 镜像测试', () => {
  it('渲染Message', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <Message />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
