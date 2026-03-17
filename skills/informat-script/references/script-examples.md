# Informat 脚本示例

以下示例只使用已知资料中出现过的 API。

## 示例 1：按部门查询应用成员

```js
function listUsersByDept(deptId) {
  if (!deptId) {
    informat.app.abort('缺少部门ID');
  }

  var dept = informat.dept.getDept(deptId);
  if (!dept) {
    informat.app.abort('部门不存在: ' + deptId);
  }

  return informat.user.getUserByDeptList([deptId]);
}
```

## 示例 2：根据用户名查账号，不存在则终止

```js
function requireAccountByUserName(userName) {
  if (!userName) {
    informat.app.abort('缺少用户名');
  }

  var account = informat.system.getAccountByUserName(userName);
  if (!account) {
    informat.app.abort('账号不存在: ' + userName);
  }

  return account;
}
```

## 示例 3：把应用成员加入指定角色

```js
function updateUserRoles(userId, roleList) {
  if (!userId) {
    informat.app.abort('缺少用户ID');
  }

  if (!roleList || roleList.length === 0) {
    informat.app.abort('缺少角色列表');
  }

  // 资料对 updateUserRole 的返回值描述存在冲突，因此这里不依赖返回值。
  informat.user.updateUserRole(userId, roleList);
}
```

## 示例 4：当前团队上下文下添加团队成员

```js
function addCurrentCompanyMember(accountId, departmentList, roleList) {
  if (!accountId) {
    informat.app.abort('缺少账号ID');
  }

  if (!roleList || roleList.length === 0) {
    informat.app.abort('缺少角色列表');
  }

  informat.company.addCompanyMember(accountId, departmentList || [], roleList);
}
```

## 示例 5：指定团队场景下添加团队成员

```js
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

## 示例 6：无法确认的能力要直接说明

如果用户说：

“根据某个自定义模块的字段自动发起一个平台内未见文档的审批 API”

正确做法：

- 先说明现有资料里没有该审批 API
- 能写的部分先写，例如参数整理、用户或部门查询
- 缺失调用部分明确标注“需替换为现场已存在的接口能力”
