# @sinoui/message 版本变更记录

## v2.0.0 - 2020.4.27

- fix: 升级 @sinoui/theme
- fix: sinoui-components 库调整为引用 @sinoui/core
- fix: react-icons 库调整为引用 @sinoui/icons

### 破坏性变更

[详细介绍](https://github.com/sinoui/theme/blob/master/CHANGELOG.md#v100-beta1-2020224)

将 @sinoui/theme 库升级到最新的版本：

```shell
yarn add @sinoui/theme
```

## v1.0.1 - 2019.12.19

- fix: 修复无法在 IE 中使用的缺陷

## v1.0.0 - 2019.10.31

@sinoui/message 基础实现。 :tada: :tada::tada:

主要特性：

- 支持不同类型消息条
- 支持不自动关闭消息
- 支持自定义消息显示时长
- 支持自定义消息显示最大条数
- 支持消息替换
- 支持主题切换
- 支持设置全局默认消息配置
