import StatefulMessageArray from '../StatefulMessageArray';

jest.useFakeTimers();

it('新增消息', () => {
  const onChange = jest.fn();
  const messages = new StatefulMessageArray(10, onChange);

  const hide = messages.add({
    key: '1',
    duration: 100,
  });

  expect(messages.messages.length).toBe(1);
  expect(onChange).toBeCalledWith(messages.messages);

  // 隐藏
  hide();

  expect(messages.messages.length).toBe(0);
  expect(onChange).toBeCalledWith(messages.messages);
});

it('新增消息自动消失', () => {
  const onChange = jest.fn();
  const messages = new StatefulMessageArray(10, onChange);

  messages.add({
    key: '1',
    duration: 100,
  });

  messages.add({
    key: '2',
    duration: 200,
  });

  jest.runTimersToTime(100);

  expect(messages.messages).toEqual([
    {
      key: '2',
      duration: 200,
    },
  ]);
  expect(onChange).toBeCalledWith([
    {
      key: '2',
      duration: 200,
    },
  ]);

  jest.runAllTimers();

  expect(messages.messages).toEqual([]);
  expect(onChange).toBeCalledWith([]);
});

it('添加多条消息', () => {
  const onChange = jest.fn();
  const messages = new StatefulMessageArray(10, onChange);

  messages.add({
    key: '1',
    duration: 100,
  });

  messages.add({
    key: '2',
    duration: 100,
  });

  expect(messages.messages).toEqual([
    {
      key: '1',
      duration: 100,
    },
    {
      key: '2',
      duration: 100,
    },
  ]);
});

it('添加key相同的消息，相当于替换消息', () => {
  const onChange = jest.fn();
  const messages = new StatefulMessageArray(10, onChange);

  messages.add({
    key: '1',
    duration: 100,
  });

  messages.add({
    key: '1',
    duration: 200,
  });

  expect(messages.messages).toEqual([
    {
      key: '1',
      duration: 200,
    },
  ]);
});

it('删除消息', () => {
  const onChange = jest.fn();
  const messages = new StatefulMessageArray(10, onChange);

  messages.add({
    key: '1',
    duration: 100,
  });

  messages.remove('1');

  expect(messages.messages).toEqual([]);
});

it('超过最大消息数，自动隐藏之前的消息', () => {
  const onChange = jest.fn();
  const messages = new StatefulMessageArray(2, onChange);

  messages.add({
    key: '1',
    duration: 100,
  });
  messages.add({
    key: '2',
    duration: 100,
  });
  messages.add({
    key: '3',
    duration: 100,
  });

  expect(messages.messages.length).toEqual(2);

  messages.setMax(1);

  expect(messages.messages.length).toBe(1);
  expect(onChange).toBeCalledWith(messages.messages);
});
