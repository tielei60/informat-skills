/**
 * 脚本名称：update_user_role
 * 归类目录：user
 * 生成时间：2026-03-17
 * 用途：更新应用成员角色
 * 需替换项：user_id, role_key_list
 */

function updateUserRole(userId, roleList) {
  if (!userId) {
    informat.app.abort('缺少用户ID');
  }

  if (!roleList || roleList.length === 0) {
    informat.app.abort('缺少角色列表');
  }

  // 资料对返回值存在冲突，这里不依赖返回值。
  informat.user.updateUserRole(userId, roleList);

  return informat.user.getUser(userId);
}
