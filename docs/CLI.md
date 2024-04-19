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

10. `lerna boostrap` 安装依赖和软链接。（**在 `lerna@7` 版本被移除，官方目前推荐使用 `package.json` 中的 `workspaces` 字段。**）

11. `lerna bootstrap --hoist` 安装依赖和软链接，并 `hoist` 提升至顶级 `node_modules`。

12. `lerna clean` 移除 `packages` 下的所有 `node_modules` 目录。

13. `lerna import` 相当于将一个外部 `package` 导入到本项目的 `workspaces` 中，并且保留该 `package` 的 `commit` 记录。


执行 `yarn lerna -h` 查看所有命令：

lerna add-caching          Interactive prompt to generate task runner configuration
lerna changed              List local packages that have changed since the last tagged release                             [aliases: updated]
lerna clean                Remove the node_modules directory from all packages
lerna create <name> [loc]  Create a new lerna-managed package
lerna diff [pkgName]       Diff all packages or a single package since the last release
lerna exec [cmd] [args..]  Execute an arbitrary command in each package
lerna import <dir>         Import a package into the monorepo with commit history
lerna info                 Prints debugging information about the local environment
lerna init                 Create a new Lerna repo or upgrade an existing repo to the current version of Lerna
lerna list                 List local packages                                          [aliases: ls, la, ll]
lerna publish [bump]       Publish packages in the current project
lerna repair               Runs automated migrations to repair the state of a lerna repo
lerna run <script>         Run an npm script in each package that contains that script
lerna watch                Runs a command whenever packages or their dependents change.
lerna version [bump]       Bump version of packages changed since the last release
lerna add <pkg> [globs..]  The "add" command was removed by default in v7, and is no longer maintained.
lerna bootstrap            The "bootstrap" command was removed by default in v7, and is no longer maintained.
lerna link                 The "link" command was removed by default in v7, and is no longer maintained.

Global Options:
--loglevel       What level of logs to report.                                                                    [字符串] [默认值: info]
--concurrency    How many processes to use when lerna parallelizes tasks.                                             [数字] [默认值: 12]
--reject-cycles  Fail if a cycle is detected among dependencies.                                                                   [布尔]
--no-progress    Disable progress bars. (Always off in CI)                                                                         [布尔]
--no-sort        Do not sort packages topologically (dependencies before dependents).                                              [布尔]
--max-buffer     Set max-buffer (in bytes) for subcommand execution                                                                [数字]
-h, --help           显示帮助信息                                                                                                      [布尔]
-v, --version        显示版本号                                                                                                        [布尔]

When a command fails, all logs are written to lerna-debug.log in the current working directory.

For more information, check out the docs at https://lerna.js.org/docs/introduction
