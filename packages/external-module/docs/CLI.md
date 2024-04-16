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

7. `lerna run <script>`

8. `lerna run <script> --scope=<scope>`

8. `lerna exec <cmd>`

9.  `lerna boostrap`

10. `lerna bootstrap --hoist`
