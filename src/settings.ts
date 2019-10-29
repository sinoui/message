import { Settings } from './types';

// 消息模块的全局配置
const settings = {
  max: 10,
  duration: 3000,
};

/**
 * 设置消息模块的全局配置
 *
 * @param {Settings} newSettings 新的全局配置
 */
function config(newSettings: Settings) {
  Object.assign(settings, newSettings);
}

/**
 * 重置全局配置
 * @private
 */
function reset() {
  Object.assign(settings, {
    max: 10,
    duration: 3000,
  });
}

export default settings;

export { config, reset };
