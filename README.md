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

`changelog`

`GH_TOKEN`

`commit`

自定义 `commit` `tag` 名

`lerna.json` 与 `nx.json` [Configuration](https://lerna.js.org/docs/api-reference/configuration)

`CI`

`test` 单元测试 用例测试

