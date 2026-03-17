/**
 * 脚本名称：generate_runtime_helper
 * 归类目录：other
 * 生成时间：2026-03-17
 * 用途：生成跨多个业务域复用的辅助脚本
 * 需替换项：无
 */

function generateRuntimeHelper() {
  return {
    appId: informat.app.appId(),
    userId: informat.app.userId(),
    timestamp: new Date().getTime()
  };
}
