/* eslint-disable no-dupe-class-members */
import StatefulMessageArray from './StatefulMessageArray';
import {
  MessageInterface,
  Settings,
  MessageConfig,
  MessageType,
} from './types';
import settings, { config } from './settings';
import renderMessages from './renderMessages';
import uuid from './helpers/uuid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNumber(test: any): test is number {
  return typeof test === 'number';
}

class MessageManager {
  private messages: StatefulMessageArray<MessageInterface>;

  public constructor() {
    this.messages = new StatefulMessageArray(
      settings.max,
      this.handleMessageUpdate.bind(this),
    );
  }

  public handleMessageUpdate() {
    renderMessages(this.messages.messages);
  }

  /**
   * 添加全局配置
   *
   * @param {Settings} newSettings 新的配置
   */
  public config(newSettings: Settings) {
    config(newSettings);
    this.messages.setMax(settings.max);
  }

  /**
   * 展示消息
   * @param type 消息类型
   */
  private showMessage = (type: MessageType) => {
    /**
     * @param content 消息内容
     * @param duration 消息显示时长或者配置
     */
    const fn = (
      content: React.ReactNode,
      duration: number | MessageConfig = settings.duration,
    ) => {
      const messageConfig = isNumber(duration) ? { duration } : duration;
      const key = messageConfig.key || uuid();
      const message = {
        ...messageConfig,
        type,
        key,
        content,
        duration: isNumber(messageConfig.duration)
          ? messageConfig.duration
          : settings.duration,
      };

      return this.messages.add(message);
    };

    return fn;
  };

  /**
   * 展示 info 级别的消息
   */
  public info = this.showMessage('info');

  /**
   * 展示 error 级别的消息
   */
  public error = this.showMessage('error');

  /**
   * 展示 warning 级别的消息
   */
  public warning = this.showMessage('warning');

  /**
   * 展示 success 级别的消息
   */
  public success = this.showMessage('success');

  /**
   * 展示 loading 级别的消息
   */
  public loading = this.showMessage('loading');
}

export default MessageManager;
