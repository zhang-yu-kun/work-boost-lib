# 步骤表单

## 何时使用

将表单和步骤合并，对于需要分步的表单能够快速搭建其页面。

## 代码演示

### 基础用法

```jsx
import { PubStepForm } from 'work-boost';
import { Form, Input } from 'antd';
export default () => {
  const [form] = Form.useForm();

  const steps = [
    {
      title: '第一步',
      options: [
        { label: '测试', field: 'aaa', component: <Input /> },
        { label: '测试2', field: 'bbb', component: <Input /> },
      ],
    },
    {
      title: '第二步',
      options: [
        { label: '测试3', field: 'ccc', component: <Input /> },
        { label: '测试4', field: 'ddd', component: <Input /> },
      ],
    },
  ];

  return (
    <PubStepForm
      form={form}
      steps={steps}
      onNext={() => {}}
      onPrev={() => {}}
    />
  );
};
```

## API

| 属性       | 说明                                     | 类型                                           | 默认值 | 版本 |
| ---------- | ---------------------------------------- | ---------------------------------------------- | ------ | ---- |
| form       | 通过 antd 的 Form 组件获取到的 form 实例 | `form`                                         |        |      |
| steps      | 通过驱动渲染表单的数据                   | `{ title: string; options: OptionItemIF[] }[]` |        |      |
| onNext     | 下一步的方法                             | `(value)=>void`                                |        |      |
| onPrev     | 上一步的方法                             | `()=>void`                                     |        |      |
| formlayout | 与 antd 修改表单布局方式的一致           |                                                |        |      |
| column     | 设置一排的列数                           | `1、2、3、4`                                   |        |      |

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
