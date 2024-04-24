安装脚手架：

```shell
pnpm add @commitlint/cli -D
```

安装约束规范：

```shell
pnpm add @commitlint/config-conventional -D
```

安装完成之后，在本地控制台测试：

```shell
echo 'foo: bar' | pnpm commitlint
```

为了在项目中自动启用 `husky`，可以安装 `husky`：

```shell
pnpm add husky@^8.0.0 -D
```

初始化 `husky`：

```shell
npx husky-init
```

初始化完成之后，会自动有 `pre-commit` 钩子。

我们需要添加 `commit-mgs` 钩子：

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $HUSKY_GIT_PARAMS"
```

添加完成之后，在后续的 `git commit` 操作中会自动检测格式是否规范。

:::tip
`pre-commit` 钩子可用于代码格式验证。

`commit-msg` 钩子可用于 `commit` 信息格式验证。
:::
