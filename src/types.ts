/**
 * 消息配置
 */
export interface MessageConfig {
  /**
   * 消息显示时长
   */
  duration?: number;
  /**
   * 消息主键
   */
  key?: string;
}

/**
 * 整个消息模块的配置
 */
export interface Settings {
  /**
   * 消息显示时长
   */
  duration?: number;
  /**
   * 消息显示最大个数
   */
  max?: number;
}

export type MessageType = 'info' | 'loading' | 'warning' | 'success' | 'error';

/**
 * 消息接口
 */
export interface MessageInterface {
  /**
   * 消息类型
   *
   * @type {('info' | 'loading' | 'warning' | 'success' | 'error')}
   * @memberof MessageInterface
   */
  type: MessageType;
  /**
   * 消息显示时长
   *
   * @type {number}
   * @memberof MessageInterface
   */
  duration: number;
  /**
   * 消息内容
   *
   * @type {React.ReactNode}
   */
  content: React.ReactNode;
  /**
   * 消息主键
   */
  key: string;
}
