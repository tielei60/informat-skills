/**
 * 脚本名称：update_user_role_with_transaction
 * 归类目录：transaction
 * 生成时间：2026-03-17
 * 用途：在事务流程中更新应用成员角色
 * 需替换项：user_id, role_key_list
 */

function updateUserRoleWithTransaction(userId, roleList, txManager) {
  if (!userId) {
    informat.app.abort('缺少用户ID');
  }

  if (!roleList || roleList.length === 0) {
    informat.app.abort('缺少角色列表');
  }

  var definition = txManager.defaultTransactionDefinition();
  var status = txManager.getTransactionStatus(definition);

  try {
    informat.user.updateUserRole(userId, roleList);
    txManager.commit(status);
    return informat.user.getUser(userId);
  } catch (error) {
    txManager.rollback(status);
    throw error;
  }
}
