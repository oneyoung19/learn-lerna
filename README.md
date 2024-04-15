# 1.Install

1. 本地项目工程内安装 `lerna`：

```shell
yarn add lerna -D
```

2. `package.json` 中指定 `scripts`:

```json
{
  "scripts": {
    "monorepo": "lerna init"
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

4. 执行 `yarn monorepo`，项目初始化成功，并会在根目录下生成 `lerna.json` 文件。
