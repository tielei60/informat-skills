# Informat 脚本文件头模板

当脚本需要保存到本地文件时，推荐在文件顶部添加简短注释，帮助后续维护。

## 推荐模板

```js
/**
 * 脚本名称：update_user_role
 * 归类目录：user
 * 生成时间：2026-03-17
 * 用途：更新应用成员角色
 * 需替换项：user_id, role_key_list
 */
```

## 字段说明

- `脚本名称`：与最终文件名保持一致，但不带 `.js`
- `归类目录`：对应 `generated_scripts/<domain>/...` 中的业务域；若无法稳定归类可为 `other`
- `生成时间`：使用生成时的日期
- `用途`：一句话说明脚本目的
- `需替换项`：列出用户需要按现场实际替换的字段、角色、模块标识符等；没有则写 `无`

## 使用原则

- 文件头应简短，不要写成长篇说明书
- 只有在脚本保存到本地文件时才需要这个头部
- 如果用户明确要求“纯代码无注释”，则不强加文件头
- 若脚本不存在需替换项，写 `需替换项：无`

## 示例

```js
/**
 * 脚本名称：add_company_member
 * 归类目录：company
 * 生成时间：2026-03-17
 * 用途：将账号加入指定团队并分配部门与角色
 * 需替换项：company_id, account_id, department_id_list, role_id_list
 */

function addMemberToCompany(companyId, accountId, departmentList, roleList) {
  if (!companyId) {
    informat.app.abort('缺少团队ID');
  }

  if (!accountId) {
    informat.app.abort('缺少账号ID');
  }

  informat.system.addCompanyMember(companyId, accountId, departmentList || [], roleList || []);
}
```

## `other` 目录示例

```js
/**
 * 脚本名称：generate_runtime_helper
 * 归类目录：other
 * 生成时间：2026-03-17
 * 用途：生成跨多个业务域复用的辅助脚本
 * 需替换项：无
 */
```
