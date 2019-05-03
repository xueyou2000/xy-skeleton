| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-skeleton.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-skeleton.svg?style=flat-square)

[![xy-skeleton](https://nodei.co/npm/xy-skeleton.png)](https://npmjs.org/package/xy-skeleton)

# xy-skeleton

---

骨架屏组件, 用于加载等待

## 安装

```bash
# yarn
yarn add xy-skeleton xy-grid utils-hooks xy-grid classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Skeleton from "xy-skeleton";
ReactDOM.render(
    <Skeleton loading={true}>
        <p>加载完毕</p>
    </Skeleton>,
    container,
);
```

## API

| 属性     | 说明             | 类型            | 默认值 |
| -------- | ---------------- | --------------- | ------ |
| loading  | 是否显示加载状态 | boolean         | 无     |
| rows     | 显示多少行骨架   | number          | 无     |
| children | 包裹内容         | React.ReactNode | 无     |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-skeleton is released under the MIT license.
