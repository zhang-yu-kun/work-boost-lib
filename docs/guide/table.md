---
group:
  title: 组件
  order: 5
---

# 列表展示

## PubTable-组件介绍

如果你在开发是需要有查询列表的场景，可以使用此组件。

## 代码演示

### 基础用法

```jsx
import { PubTable } from 'work-boost';
import { Button } from 'antd';
const data = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
export default () => {
  const handeRender = () => <Button>添加</Button>;

  return (
    <PubTable
      data={data}
      columns={columns}
      pageOption={{ isAuto: true }}
      header={{
        tableTitle: '搜索列表',
        HeaderRender: [{ text: '测试', type: 'primary' }],
      }}
    />
  );
};
```

## 头部可选

header 部分支持隐藏。如果需要小型表单，size 属性建议使用 small 此字段与 antd 一致。

```jsx
import { PubTable } from 'work-boost';
const data = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
export default () => (
  <PubTable
    data={data}
    columns={columns}
    pageOption={{ isAuto: true }}
    header={{ isShow: false }}
    size="small"
  />
);
```

## 多选操作

work-boost 提供了多选操作的封装,能更容易理解多选操作。

```jsx
import { PubTable } from 'work-boost';
import { useState } from 'react';
const data = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

export default () => {
  const [rowSelects, setRowSelects] = useState([]);

  return (
    <PubTable
      data={data}
      columns={columns}
      pageOption={false}
      rowOption={{
        isSelect: true,
        rowKey: 'name',
        rowSelects: rowSelects,
        setRowSelects: setRowSelects,
      }}
    />
  );
};
```

## API

| 属性       | 说明               | 类型              | 默认值  | 版本 |
| ---------- | ------------------ | ----------------- | ------- | ---- |
| data       | antd 的 dataSource | `object[]`        |         |      |
| columns    | 与 antd 一致       | `ColumnsType[]`   |         |      |
| pageOption | 分页参数           | ` PageIF``false ` |         |      |
| rowOption  | 多选参数           | `RowIF`           | `false` |      |
| header     | 头部参数           | `HeaderIF`        |         |      |

### type

| 类型       | 名称              | 说明                                    | 类型      |
| ---------- | ----------------- | --------------------------------------- | --------- |
| pageOption | false             | 无任何分页                              | `boolean` |
|            | isAuto            | antd 自动分页                           | `boolean` |
|            | current           | 当前页码                                | `number`  |
|            | pageSize          | 每页数量                                | `number`  |
|            | total             | 总条数                                  | `number`  |
| rowOption  | isSelect          | 是否有选择框                            | `number`  |
|            | rowKey            | 键                                      | `number`  |
|            | rowSelects        | 已选择的 key 值                         | `number`  |
|            | setRowSelects     | 设置 key 值                             | `number`  |
|            | setRowSelectsInfo | 设置 key 值的信息，获取当前行信息       | `number`  |
| HeaderIF   | isShow            | 是否展示头部，默认展示                  | `boolean` |
|            | tableTitle        | 头部标题                                | `string`  |
|            | HeaderRender      | button 数组，用于渲染 header 右侧的按钮 |           |
