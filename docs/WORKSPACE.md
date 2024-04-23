# workspaces

- [`workspaces`](https://zhuanlan.zhihu.com/p/381794854)

利用 `yarn workspace <package> add` 安装包时，会默认有 `hoist` 效果。如果想要针对某些包关闭此特性，可以参考使用[nohoist](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)。

在 `package.json` 中定义了 `workspaces` 后，利用 `yarn` 初始化项目，会自动安装 `workspaces` 相关依赖。

上述 `workspaces` 安装机制，会在 `node_modules` 下生成 `workspaces` 对应包的软连接 `symlink`（即**符号链接**，在修改源码时会直接影响到依赖包）。

:::tip
用 `yarn link` 同样也能生成软连接。

假设有 `project-A` 和 `link-module`，那么首先在 `link-module` 下执行 `yarn link`。**执行之后，会将 `link-module` 首先链接到全局 `node_modules` 下**。

然后在 `project-A` 下执行 `yarn link link-module`，**会在当前工程的 `node_modules` 下生成依赖包符号链接**。

上述步骤完成后，就可以在 `project-A` 下引入 `link-module`。

需要取消软连接的话，可以使用 `yarn unlink`。
:::
