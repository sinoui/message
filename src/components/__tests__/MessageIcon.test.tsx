import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import TestWrapper from './TestWrapper';
import MessageIcon from '../MessageIcon';
import { MessageType } from '../../types';

describe('MessageIcon 镜像测试', () => {
  it('info类型', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <MessageIcon type={MessageType.info} />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('warning类型', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <MessageIcon type={MessageType.warning} />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('error类型', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <MessageIcon type={MessageType.error} />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('success类型', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <MessageIcon type={MessageType.success} />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('loading类型', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <MessageIcon type={MessageType.loading} />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
