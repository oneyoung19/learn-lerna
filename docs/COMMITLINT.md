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

