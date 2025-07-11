---
group:
  title: 组件
  order: 3
---

# 条件搜索

## PubSearch-组件介绍

如果你在开发是需要有条件搜索的场景，可以使用此组件。此组件需要配合 antd 的 Form 组件使用。

## 代码演示

### 基础用法

```jsx
import { PubSearch } from 'work-boost';
import { Form, Input } from 'antd';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <PubSearch
      form={form}
      options={[{ label: '测试', field: 'aaa', component: <Input /> }]}
      onFinish={onFinish}
    />
  );
};
```

### 展开收起

```jsx
import { PubSearch } from 'work-boost';
import { Form, Input } from 'antd';

export default () => {
  const [form] = Form.useForm();

  const setOptions = () => {
    const options = [];
    for (let i = 0; i < 10; i++) {
      options.push({ label: '测试' + i, field: 'a' + i, component: <Input /> });
    }
    return options;
  };

  const onFinish = (values) => {};
  return (
    <PubSearch
      form={form}
      options={setOptions()}
      onFinish={onFinish}
      collapse={true}
    />
  );
};
```

## API

| 属性     | 说明                                     | 类型           | 默认值  | 版本 |
| -------- | ---------------------------------------- | -------------- | ------- | ---- |
| form     | 通过 antd 的 Form 组件获取到的 form 实例 | `form`         |         |      |
| options  | 通过驱动渲染表单的数据                   | `OptionItemIF` |         |      |
| onFinish | 表单提交的方法                           | `()=>void`     |         |      |
| collapse | 是否展开折叠                             | `boolean`      | `false` |      |

### type

| 类型         | 名称       | 说明                           | 类型               |
| ------------ | ---------- | ------------------------------ | ------------------ |
| OptionItemIF | component  | 输入组件，Input，Select 等组件 | ` React.ReactNode` |
|              | isFlex     | 是否为灵活组件                 | `boolean`          |
|              | label      | 表单项标签名称                 | `string`           |
|              | field      | 表单项字段名称                 | `string`           |
|              | rules      | 规则                           | 与 antd 中的一致   |
|              | labelCol   | 标签分布距离                   | `string`           |
|              | wrapperCol | 组件分布距离                   | `string`           |

_灵活组件可传递其他组件，如果值需要被 Form 监听到，需要被`Form.Item`包裹_
