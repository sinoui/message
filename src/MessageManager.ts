/* eslint-disable no-dupe-class-members */
import { Theme, defaultTheme } from '@sinoui/theme';
import StatefulMessageArray from './StatefulMessageArray';
import {
  MessageInterface,
  Settings,
  MessageConfig,
  MessageType,
} from './types';
import renderMessages from './renderMessages';
import uuid from './helpers/uuid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNumber(test: any): test is number {
  return typeof test === 'number';
}

/**
 * 消息管理器
 */
class MessageManager {
  /**
   * 消息列表
   */
  private messages: StatefulMessageArray<MessageInterface>;

  /**
   * 全局设置
   */
  private settings = {
    max: 10,
    duration: 3000,
  };

  /**
   * 主题
   */
  private theme: Theme;

  public constructor() {
    this.messages = new StatefulMessageArray(
      this.settings.max,
      this.handleMessageUpdate.bind(this),
    );

    this.theme = defaultTheme;
  }

  /**
   * 处理消息更新事件
   */
  private handleMessageUpdate() {
    renderMessages(this.messages.messages, this.theme);
  }

  /**
   * 添加全局配置
   *
   * @param {Settings} newSettings 新的配置
   */
  public config(newSettings: Settings) {
    Object.assign(this.settings, newSettings);
    this.messages.setMax(this.settings.max);
  }

  /**
   * 设置主题
   * @param theme 主题
   */
  public setTheme(theme: Theme) {
    this.theme = theme;
    this.handleMessageUpdate();
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
      duration: number | MessageConfig = this.settings.duration,
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
          : this.settings.duration,
      };

      return this.messages.add(message);
    };

    return fn;
  };

  /**
   * 展示 info 级别的消息
   */
  public info = this.showMessage(MessageType.info);

  /**
   * 展示 error 级别的消息
   */
  public error = this.showMessage(MessageType.error);

  /**
   * 展示 warning 级别的消息
   */
  public warning = this.showMessage(MessageType.warning);

  /**
   * 展示 success 级别的消息
   */
  public success = this.showMessage(MessageType.success);

  /**
   * 展示 loading 级别的消息
   */
  public loading = this.showMessage(MessageType.loading);
}

export default MessageManager;
