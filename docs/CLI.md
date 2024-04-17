[官网指令介绍](https://lerna.js.org/docs/api-reference/commands)

1. `lerna init` 初始化项目

2. `lerna create <package>` 创建新包

3. `lerna list` 列出 `packages`（`lerna` 会将含有 `package.json` 的目录视作一个 `package`）。

4. `lerna version` 为 `packages` 升级 `version`。（如果 `lerna.json` 中的 `version` 为 `indepent`，则独立选择版本 `version`。）

5. `lerna publish` ，效果与 `lerna version` 类似，但是会额外将 `packages` 发布到指定 `npm`。

6. `lerna publish from-package`，与 `npm` 上已存在的版本作对比，然后将新版本发布到 `npm`。

当利用 `lerna create <package>` 创建新包时， `lerna` 会根据 `.npmrc` 或 `.yarnrc` 中定义的 `registry` 在该 `package` 对应的 `package.json` 中生成相应的 `publishConfig`，譬如：

```json
{
  "publishConfig": {
    "registry": "http://localhost:4873"
  }
}
```

7. `lerna run <script>` 一次性执行所有 `package` 中的相关命令。相关脚本不会输出到控制台，如果想要查看每个脚本的具体执行打印，可以添加 `--stream` 参数。

8. `lerna run <script> --scope=<package>` 执行指定 `package` 中的脚本。

8. `lerna exec <cmd>` 一次性在所有 `package` 下执行 `cmd` 命令。譬如 `yarn lerna exec touch test.txt` 会在所有 `package` 下创建 `test.txt` 文件。

9. `lerna exec <cmd> --scope=<package>` 在指定 `package` 下执行 `cmd` 命令。

10. `lerna boostrap`

11. `lerna bootstrap --hoist`

12. `lerna clean`
