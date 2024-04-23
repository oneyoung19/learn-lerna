`pnpm` 相对于 `npm` 解决了两个方面的问题：

1. 幻影依赖。依赖扁平化，导致项目能够直接引入可能没在 `package.json` 中声明的依赖。
2. 分身依赖。扁平化但不完全，导致子依赖中会存在其他依赖的特定版本。如果这种情况在同一个项目中众多且重复，也有很大的性能损耗。

其实 `pnpm` 的 `workspaces` 结合 `lerna` 使用的优势也在于解决了以上两点。

## pnpm-workspace.yaml

首先在 `pnpm-workspace.yaml` 中定义 `packages`:

```yaml
packages:
  - 'packages/*'
```

## .npmrc

在 `.npmrc` 中可写入以下配置（**可选**）：

```yaml
# 将本地包连接到node_modules
link-workspace-packages=true
# 优先使用工作目录的package，只有save-workspace-protocal=false时有效
prefer-workspace-packages=true
# 共享lock文件，有利于模块解析
shared-workspace-lockfile=true
# 用来控制依赖在package.json中的版本范围
save-workspace-protocol=true
# 递归执行是否作用在根工作区
include-workspace-root=false
```

## 指定子依赖中安装依赖

```shell
pnpm add <module> --filter=<package>
```

而 `yarn` 中的对应语法是：

```shell
yarn workspace <package> add <module>
```

## 参考文档

- [结合 `pnpm` 使用 `lerna`](https://lerna.js.org/docs/recipes/using-pnpm-with-lerna)
- [为什么推荐使用 `pnpm`](https://zhuanlan.zhihu.com/p/419399115)
- [monorepo-不同包管理器workspace的使用方法](https://auu.zone/post/workspace)
