/**
 * 脚本名称：add_company_member
 * 归类目录：company
 * 生成时间：2026-03-17
 * 用途：在当前团队上下文中添加团队成员
 * 需替换项：account_id, department_id_list, role_id_list
 */

function addCompanyMember(accountId, departmentList, roleList) {
  if (!accountId) {
    informat.app.abort('缺少账号ID');
  }

  if (!roleList || roleList.length === 0) {
    informat.app.abort('缺少角色列表');
  }

  informat.company.addCompanyMember(accountId, departmentList || [], roleList);
}
