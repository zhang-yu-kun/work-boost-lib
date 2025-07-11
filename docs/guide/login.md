---
group:
  title: 组件
  order: 7
---

# 登录组件

## PubLoginForm-组件介绍

当你需要一个登录表单界面时。work-boost 能帮你快速搭建一个登录注册的表单

## 代码演示

### 基本用法

```jsx
import { PubLoginForm } from 'work-boost';
import { Form } from 'antd';

export default () => {
  const [form] = Form.useForm();

  const signInConent = [
    { label: '用户名', field: 'name' },
    { label: '密码', field: 'password' },
  ];
  const signUpContent = [
    { label: '用户名', field: 'name' },
    { label: '手机号', field: 'phone' },
    { label: '密码', field: 'password' },
  ];
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PubLoginForm
        form={form}
        theme="techno"
        signInConent={signInConent}
        signUpContent={signUpContent}
        onSubmit={() => {}}
        onForgetPassword={() => {}}
      />
    </div>
  );
};
```

## API

| 属性             | 说明                                     | 类型                                 | 默认值 | 版本 |
| ---------------- | ---------------------------------------- | ------------------------------------ | ------ | ---- |
| form             | 通过 antd 的 Form 组件获取到的 form 实例 | `form`                               |        |      |
| theme            | 主题                                     | `techno` `natural` `fire`            |        |      |
| signInConent     | 登录表单                                 | `{ label: string; field: string }[]` |        |      |
| signUpContent    | 注册表单                                 | `{ label: string; field: string }[]` |        |      |
| onSubmit         | 提交方法                                 | `(value)=>void`                      |        |      |
| onForgetPassword | 忘记密码方法                             | `()=>void`                           |        |      |
