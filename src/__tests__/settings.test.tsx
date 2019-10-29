import settings, { config, reset } from '../settings';

afterEach(reset);

it('默认全局配置', () => {
  expect(settings).toEqual({
    max: 10,
    duration: 3000,
  });
});

it('设置全局配置', () => {
  config({
    max: 1,
  });

  expect(settings).toEqual({
    max: 1,
    duration: 3000,
  });
});
