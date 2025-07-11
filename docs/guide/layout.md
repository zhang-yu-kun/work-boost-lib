---
group:
  title: 组件
  order: 6
---

# 布局组件

## PubLayout-组件介绍

在中后台系统中，布局组件通常用于搭建页面框架，用以承载其他业务组件。work-boost 选择 antd 的混合布局，能够满足绝大多数的业务场景。

work-boost 的布局组件结合 react-router 7 能够完成路由的跳转，并且能够根据路由的变化动态渲染对应的组件。

对于用户而言只需要传入路由信息与菜单信息。

## 用法

因为需要与 React-Router 搭配，无法在项目中展示

使用 react-router 7，在入口文件引入路由配置：
在路由表中添加 PubLayout 组件，并传入菜单信息。

```jsx | pure
import PubLayout from '../lib/PubLayout';
import { ItemA, ItemB, ItemC, ItemD, ItemE, ItemF } from './Item';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router';
import Login from './Login';
import './app.css';

const mockMenus = [
  // 场景1: 有子菜单的菜单项
  {
    key: '/dashboard',
    label: '控制台',
    children: [
      { key: '/dashboard/itemA', label: '模块A' },
      { key: '/dashboard/itemB', label: '模块B' },
    ],
  },
  // 场景2: 多级嵌套菜单
  {
    key: '/settings',
    label: '设置',
    children: [
      {
        key: '/user',
        label: '用户',
        children: [
          { key: '/settings/user/itemC', label: '模块C' },
          { key: '/settings/user/itemD', label: '模块D' },
        ],
      },
      {
        key: '/settings/itemE',
        label: '模块E',
      },
    ],
  },
  // 场景3: 无子菜单的菜单项
  {
    key: '/help',
    label: '帮助',
  },
];

const router = createBrowserRouter([
  { index: true, element: <Navigate to="/dashboard" replace /> },
  {
    path: '/',
    element: (
      <PubLayout menus={mockMenus} bread={true}>
        <Outlet />
      </PubLayout>
    ),
    children: [
      {
        path: 'dashboard',
        children: [
          {
            index: true,
            element: <Navigate to="itemA" replace />,
          },
          {
            path: 'itemA',
            element: <ItemA />,
          },
          {
            path: 'itemB',
            element: <ItemB />,
          },
        ],
      },
      {
        path: 'settings',
        children: [
          {
            index: true,
            element: <Navigate to="user" replace />,
          },
          {
            path: 'user',
            children: [
              {
                index: true,
                element: <Navigate to="itemC" replace />,
              },
              { path: 'itemC', element: <ItemC /> },
              { path: 'itemD', element: <ItemD /> },
            ],
          },
          {
            path: 'itemE',
            element: <ItemE />,
          },
        ],
      },
      {
        path: 'help',
        element: <ItemF />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

## API

| 属性     | 说明                                   | 类型                 | 默认值 | 版本 |
| -------- | -------------------------------------- | -------------------- | ------ | ---- |
| menus    | 与 antd 所需要的一致                   | `MenuProps["items"]` |        |      |
| bread    | 是否开启面包屑                         | `boolean`            |        |      |
| children | 子组件，配合 React-Router `<Outlet />` | `React.ReactNode`    |        |      |
