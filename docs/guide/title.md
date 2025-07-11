---
group:
  title: 组件
  order: 1
---

# 标题组件

## PubTitle-组件介绍

如果你在开发一个页面的时候需要为下方的内容设置一个标题，可以使用此组件。

- 大标题：适用于页面总标题，用于页面最上方，作为页面内容的引导。
- 中标题：适用于页面主要内容的区块标题。
- 小标题：适用于组件内部标题。

## 代码演示

### 基础用法

```jsx
import { PubTitle } from 'work-boost';

export default () => <PubTitle text="测试" />;
```

### 不同大小

```jsx
import { PubTitle } from 'work-boost';

export default () => <PubTitle size="middle" text="测试" />;
```

## API

| 属性 | 说明                 | 类型                     | 默认值  | 版本 |
| ---- | -------------------- | ------------------------ | ------- | ---- |
| text | 用于传递标题内容信息 | `string`                 | `small` |      |
| size | 标题大小             | `small` `middle` `large` | `small` |      |
