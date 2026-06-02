# Informat 脚本 SDK 速查

本文件提炼脚本生成最常见的 API。若这里没有，再查 `../../sources/informat.script.md` 与类型定义。

注意：本文件是速查，不是冲突仲裁文档。遇到返回值、参数名或命名空间歧义时，同时查看 `script-safety.md` 与 `sources/` 原文。

## `informat.system`

账号与团队级操作：

- `getAccount(id)`
- `getAccountByUserName(userName)`
- `getAccountByMobileNo(mobileNo)`
- `getAccountByEmail(email)`
- `queryAccountList(query)`
- `queryAccountListCount(filter)`
- `addAccount(account)`
- `updateAccount(account)`
- `queryCompanyList(query)`
- `queryCompanyListCount(filter)`
- `addCompanyMember(companyId, accountId, departmentList, roleList)`
- `addCompanyMember(companyId, accountId, departmentOidList, roleKeyList, isSwitch)`
- `queryCompanyDeptList(companyId, query)`
- `getCompanyAllRoles(companyId)`
- `createCompany(license, isSwitch)`
- `getI18nMessage(msgKey, ...args)`
- `intranetHost()`
- `queryCompanySecurityApplyList(query)`
- `queryCompanySecurityApplyListCount(filter)`
- `setCompanyValid(companyId, isValid)`
- `addOptLog(optLog)`

适合处理跨团队、账号级操作。

注意：

- `addCompanyMember` 存在 4 参和 5 参重载；5 参版本里的部门参数语义是 `departmentOidList`，角色参数语义是 `roleKeyList`，并带 `isSwitch`。
- `host()` 与 `intranetHost()` 返回不同访问地址，不要混用公网/内网语义。

## `informat.app`

应用上下文与应用级能力：

- `abort(message, code?)`
- `appId()`
- `userId()`
- `weworkAccessToken()`
- `dingtalkAccessToken()`
- `feishuAccessToken()`
- `feishuTenantAccessToken()`
- `appEnvProp(id)`
- `pushEvent(event)`
- `addAppChangeLog(content)`
- `userLoginType()`

适合获取当前应用上下文、环境变量和终止脚本。

## `informat.company`

团队成员与角色：

- `queryRoleList()`
- `addCompanyMember(accountId, departmentList, roleList)`
- `deleteCompanyMember(accountId)`
- `updateCompanyMember(member)`
- `queryCompanyMemberList(query)`
- `queryCompanyMemberListCount(filter)`

注意：

- `informat.company.addCompanyMember(...)` 语义偏向当前团队上下文
- 与 `informat.system.addCompanyMember(...)` 不同，不要混用

## `informat.dept`

部门与组织架构：

- `queryDeptList(query)`
- `queryDeptListCount(filter)`
- `getDept(id)`
- `getParentOfDept(deptId)`
- `getChildrenOfDept(deptId)`
- `getDirectChildrenOfDept(deptId)`
- `addDept(dept)`
- `updateDept(dept)`
- `deleteDept(deptId)`

## `informat.user`

应用成员：

- `getUser(id)`
- `getUserInfo(id)`
- `getUserList(idList)`
- `getAppUserList()`
- `getUserByRoleList(roleList)`
- `getUserByDeptList(deptList)`
- `getSuperiorUsers(userId)`
- `getSubordinateUsers(userId)`
- `getLeaderOfDeptList(deptList)`
- `getUserRoleList()`
- `getUserSimpleList(idList)`
- `addUser(userId, roleList)`
- `updateUserRole(userId, roleList)`
- `deleteUser(userId)`

注意：

- `updateUserRole(...)` 的返回值在来源里存在冲突，生成代码时不要依赖其返回值

## 来源于类型定义的补充能力

在 `../../sources/informat.d.ts` 中可见一些补充接口定义，例如：

- `storage.*` 文件拷贝、删除、下载、转换、生成下载链接
- `storage.getByteArrayContent(path)` 读取共享存储文件字节数组
- `survey.*` 问卷增删改查
- `FtpClient` FTP 文件传输
- `Wework` 企业微信群发、客户群、欢迎语和统计接口
- `aiagent.completions(moduleKey, content)`、`aiagent.completionsWithPrompt(moduleKey, prompt)`
- `table.validateFormBySetting(tableKey, rowData, setting)`
- `designer.getRefEntity()`
- `Pdf.getText(pdfFilePath)`、`Pdf.toImages(pdfFilePath)`
- `codec.generateRSAKey()`、`codec.tripleDESEncrypt(...)`、`codec.tripleDESDecrypt(...)`
- `excel.openExistStorageFile(filePath)`、`excel.openNewFileWithXSSF(file)`
- Excel 批注、水印相关接口，例如 `getAllComments()`、`createCellComment(...)`、`addWatermark(...)`
- 事务相关类型 `DefaultTransactionDefinition`、`TransactionStatus`
- `JDBCConnection.callProcedure(...)`、`JDBCConnection.callProcedureFull(...)`、`ProcParam`
- 工作流对象化查询和版本能力，例如 `getProcessDefineXmlObject(...)`、`getActiveProcessDefineObject(...)`、`getBpmnProcessVersionList(...)`、`setProcessCurrentVersion(...)`

这些能力可以使用，但生成代码前要以原始类型定义中的方法签名为准。

## AI Agent 能力提醒

类型定义中 `aiagent.completions` 的参数已是 `content: Array<AiAgentContent>`，不是旧的 `messageList: Array<AiAgentContentMessage>`。

高频写法：

- `aiagent.completions(moduleKey, content)`
- `aiagent.completionsWithPrompt(moduleKey, prompt)`

`AiAgentContent` 结构包含：

- `type`
- `text`
- `imageUrl`

## 事务能力提醒

原始资料中能看到事务相关接口既有简单形式，也有带状态对象的形式。

因此：

- 不要凭空假设统一调用方式
- 涉及事务时，优先先说明依据的是哪一组签名
- 若需求只说“失败则回滚”，可以先给保守事务骨架，并注明需按现场 SDK 签名微调

## JDBC 存储过程提醒

类型定义中 JDBC 连接新增：

- `callProcedure(sql, ...args)`
- `callProcedureFull(sql, params, handler)`
- `close()`

涉及存储过程、出参、游标或多结果集时，必须回查 `ProcParam` 和 `JDBCResultSet` 的完整签名，不要把普通 `update/select` 写法套到存储过程。

## 工作流能力提醒

工作流新增对象化流程定义和版本能力：

- `getProcessDefineXmlObject(moduleKey, procDefId)`
- `getActiveProcessDefineObject(moduleKey, defineKey)`
- `getBpmnProcessVersionList(moduleKey, processDefineKey)`
- `setProcessCurrentVersion(moduleKey, processDefineKey, versionId)`
- `addCommentWithUser(moduleKey, taskId, msg, userId)`

涉及流程 XML、节点、流转线、版本切换时，优先使用对象化接口；版本切换属于写操作，要先确认模块标识符、流程定义标识符和版本 ID。
