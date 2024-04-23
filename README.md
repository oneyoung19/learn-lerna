# 1.安装

1. 本地项目工程内安装 `lerna`：

```shell
yarn add lerna -D
```

2. `package.json` 中指定 `scripts`:

```json
{
  "scripts": {
    "lerna": "lerna"
  }
}
```

3. 由于我们是在已存在的项目进行 `lerna` 初始化，所以需要在 `package.json` 中手动声明 `private` 和 `workspaces` 字段：

```json
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

4. 执行 `yarn lerna init`，项目初始化成功，并会在根目录下生成 `lerna.json` 文件。

# 2.创建新包

```shell
yarn lerna create <package>
```


# TODO

- [`workspaces`](https://zhuanlan.zhihu.com/p/381794854)

利用 `yarn workspace add` 安装包时，会默认有 `hoist` 效果。如果想要针对某些包关闭此特性，可以参考使用[nohoist](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)。

在 `package.json` 中定义了 `workspaces` 后，利用 `yarn` 初始化项目，会自动安装 `workspaces` 相关依赖。

上述 `workspaces` 安装机制，会在 `node_modules` 下生成 `workspaces` 对应包的软连接 `symlink`（即**符号链接**，在修改源码时会直接影响到依赖包）。

:::tip
用 `yarn link` 同样也能生成软连接。

假设有 `project-A` 和 `link-module`，那么首先在 `link-module` 下执行 `yarn link`。**执行之后，会将 `link-module` 首先链接到全局 `node_modules` 下**。

然后在 `project-A` 下执行 `yarn link link-module`，**会在当前工程的 `node_modules` 下生成依赖包符号链接**。

上述步骤完成后，就可以在 `project-A` 下引入 `link-module`。
:::

`changelog`

`GH_TOKEN`

`commit`

自定义 `commit` `tag` 名

`lerna.json` 与 `nx.json` [Configuration](https://lerna.js.org/docs/api-reference/configuration)

`CI`

`test` 单元测试 用例测试

`pnpm` 结合 `lerna` 使用的[好处](https://lerna.js.org/docs/recipes/using-pnpm-with-lerna)

