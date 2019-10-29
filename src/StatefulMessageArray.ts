/**
 * 有状态的消息
 */
interface StatefulMessage {
  /**
   * 消息标识
   */
  key: string;
  /**
   * 消息显示时长
   */
  duration: number;
}

/**
 * 有状态的消息列表
 *
 * **消息超时则自动删除。**
 */
class StatefulMessageArray<T extends StatefulMessage> {
  /**
   * 消息列表
   */
  public messages: T[] = [];

  /**
   * 隐藏消息的定时器
   */
  private hideMessageTimeoutIds: {
    [key: string]: number;
  } = {};

  // eslint-disable-next-line no-useless-constructor
  public constructor(
    private max: number,
    private callback: (messages: T[]) => void,
  ) {}

  /**
   * 添加消息
   *
   * @param {T} message 消息
   */
  public add(message: T) {
    this.messages = [
      ...this.messages.filter((item) => item.key !== message.key),
      message,
    ];

    this.removeOverRangeMessages();

    clearTimeout(this.hideMessageTimeoutIds[message.key]);

    if (message.duration > 0) {
      this.hideMessageTimeoutIds[message.key] = window.setTimeout(() => {
        this.remove(message.key);
      }, message.duration);
    }

    this.callback(this.messages);

    return () => this.remove(message.key);
  }

  /**
   * 删除消息
   *
   * @param messageKey 消息主键
   */
  public remove(messageKey: string) {
    this.messages = this.messages.filter((item) => item.key !== messageKey);
    this.clearMessageTimeout(messageKey);
    this.callback(this.messages);
  }

  /**
   * 设置最大展现的消息数目
   *
   * @param {number} max 最大展现的消息数目
   */
  public setMax(max: number) {
    this.max = max;
    const needUpdate = this.messages.length > this.max;
    this.removeOverRangeMessages();
    if (needUpdate) {
      this.callback(this.messages);
    }
  }

  /**
   * 清除超出消息条数限制的消息
   */
  private removeOverRangeMessages() {
    if (this.messages.length > this.max) {
      const newBegin = this.messages.length - this.max;
      this.messages.slice(0, newBegin).forEach((item) => {
        this.clearMessageTimeout(item.key);
      });
      this.messages = this.messages.slice(newBegin);
    }
  }

  /**
   * 清除隐藏消息的定时器
   *
   * @private
   * @param {string} messageKey 消息主键
   */
  private clearMessageTimeout(messageKey: string) {
    clearTimeout(this.hideMessageTimeoutIds[messageKey]);
    delete this.hideMessageTimeoutIds[messageKey];
  }
}

export default StatefulMessageArray;
