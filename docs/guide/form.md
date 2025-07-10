# 表单组件

## 何时使用

在开发的过程中，antd 的表单太过于灵活，而且必须使用标签的方式不支持直接使用数据驱动渲染。每个项目都需要针对 form 表单进行封装，才能提升开发效率。work-boost 对表单进行了封装，可以直接使用数据驱动渲染表单并且统一了样式。

_此功能需要搭配 antd 的 Form 组件使用。_

## 代码演示

### 基础用法

```jsx
import { PubForm } from 'work-boost';
import { Form, Button, Input } from 'antd';

export default () => {
  const [form] = Form.useForm();
  const options = [{ label: '测试', field: 'aaa', component: <Input /> }];
  return (
    <PubForm
      form={form}
      name="test"
      onFinish={(v) => console.log(v)}
      options={options}
    >
      <Button htmlType="submit">提交</Button>
    </PubForm>
  );
};
```

### 自定义表单项

```jsx
import { PubForm } from 'work-boost';
import { Form, Button, Input, Row, Col } from 'antd';

export default () => {
  const [form] = Form.useForm();
  const options = [
    {
      isFlex: true,
      component: (
        <Form.Item label="用户信息">
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="firstName" style={{ marginBottom: 0 }}>
                <Input placeholder="名字" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="lastName" style={{ marginBottom: 0 }}>
                <Input placeholder="姓氏" />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      ),
    },
  ];
  return (
    <PubForm
      form={form}
      name="test"
      onFinish={(v) => console.log(v)}
      options={options}
    >
      <Button htmlType="submit">提交</Button>
    </PubForm>
  );
};
```

## API

| 属性       | 说明                                     | 类型              | 默认值 | 版本 |
| ---------- | ---------------------------------------- | ----------------- | ------ | ---- |
| form       | 通过 antd 的 Form 组件获取到的 form 实例 | `form`            |        |      |
| name       | 表单名称                                 | `string`          |        |      |
| options    | 负责数据驱动的参数                       | `OptionItemIF[];` |        |      |
| onFinish   | 表单提交的方法                           | `(value)=>void`   |        |      |
| formlayout | 提交方法                                 |                   |        |      |
| column     | 忘记密码方法                             | `1、2、3、4`      |        |      |
| children   | 可传递 JSX                               | `React.ReactNode` |        |      |

## type

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
