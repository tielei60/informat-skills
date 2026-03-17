/**
 * 数据源配置
 */
declare interface DataSourceConnnectionSetting {
  /**
   * 是否自动提交事务，默认为true
   */
  autoCommit: boolean;
}

declare interface survey {
  /**
   * 查询问卷调查
   * @param moduleKey 模块标识符 
   * @param defineId 问卷调查定义ID 
   * @param bean 问卷调查对象 
   * @returns 
   */
  addSurvey(moduleKey: string, defineId: string, bean: SurveyItem): string;
  /**
   * 查询问卷调查
   * @param moduleKey 模块标识符 
   * @param defineId 问卷调查定义ID 
   * @param filter 过滤条件 
   * @returns 
   */
  deleteSurvey(moduleKey: string, defineId: string, filter: Filter): number;
  /**
   * 查询问卷调查列表
   * @param moduleKey 模块标识符 
   * @param defineId 问卷调查定义ID 
   * @param query 查询对象 
   * @returns 
   */
  querySurveyList(moduleKey: string, defineId: string, query: Query): Array<SurveyItem>;
  /**
   * 查询问卷调查列表数量
   * @param moduleKey 模块标识符 
   * @param defineId 问卷调查定义ID 
   * @param filter 过滤条件 
   * @returns 
   */
  querySurveyListCount(moduleKey: string, defineId: string, filter: Filter): number;
  /**
   * 查询问卷调查
   * @param moduleKey 模块标识符 
   * @param defineId 问卷调查定义ID 
   * @param item 问卷调查对象 
   * @param filter 过滤条件 
   * @returns 
   */
  updateSurvey(moduleKey: string, defineId: string, item: Record<string, Object>, filter: Filter): number;
}

declare interface DefaultTransactionDefinition {
  getIsolationLevel(): number;
  getName(): string;
  getPropagationBehavior(): number;
  getTimeout(): number;
  isReadOnly(): boolean;
  setIsolationLevel(isolationLevel: number): void;
  setIsolationLevelName(isolationLevelName: string): void;
  setName(name: string): void;
  setPropagationBehavior(propagationBehavior: number): void;
  setPropagationBehaviorName(propagationBehaviorName: string): void;
  setReadOnly(readOnly: boolean): void;
  setTimeout(timeout: number): void;
}

declare interface TransactionStatus {
  isCompleted(): boolean;
  isNewTransaction(): boolean;
  isRollbackOnly(): boolean;
  setRollbackOnly(): void;
}

/**
 * 文件传输
 */
declare interface FtpFile {
  /**
   * 是否为文件夹
   */
  directory: boolean;
  /**
   * 是否为文件
   */
  file: boolean;
  /**
   * 文件群组
   */
  group: string;
  /**
   * 链接数量
   */
  hardLinkCount: number;
  /**
   * 链接
   */
  link: string;
  /**
   * 文件名
   */
  name: string;
  /**
   * 文件大小
   */
  size: number;
  /**
   * 最后修改时间戳
   */
  timestamp: Date;
  /**
   * 即时时间戳
   */
  timestampInstant: Date;
  /**
   * 文件类型
   */
  type: number;
  /**
   * 文件拥有者
   */
  user: string;
}

declare interface FtpClient {
  changeToParentDirectory(): boolean;
  changeWorkingDirectory(pathname: string): boolean;
  connect(host: string, port: number): void;
  disconnect(): void;
  downloadFile(remotePath: string, localPath: string): boolean;
  listFiles(): Array<FtpFile>;
  login(userName: string, password: string): boolean;
  makeDirectory(pathname: string): boolean;
  printWorkingDirectory(): string;
  uploadFile(localPath: string, remotePath: string): boolean;
}

declare interface storage {
  /**
   * 转换文件格式
   * @param sourcePath 源文件路径 
   * @param targetPath 目标文件路径 
   * @param setting 转换设置 
   * @returns 
   */
  convertFormat(sourcePath: string, targetPath: string, setting: ConvertFormatSetting): void;
  /**
   * 转换文件格式
   * @param sourcePath 源文件路径 
   * @param targetPath 目标文件路径 
   * @param onlyofficeServiceUrl onlyoffice服务地址 
   * @param setting 转换设置 
   * @returns 
   */
  convertFormat(sourcePath: string, targetPath: string, onlyofficeServiceUrl: string, setting: ConvertFormatSetting): void;
  /**
   * 通过url进行转换文件
   * @param sourceURL 源文件url 
   * @param targetPath 目标文件路径 
   * @param setting 转换设置 
   * @returns 
   */
  convertFormatFromURL(sourceURL: string, targetPath: string, setting: ConvertFormatSetting): void;
  /**
   * 通过url进行转换文件
   * @param sourceURL 源文件url 
   * @param targetPath 目标文件路径 
   * @param onlyofficeServiceUrl onlyoffice服务地址 
   * @param setting 转换设置 
   * @returns 
   */
  convertFormatFromURL(sourceURL: string, targetPath: string, onlyofficeServiceUrl: string, setting: ConvertFormatSetting): void;
  /**
   * 将指定路径下的文件拷贝到目标路径下。注意：如果目标路径存在同名文件，将覆盖同名文件
   * @param sourcePath 源文件路径 
   * @param targetPath 目标路径 
   * @returns 
   */
  copy(sourcePath: string, targetPath: string): void;
  /**
   * 生成文件下载地址
   * @param fileToken 文件token 
   * @returns 
   */
  createFileDownloadUrl(fileToken: string): string;
  /**
   * 生成文件下载地址
   * @param fileToken 文件token 
   * @param host 主机地址 
   * @returns 
   */
  createFileDownloadUrl(fileToken: string, host: string): string;
  /**
   * 创建文件token
   * @param sourcePath 源文件路径 
   * @param fileName 文件名 
   * @param expireTime 过期时间 
   * @returns 
   */
  createFileToken(sourcePath: string, fileName: string, expireTime: number): string;
  /**
   * 删除文件
   * @param path 共享存储路径 
   * @returns 
   */
  delete(path: string): void;
  /**
   * 删除文件夹
   * @param path 共享存储路径 
   * @returns 
   */
  deleteDirectory(path: string): void;
  /**
   * 下载文件
   * @param path 共享存储路径 
   * @param localPath 本地文件路径 
   * @returns 
   */
  download(path: string, localPath: string): void;
  /**
   * 判断文件是否存在
   * @param path 共享存储路径 
   * @returns 
   */
  exists(path: string): boolean;
  /**
   * 获取文件base64内容
   * @param path 共享存储路径 
   * @returns 
   */
  getBase64Content(path: string): string;
  /**
   * 获取文件内容
   * @param path 共享存储路径 
   * @returns 
   */
  getContent(path: string): string;
  /**
   * 获取文件路径
   * @param tableKey 数据表标识符 
   * @param fieldKey 字段标识符 
   * @param fileId 文件ID 
   * @returns 
   */
  getFilePath(tableKey: string, fieldKey: string, fileId: string): string;
  /**
   * 列出文件
   * @param path 共享存储路径 
   * @returns 
   */
  listFile(path: string): Array<string>;
  /**
   * 上传文件
   * @param localPath 本地文件路径 
   * @param path 共享存储路径 
   * @returns 
   */
  upload(localPath: string, path: string): void;
  /**
   * 上传文件
   * @param is 输入流 
   * @param path 共享存储路径 
   * @returns 
   */
  uploadStream(is: InputStream, path: string): void;
}

declare interface date {
  /**
   * 日期偏移
   * @param d Date或Long 需要计算的日期或UNIX时间戳 
   * @param type 偏移单位 
   * @param diff 增加或者减少的值,如果为 null 则默认0 开始。增加则传递整数，减少则传递负数 
   * @returns 
   */
  dateAdd(d: Object, type: string, diff: number): Date;
  /**
   * 判定日期d1是否在日期d2之前
   * @param d1 Date或Long 日期1或UNIX时间戳 
   * @param d2 日期2或UNIX时间戳 
   * @returns 
   */
  dateBefore(d1: Object, d2: Object): boolean;
  /**
   * 返回日期d中的type指定的部分
   * @param d 需要计算的日期或UNIX时间戳 
   * @param type 运算类型	type的取值为：年:year,月:month,天:day_of_year,月天数:day_of_month,周天数:day_of_week,小时:hour,分钟:minute,秒:second,毫秒:millisecond 
   * @returns 
   */
  datePart(d: Object, type: string): number;
  /**
   * 将日期转换为时间戳
   * @param t 日期 
   * @returns 
   */
  dateToTimestamp(t: Date): number;
  /**
   * 从字符串解析日期
   * @param date 日期字符串 
   * @param format 日期格式 
   * @returns 
   */
  format(date: Date, format: string): string;
  /**
   * 获取本周几对应的日期
   * @param dayOfWeek 星期几1-7之前的数字 
   * @returns 
   */
  getDateOfThisWeek(dayOfWeek: number): Date;
  /**
   * 获取本周一对应的日期
   * @returns 
   */
  getMonday(): Date;
  /**
   * 获取date所在周，周一对应的日期
   * @param date 日期 
   * @returns 
   */
  getMonday(date: Date): Date;
  /**
   * 获取当前日期的0点0分0秒
   * @returns 
   */
  getStartOfDay(): Date;
  /**
   * 获取date日期的0点0分0秒
   * @param date 日期 
   * @returns 
   */
  getStartOfDay(date: Date): Date;
  /**
   * 获取当前日期所在月的1号，如5月1号0点（小时、分钟、秒数、毫秒数都是0）
   * @returns 
   */
  getStartOfMonth(): Date;
  /**
   * 获取date日期所在月的1号，如果5月1号0点（小时、分钟、秒数、毫秒数都是0）
   * @param date 日期 
   * @returns 
   */
  getStartOfMonth(date: Date): Date;
  /**
   * 获取当前日期所在年的元旦，如2025年1月1号0点（小时、分钟、秒数、毫秒数都是0）
   * @returns 
   */
  getStartOfYear(): Date;
  /**
   * 获取date日期所在年的元旦，如2025年1月1号0点（小时、分钟、秒数、毫秒数都是0）
   * @param date 日期 
   * @returns 
   */
  getStartOfYear(date: Date): Date;
  /**
   * 判断是否是同一天
   * @param date1 日期1 
   * @param date2 日期2 
   * @returns 
   */
  isSameDay(date1: Date, date2: Date): boolean;
  /**
   * 格式化日期
   * @param value 日期字符串 
   * @param format 日期格式 
   * @returns 
   */
  parse(value: string, format: string): Date;
  /**
   * 格式化日期
   * @param value 日期字符串 
   * @returns 
   */
  parseDate(value: string): Date;
  /**
   * 将时间戳转换为日期
   * @param t 时间戳 
   * @returns 
   */
  timestampToDate(t: number): Date;
}

declare interface designer {
  /**
   * 通过ID获取定义对象
   * @param scope 作用域 
   * @param id ID 
   * @returns 
   */
  getDefineObject(scope: string, id: string): Object;
  /**
   * 通过标识符获取定义对象
   * @param scope 作用域 
   * @param key 标识符 
   * @returns 
   */
  getDefineObjectByKey(scope: string, key: string): Object;
  /**
   * 通过ID获取定义对象
   * @param query 查询条件 
   * @returns 
   */
  getDefineObjectList(query: DefineObjectQuery): Array<?>;
}

declare interface csv {
  /**
   * 从本地沙盒中读取csv文件,如果文件不存在将会抛出异常
   * @param file 文件路径 
   * @returns 
   */
  reader(file: string): CsvReader;
  /**
   * 获取写csv文件的对象
   * @param file 文件路径 
   * @returns 
   */
  writer(file: string): CsvWriter;
}

declare interface mpp {
  /**
   * 创建Mpp项目文件对象
   * @returns 
   */
  createProjectFile(): MppProjectFile;
  /**
   * 读取Mpp文件
   * @param file 文件路径 
   * @returns 
   */
  read(file: string): MppProjectFile;
  /**
   * 写入数据到Mpp文件
   * @param projectFile Mpp项目文件对象 
   * @param targetFile 目标文件 
   * @param config 配置 
   * @returns 
   */
  write(projectFile: MppProjectFile, targetFile: string, config: MppWriterConfig): void;
}

/**
 * 应用事件
 */
declare interface AppEvent {
  /**
   * 内容
   */
  content: Object;
  /**
   * ID
   */
  id: string;
}

/**
 * 添加账号
 */
declare interface AccountAddForm {
  /**
   * 头像
   */
  avatar: string;
  /**
   * 邮箱
   */
  email: string;
  /**
   * 账号ID
   */
  id: string;
  /**
   * 手机号
   */
  mobileNo: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 是否需要重置密码
   */
  needUpdatePassword: boolean;
  /**
   * 第三方ID
   */
  oid: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 用户名
   */
  userName: string;
}

/**
 * 我的收藏
 */
declare interface ModuleFavorite {
  /**
   * 账户ID
   */
  accountId: string;
  /**
   * 应用ID
   */
  applicationId: string;
  /**
   * ID
   */
  id: string;
  /**
   * 模块图标
   */
  moduleIcon: string;
  /**
   * 模块ID
   */
  moduleId: string;
  /**
   * 模块名称
   */
  moduleName: string;
  /**
   * 模块类型
   */
  moduleType: string;
}

/**
 * 账号登录凭证
 */
declare interface AccountToken {
  /**
   * 账号ID
   */
  accountId: string;
  /**
   * 团队ID
   */
  companyId: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 数据库索引
   */
  dbIndex: number;
  /**
   * 过期时间
   */
  expireTime: Date;
  /**
   * 凭证
   */
  token: string;
  /**
   * 类型
   */
  type: string;
}

/**
 * 账号
 */
declare interface Account {
  /**
   * 头像
   */
  avatar: string;
  /**
   * 团队ID
   */
  companyId: string;
  /**
   * 团队ID列表
   */
  companyList: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 邮箱
   */
  email: string;
  /**
   * ID
   */
  id: string;
  /**
   * 是否有效
   */
  isValid: boolean;
  /**
   * 语言
   */
  language: string;
  /**
   * 手机号
   */
  mobileNo: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 是否需要重置密码
   */
  needUpdatePassword: boolean;
  /**
   * 第三方ID
   */
  oid: string;
  /**
   * 最后更新时间
   */
  updateTime: Date;
  /**
   * 用户名
   */
  userName: string;
  getValid(): boolean;
  setValid(isValid: boolean): void;
  setValid(valid: boolean): void;
}

/**
 * 模块提示
 */
declare interface ModuleAlert {
  /**
   * 是否居中显示
   */
  center: boolean;
  /**
   * 是否可关闭
   */
  closeable: boolean;
  /**
   * 提示信息的描述
   */
  description: string;
  /**
   * 描述字段是否使用html格式
   */
  descriptionHtml: boolean;
  /**
   * 是否模态显示
   */
  modal: boolean;
  /**
   * 模块标识符
   */
  moduleId: string;
  /**
   * 是否显示图标
   */
  showIcon: boolean;
  /**
   * 提示信息的标题
   */
  title: string;
  /**
   * 提示类型，可选值为 success warning info error
   */
  type: string;
}

/**
 * 应用操作日志
 */
declare interface AppChangeLog {
  /**
   * 内容
   */
  content: string;
  /**
   * 创建人头像
   */
  createAccountAvatar: string;
  /**
   * 创建人
   */
  createAccountId: string;
  /**
   * 创建人名称
   */
  createAccountName: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * ID
   */
  id: string;
  /**
   * 类型
   */
  type: string;
}

/**
 * 推送事件
 */
declare interface PushEvent {
  /**
   * 仅当推送类型为指定用户时有效
   */
  accountIdList: Array<string>;
  /**
   * 事件ID，ModuleRefresh 刷新模块，RecordFormRefresh 刷新表单 ，Toast 显示提示信息
   */
  eventId: string;
  /**
   * 刷新的模块标识符
   */
  moduleRefreshModuleId: string;
  /**
   * 表单记录ID
   */
  recordFormCloseRecordId: string;
  /**
   * 记录所属数据表
   */
  recordFormCloseTableId: string;
  /**
   * 刷新的表单的记录ID
   */
  recordFormRefreshRecordId: string;
  /**
   * 刷新的表单的数据表标识符
   */
  recordFormRefreshTableId: string;
  scriptContent: string;
  scriptVarList: Array<Object>;
  /**
   * 推送类型 当前用户:currentUser,团队所有成员:allCompanyMember,应用所有成员:allApplicationMember,指定用户:specificUser
   */
  sendType: string;
  /**
   * 提示信息内容
   */
  toastMessage: string;
}

/**
 * 应用
 */
declare interface App {
  /**
   * 发布编号
   */
  appDefineBuild: number;
  /**
   * 是否允许应用设计
   */
  appDefineEditable: boolean;
  /**
   * 应用标识符
   */
  appDefineId: string;
  /**
   * 应用版本
   */
  appDefineVersion: string;
  /**
   * 颜色
   */
  color: string;
  /**
   * 创建人
   */
  createAccountId: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 是否将日志输出到文件中(JSON)
   */
  enableAppJsonLog: boolean;
  /**
   * 是否将日志输出到文件中(文本)
   */
  enableAppLog: boolean;
  /**
   * 运行环境
   */
  env: string;
  /**
   * 分组
   */
  groupId: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * ID
   */
  id: string;
  /**
   * 日志级别
   */
  logLevel: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 更新人
   */
  updateAccountId: string;
  /**
   * 最后更新时间
   */
  updateTime: Date;
}

/**
 * 对象关系
 */
declare interface ObjectRef {
  /**
   * 子节点
   */
  children: Array<ObjectRef>;
  /**
   * 显示名称
   */
  displayName: string;
  /**
   * 扩展
   */
  expand: boolean;
  /**
   * 图标
   */
  icon: string;
  /**
   * ID
   */
  id: string;
  /**
   * 是否目录
   */
  isDirectory: boolean;
  /**
   * 标识符
   */
  key: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 类型
   */
  type: string;
  setDirectory(isDirectory: boolean): void;
}

/**
 * 应用进程
 */
declare interface ApplicationProcess {
  /**
   * 关联ID
   */
  associatedId: string;
  /**
   * 关联标识符
   */
  associatedKey: string;
  /**
   * 关联名称
   */
  associatedName: string;
  /**
   * 结束时间
   */
  endTime: Date;
  /**
   * ID
   */
  id: string;
  /**
   * 服务器ID
   */
  serverId: string;
  /**
   * 开始时间
   */
  startTime: Date;
  /**
   * 状态
   */
  status: string;
  /**
   * 类型
   */
  type: string;
}

/**
 * 应用配置
 */
declare interface AppDefine {
  /**
   * API列表
   */
  apiList: Array<ObjectRef>;
  /**
   * 自动化列表
   */
  automaticList: Array<ObjectRef>;
  /**
   * 颜色
   */
  color: string;
  /**
   * 事件列表
   */
  eventList: Array<AppEventDefine>;
  /**
   * ID
   */
  id: string;
  /**
   * 模块列表
   */
  moduleList: Array<ObjectRef>;
  /**
   * 名称
   */
  name: string;
  /**
   * 角色列表
   */
  roleList: Array<ObjectRef>;
  /**
   * 定时任务列表
   */
  scheduleList: Array<ObjectRef>;
  /**
   * 脚本列表
   */
  scriptList: Array<ObjectRef>;
  /**
   * 版本列表
   */
  versionList: Array<ObjectRef>;
}

/**
 * 应用事件定义
 */
declare interface AppEventDefine {
  /**
   * ID
   */
  id: string;
  /**
   * 标识符
   */
  key: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 备注
   */
  remark: string;
}

/**
 * 脚本
 */
declare interface ScriptDefine {
  /**
   * ID
   */
  id: string;
  /**
   * 名称
   */
  name: string;
}

/**
 * 应用自定义角色
 */
declare interface CustomRole {
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * ID
   */
  id: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限列表
   */
  permissionList: Array<string>;
  /**
   * 备注
   */
  remark: string;
  /**
   * 最后更新时间
   */
  updateTime: Date;
}

declare interface ldap {
  /**
   * 创建LDAP连接
   * @param info LDAP连接信息 
   * @returns 
   */
  connect(info: LdapConnectionInfo): LdapConnection;
}

declare interface website {
  /**
   * 将资源下载到本地文件存储
   * @param moduleKey 网站模块的标识符 
   * @param path 资源路径 
   * @param localPath 本地存储沙盒中的路径 
   * @returns 
   */
  download(moduleKey: string, path: string, localPath: string): void;
  /**
   * 通过路径获取资源
   * @param moduleId 网站模块的标识符 
   * @param path 资源路径 
   * @returns 
   */
  getByPath(moduleId: string, path: string): WebsiteResource;
  /**
   * 获取资源的存储路径
   * @param moduleKey 网站模块的标识符 
   * @param resourcePath 资源路径 
   * @returns 
   */
  getStroagePath(moduleKey: string, resourcePath: string): string;
  /**
   * 根据父目录获取网站的资源列表
   * @param moduleId 网站模块的标识符 
   * @param path 资源路径 
   * @param recursion 是否递归的返回所有下级 
   * @returns 
   */
  list(moduleId: string, path: string, recursion: boolean): Array<WebsiteResource>;
}

/**
 * 文件
 */
declare interface File {
  /**
   * 绝对路径
   */
  absolutePath: string;
  /**
   * 是否可读
   */
  canRead: boolean;
  /**
   * 是否可编辑
   */
  canWrite: boolean;
  /**
   * 是否启用绝对路径
   */
  isAbsolute: boolean;
  /**
   * 是否为文件夹
   */
  isDirectory: boolean;
  /**
   * 是否为文件
   */
  isFile: boolean;
  /**
   * 最后修改时间
   */
  lastModified: number;
  /**
   * 长度
   */
  length: number;
  /**
   * 文件名称
   */
  name: string;
  /**
   * 文件路径
   */
  path: string;
  /**
   * 文件大小
   */
  totalSpace: number;
  /**
   * 可用大小
   */
  usableSpace: number;
  setAbsolute(isAbsolute: boolean): void;
  setDirectory(isDirectory: boolean): void;
  setFile(isFile: boolean): void;
}

declare interface jdbc {
  /**
   * 创建数据库连接
   * @param connInfo 数据库连接信息 
   * @returns 
   */
  createConnection(connInfo: ConnnectionInfo): JDBCConnection;
  /**
   * 为记录生成唯一ID
   * @returns 
   */
  nextRecordId(): string;
  /**
   * 安全sql
   * @param sql sql语句 
   * @param params 参数 
   * @returns 
   */
  safesql(sql: string, params: Array<any>): string;
  /**
   * 获取系统的数据库连接
   * @returns 
   */
  systemConnection(): JDBCConnection;
  /**
   * 获取应用数据表的数据库连接
   * @returns 
   */
  tableConnection(): JDBCConnection;
}

declare interface ftp {
  /**
   * 创建ftp客户端
   * @returns 
   */
  createClient(): FtpClient;
}

declare interface ListOperations {
  index(key: Object, index: number): Object;
  indexOf(key: Object, value: Object): number;
  leftPop(key: Object): Object;
  leftPop(key: Object, count: number): Array<Object>;
  leftPush(key: Object, value: Object): number;
  leftPush(key: Object, pivot: Object, value: Object): number;
  leftPushAll(key: Object, ...values: any): number;
  leftPushAll(key: Object, values: Array<Object>): number;
  leftPushIfPresent(key: Object, value: Object): number;
  range(key: Object, start: number, end: number): Array<Object>;
  rightPop(key: Object): Object;
  rightPop(key: Object, count: number): Array<Object>;
  rightPopAndLeftPush(sourceKey: Object, destinationKey: Object): Object;
  rightPush(key: Object, value: Object): number;
  rightPush(key: Object, pivot: Object, value: Object): number;
  rightPushAll(key: Object, ...values: any): number;
  rightPushAll(key: Object, values: Array<Object>): number;
  rightPushIfPresent(key: Object, value: Object): number;
  set(key: Object, index: number, value: Object): void;
  size(key: Object): number;
  trim(key: Object, start: number, end: number): void;
}

declare interface ValueOperations {
  append(key: Object, value: string): number;
  decrement(key: Object): number;
  decrement(key: Object, delta: number): number;
  get(key: Object): Object;
  get(key: Object, start: number, end: number): string;
  getAndExpire(key: Object, timeout: number, unit: string): Object;
  getAndPersist(key: Object): Object;
  getAndSet(key: Object, value: Object): Object;
  getBit(key: Object, offset: number): boolean;
  increment(key: Object): number;
  increment(key: Object, delta: number): number;
  increment(key: Object, delta: number): number;
  multiGet(keys: Array<Object>): Array<Object>;
  multiSet(map: Record<Object, Object>): void;
  multiSetIfAbsent(map: Record<Object, Object>): boolean;
  set(key: Object, value: Object): void;
  set(key: Object, value: Object, timeout: number, unit: string): void;
  setBit(key: Object, offset: number, value: boolean): boolean;
  setIfAbsent(key: Object, value: Object): boolean;
  setIfAbsent(key: Object, value: Object, timeout: number, unit: string): boolean;
  setIfPresent(key: Object, value: Object): boolean;
  setIfPresent(key: Object, value: Object, timeout: number, unit: string): boolean;
  setRange(key: Object, value: Object, offset: number): void;
  size(key: Object): number;
}

/**
 * 通知
 */
declare interface Notification {
  /**
   * 账号ID
   */
  accountId: string;
  /**
   * 应用ID
   */
  applicationId: string;
  /**
   * 团队ID
   */
  companyId: string;
  /**
   * 通知内容
   */
  content: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 与类型对应的附加信息
   */
  data: string;
  /**
   * 系统通知ID
   */
  id: string;
  /**
   * 自定义通知是否发送
   */
  isCustomSend: boolean;
  /**
   * 钉钉是否发送
   */
  isDingTalkSend: boolean;
  /**
   * 飞书是否发送
   */
  isFeishuSend: boolean;
  /**
   * 是否已读
   */
  isRead: boolean;
  /**
   * web是否发送
   */
  isWebSend: boolean;
  /**
   * 企业微信是否发送
   */
  isWeworkSend: boolean;
  /**
   * 通知标题
   */
  name: string;
  /**
   * 类型。openbpmntask：打开Bpmn任务，openurl：打开链接，openrecord：打开数据表记录
   */
  type: string;
  /**
   * 更新时间
   */
  updateTime: Date;
  setCustomSend(customSend: boolean): void;
  setDingTalkSend(dingTalkSend: boolean): void;
  setFeishuSend(feishuSend: boolean): void;
  setRead(isRead: boolean): void;
  setWebSend(webSend: boolean): void;
  setWeworkSend(weworkSend: boolean): void;
}

/**
 * 链接配置信息
 */
declare interface NotificationUrlSetting {
  /**
   * 是否应用内链接
   */
  isAppURL: boolean;
  /**
   * 链接地址
   */
  url: string;
}

/**
 * 数据表记录配置信息
 */
declare interface NotificationReocrdSetting {
  /**
   * 模块ID
   */
  moduleId: string;
  /**
   * 记录ID
   */
  recordId: string;
}

/**
 * 系统通知表单
 */
declare interface NotificationForm {
  /**
   * 账号ID
   */
  accountId: string;
  /**
   * 自动化配置。类型为openbpmntask时，配置信息生效
   */
  automaticSetting: NotificationAutomaticSetting;
  /**
   * 工作流任务配置信息。类型为openbpmntask时，配置信息生效
   */
  bpmnTaskSetting: NotificationBpmnTaskSetting;
  /**
   * 内容
   */
  content: string;
  name: string;
  /**
   * 数据表记录配置信息。类型为openrecord时，配置信息生效
   */
  recordSetting: NotificationReocrdSetting;
  /**
   * 标题
   */
  title: string;
  /**
   * 类型。openbpmntask：打开Bpmn任务，openurl：打开链接，openrecord：打开数据表记录
   */
  type: string;
  /**
   * 链接配置信息。类型为openurl时，配置信息生效
   */
  urlSetting: NotificationUrlSetting;
}

/**
 * 调用自动化配置
 */
declare interface NotificationAutomaticSetting {
  /**
   * 参数列表
   */
  args: Array<Object>;
  /**
   * 自动化ID
   */
  automaticId: string;
}

declare interface CallAutomaticFuncArg {
  valueVar: string;
}

/**
 * 工作流任务配置信息
 */
declare interface NotificationBpmnTaskSetting {
  /**
   * 模块ID
   */
  moduleId: string;
  /**
   * 任务ID
   */
  taskId: string;
}

/**
 * LDAP连接
 */
declare interface LdapConnectionInfo {
  /**
   * 上下文服务提供者
   */
  initialContextFactory: string;
  /**
   * 服务器地址
   */
  providerURL: string;
  /**
   * 服务器地址
   */
  referral: string;
  /**
   * 认证方式，none 不认证，simple 用户名密码认证
   */
  securityAuthentication: string;
  /**
   * 密码
   */
  securityCredentials: string;
  /**
   * 用户名
   */
  securityPrincipal: string;
}

/**
 * LDAP返回搜索结果
 */
declare interface LdapSearchResult {
  /**
   * 条目的属性列表
   */
  attributes: Array<LdapSearchResultAttribute>;
  className: string;
  /**
   * 条目名称
   */
  name: string;
  /**
   * 条目的全路径
   */
  nameInNamespace: string;
  object: Object;
}

/**
 * 搜索控制
 */
declare interface LdapSearchControl {
  /**
   * 返回的条目的最大数量
   */
  countLimit: number;
  /**
   * JNDI links are dereferenced during
   */
  derefLinkFlag: boolean;
  /**
   * 返回的属性列表
   */
  returningAttributes: Array<any>;
  /**
   * 是否返回对象
   */
  returningObjFlag: boolean;
  /**
   * 搜索的限定范围,默认为 SUBTREE。SUBTREE 返回所有满足条件的条目，ONELEVEL 返回同级的条目，OBJECT 只返回满足条件的对象
   */
  searchScope: string;
  /**
   * 连接超时时间，单位为毫秒
   */
  timeLimit: number;
}

/**
 * LDAP属性列表
 */
declare interface LdapModifyAttribute {
  /**
   * 属性的ID
   */
  id: string;
  /**
   * 属性值
   */
  value: Object;
}

/**
 * LDAP列表结果
 */
declare interface LdapListResult {
  className: string;
  isRelative: boolean;
  name: string;
  nameInNamespace: string;
  setRelative(isRelative: boolean): void;
}

declare interface LdapConnection {
  addAttribute(dn: string, attrs: Array<LdapModifyAttribute>): void;
  close(): void;
  decodeSID(input: Object): string;
  deleteAttribute(dn: string, attrs: Array<LdapModifyAttribute>): void;
  getAttributes(dn: string): Array<LdapSearchResultAttribute>;
  list(name: string): Array<LdapListResult>;
  search(basedn: string, filter: string, lc: LdapSearchControl): Array<LdapSearchResult>;
  updateAttribute(dn: string, attrs: Array<LdapModifyAttribute>): void;
}

/**
 * LDAP条目属性
 */
declare interface LdapSearchResultAttribute {
  /**
   * 属性的ID
   */
  id: string;
  /**
   * 属性值的列表
   */
  values: Array<any>;
}

/**
 * 网站资源
 */
declare interface WebsiteResource {
  /**
   * 文件ID
   */
  fileId: string;
  /**
   * ID
   */
  id: string;
  /**
   * 是否为目录
   */
  isDirectory: boolean;
  /**
   * 名称
   */
  name: string;
  /**
   * 路径
   */
  path: string;
  setDirectory(isDirectory: boolean): void;
}

declare interface codec {
  /**
   * 返回base64解码后的字节数组
   * @param input 输入字符串 
   * @returns 
   */
  base64Decode(input: string): Array<any>;
  /**
   * 返回base64解码后的字节数组
   * @param input 输入字节数组 
   * @returns 
   */
  base64DecodeFromBytes(input: Array<any>): Array<any>;
  /**
   * 返回base64解码后的字符串
   * @param input 输入字符串 
   * @returns 
   */
  base64DecodeToString(input: string): string;
  /**
   * 获取str的base64编码
   * @param input 输入字符串 
   * @returns 
   */
  base64Encode(input: string): string;
  /**
   * 返回base64编码后的字符串
   * @param bytes 输入字节数组 
   * @returns 
   */
  base64EncodeFromBytes(bytes: Array<any>): string;
  /**
   * 返回base64编码后的字节数组
   * @param input 输入字符串 
   * @returns 
   */
  base64EncodeToBytes(input: string): Array<any>;
  /**
   * 获取str的散列值
   * @param input 输入字符串 
   * @param method 散列算法 
   * @returns 
   */
  hash(input: string, method: string): string;
  /**
   * RSA私钥解密
   * @param data 数据 
   * @param privateKey 公钥 
   * @returns 
   */
  rsaDecryptByPrivateKey(data: string, privateKey: string): string;
  /**
   * RSA公钥解密
   * @param data 数据 
   * @param publicKey 公钥 
   * @returns 
   */
  rsaDecryptByPublicKey(data: string, publicKey: string): string;
  /**
   * RSA私钥加密(返回编码为Base64字符串)
   * @param data 数据 
   * @param privateKey 私钥 
   * @returns 
   */
  rsaEncryptBase64ByPrivateKey(data: string, privateKey: string): string;
  /**
   * RSA公钥加密(返回编码为Base64字符串)
   * @param data 数据 
   * @param publicKey 公钥 
   * @returns 
   */
  rsaEncryptBase64ByPublicKey(data: string, publicKey: string): string;
  /**
   * RSA私钥加密(返回十六进制字符串)
   * @param data 数据 
   * @param privateKey 私钥 
   * @returns 
   */
  rsaEncryptHexByPrivateKey(data: string, privateKey: string): string;
  /**
   * RSA公钥加密(返回十六进制字符串)
   * @param data 数据 
   * @param publicKey 公钥 
   * @returns 
   */
  rsaEncryptHexByPublicKey(data: string, publicKey: string): string;
  /**
   * 使用签名算法对字符串进行签名
   * @param input 输入字符串 
   * @param method 签名算法 
   * @param privateKey 私钥 
   * @returns 
   */
  sign(input: string, method: string, privateKey: string): string;
  /**
   * 使用签名算法对字符串进行签名
   * @param input 输入字符串 
   * @param method 签名算法 
   * @param publicKey 公钥 
   * @returns 
   */
  signByPublicKey(input: string, method: string, publicKey: string): string;
}

declare interface ExcelCell {
  getHypelink(): string;
  getStyle(): ExcelCellStyle;
  getValue(): Object;
  getValueEvaluated(): Object;
  setHyperlink(url: string): void;
  setRichtextValue(s: string): void;
  setStyle(cs: ExcelCellStyle): void;
  setValue(v: Object): void;
}

declare interface PackageRelationship {
  getId(): string;
  getRelationshipType(): string;
  getSource(): PackagePart;
  getSourceURI(): Object;
  getTargetMode(): TargetMode;
  getTargetURI(): Object;
}

declare interface ExcelSheet {
  addMergedRegion(firstRow: number, lastRow: number, firstColumn: number, lastColumn: number): number;
  addPicture(col1: number, row1: number, localPath: string): ExcelPicture;
  addPicture0(col1: number, row1: number, bytes: Array<any>, name: string): ExcelPicture;
  addPictureBarcode(col1: number, row1: number, value: Object): ExcelPicture;
  addPictureQrcode(col1: number, row1: number, value: Object): ExcelPicture;
  addPictureStorage(col1: number, row1: number, storagePath: string): ExcelPicture;
  autoSizeColumn(index: number): void;
  createRow(index: number): ExcelRow;
  getColumnStyle(index: number): ExcelCellStyle;
  getColumnWidthInPixels(index: number): number;
  getDefaultColumnWidth(): number;
  getDefaultRowHeightInPoints(): number;
  getFirstRowNum(): number;
  getLastRowNum(): number;
  getObjectDatas(): Array<ExcelObjectData>;
  getPictures(): Array<ExcelPicture>;
  getRelations(): Array<POIXMLDocumentPart>;
  getRow(index: number): ExcelRow;
  getSheetName(): string;
  removeRow(row: ExcelRow): void;
  setColumnWidth(index: number, width: number): void;
  setDefaultColumnStyle(index: number, cs: ExcelCellStyle): void;
  setDefaultColumnWidth(width: number): void;
  setDefaultRowHeightInPoints(height: number): void;
  shiftRows(start: number, end: number, offset: number): void;
}

declare interface PictureSetting {
}

declare interface ExcelCellStyle {
  getAlignment(): string;
  getBorderBottom(): string;
  getBorderLeft(): string;
  getBorderRight(): string;
  getBorderTop(): string;
  getBottomBorderColor(): string;
  getDataFormat(): number;
  getDataFormatString(): string;
  getFillBackgroundColor(): string;
  getFillForegroundColor(): string;
  getFillPattern(): string;
  getFontIndex(): number;
  getHidden(): boolean;
  getIndention(): number;
  getIndex(): number;
  getLeftBorderColor(): string;
  getLocked(): boolean;
  getQuotePrefixed(): boolean;
  getRightBorderColor(): string;
  getRotation(): number;
  getShrinkToFit(): boolean;
  getTopBorderColor(): string;
  getVerticalAlignment(): string;
  getWrapText(): boolean;
  setAlignment(ha: string): void;
  setBorderBottom(border: string): void;
  setBorderLeft(border: string): void;
  setBorderRight(border: string): void;
  setBorderTop(border: string): void;
  setBottomBorderColor(color: string): void;
  setDataFormat(fmt: string): void;
  setFillBackgroundColor(color: string): void;
  setFillForegroundColor(color: string): void;
  setFillPattern(type: string): void;
  setFont(font: ExcelFont): void;
  setHidden(arg0: boolean): void;
  setIndention(arg0: number): void;
  setLeftBorderColor(color: string): void;
  setLocked(arg0: boolean): void;
  setQuotePrefixed(arg0: boolean): void;
  setRightBorderColor(color: string): void;
  setRotation(arg0: number): void;
  setShrinkToFit(arg0: boolean): void;
  setTopBorderColor(color: string): void;
  setVerticalAlignment(va: string): void;
  setWrapText(arg0: boolean): void;
}

declare interface ExcelCellEntity {
}

declare interface ExcelRow {
  createCell(index: number): ExcelCell;
  createCellWithValue(index: number, v: Object): ExcelCell;
  getCell(index: number): ExcelCell;
  getFirstCellNum(): number;
  getHeightInPoints(): number;
  getLastCellNum(): number;
  getRowNum(): number;
  getStyle(): ExcelCellStyle;
  removeCell(cellIdx: number): void;
  setHeightInPoints(height: number): void;
  setStyle(cs: ExcelCellStyle): void;
}

declare interface PackagePart {
  addExternalRelationship(target: string, relationshipType: string): PackageRelationship;
  addExternalRelationship(target: string, relationshipType: string, id: string): PackageRelationship;
  findExistingRelation(packagePart: PackagePart): PackageRelationship;
  getRelationship(id: string): PackageRelationship;
  getRelationships(): PackageRelationshipCollection;
  getRelationshipsByType(relationshipType: string): PackageRelationshipCollection;
  hasRelationships(): boolean;
}

declare interface TemplatePicture {
  barcodeFontSize: number;
  barcodeType: string;
  colspan: number;
  content: string;
  height: number;
  qrcodeErrorCorrection: string;
  rowspan: number;
  type: string;
  width: number;
}

/**
 * 单元格模版
 */
declare interface TemplateCell {
  colspan: number;
  /**
   * 单元格值
   */
  content: Object;
  rowspan: number;
}

declare interface ExcelWorkbook {
  createCellStyle(): ExcelCellStyle;
  createFont(): ExcelFont;
  createSafeSheetName(name: string): string;
  createSheet(name: string): ExcelSheet;
  getNumberOfSheets(): number;
  getSheet(name: string): ExcelSheet;
  getSheetAt(idx: number): ExcelSheet;
  write(): void;
}

declare interface ExcelPicture {
  fitHeight(): void;
  fitWidth(): void;
  getColumn(): number;
  getRow(): number;
  resetSize(): void;
  save(path: string): void;
  saveAttachment(tableKey: string, fieldKey: string, fieldName: string): TableAttachment;
  saveStorage(path: string): void;
  setScale(wScale: number, hScale: number): void;
  setSize(width: number, height: number): void;
}

declare interface POIXMLDocumentPart {
  getPackagePart(): PackagePart;
  getParent(): POIXMLDocumentPart;
  getRelationById(id: string): POIXMLDocumentPart;
  getRelationPartById(id: string): RelationPart;
  getRelationParts(): Array<RelationPart>;
  getRelations(): Array<POIXMLDocumentPart>;
  isCommitted(): boolean;
  setCommitted(isCommitted: boolean): void;
}

declare interface ExcelObjectData {
  getColumn(): number;
  getContentType(): string;
  getFileName(): string;
  getOLE2ClassName(): string;
  getRow(): number;
  hasDirectoryEntry(): boolean;
  save(path: string): void;
  saveAttachment(tableKey: string, fieldKey: string, fieldName: string): TableAttachment;
  saveStorage(path: string): void;
}

declare interface ExcelFont {
  getBold(): boolean;
  getColor(): string;
  getFontHeight(): number;
  getFontHeightInPoints(): number;
  getFontName(): string;
  getIndex(): number;
  getItalic(): boolean;
  getStrikeout(): boolean;
  getTypeOffset(): number;
  getUnderline(): byte;
  setBold(arg0: boolean): void;
  setCharSet(arg0: number): void;
  setColor(color: string): void;
  setFontHeightInPoints(arg0: number): void;
  setFontName(arg0: string): void;
  setItalic(arg0: boolean): void;
  setStrikeout(arg0: boolean): void;
  setUnderline(arg0: byte): void;
}

declare interface PackageRelationshipCollection {
  addRelationship(relPart: PackageRelationship): void;
  addRelationship(targetUri: Object, targetMode: TargetMode, relationshipType: string, id: string): PackageRelationship;
  clear(): void;
  findExistingInternalRelation(packagePart: PackagePart): PackageRelationship;
  getRelationship(index: number): PackageRelationship;
  getRelationshipByID(id: string): PackageRelationship;
  getRelationships(typeFilter: string): PackageRelationshipCollection;
  iterator(typeFilter: string): Array<PackageRelationship>;
  list(): Array<PackageRelationship>;
  parseRelationshipsPart(relPart: PackagePart): void;
  removeRelationship(id: string): void;
  size(): number;
}

declare interface ExcelImageEntity {
}

declare interface dept {
  /**
   * 新增部门
   * @param dept 部门信息 
   * @returns 
   */
  addDept(dept: Department): string;
  /**
   * 删除部门
   * @param deptId 部门ID 
   * @returns 
   */
  deleteDept(deptId: string): number;
  /**
   * 查询所有的下级部门
   * @param deptId 部门ID 
   * @returns 
   */
  getChildrenOfDept(deptId: string): Array<Department>;
  /**
   * 查询部门信息
   * @param deptId 部门ID 
   * @returns 
   */
  getDept(deptId: string): Department;
  /**
   * 查询直接下级部门
   * @param deptId 部门ID 
   * @returns 
   */
  getDirectChildrenOfDept(deptId: string): Array<Department>;
  /**
   * 查询部门的所有上级部门
   * @param deptId 部门ID 
   * @returns 
   */
  getParentOfDept(deptId: string): Array<Department>;
  /**
   * 查询部门列表
   * @param query 查询条件 
   * @returns 
   */
  queryDeptList(query: Query): Array<Department>;
  /**
   * 查询部门列表总数
   * @param filter 查询条件 
   * @returns 
   */
  queryDeptListCount(filter: Filter): number;
  /**
   * 更新部门
   * @param dept 部门信息 
   * @param updateFields 更新字段 
   * @returns 
   */
  updateDept(dept: Department, updateFields: Array<string>): number;
}

/**
 * SFTP文件
 */
declare interface SftpFile {
  getAttrs(): SftpFileAttr;
  getFilename(): string;
  getLongname(): string;
  setAttrs(attrs: SftpFileAttr): void;
  setFilename(filename: string): void;
  setLongname(longname: string): void;
}

declare interface SftpClient {
  cd(path: string): void;
  disconnect(): void;
  downloadFile(remotePath: string, localPath: string): void;
  login(username: string, password: string, host: string, port: number): void;
  loginWithPrivateKey(username: string, privateKey: string, passphrase: string, host: string, port: number): void;
  logout(): void;
  ls(path: string): Array<SftpFile>;
  mkdir(path: string): void;
  put(localPath: string, remotePath: string): void;
  put(localPath: string, remotePath: string, mode: number): void;
  pwd(): string;
}

declare interface SftpFileAttr {
  atime: number;
  flags: number;
  gid: number;
  mtime: number;
  permissions: number;
  size: number;
  uid: number;
}

declare interface table {
  /**
   * 添加表单评论
   * @param tableId 数据表标识符 
   * @param tableComment 表单评论 
   * @returns 
   */
  addComment(tableId: string, tableComment: TableCommentForm): number;
  /**
   * 添加关联列表值
   * @param tableId 数据表模块的标识符 
   * @param relationFieldId 关联列表字段 
   * @param recordId 主表的记录ID 
   * @param relationRecordId 关联列表的记录ID 
   * @returns 
   */
  addRelation(tableId: string, relationFieldId: string, recordId: string, relationRecordId: string): number;
  /**
   * 批量删除记录
   * @param tableId 数据表模块的标识符 
   * @param idList 记录ID列表 
   * @returns 
   */
  batchDelete(tableId: string, idList: Array<string>): number;
  /**
   * 批量创建记录
   * @param tableId 数据表模块的标识符 
   * @param rowData 需要创建的记录列表 
   * @returns 
   */
  batchInsert(tableId: string, rowData: Array<Record<string, Object>>): number;
  /**
   * 批量更新记录
   * @param tableId 数据表模块的标识符 
   * @param rowData 需要更新的记录列表 
   * @returns 
   */
  batchUpdate(tableId: string, rowData: Array<Record<string, Object>>): number;
  /**
   * 拷贝附件字段的文件到目标字段
   * @param sourceTableId 源数据表的标识符 
   * @param sourceFieldId 源字段的标识符 
   * @param targetTableId 目标数据表的标识符 
   * @param targetFieldId 目标字段的标识符 
   * @param attachment 附件对象 
   * @returns 
   */
  cloneAttachment(sourceTableId: string, sourceFieldId: string, targetTableId: string, targetFieldId: string, attachment: TableAttachment): TableAttachment;
  /**
   * 拷贝手写签名字段的文件到目标字段
   * @param sourceTableId 源数据表的标识符 
   * @param sourceFieldId 源字段的标识符 
   * @param targetTableId 目标数据表的标识符 
   * @param targetFieldId 目标字段的标识符 
   * @param signature 手写签名对象 
   * @returns 
   */
  cloneTableSignature(sourceTableId: string, sourceFieldId: string, targetTableId: string, targetFieldId: string, signature: TableSignature): TableSignature;
  /**
   * 使用本地沙盒中的文件生成附件
   * @param tableId 数据表的标识符 
   * @param fieldId 附件字段的标识符 
   * @param path 本地沙盒中的文件路径 
   * @returns 
   */
  createAttachment(tableId: string, fieldId: string, path: string): TableAttachment;
  /**
   * 使用远程存储中的文件生成附件
   * @param tableId 数据表的标识符 
   * @param fieldKey 附件字段的标识符 
   * @param path 远程存储中的文件路径 
   * @returns 
   */
  createAttachmentStorage(tableId: string, fieldKey: string, path: string): TableAttachment;
  /**
   * 删除单条记录
   * @param tableKey 数据表模块的标识符 
   * @param recordId 需要删除的记录ID 
   * @returns 
   */
  delete(tableKey: string, recordId: string): number;
  /**
   * 删除表单评论
   * @param tableId 数据表标识符 
   * @param id 表单评论Id 
   * @returns 
   */
  deleteComment(tableId: string, id: number): void;
  /**
   * 根据配置信息删除记录
   * @param tableId 数据表模块的标识符 
   * @param recordId 需要删除的记录ID 
   * @param config 配置信息 
   * @returns 
   */
  deleteEx(tableId: string, recordId: string, config: DeleteRecordConfig): number;
  /**
   * 根据条件删除多条记录
   * @param tableId 数据表模块的标识符 
   * @param filter 过滤条件 
   * @returns 
   */
  deleteList(tableId: string, filter: Filter): number;
  /**
   * 根据条件和配置删除多条记录
   * @param tableId 数据表模块的标识符 
   * @param filter 过滤条件 
   * @param config 配置信息 
   * @returns 
   */
  deleteListEx(tableId: string, filter: Filter, config: DeleteRecordConfig): number;
  /**
   * 删除关联列表值
   * @param tableId 数据表模块的标识符 
   * @param relationFieldId 关联列表字段 
   * @param recordId 主表的记录ID 
   * @param relationRecordId 关联列表的记录ID 
   * @returns 
   */
  deleteRelation(tableId: string, relationFieldId: string, recordId: string, relationRecordId: string): boolean;
  /**
   * 查询编号字段当前自增序号
   * @param tableId 数据表标识符 
   * @param fieldId 编号字段标识符 
   * @returns 
   */
  getIdFieldSeq(tableId: string, fieldId: string): number;
  /**
   * 查询关联列表中存在指定记录的记录列表
   * @param tableId 数据表模块的标识符 
   * @param relationFieldId 关联列表字段的ID 
   * @param relationId 子表的记录ID 
   * @returns 
   */
  getRelationRecordIdList(tableId: string, relationFieldId: string, relationId: string): Array<string>;
  /**
   * 查询数据表字段信息
   * @param tableId 数据表模块的标识符 
   * @param fieldId 数据表字段的标识符 
   * @returns 
   */
  getTableFieldInfo(tableId: string, fieldId: string): TableFieldInfo;
  /**
   * 查询数据表信息
   * @param tableId 数据表模块的标识符 
   * @returns 
   */
  getTableInfo(tableId: string): TableInfo;
  /**
   * 查询记录是否在关联列表中
   * @param tableId 数据表模块的标识符 
   * @param relationFieldId 关联列表字段 
   * @param recordId 主表的记录ID 
   * @param relationRecordIdList 关联记录的记录ID列表 
   * @returns 
   */
  hasRelation(tableId: string, relationFieldId: string, recordId: string, relationRecordIdList: Array<string>): Array<string>;
  /**
   * 创建记录
   * @param tableId 数据表模块的标识符 
   * @param rowData 需要创建的记录 
   * @returns 
   */
  insert(tableId: string, rowData: Record<string, Object>): string;
  /**
   * 根据配置信息创建记录
   * @param tableId 数据表模块的标识符 
   * @param rowData 需要创建的记录 
   * @param config 配置信息 
   * @returns 
   */
  insertEx(tableId: string, rowData: Record<string, Object>, config: InsertRecordConfig): string;
  /**
   * 移动附件字段的文件到目标附件字段
   * @param sourceTableId 源数据表的标识符 
   * @param sourceFieldId 源字段的标识符 
   * @param targetTableId 目标数据表的标识符 
   * @param targetFieldId 目标字段的标识符 
   * @param attachment 附件对象 
   * @returns 
   */
  moveAttachment(sourceTableId: string, sourceFieldId: string, targetTableId: string, targetFieldId: string, attachment: TableAttachment): TableAttachment;
  /**
   * 移动子对象里的记录
   * @param tableId 主表数据表标识符 
   * @param childrenFieldId 子对象字段 
   * @param mainRecordId 主表记录ID 
   * @param recordId 子表记录ID 
   * @param targetRecordId 子表目标记录ID 
   * @param type 移动方式 
   * @returns 
   */
  moveChildrenFieldRecord(tableId: string, childrenFieldId: string, mainRecordId: string, recordId: string, targetRecordId: string, type: string): void;
  /**
   * 子对象字段树形视图下移动记录
   * @param tableId 主表数据表标识符 
   * @param mainChildrenFieldId 子对象字段 
   * @param childrenFieldId 树形视图里的子对象字段 
   * @param mainRecordId 主表记录ID 
   * @param recordId 子表记录ID 
   * @param parentRecordId 父对象ID 
   * @param targetRecordId 子表目标记录ID 
   * @param type 拖拽方式 
   * @returns 
   */
  moveChildrenFieldTreeViewRecord(tableId: string, mainChildrenFieldId: string, childrenFieldId: string, mainRecordId: string, recordId: string, parentRecordId: string, targetRecordId: string, type: string): void;
  /**
   * 移动查找列表里的记录
   * @param tableId 主表数据表标识符 
   * @param lookupFieldId 查找列表字段 
   * @param mainRecordId 主表记录ID 
   * @param recordId 子表记录ID 
   * @param targetRecordId 子表目标记录ID 
   * @param type 移动方式 
   * @returns 
   */
  moveLookupFieldRecord(tableId: string, lookupFieldId: string, mainRecordId: string, recordId: string, targetRecordId: string, type: string): void;
  /**
   * 查找列表字段树形视图下移动记录
   * @param tableId 主表数据表标识符 
   * @param lookupFieldId 查找列表字段 
   * @param childrenFieldId 树形视图里的子对象字段 
   * @param mainRecordId 主表记录ID 
   * @param recordId 子表记录ID 
   * @param parentRecordId 父对象ID 
   * @param targetRecordId 子表目标记录ID 
   * @param type 拖拽方式 
   * @returns 
   */
  moveLookupFieldTreeViewRecord(tableId: string, lookupFieldId: string, childrenFieldId: string, mainRecordId: string, recordId: string, parentRecordId: string, targetRecordId: string, type: string): void;
  /**
   * 移动记录
   * @param tableId 数据表标识符 
   * @param recordId 记录ID 
   * @param targetRecordId 目标记录ID 
   * @param type 拖拽方式 
   * @returns 
   */
  moveRecord(tableId: string, recordId: string, targetRecordId: string, type: string): void;
  /**
   * 移动关联列表里的记录
   * @param tableId 主表数据表标识符 
   * @param relationFieldId 关联列表字段 
   * @param mainRecordId 主表记录ID 
   * @param recordId 子表记录ID 
   * @param targetRecordId 子表目标记录ID 
   * @param type 移动方式 
   * @returns 
   */
  moveRelationFieldRecord(tableId: string, relationFieldId: string, mainRecordId: string, recordId: string, targetRecordId: string, type: string): void;
  /**
   * 关联列表字段树形视图下移动记录
   * @param tableId 主表数据表标识符 
   * @param relationFieldId 关联列表字段 
   * @param childrenFieldId 树形视图里的子对象字段 
   * @param mainRecordId 主表记录ID 
   * @param recordId 子表记录ID 
   * @param parentRecordId 父对象ID 
   * @param targetRecordId 子表目标记录ID 
   * @param type 拖拽方式 
   * @returns 
   */
  moveRelationFieldTreeViewRecord(tableId: string, relationFieldId: string, childrenFieldId: string, mainRecordId: string, recordId: string, parentRecordId: string, targetRecordId: string, type: string): void;
  /**
   * 树形视图下移动记录
   * @param tableId 数据表标识符 
   * @param childrenFieldId 子对象字段 
   * @param recordId 记录ID 
   * @param parentRecordId 父对象记录 
   * @param targetRecordId 目标记录ID 
   * @param type 拖拽方式 
   * @returns 
   */
  moveTreeViewRecord(tableId: string, childrenFieldId: string, recordId: string, parentRecordId: string, targetRecordId: string, type: string): void;
  /**
   * 根据ID和条件查询单条记录
   * @param tableId 数据表模块的标识符 
   * @param id 需要查询的数据ID 
   * @param setting 查询设置 
   * @returns 
   */
  query(tableId: string, id: string, setting: TableQuerySetting): Record<string, Object>;
  /**
   * 根据ID查询单条数据
   * @param tableId 数据表模块的标识符 
   * @param id 需要查询的数据ID 
   * @returns 
   */
  queryById(tableId: string, id: string): Record<string, Object>;
  /**
   * 获取变更记录列表
   * @param tableId 数据表标识符 
   * @param query 查询条件 
   * @returns 
   */
  queryChangeLogList(tableId: string, query: Query): Array<TableChangeLog>;
  /**
   * 获取变更记录总数
   * @param tableId 数据表标识符 
   * @param informatFilter 过滤条件 
   * @returns 
   */
  queryChangeLogListCount(tableId: string, informatFilter: Filter): number;
  /**
   * 通过条件查询指定记录的子对象记录列表
   * @param tableId 数据表模块的标识符 
   * @param childrenFieldId 子对象字段 
   * @param recordId 主表的记录ID 
   * @param query 查询条件 
   * @returns 
   */
  queryChildrenList(tableId: string, childrenFieldId: string, recordId: string, query: TableRecordQuery): Array<Record<string, Object>>;
  /**
   * 获取评论表单列表
   * @param tableId 数据表标识符 
   * @param query 查询条件 
   * @returns 
   */
  queryCommentList(tableId: string, query: Query): Array<TableComment>;
  /**
   * 获取评论表单列表总数
   * @param tableId 数据表标识符 
   * @param filter 查询条件 
   * @returns 
   */
  queryCommentListCount(tableId: string, filter: Filter): number;
  /**
   * 通过条件查询多条数据
   * @param tableId 数据表模块的标识符 
   * @param query 查询条件 
   * @returns 
   */
  queryList(tableId: string, query: TableRecordQuery): Array<Record<string, Object>>;
  /**
   * 查询满足条件的数据数量
   * @param tableId 数据表模块的标识符 
   * @param filter 查询条件 
   * @returns 
   */
  queryListCount(tableId: string, filter: Filter): number;
  /**
   * 查询符合条件的第一条记录
   * @param tableKey 数据表模块的标识符 
   * @param query 查询条件 
   * @returns 
   */
  queryOne(tableKey: string, query: TableRecordQuery): Record<string, Object>;
  /**
   * 通过主表记录ID查询关联列表字段对应子表的记录列表
   * @param tableId 数据表模块的标识符 
   * @param relationFieldId 关联列表字段Id 
   * @param recordId 主表的记录ID 
   * @param query 子表查询条件 
   * @returns 
   */
  queryRelationList(tableId: string, relationFieldId: string, recordId: string, query: TableRecordQuery): Array<Record<string, Object>>;
  /**
   * 刷新物化视图的数据
   * @param tableId 数据表的标识符 
   * @returns 
   */
  refreshDataSource(tableId: string): void;
  /**
   * 重新计算子对象编号
   * @param tableId 数据表标识符 
   * @param fieldId 子对象编号字段 
   * @param parentRecordId 父节点记录ID 
   * @returns 
   */
  refreshIndexNumber(tableId: string, fieldId: string, parentRecordId: string): void;
  /**
   * 重新计算查找列表汇总字段的值
   * @param tableId 数据表标识符 
   * @param fieldId 查找列表汇总字段标识符 
   * @returns 
   */
  refreshLookupRollup(tableId: string, fieldId: string): number;
  /**
   * 重新计算查找列表汇总字段的值
   * @param tableId 数据表标识符 
   * @param fieldId 查找列表汇总字段标识符 
   * @param recordList 主表记录ID列表 
   * @param subFilter 子表过滤条件 
   * @returns 
   */
  refreshLookupRollup(tableId: string, fieldId: string, recordList: Array<string>, subFilter: Filter): number;
  /**
   * 重新计算关联列表汇总字段的值
   * @param tableId 数据表标识符 
   * @param fieldId 关联列表汇总字段标识符 
   * @returns 
   */
  refreshRelationRollup(tableId: string, fieldId: string): number;
  /**
   * 重新计算关联列表汇总字段的值
   * @param tableId 数据表标识符 
   * @param fieldId 关联列表汇总字段标识符 
   * @param recordList 主表记录ID列表 
   * @returns 
   */
  refreshRelationRollup(tableId: string, fieldId: string, recordList: Array<string>): number;
  /**
   * 设置编号字段自增序号
   * @param tableId 数据表标识符 
   * @param fieldId 编号字段标识符 
   * @param seq 自增序号 
   * @returns 
   */
  setIdFieldSeq(tableId: string, fieldId: string, seq: number): number;
  /**
   * 更新记录
   * @param tableId 数据表模块的标识符 
   * @param rowData 需要更新的记录 
   * @returns 
   */
  update(tableId: string, rowData: Record<string, Object>): number;
  /**
   * 更新子对象字段
   * @param tableId 数据表模块的标识符 
   * @param childrenFieldKey 子对象字段 
   * @param recordId 要更新的记录ID 
   * @param parentRecordId 要移动到的父节点 
   * @returns 
   */
  updateChildrenField(tableId: string, childrenFieldKey: string, recordId: string, parentRecordId: string): void;
  /**
   * 根据配置信息更新记录
   * @param tableId 数据表模块的标识符 
   * @param rowData 需要更新的记录 
   * @param config 更新配置信息 
   * @returns 
   */
  updateEx(tableId: string, rowData: Record<string, Object>, config: UpdateRecordConfig): number;
  /**
   * 根据条件更新多条记录
   * @param tableId 数据表模块的标识符 
   * @param filter 过滤条件 
   * @param rowData 需要更新的数据 
   * @returns 
   */
  updateList(tableId: string, filter: Filter, rowData: Record<string, Object>): number;
  /**
   * 根据条件和配置更新多条记录
   * @param tableId 数据表模块的标识符 
   * @param filter 过滤条件 
   * @param rowData 需要更新的数据 
   * @param config 更新配置信息 
   * @returns 
   */
  updateListEx(tableId: string, filter: Filter, rowData: Record<string, Object>, config: UpdateRecordConfig): number;
  /**
   * 更新数据表排序序号
   * @param tableId 数据表标识符 
   * @param recordId 记录ID 
   * @param seq 新的排序序号 
   * @returns 
   */
  updateRecordSeq(tableId: string, recordId: string, seq: number): number;
  /**
   * 校验表单
   * @param tableKey 数据表模块的标识符 
   * @param formData 表单数据 
   * @returns 
   */
  validateForm(tableKey: string, formData: Record<string, Object>): TableValidateFormResult;
}

declare interface redis {
  /**
   * 从 Redis 中删除指定键的数据
   * @param key 要删除值的键 
   * @returns 
   */
  delete(key: string): boolean;
  /**
   * 从 Redis 中删除多个键的数据
   * @param keys 要删除值的多个键 
   * @returns 
   */
  deleteAll(keys: Array<string>): number;
  /**
   * 获取Redis列表操作的工具类
   * @returns 
   */
  opsForList(): ListOperations;
  /**
   * 获取用于操作Redis数据库的工具类
   * @returns 
   */
  opsForValue(): ValueOperations;
}

/**
 * 应用角色
 */
declare interface UserRole {
  /**
   * ID
   */
  id: string;
  /**
   * 是否为管理员
   */
  isAdmin: boolean;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限列表
   */
  permissionList: Array<string>;
  setAdmin(isAdmin: boolean): void;
}

/**
 * 用户
 */
declare interface User {
  /**
   * 头像
   */
  avatar: string;
  /**
   * 团队角色列表
   */
  companyRoleList: Array<string>;
  /**
   * 所属部门
   */
  departmentList: Array<string>;
  /**
   * 钉钉账号ID
   */
  dingtalkUserId: string;
  /**
   * 飞书账号ID
   */
  feishuUserId: string;
  /**
   * ID
   */
  id: string;
  /**
   * 直接上级
   */
  leaderList: Array<string>;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限列表
   */
  permissionList: Array<string>;
  /**
   * 角色
   */
  roleList: Array<string>;
  /**
   * 自动化扩展信息
   */
  userInfo: Object;
  /**
   * 企业微信账户ID
   */
  weworkUserId: string;
}

/**
 * 用户信息
 */
declare interface UserInfo {
  /**
   * 邮箱
   */
  email: string;
  /**
   * 手机号
   */
  mobileNo: string;
  /**
   * OID
   */
  oid: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 用户名
   */
  userName: string;
}

declare interface aiagent {
  /**
   * 生成式聊天
   * @param setting AI聊天配置 
   * @returns 
   */
  chatCompletions(setting: OpenAIChatSetting): OpenAIChatResp;
  /**
   * 完成调用
   * @param moduleKey 模块标识符 
   * @param messageList 消息列表 
   * @returns 
   */
  completions(moduleKey: string, messageList: Array<AiAgentContentMessage>): OpenAIChatResp;
  /**
   * 通过ID查询会话
   * @param id 会话ID 
   * @returns 
   */
  getThread(id: string): AiAgentThread;
  /**
   * 通过ID查询会话消息
   * @param id 消息ID 
   * @returns 
   */
  getThreadMessage(id: number): AiAgentThreadMessage;
  /**
   * 查询会话列表
   * @param query 查询对象 
   * @returns 
   */
  queryThreadList(query: Query): Array<AiAgentThread>;
  /**
   * 查询会话列表总数
   * @param filter 过滤条件 
   * @returns 
   */
  queryThreadListCount(filter: Filter): number;
  /**
   * 查询会话列表消息
   * @param query 查询对象 
   * @returns 
   */
  queryThreadMessageList(query: Query): Array<AiAgentThreadMessage>;
  /**
   * 查询会话列表消息总数
   * @param filter 过滤条件 
   * @returns 
   */
  queryThreadMessageListCount(filter: Filter): number;
}

declare interface Console {
  /**
   * 打印DEBUG日志
   * @param args 日志参数 
   * @returns 
   */
  debug(...args: any): void;
  /**
   * 将args转换为JSON并打印日志
   * @param obj 对象 
   * @returns 
   */
  dump(obj: Object): void;
  /**
   * 打印ERROR日志
   * @param args 日志参数 
   * @returns 
   */
  error(...args: any): void;
  /**
   * 打印INFO日志
   * @param args 日志参数 
   * @returns 
   */
  info(...args: any): void;
  /**
   * 打印日志,默认打印INFO级别日志
   * @param args 日志参数 
   * @returns 
   */
  log(...args: any): void;
}

declare interface user {
  /**
   * 添加用户到应用中
   * @param userId 用户ID 
   * @param roleList 应用角色列表 
   * @returns 
   */
  addUser(userId: string, roleList: Array<string>): void;
  /**
   * 将用户从应用中移除
   * @param userId 用户ID 
   * @returns 
   */
  deleteUser(userId: string): number;
  /**
   * 查询应用所有权限定义
   * @returns 
   */
  getAllPermissions(): Array<string>;
  /**
   * 查询应用成员列表
   * @returns 
   */
  getAppUserList(): Array<User>;
  /**
   * 查询部门的负责人
   * @param deptList 部门标识符列表 
   * @returns 
   */
  getLeaderOfDeptList(deptList: Array<string>): Array<User>;
  /**
   * 查询用户的直接下属
   * @param userId 用户ID 
   * @returns 
   */
  getSubordinateUsers(userId: string): Array<User>;
  /**
   * 查询用户的直接上级
   * @param userId 用户ID 
   * @returns 
   */
  getSuperiorUsers(userId: string): Array<User>;
  /**
   * 查询用户信息
   * @param id 用户ID 
   * @returns 
   */
  getUser(id: string): User;
  /**
   * 根据部门查询用户列表
   * @param departmentList 部门标识符列表 
   * @returns 
   */
  getUserByDeptList(departmentList: Array<string>): Array<User>;
  /**
   * 根据应用角色查询用户列表
   * @param roleList 角色标识符列表 
   * @returns 
   */
  getUserByRoleList(roleList: Array<string>): Array<User>;
  /**
   * 根据用户ID查询用户列表
   * @param idList 用户ID列表 
   * @returns 
   */
  getUserList(idList: Array<string>): Array<User>;
  /**
   * 查询用户应用权限
   * @param accountId 用户ID 
   * @returns 
   */
  getUserPermissions(accountId: string): Array<string>;
  /**
   * 查询应用角色列表
   * @returns 
   */
  getUserRoleList(): Array<UserRole>;
  /**
   * 更新应用成员的角色
   * @param userId 用户ID 
   * @param roleList 应用角色列表 
   * @returns 
   */
  updateUserRole(userId: string, roleList: Array<string>): number;
}

declare interface Doc2XmlConfig {
  doctypePublic: string;
  doctypeSystem: string;
  encoding: string;
  indent: boolean;
  indentAmount: number;
  omitXmlDeclaration: boolean;
  standalone: boolean;
  version: string;
}

/**
 * 格式转换结果
 */
declare interface ConvertFormatResult {
}

/**
 * 略缩图
 */
declare interface Thumbnail {
  /**
   * 定义使图像适合指定的高度和宽度的模式。
   */
  aspect: number;
  /**
   * 定义是仅为第一页还是为所有文档页面生成缩略图。默认值为true
   */
  first: boolean;
  /**
   * 以像素为单位定义缩略图高度。默认值为100。
   */
  height: number;
  /**
   * 以像素为单位定义缩略图宽度。默认值为100
   */
  width: number;
}

/**
 * 电子表格边距
 */
declare interface SpreadsheetLayoutMargins {
  /**
   * 设置输出 PDF 文件的下边距。默认值为19.1 毫米。
   */
  bottom: string;
  /**
   * 设置输出 PDF 文件的左边距。默认值为17.8 毫米。
   */
  left: string;
  /**
   * 设置输出 PDF 文件的右边距。默认值为17.8 毫米。
   */
  right: string;
  /**
   * 设置输出 PDF 文件的上边距。默认值为19.1 毫米。
   */
  top: string;
}

/**
 * 格式转换配置
 */
declare interface ConvertFormatSetting {
  /**
   * 定义要转换的文档文件的类型。(必须)
   */
  fileType: string;
  /**
   * 定义生成的转换文档类型。(必须)
   */
  outputtype: string;
  /**
   * 如果文档文件受密码保护，则定义该文件的密码。(可选)
   */
  password: string;
  /**
   * 定义从电子表格格式转换为pdf时货币和日期和时间的默认显示格式。(可选)
   */
  region: string;
  /**
   * 定义用于将电子表格转换为 pdf 的设置。(可选)
   */
  spreadsheetLayout: SpreadsheetLayout;
  /**
   * 将图像格式（bmp、gif、jpg、png）指定为outputtype时，定义缩略图的设置
   */
  thumbnail: Thumbnail;
  /**
   * 定义转换后的文件名
   */
  title: string;
}

/**
 * 电子表格布局
 */
declare interface SpreadsheetLayout {
  /**
   * 设置转换区域的高度，以页数为单位。默认值为0。
   */
  fitToHeight: number;
  /**
   * 设置转换区域的宽度，以页数为单位。默认值为0。
   */
  fitToWidth: number;
  /**
   * 允许在输出 PDF 文件中包含或不包含网格线。默认值为false。
   */
  gridLines: boolean;
  /**
   * 允许在输出 PDF 文件中包含或不包含标题。默认值为false。
   */
  headings: boolean;
  /**
   * 确定是否忽略为电子表格文件选择的打印区域。默认值为true。
   */
  ignorePrintArea: boolean;
  /**
   * 设置输出 PDF 文件的边距。
   */
  margins: SpreadsheetLayoutMargins;
  /**
   * 设置输出 PDF 文件的方向。可能是landscape，portrait。默认值为portrait。
   */
  orientation: string;
  /**
   * 设置输出 PDF 文件的尺寸
   */
  pageSize: SpreadsheetLayoutPageSize;
  /**
   * 允许设置输出 PDF 文件的比例。默认值为100。
   */
  scale: number;
}

/**
 * 电子表格尺寸
 */
declare interface SpreadsheetLayoutPageSize {
  /**
   * 设置输出 PDF 文件的页面高度。默认值为297 毫米。
   */
  height: string;
  /**
   * 设置输出 PDF 文件的页面宽度。默认值为210 毫米。
   */
  width: string;
}

/**
 * JDBC结果集
 */
declare interface JDBCResultSet {
  getBigDecimal(columnLabel: string): number;
  getBigDecimal(columnIndex: number): number;
  getBoolean(columnLabel: string): boolean;
  getBoolean(columnIndex: number): boolean;
  getByte(columnLabel: string): byte;
  getByte(columnIndex: number): byte;
  getBytes(columnLabel: string): Array<any>;
  getBytes(columnIndex: number): Array<any>;
  getColumnCount(): number;
  getColumnName(columnIndex: number): string;
  getColumnTypeName(columnIndex: number): string;
  getDate(columnLabel: string): Date;
  getDate(columnIndex: number): Date;
  getDouble(columnLabel: string): number;
  getDouble(columnIndex: number): number;
  getFloat(columnLabel: string): number;
  getFloat(columnIndex: number): number;
  getInt(columnLabel: string): number;
  getInt(columnIndex: number): number;
  getLong(columnLabel: string): number;
  getLong(columnIndex: number): number;
  getObject(columnLabel: string): Object;
  getObject(columnIndex: number): Object;
  getShort(columnLabel: string): number;
  getShort(columnIndex: number): number;
  getString(columnLabel: string): string;
  getString(columnIndex: number): string;
  getTime(columnLabel: string): Date;
  getTime(columnIndex: number): Date;
  getTimestamp(columnLabel: string): Date;
  getTimestamp(columnIndex: number): Date;
}

declare interface JDBCConnection {
  commit(): void;
  insert(sql: string, returnAutoGeneratedKeys: boolean, ...args: any): number;
  rollback(): void;
  select(sql: string, handler: (resultSet: JDBCResultSet) => void, ...args: any): void;
  update(sql: string, ...args: any): number;
}

declare interface ResultSetHandler {
  accept(set: JDBCResultSet): void;
}

/**
 * 数据库连接
 */
declare interface ConnnectionInfo {
  /**
   * 是否自动提交事务，默认为true
   */
  autoCommit: boolean;
  /**
   * 密码
   */
  dbpassword: string;
  /**
   * 数据库连接串
   */
  dburl: string;
  /**
   * 用户名
   */
  dbuser: string;
  /**
   * 驱动名称
   */
  driverClassName: string;
}

declare interface mq {
  /**
   * 收到消息以后，手动应答数据接收成功
   * @param message 投递标识 
   * @param multiple 批量确认标志 
   * @returns 
   */
  basicAck(message: MqMessage, multiple: boolean): void;
  /**
   * 从队列拉取消息
   * @param moduleKey 消息队列模块标识符 
   * @param queueKey 队列的标识符 
   * @param autoAck 设置是否自动确认 
   * @returns 
   */
  basicGet(moduleKey: string, queueKey: string, autoAck: boolean): MqMessage;
  /**
   * Nack方式的拒绝
   * @param message 投递标识 
   * @param multiple 批量确认标志 
   * @param requeue 是否重新投递到队列中 
   * @returns 
   */
  basicNack(message: MqMessage, multiple: boolean, requeue: boolean): void;
  /**
   * 重新发送未被确认的消息
   * @param message 消息对象 
   * @param requeue 是否重新投递到队列中 
   * @returns 
   */
  basicRecover(message: MqMessage, requeue: boolean): void;
  /**
   * Reject拒绝消息
   * @param message 消息对象 
   * @param requeue 是否重新投递到队列中 
   * @returns 
   */
  basicReject(message: MqMessage, requeue: boolean): void;
  /**
   * 发送消息到队列中
   * @param module 消息队列模块标识符 
   * @param routingKey 路由键 
   * @param setting 发送设置 
   * @param message 要发送的消息 
   * @returns 
   */
  publish(module: string, routingKey: string, setting: MqPublishSetting, message: string): void;
  /**
   * 清空队列
   * @param module 消息队列模块标识符 
   * @param queue 队列的标识符 
   * @returns 
   */
  queuePurge(module: string, queue: string): number;
}

declare interface file {
  /**
   * 将文件移动到指定位置
   * @param sourcePath 源文件路径 
   * @param targetPath 目标文件路径 
   * @returns 
   */
  copy(sourcePath: string, targetPath: string): void;
  /**
   * 创建文件
   * @param path 文件路径 
   * @returns 
   */
  create(path: string): boolean;
  /**
   * 删除文件
   * @param path 文件路径 
   * @returns 
   */
  delete(path: string): boolean;
  /**
   * 删除目录
   * @param path 文件夹路径 
   * @returns 
   */
  deleteDirectory(path: string): boolean;
  /**
   * 判断是否存在文件
   * @param path 文件路径 
   * @returns 
   */
  exists(path: string): boolean;
  /**
   * 获取文件信息
   * @param path 文件路径 
   * @returns 
   */
  getFile(path: string): File;
  /**
   * 获取文件完整路径
   * @param path 文件路径 
   * @returns 
   */
  getRealPath(path: string): string;
  /**
   * 判断文件是否是文件夹
   * @param path 文件路径 
   * @returns 
   */
  isDirectory(path: string): boolean;
  /**
   * 列出文件夹下的文件
   * @param path 文件夹路径 
   * @returns 
   */
  listFile(path: string): Array<any>;
  /**
   * 获取文件MD5
   * @param path 文件路径 
   * @returns 
   */
  md5(path: string): string;
  /**
   * 创建文件夹
   * @param path 文件夹路径 
   * @returns 
   */
  mkdirs(path: string): boolean;
  /**
   * 移动文件到指定位置
   * @param source 源文件路径 
   * @param dest 目标文件路径 
   * @returns 
   */
  move(source: string, dest: string): boolean;
  /**
   * 将文件内容二进制内容读取为base64转换后的字节数组
   * @param path 文件路径 
   * @returns 
   */
  readAsBase64Bytes(path: string): Array<any>;
  /**
   * 将文件内容二进制内容读取为base64转换后的字符串
   * @param path 文件路径 
   * @returns 
   */
  readAsBase64String(path: string): string;
  /**
   * 读取文件返回二进制内容
   * @param path 文件路径 
   * @returns 
   */
  readAsBytes(path: string): Array<any>;
  /**
   * 读取文件返回字符串内容
   * @param path 文件路径 
   * @param charset 字符集 
   * @returns 
   */
  readAsString(path: string, charset: string): string;
  /**
   * 解压缩文件
   * @param sourcePath 源文件路径 
   * @param targetPath 目标文件路径 
   * @returns 
   */
  unzip(sourcePath: string, targetPath: string): File;
  /**
   * 解压缩文件
   * @param sourcePath 源文件路径 
   * @param targetPath 目标文件路径 
   * @param charsetName 编码 
   * @returns 
   */
  unzip(sourcePath: string, targetPath: string, charsetName: string): File;
  /**
   * 将二进制内容写入文件
   * @param path 文件路径 
   * @param content 二进制内容 
   * @returns 
   */
  writeBytes(path: string, content: Array<any>): void;
  /**
   * 将流写入文件
   * @param path 文件路径 
   * @param is 输入流 
   * @returns 
   */
  writeStream(path: string, is: InputStream): void;
  /**
   * 将字符串写入文件
   * @param path 文件路径 
   * @param content 字符串内容 
   * @param charset 字符集 
   * @returns 
   */
  writeString(path: string, content: string, charset: string): void;
  /**
   * 压缩文件
   * @param sourcePath 源文件路径 
   * @param targetPath 目标文件路径 
   * @returns 
   */
  zip(sourcePath: string, targetPath: string): File;
  /**
   * 压缩文件
   * @param sourcePath 源文件路径 
   * @param targetPath 目标文件路径 
   * @param charsetName 编码 
   * @param withSrcDir 是否包含被打包目录 
   * @returns 
   */
  zip(sourcePath: string, targetPath: string, charsetName: string, withSrcDir: boolean): File;
}

declare interface email {
  /**
   * 收邮件
   * @param server 邮箱服务器 
   * @returns 
   */
  getStore(server: EmailServer): EmailStore;
  /**
   * 发送邮件
   * @param server 邮箱服务器 
   * @param message 邮件信息 
   * @returns 
   */
  send(server: EmailServer, message: EmailMessage): void;
  /**
   * 使用系统邮箱发送邮件
   * @param vmessage 邮件信息 
   * @returns 
   */
  sendWithSystemServer(vmessage: EmailMessage): void;
}

/**
 * 数据表过滤器
 */
declare interface ViewFilter {
  /**
   * 过滤字段列表
   */
  conditionList: Array<string>;
  /**
   * 操作符并且 and或者 or
   */
  opt: string;
}

/**
 * 表单事件
 */
declare interface FormEvent {
  /**
   * 事件内容
   */
  content: FormContent;
  /**
   * 事件类型,可选值为：表单字段变更 form.field.change, 表单初始化 form.init
   */
  id: string;
  /**
   * 数据表ID
   */
  tableId: string;
}

/**
 * 事件内容
 */
declare interface FormContent {
  /**
   * 点击的日期的时间戳，事件类型为calendar.datedblclick时返回
   */
  date: number;
  /**
   * 点击的字段，事件类型为record.dblclick或record.click时返回
   */
  field: string;
  /**
   * 变更的字段ID，事件类型为form.field.change或form.init时返回
   */
  formFieldId: string;
  /**
   * 表单数据，事件类型为form.field.change或form.init时返回
   */
  formRecord: Record<string, Object>;
  /**
   * 模块标识符，事件类型为table.loaded时返回
   */
  moduleKey: number;
  /**
   * 当前页码，事件类型为table.loaded时返回
   */
  pageIndex: number;
  /**
   * 每页大小，事件类型为table.loaded时返回
   */
  pageSize: number;
  /**
   * 访问设备的平台web、mobile，事件类型为table.loaded时返回
   */
  platform: number;
  /**
   * 使用的组合过滤器标识符，事件类型为table.loaded时返回
   */
  queryFilterKey: number;
  /**
   * 点击的记录数据，事件类型为record.dblclick或record.click时返回
   */
  record: Record<string, string>;
  /**
   * 查询条件，事件类型为table.loaded时返回
   */
  tableViewCondition: number;
  /**
   * 触发类型view.setup:视图初始化后view.reload:视图内部抛出重新加载数据后；view.page.change:视图分页信息变化后；view.fullpath.change:视图树形结构全路径展示切换后；view.orderby.change:非表格类型视图调整排序后；view.inner.query.change:视图内部变更查询条件后(日历视图)；view.query.change:视图过滤查询条件后；view.filter.change:视图组合筛选切换后；view.root.change:视图树形结构设置查询根节点后；record.create.refresh:记录创建后刷新；record.update.refresh:记录更新后刷新；record.delete.refresh:记录删除后刷新；record.parent.change:记录变更父级后刷新；automatic.output.refresh:自动化交互设置模块刷新；automatic.output.set.filter:自动化交互设置视图过滤条件；automatic.output.set.root:自动化设置视图数据根节点，事件类型为record.dblclick时返回
   */
  type: number;
}

/**
 * 数据表查询事件
 */
declare interface TableQueryEvent {
  /**
   * 查询的条件
   */
  condition: Query;
  /**
   * 查询的记录总数
   */
  count: number;
  /**
   * 查询的记录列表
   */
  list: Array<Record<string, Object>>;
  /**
   * 查询的模块ID
   */
  moduleId: string;
  /**
   * 查询的数据表的标识符
   */
  tableId: string;
  /**
   * 事件类型，可选值为：查询前 table.query.before，查询后 table.query.after
   */
  type: string;
}

/**
 * 数据表查询条件
 */
declare interface ViewCondition {
  /**
   * 根据此字段进行树形结构查询
   */
  childrenFieldId: string;
  /**
   * 树形结构查询时的根结点ID
   */
  childrenRootRecordId: string;
  /**
   * 过滤条件
   */
  filter: ViewFilter;
  /**
   * 排序字段
   */
  orderByList: Array<string>;
  /**
   * 当前页码
   */
  pageIndex: number;
  /**
   * 分页大小
   */
  pageSize: number;
}

/**
 * 数据表视图事件
 */
declare interface ViewEvent {
  /**
   * 事件内容
   */
  content: FormContent;
  /**
   * 事件类型, 可选值：双击记录 record.dblclick，单击记录 record.click，日历视图双击空白日期 calendar.datedblclick，视图数据加载完成后 table.loaded
   */
  id: string;
  /**
   * 模块ID
   */
  moduleId: string;
}

/**
 * 数据表表单关闭事件
 */
declare interface RecordFormCloseEvent {
  /**
   * 数据表表单标识符
   */
  formModuleKey: string;
  /**
   * 自定义表格行数据(选中或所有)
   */
  list: Array<Record<string, Object>>;
  /**
   * 表单数据
   */
  record: Record<string, Object>;
  /**
   * 表单类型
RecordCreateForm:数据表记录创建表单
RecordInfoForm:数据表记录详情表单
OutputDynamicForm:自动化自定义表单
OutputDynamicTable:自动化自定义表格
   */
  type: string;
}

/**
 * 运行参数
 */
declare interface ProcessRunArgs {
  /**
   * 命令
   */
  cmds: Array<any>;
  /**
   * 超时时间,毫秒数,0表示忽略超时
   */
  timeout: number;
}

/**
 * 登录表单
 */
declare interface LoginForm {
  getIp(): string;
  getPassword(): string;
  getType(): string;
  getUserName(): string;
  setIp(ip: string): void;
  setPassword(password: string): void;
  setType(type: string): void;
  setUserName(userName: string): void;
}

/**
 * 运行上下文
 */
declare interface RunWithContext {
  /**
   * 应用标识符
   */
  appDefineId: string;
  /**
   * 团队ID
   */
  companyId: string;
}

/**
 * NodeJS运行参数
 */
declare interface RunNodeJSArgs {
  /**
   * 操作系统对命令行参数的长度有限制，linux下最长131071，如果需要传递大量数据需要使用stdin传递
   */
  cmdline: Array<string>;
  /**
   * 环境变量
   */
  env: Record<string, string>;
  /**
   * 执行的脚本文件 例如:test/helloworld.js
   */
  script: string;
  /**
   * 标准输入
   */
  stdin: string;
}

/**
 * 登录结果
 */
declare interface LoginResult {
  getAccountId(): string;
  getCompanyId(): string;
  getDefaultApplicationId(): string;
  getErrorCode(): number;
  getErrorMessage(): string;
  getToken(): string;
  setAccountId(accountId: string): void;
  setCompanyId(companyId: string): void;
  setDefaultApplicationId(defaultApplicationId: string): void;
  setErrorCode(errorCode: number): void;
  setErrorMessage(errorMessage: string): void;
  setToken(token: string): void;
}

/**
 * 运行结果
 */
declare interface ProcessRunResult {
  /**
   * 错误输出
   */
  err: string;
  /**
   * 退出码
   */
  exitValue: number;
  /**
   * 标准输出
   */
  out: string;
}

declare interface http {
  /**
   * 发送网络请求
   * @param request 请求对象 
   * @returns 
   */
  request(request: HttpRequest): HttpResponse;
}

declare interface system {
  /**
   * 新增账号
   * @param account 账号信息,ID如果没有填写就会使用系统随机生成的ID 
   * @returns 
   */
  addAccount(account: AccountAddForm): string;
  /**
   * 新增团队成员
   * @param companyId 团队ID 
   * @param accountId 账号ID 
   * @param departmentList 部门ID列表 
   * @param roleList 角色ID列表 
   * @returns 
   */
  addCompanyMember(companyId: string, accountId: string, departmentList: Array<string>, roleList: Array<string>): void;
  /**
   * 新增系统日志
   * @param optLog 系统日志对象 
   * @returns 
   */
  addOptLog(optLog: OptLog): void;
  /**
   * 修改账号密码
   * @param accountId 账号ID 
   * @param pwd 新密码 
   * @returns 
   */
  changePassword(accountId: string, pwd: string): number;
  /**
   * 创建团队
   * @param license 团队License 
   * @returns 
   */
  createCompany(license: string): string;
  /**
   * 为账号创建登录授权TOKEN
   * @param accountId 账号ID 
   * @param type Token类型 PC端:index;移动端:mobile 
   * @returns 
   */
  createToken(accountId: string, type: string): string;
  /**
   * 删除系统日志
   * @param vfilter 查询条件 
   * @returns 
   */
  deleteOptLogList(vfilter: Filter): number;
  /**
   * 异步执行任务
   * @param func 执行函数 
   * @param arg 参数 
   * @param successCallback 成功回调 
   * @param failedCallback 失败回调 
   * @returns 
   */
  executeAsync(func: Array<Object>, arg: Object, successCallback: Array<Object>, failedCallback: Array<Object>): Array<?>;
  /**
   * 查询账号信息
   * @param id 账号ID 
   * @returns 
   */
  getAccount(id: string): Account;
  /**
   * 通过邮箱查询账号
   * @param email 邮箱 
   * @returns 
   */
  getAccountByEmail(email: string): Account;
  /**
   * 通过手机号查询账号
   * @param mobileNo 手机号 
   * @returns 
   */
  getAccountByMobileNo(mobileNo: string): Account;
  /**
   * 通过TOKEN查找账号信息
   * @param token 一个令牌（token） 
   * @returns 
   */
  getAccountByToken(token: string): Account;
  /**
   * 通过用户名查询账号
   * @param userName 用户名 
   * @returns 
   */
  getAccountByUserName(userName: string): Account;
  /**
   * 查询角色列表
   * @param companyId 团队ID 
   * @returns 
   */
  getCompanyAllRoles(companyId: string): Array<CompanyRole>;
  /**
   * 查询账号凭证
   * @param accountId 账号ID 
   * @param type Token类型 PC端:index;移动端:mobile 
   * @returns 
   */
  getTokenByAccount(accountId: string, type: string): AccountToken;
  /**
   * 返回host 如https://next.informat.cn/
   * @returns 
   */
  host(): string;
  /**
   * 调用扩展库中的函数
   * @param libraryId 扩展库标识符 
   * @param className 需要调用的扩展库中的类 
   * @param methodName 需要调用的扩展库中的方法，此方法必须为静态类型 
   * @param args 传递给方法的参数 
   * @returns 
   */
  invokeLibrary(libraryId: string, className: string, methodName: string, args: Array<Object>): Object;
  /**
   * 登录
   * @param req 登录信息 
   * @returns 
   */
  login(req: LoginForm): LoginResult;
  /**
   * 查询账号列表
   * @param query 账号查询条件 
   * @returns 
   */
  queryAccountList(query: Query): Array<Account>;
  /**
   * 查询账号列表总数
   * @param filter 查询条件 
   * @returns 
   */
  queryAccountListCount(filter: Filter): number;
  /**
   * 查询部门列表
   * @param companyId 团队ID 
   * @param query 查询条件 
   * @returns 
   */
  queryCompanyDeptList(companyId: string, query: Query): Array<Department>;
  /**
   * 查询团队列表
   * @param query 查询条件 
   * @returns 
   */
  queryCompanyList(query: Query): Array<Company>;
  /**
   * 查询团队列表总数
   * @param filter 查询条件 
   * @returns 
   */
  queryCompanyListCount(filter: Filter): number;
  /**
   * 查询系统日志列表
   * @param query 查询条件 
   * @returns 
   */
  queryOptLogList(query: Query): Array<OptLog>;
  /**
   * 查询系统日志列表总数
   * @param filter 查询条件 
   * @returns 
   */
  queryOptLogListCount(filter: Filter): number;
  /**
   * 运行js命令
   * @param args 执行参数 
   * @returns 
   */
  runNodeJS(args: RunNodeJSArgs): ProcessRunResult;
  /**
   * 启动一个新的进程
   * @param args 执行参数 
   * @returns 
   */
  runProcess(args: ProcessRunArgs): ProcessRunResult;
  /**
   * 运行上下文
   * @param context 运行上下文 
   * @param callback 回调函数 
   * @returns 
   */
  runWithContext(context: RunWithContext, callback: Array<Object>): Object;
  /**
   * 查询服务器节点ID
   * @returns 
   */
  serverId(): string;
  /**
   * 启用/禁用账号
   * @param accountId 账号ID 
   * @param isValid 启用或禁用,true表示启用 
   * @returns 
   */
  setAccountValid(accountId: string, isValid: boolean): void;
  /**
   * 设置密码规则
   * @param reg 正则表达式 
   * @returns 
   */
  setPasswordRule(reg: string): void;
  /**
   * 更新账号
   * @param account 账号信息 
   * @param updateFields 更新的字段列表 
   * @returns 
   */
  updateAccount(account: Account, updateFields: Array<string>): number;
  /**
   * 更新账号列表
   * @param account 账号信息 
   * @param updateFields 更新字段列表 
   * @param filter 过滤条件 
   * @returns 
   */
  updateAccountList(account: Account, updateFields: Array<string>, filter: Filter): number;
  /**
   * 更新团队License
   * @param companyId 团队ID 
   * @param license 团队License 
   * @returns 
   */
  updateCompanyLicense(companyId: string, license: string): string;
  /**
   * 设置账号凭证过期时间
   * @param token 凭证 
   * @param expireTime 过期时间 
   * @returns 
   */
  updateTokenExpireTime(token: string, expireTime: Date): void;
  /**
   * 上传文件到自定义路径
   * @param localPath 本地文件路径 
   * @param path 自定义路径 
   * @returns 
   */
  uploadFile(localPath: string, path: string): void;
  /**
   * 校验用户名密码
   * @param user 用户名或者手机号 
   * @param pwd 密码 
   * @returns 
   */
  validateAccount(user: string, pwd: string): boolean;
}

/**
 * 数据表表单表单结果
 */
declare interface TableValidateFormResult {
  itemList: Array<TableValidateFormItem>;
}

/**
 * 附件
 */
declare interface TableAttachment {
  /**
   * ID
   */
  id: string;
  /**
   * MD5值
   */
  md5: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 路径
   */
  path: string;
  /**
   * 大小
   */
  size: number;
  /**
   * 略缩图
   */
  thumbnail: string;
}

/**
 * 变更日志
 */
declare interface TableChangeLog {
  /**
   * 变更后的值
   */
  afterValue: string;
  /**
   * 变更前的值
   */
  beforeValue: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 创建人ID
   */
  createUserId: string;
  /**
   * 创建人名称
   */
  createUserName: string;
  /**
   * 字段ID
   */
  fieldId: string;
  /**
   * 字段名称
   */
  fieldName: string;
  /**
   * ID
   */
  id: string;
  /**
   * 记录ID
   */
  recordId: string;
}

/**
 * 数据表
 */
declare interface Table {
  /**
   * ID
   */
  id: string;
  /**
   * 标识符
   */
  key: string;
  /**
   * 名称
   */
  name: string;
}

/**
 * 数据表查询配置
 */
declare interface TableQuerySetting {
  /**
   * 是否锁定行
   */
  forUpdate: boolean;
  /**
   * 返回包括字段
   */
  includeFields: Array<string>;
  /**
   * 如果有列表选择、级联选择、树形选择字段，同时会返回选项值名称
   */
  returnOptionName: boolean;
}

/**
 * 数据表字段
 */
declare interface TableField {
  /**
   * ID
   */
  id: string;
  /**
   * 标识符
   */
  key: string;
  /**
   * 字段名称
   */
  name: string;
  /**
   * 字段类型
   */
  type: string;
}

/**
 * 评论
 */
declare interface TableComment {
  /**
   * 内容
   */
  comment: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 创建者头像
   */
  createUserAvatar: string;
  /**
   * 创建者用户ID
   */
  createUserId: string;
  /**
   * 创建者用户名称
   */
  createUserName: string;
  /**
   * ID
   */
  id: number;
  /**
   * 是否删除
   */
  isDelete: boolean;
  /**
   * 父评论ID
   */
  parentId: number;
  /**
   * 记录ID
   */
  recordId: string;
  setDelete(isDelete: boolean): void;
}

/**
 * 评论
 */
declare interface TableCommentItem {
  /**
   * 子评论
   */
  content: Array<TableCommentItem>;
  /**
   * 评论值
   */
  text: string;
  /**
   * 类型
   */
  type: string;
}

/**
 * 数据表查询条件
 */
declare interface TableRecordQuery {
  /**
   * 聚合查询
   */
  aggregationQueryList: Array<AggregationQuery>;
  /**
   * 过滤条件
   */
  filter: Filter;
  /**
   * 分组查询
   */
  groupByList: Array<string>;
  /**
   * 返回字段列表
   */
  includeFields: Array<string>;
  /**
   * 排序方式
   */
  orderByList: Array<OrderBy>;
  /**
   * 分页页码
   */
  pageIndex: number;
  /**
   * 分页大小
   */
  pageSize: number;
  /**
   * 返回optionName
   */
  returnOptionName: boolean;
}

/**
 * 自动化参数
 */
declare interface DataAutomaticVar {
  /**
   * 参数值
   */
  value: string;
}

/**
 * 数据表搜索配置
 */
declare interface TableSearchSetting {
  /**
   * 筛选条件可选数据过滤器
   */
  filterSearchFilterId: string;
  /**
   * 子对象默认层级为1
   */
  searchChildrenDefaultLevel: number;
  /**
   * 搜索子对象ID
   */
  searchChildrenFieldId: string;
  /**
   * 显示子对象全路径
   */
  searchChildrenFullPath: boolean;
  /**
   * 可搜索字段列表
   */
  searchColumnList: Array<TableColumnSetting>;
  /**
   * 过滤条件
   */
  searchFilterConditionList: Array<ConditionSetting>;
  /**
   * 表单内可选数据过滤器
   */
  searchFilterId: string;
  /**
   * 筛选条件
   */
  searchFilterVarList: Array<SearchFilterVar>;
  /**
   * 排序方式
   */
  searchOrderByList: Array<OrderBy>;
  /**
   * 表格边框样式
   */
  searchTableBorderStyle: string;
  /**
   * 单元格样式
   */
  searchTableCellStyleList: Array<TableViewSettingCellStyle>;
  /**
   * 隐藏表头
   */
  searchTableHideHeader: boolean;
  /**
   * 显示序号
   */
  searchTableIndex: boolean;
  /**
   * 行记录隐藏表达式
   */
  searchTableSelectionDisableExpression: string;
  /**
   * 显示条纹
   */
  searchTableStripe: boolean;
}

/**
 * 数据表信息
 */
declare interface TableInfo {
  /**
   * ID
   */
  id: string;
  /**
   * 数据表
   */
  table: Table;
  /**
   * 数据表字段列表
   */
  tableFieldList: Array<TableField>;
}

/**
 * 手写签名
 */
declare interface TableSignature {
  /**
   * 账户ID
   */
  accountId: string;
  /**
   * 账户名称
   */
  accountName: string;
  /**
   * ID
   */
  id: string;
  /**
   * 路径
   */
  path: string;
  /**
   * 上传时间
   */
  uploadTime: Date;
}

declare interface ValidateRule {
  /**
   * 规则表达式
   */
  expression: string;
  /**
   * 规则ID
   */
  id: string;
  /**
   * 提示信息
   */
  message: string;
  /**
   * 触发条件
   */
  trigger: string;
}

declare interface DefaultValueRule {
  /**
   * 条件表达式
   */
  expression: string;
  /**
   * 字段ID
   */
  fieldId: string;
}

/**
 * 记录更新配置
 */
declare interface UpdateRecordConfig {
  /**
   * 是否不计算查找汇总字段,默认false表示计算汇总字段
   */
  disableCalculateRollupField: boolean;
  /**
   * 是否启用变更记录,默认false
   */
  enableChangeLog: boolean;
}

/**
 * 记录插入配置
 */
declare interface InsertRecordConfig {
  /**
   * 是否不计算查找汇总字段,默认false表示计算汇总字段
   */
  disableCalculateRollupField: boolean;
}

/**
 * 筛选条件
 */
declare interface SearchFilterVar {
  /**
   * ID
   */
  id: string;
  /**
   * 条件表达式
   */
  valueExpression: string;
}

/**
 * 账号
 */
declare interface TableAccountSimple {
  /**
   * 头像
   */
  avatar: string;
  /**
   * ID
   */
  id: string;
  /**
   * 名称
   */
  name: string;
}

/**
 * 删除记录配置
 */
declare interface DeleteRecordConfig {
  /**
   * 是否不计算查找汇总字段,默认false表示计算汇总字段
   */
  disableCalculateRollupField: boolean;
}

/**
 * 评论表单
 */
declare interface TableCommentForm {
  /**
   * 内容
   */
  content: string;
  /**
   * 创建者账号ID
   */
  createUserId: string;
  /**
   * 父评论ID
   */
  parentId: number;
  /**
   * 记录ID
   */
  recordId: string;
}

/**
 * 数据表字段信息
 */
declare interface TableFieldInfo {
  /**
   * 应用ID
   */
  appId: string;
  /**
   * 附件配置
   */
  attachmentSetting: AttachmentSetting;
  /**
   * 级联选择配置
   */
  cascaderSetting: CascaderSetting;
  /**
   * 变更记录可访问角色列表
   */
  changeLogAccessRoleList: Array<string>;
  /**
   * 复选框配置
   */
  checkboxSetting: CheckboxSetting;
  /**
   * 子对象配置
   */
  childrenSetting: ChildrenSetting;
  /**
   * 颜色配置
   */
  colorSetting: ColorSetting;
  /**
   * 地理位置坐标配置
   */
  coordinateSetting: CoordinateSetting;
  /**
   * 创建时间配置
   */
  createTimeSetting: CreateTimeSetting;
  /**
   * 创建人配置
   */
  createUserSetting: CreateUserSetting;
  /**
   * 自定义组件配置
   */
  customSetting: CustomSetting;
  /**
   * 日期配置
   */
  dateSetting: DateSetting;
  /**
   * 创建时使用 动态取值
   */
  defaultValueExpression: string;
  /**
   * 默认值动态取值，字段变化时使用
   */
  defaultValueRuleList: Array<DefaultValueRule>;
  /**
   * 部门选择配置
   */
  departmentSetting: DepartmentSetting;
  /**
   * 在表单中不可编辑时字段提示语
   */
  disableTooltipExpression: string;
  /**
   * 显示宽度
   */
  displayWidth: number;
  /**
   * 小数
   */
  doubleSetting: DoubleSetting;
  /**
   * 可修改条件表达式
   */
  editableExpression: string;
  /**
   * 是否启用变更记录
   */
  enableChangeLog: boolean;
  /**
   * 函数
   */
  formulaSetting: FormulaSetting;
  /**
   * 分组
   */
  group: string;
  /**
   * 是否隐藏
   */
  hidden: boolean;
  /**
   * 编号
   */
  iDSetting: IDSetting;
  /**
   * 图标
   */
  icon: string;
  /**
   * ID
   */
  id: string;
  /**
   * 子对象编号
   */
  indexNumberSetting: IndexNumberSetting;
  /**
   * 整数配置
   */
  integerSetting: IntegerSetting;
  /**
   * 标识符
   */
  key: string;
  /**
   * 最后修改时间配置
   */
  lastModifyTimeSetting: LastModifyTimeSetting;
  /**
   * 最后修改用户配置
   */
  lastModifyUserSetting: LastModifyUserSetting;
  /**
   * 列表选择配置
   */
  listSelectSetting: ListSelectSetting;
  /**
   * 查找列表配置
   */
  lookupListSetting: LookupListSetting;
  /**
   * 查找汇总配置
   */
  lookupRollupSetting: LookupRollupSetting;
  /**
   * 成员配置
   */
  memberSetting: UserSetting;
  /**
   * 多行文本配置
   */
  multiTextSetting: MultiTextSetting;
  /**
   * 字段名称
   */
  name: string;
  /**
   * 评分
   */
  rateSetting: RateSetting;
  /**
   * 是否只读
   */
  readonly: boolean;
  /**
   * 关联记录字段配置
   */
  relationRecordFieldSetting: RelationRecordFieldSetting;
  /**
   * 关联记录配置
   */
  relationRecordSetting: RelationRecordSetting;
  /**
   * 关联汇总配置
   */
  relationRollupSetting: RelationRollupSetting;
  /**
   * 关联列表配置
   */
  relationSetting: RelationSetting;
  /**
   * 必填条件表达式
   */
  requiredExpression: string;
  /**
   * 富文本配置
   */
  richTextSetting: RichTextSetting;
  /**
   * 序列号配置
   */
  seqSetting: SeqSetting;
  /**
   * 签名配置
   */
  signatureSetting: SignatureSetting;
  /**
   * 单行文本配置
   */
  singleTextSetting: SingleTextSetting;
  /**
   * 静态文本配置
   */
  staticTextSetting: StaticTextSetting;
  /**
   * 数据表ID
   */
  tableId: string;
  /**
   * 目标应用ID，只有关联记录字段才会有值
   */
  targetAppId: string;
  /**
   * 时间配置
   */
  timeSetting: TimeSetting;
  /**
   * 树形选择配置
   */
  treeSetting: TreeSetting;
  /**
   * 字段类型
   */
  type: string;
  /**
   * UUID配置
   */
  uUIDSetting: UUIDSetting;
  /**
   * 用户配置
   */
  userSetting: UserSetting;
  /**
   * 校验规则
   */
  validateRuleList: Array<ValidateRule>;
  /**
   * 可见条件表达式
   */
  visibleExpression: string;
}

/**
 * 数据表默认值
 */
declare interface DefaultValue {
  /**
   * 字段ID
   */
  fieldId: string;
  /**
   * 表达式
   */
  value: string;
}

/**
 * HTTP请求
 */
declare interface HttpRequest {
  /**
   * 请求体
   */
  body: string;
  /**
   * 字符集
   */
  charset: string;
  /**
   * 请求文件
   */
  files: Record<string, string>;
  followRedirect: boolean;
  /**
   * 请求表单
   */
  form: Record<string, Object>;
  /**
   * 请求头
   */
  headers: Record<string, string>;
  /**
   * 重定向次数
   */
  maxRedirectCount: number;
  /**
   * 请求方法
   */
  method: string;
  /**
   * 覆盖的请求头
   */
  overrideHeaders: Record<string, string>;
  storages: Record<string, string>;
  /**
   * 超时毫秒数
   */
  timeout: number;
  /**
   * 请求地址
   */
  url: string;
}

declare interface HttpResponse {
  body(): string;
  contentEncoding(): string;
  contentLength(): number;
  headers(): Record<string, Array<string>>;
  saveBodyAsAttachment(tableId: string, fieldId: string, fileName: string): TableAttachment;
  saveBodyAsFile(path: string): void;
  saveBodyAsStorage(path: string): void;
  statusCode(): number;
}

declare interface CsvReader {
  read(handler: CsvReaderHandler): void;
  setCharset(charset: string): void;
  setCharset(charset: string): void;
  setCommentCharacter(commentCharacter: string): void;
  setCommentStrategy(strategy: string): void;
  setErrorOnDifferentFieldCount(q: boolean): void;
  setFieldSeparator(separtor: string): void;
  setQuoteCharacter(quoteCharacter: string): void;
  setSkipEmptyRows(q: boolean): void;
}

declare interface CsvWriter {
  close(): void;
  setCharset(charset: string): void;
  setCharset(charset: string): void;
  setCommentCharacter(character: string): void;
  setFieldSeparator(character: string): void;
  setLineDelimiter(q: string): void;
  setQuoteCharacter(character: string): void;
  setQuoteStrategy(strategy: string): void;
  writeComment(comment: string): void;
  writeRow(row: Array<any>): void;
}

declare interface CsvRow {
  getField(index: number): string;
  getFieldCount(): number;
  getFields(): Array<string>;
  getOriginalLineNumber(): number;
  isComment(): boolean;
  isEmpty(): boolean;
}

declare interface CsvReaderHandler {
  accept(row: CsvRow): void;
}

declare interface transaction {
  /**
   * 提交事务
   * @param status 当前事务状态 
   * @returns 
   */
  commit(status: TransactionStatus): void;
  /**
   * 获取当前事务状态
   * @returns 
   */
  currentTransactionStatus(): TransactionStatus;
  /**
   * 创建默认事务定义
   * @returns 
   */
  defaultTransactionDefinition(): DefaultTransactionDefinition;
  /**
   * 根据给定的事务定义（TransactionDefinition）获取一个事务，并返回其运行时状态
   * @param definition 事务定义 
   * @returns 
   */
  getTransactionStatus(definition: DefaultTransactionDefinition): TransactionStatus;
  /**
   * 注册事务同步回调
   * @param ts 事务同步回调对象 
   * @returns 
   */
  registerSynchronization(ts: TransactionSynchronization): void;
  /**
   * 回滚事务
   * @param status 事务状态 
   * @returns 
   */
  rollback(status: TransactionStatus): void;
}

/**
 * 搜索引擎搜索结果
 */
declare interface TextindexSearchResult {
  /**
   * 总数
   */
  count: number;
  /**
   * 文档列表
   */
  list: Array<TextindexDocument>;
}

/**
 * 文档字段对象
 */
declare interface TextindexDocumentField {
  /**
   * 字段ID
   */
  fieldId: string;
  /**
   * 字段名称
   */
  fieldName: string;
  /**
   * 字段类型
   */
  fieldType: string;
  /**
   * 是否是属性
   */
  isAttr: boolean;
  /**
   * 是否是标题
   */
  isTitle: boolean;
  /**
   * 显示值
   */
  stringValue: string;
  /**
   * 原始值
   */
  value: Object;
  setAttr(isAttr: boolean): void;
  setTitle(isTitle: boolean): void;
}

/**
 * 文档对象
 */
declare interface TextindexDocument {
  /**
   * 应用ID
   */
  applicationId: string;
  /**
   * 内容
   */
  content: string;
  /**
   * 高亮部分
   */
  contentHighlight: Array<string>;
  fieldValueList: Array<TextindexDocumentField>;
  /**
   * 打开调用自动化ID
   */
  openAutomaticId: string;
  /**
   * 记录ID
   */
  recordId: string;
  tableId: string;
  tableName: string;
  /**
   * 标题
   */
  title: string;
}

/**
 * 搜索引擎查询对象
 */
declare interface TextindexSearchQuery {
  /**
   * 关键字
   */
  keyword: string;
  /**
   * 页码 从1开始
   */
  pageIndex: number;
  /**
   * 每页大小
   */
  pageSize: number;
  /**
   * 数据源标识符列表
   */
  tableIdList: Array<string>;
}

/**
 * 流程定义启动设置
 */
declare interface BpmnStartSetting {
  activityUserList: Array<NodeUser>;
  draftNameVar: string;
  enableStartForm: boolean;
  formSetting: FormSetting;
  instanceNameVar: string;
  instanceToolbarButtonList: Array<Button>;
  startFormToolbarButtonList: Array<Button>;
  startVarList: Array<BpmnFormSettingVar>;
}

declare interface NodeUser {
  activityId: string;
  activityName: string;
  key: string;
  multiple: boolean;
  readonly: boolean;
  required: boolean;
  value: NodeUserValue;
}

declare interface NodeUserValue {
  deptList: Array<string>;
  multiple: boolean;
  roleList: Array<string>;
  startUserType: string;
  type: string;
  userList: Array<string>;
}

/**
 * 工作流任务抄送
 */
declare interface BpmnTaskCc {
  /**
   * 抄送用户头像
   */
  copyUserAvatar: string;
  /**
   * 抄送用户
   */
  copyUserId: string;
  /**
   * 抄送用户名称
   */
  copyUserName: string;
  /**
   * ID
   */
  id: string;
  /**
   * 发起人
   */
  startUserId: string;
  /**
   * 任务ID
   */
  taskId: string;
}

/**
 * 工作流实例查询
 */
declare interface BpmnInstanceQuery {
  /**
   * 终止结束时间
   */
  endTimeEnd: Date;
  /**
   * 起始结束时间
   */
  endTimeStart: Date;
  /**
   * 实例名称
   */
  name: string;
  /**
   * 工作流定义标识符
   */
  processDefineId: string;
  /**
   * 终止开始时间
   */
  startTimeEnd: Date;
  /**
   * 起始开始时间
   */
  startTimeStart: Date;
  /**
   * 实例状态，进行中 doing，已完成 done
   */
  startUserId: string;
  /**
   * 实例状态，进行中 doing，已完成 done
   */
  status: string;
  /**
   * 工作流变量列表
   */
  varList: Array<BpmnVar>;
  getPageIndex(): number;
  getPageSize(): number;
  setPageIndex(pageIndex: number): void;
  setPageSize(pageSize: number): void;
}

/**
 * 工作流实例
 */
declare interface BpmnInstance {
  /**
   * 业务key
   */
  businessKey: string;
  /**
   * 撤销原因
   */
  deleteReason: string;
  /**
   * 结束时间
   */
  endTime: Date;
  /**
   * ID
   */
  id: string;
  /**
   * 是否激活
   */
  isActive: boolean;
  /**
   * 实例名称
   */
  name: string;
  /**
   * 工作流定义ID
   */
  procDefId: string;
  /**
   * 工作流定义名称
   */
  procDefName: string;
  /**
   * 工作流实例ID
   */
  procInstId: string;
  /**
   * 开始时间
   */
  startTime: Date;
  /**
   * 发起人头像
   */
  startUserAvatar: string;
  /**
   * 发起人
   */
  startUserId: string;
  /**
   * 发起人名称
   */
  startUserName: string;
  /**
   * 任务数量
   */
  taskCount: number;
  /**
   * 应用ID和模块ID
   */
  tenantId: string;
  setActive(isActive: boolean): void;
}

/**
 * 流程表单字段定义
 */
declare interface BpmnTableFieldSetting {
  defaultValue: Object;
  editable: boolean;
  id: string;
  visible: boolean;
}

/**
 * 工作流流程图
 */
declare interface BpmnProcessDiagramConfig {
  /**
   * 流程任务字体名称
   */
  activityFontName: string;
  /**
   * 注释字体名称
   */
  annotationFontName: string;
  /**
   * 
   */
  drawSequenceFlowNameWithNoLabelDI: boolean;
  /**
   * 已完成流程任务
   */
  highLightedActivities: Array<string>;
  /**
   * 已完成顺序流
   */
  highLightedFlows: Array<string>;
  /**
   * 图片类型，默认png
   */
  imageType: string;
  /**
   * 标签字体名称
   */
  labelFontName: string;
  /**
   * 比例
   */
  scaleFactor: number;
}

/**
 * 工作流定义查询
 */
declare interface BpmnProcessQuery {
  /**
   * 可以发起流程的账号ID
   */
  accountId: string;
  /**
   * 工作流名称
   */
  name: string;
}

/**
 * 工作流身份关联
 */
declare interface BpmnIdentityLink {
  getGroupId(): string;
  getId(): string;
  getTaskId(): string;
  getType(): string;
  getUserId(): string;
  setGroupId(groupId: string): void;
  setId(id: string): void;
  setTaskId(taskId: string): void;
  setType(type: string): void;
  setUserId(userId: string): void;
}

/**
 * 工作流评论查询
 */
declare interface BpmnCommentQuery {
  /**
   * 执行ID
   */
  executionId: string;
  /**
   * 流程实例ID
   */
  procInstId: string;
  /**
   * 任务ID
   */
  taskId: string;
  getPageIndex(): number;
  getPageSize(): number;
  setPageIndex(pageIndex: number): void;
  setPageSize(pageSize: number): void;
}

/**
 * 工作流变量
 */
declare interface BpmnVar {
  /**
   * 变量名
   */
  name: string;
  opt: string;
  /**
   * 值
   */
  value: Object;
}

/**
 * 工作流任务查询
 */
declare interface BpmnTaskQuery {
  /**
   * 责任人账号ID
   */
  accountId: string;
  /**
   * 指派类型，所有 all，指派给我 assignee，待认领 candidate，抄送给我 copy
   */
  assignee: string;
  /**
   * 终止创建时间
   */
  createTimeEnd: Date;
  /**
   * 起始创建时间
   */
  createTimeStart: Date;
  /**
   * 任务执行ID
   */
  executionId: string;
  /**
   * 流程ID
   */
  procInstId: string;
  /**
   * 状态,进行中 doing，已完成 done
   */
  status: string;
  /**
   * 任务名称
   */
  taskName: string;
  getPageIndex(): number;
  getPageSize(): number;
  setPageIndex(pageIndex: number): void;
  setPageSize(pageSize: number): void;
}

/**
 * 工作流定义
 */
declare interface BpmnProcess {
  /**
   * 颜色标识
   */
  color: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 图标
   */
  icon: string;
  /**
   * 流程ID
   */
  id: string;
  /**
   * 标识符
   */
  key: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 描述
   */
  remark: string;
  /**
   * 排序
   */
  rowNumber: number;
  /**
   * 最后修改时间
   */
  updateTime: Date;
}

/**
 * 工作流评论
 */
declare interface BpmnComment {
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 评论ID
   */
  id: string;
  /**
   * 消息
   */
  message: string;
  /**
   * 流程实例ID
   */
  procInstId: string;
  /**
   * 任务ID
   */
  taskId: string;
  /**
   * 类型
   */
  type: string;
  /**
   * 用户ID
   */
  userId: string;
}

/**
 * 工作流任务
 */
declare interface BpmnTask {
  /**
   * 责任人ID
   */
  assignee: string;
  /**
   * 责任人头像
   */
  assigneeAvatar: string;
  /**
   * 责任人名称
   */
  assigneeName: string;
  /**
   * 认领或指派时间
   */
  claimTime: Date;
  /**
   * 委托状态, 任务责任人委派 PENDING 委托人已解决任务 RESOLVED
   */
  delegation: string;
  /**
   * 撤销原因
   */
  deleteReason: string;
  /**
   * 逾期时间
   */
  dueDate: Date;
  /**
   * 持续时间
   */
  duration: number;
  /**
   * 完成时间
   */
  endTime: Date;
  /**
   * 任务执行ID
   */
  executionId: string;
  /**
   * ID
   */
  id: string;
  /**
   * 最后更新时间
   */
  lastUpdatedTime: Date;
  /**
   * 实例名称
   */
  name: string;
  /**
   * 委托或转交人
   */
  owner: string;
  /**
   * 委托或转交人头像
   */
  ownerAvatar: string;
  /**
   * 委托或转交人名称
   */
  ownerName: string;
  /**
   * 工作流定义ID
   */
  procDefId: string;
  /**
   * 工作流定义名称
   */
  procDefName: string;
  /**
   * 工作流实例ID
   */
  procInstId: string;
  /**
   * 工作流实例名称
   */
  procInstName: string;
  /**
   * 开始时间
   */
  startTime: Date;
  /**
   * 发起人头像
   */
  startUserAvatar: string;
  /**
   * 发起人
   */
  startUserId: string;
  /**
   * 发起人名称
   */
  startUserName: string;
  /**
   * 任务定义Key
   */
  taskDefKey: string;
  /**
   * 应用ID和模块ID
   */
  tenantId: string;
}

/**
 * 流程表单设置
 */
declare interface FormSetting {
  completeSetVarList: Array<CompleteSetVar>;
  enableShowProcessInfo: boolean;
  formDesignerFieldSettingList: Array<BpmnTableFieldSetting>;
  formDesignerFormId: string;
  formDesignerModuleId: string;
  formType: string;
  id: string;
  localVariable: boolean;
  tableFieldSettingList: Array<BpmnTableFieldSetting>;
  tableId: string;
  toolBarButtonList: Array<Button>;
}

declare interface BpmnFormSettingVar {
  name: string;
  value: Object;
  valueVar: string;
}

declare interface CompleteSetVar {
  expression: string;
  fieldId: string;
}

declare interface bpmn {
  addBpmnTaskCcList(taskId: string, copyUserList: Array<string>): void;
  addComment(moduleKey: string, taskId: string, msg: string): string;
  addMultiInstanceExecution(moduleKey: string, activityId: string, parentExecutionId: string, executionVariables: Record<string, Object>): string;
  addTaskCandidateRole(moduleKey: string, taskId: string, roleKey: string): void;
  addTaskCandidateUser(moduleKey: string, taskId: string, userId: string): void;
  claimTask(moduleKey: string, taskId: string, userId: string): void;
  completeTask(moduleKey: string, taskId: string, variables: Record<string, Object>): void;
  createInstance(moduleKey: string, processDefineKey: string, startUserId: string, from: Record<string, Object>, vars: Record<string, Object>): string;
  delegateTask(moduleKey: string, taskId: string, userId: string, autoDelegate: boolean): void;
  deleteBpmnTaskCc(taskId: string, copyUserId: string): number;
  deleteComment(moduleKey: string, taskId: string, id: string): number;
  deleteInstance(moduleKey: string, instanceId: string, reason: string): void;
  deleteMultiInstanceExecution(moduleKey: string, executionId: string, executionIsCompleted: boolean): void;
  deleteTaskCandidateRole(moduleKey: string, taskId: string, roleKey: string): void;
  deleteTaskCandidateUser(moduleKey: string, taskId: string, userId: string): void;
  deleteTasks(moduleKey: string, taskIds: Array<string>, deleteReason: string, cascade: boolean): void;
  generateProcessDiagram(moduleKey: string, procDefId: string, config: BpmnProcessDiagramConfig): string;
  /**
   * 查询工作流定义列表
   * @param moduleKey 模块标识符 
   * @param query 查询对象 
   * @returns 
   */
  getBpmnProcessDefineList(moduleKey: string, query: BpmnProcessQuery): Array<BpmnProcess>;
  getHistoryTaskVariable(taskId: string, variableName: string): Object;
  getHistoryTaskVariables(taskId: string): Record<string, Object>;
  getIdentityLinksForTask(moduleKey: string, taskId: string): Array<BpmnIdentityLink>;
  getInstanceLocalVar(moduleKey: string, instanceId: string, varName: string): Object;
  getInstanceVar(moduleKey: string, instanceId: string, varName: string): Object;
  getInstanceVars(moduleKey: string, instanceId: string): Record<string, Object>;
  getProcessDefineXml(moduleKey: string, procDefId: string): string;
  getStartSetting(moduleKey: string, defineId: string): BpmnStartSetting;
  getTaskLocalVar(moduleKey: string, taskId: string, varName: string): Object;
  getTaskSetting(procDefineId: string, taskDefKey: string): BpmnTaskSetting;
  getTaskVar(moduleKey: string, taskId: string, varName: string): Object;
  getTaskVars(moduleKey: string, taskId: string, localVariable: boolean): Record<string, Object>;
  moveToActivity(moduleKey: string, taskId: string, targetActivityId: string): void;
  queryBpmnTaskCcList(query: Query): Array<BpmnTaskCc>;
  queryBpmnTaskCcListCount(filter: Filter): number;
  queryCommentList(moduleKey: string, vquery: BpmnCommentQuery): Array<BpmnComment>;
  queryCommentListCount(moduleKey: string, query: BpmnCommentQuery): number;
  queryInstanceById(moduleKey: string, instanceId: string): BpmnInstance;
  queryInstanceList(moduleKey: string, query: BpmnInstanceQuery): Array<BpmnInstance>;
  queryInstanceListCount(moduleKey: string, query: BpmnInstanceQuery): number;
  queryTaskById(moduleKey: string, taskId: string): BpmnTask;
  queryTaskList(moduleKey: string, query: BpmnTaskQuery): Array<BpmnTask>;
  queryTaskListCount(moduleKey: string, query: BpmnTaskQuery): number;
  revokeInstance(moduleKey: string, instanceId: string, reason: string): void;
  sendMessage(moduleKey: string, instanceId: string, messageName: string): void;
  sendSignal(moduleKey: string, instanceId: string, signalName: string): void;
  setInstanceLocalVar(moduleKey: string, instanceId: string, varName: string, varValue: Object): void;
  /**
   * 设置流程实例变量
   * @param moduleKey 模块标识符 
   * @param instanceId 流程实例标识符 
   * @param varName 变量名 
   * @param varValue 变量值 
   * @returns 
   */
  setInstanceVar(moduleKey: string, instanceId: string, varName: string, varValue: Object): void;
  setProcessInstanceName(moduleKey: string, instanceId: string, name: string): void;
  setTaskAssignee(moduleKey: string, taskId: string, userId: string): void;
  setTaskLocalVar(moduleKey: string, taskId: string, varName: string, varValue: Object): void;
  setTaskOwner(moduleKey: string, taskId: string, userId: string): void;
  setTaskVar(moduleKey: string, taskId: string, varName: string, varValue: Object): void;
  transferTask(moduleKey: string, taskId: string, userId: string): void;
  trigger(moduleKey: string, instanceId: string, activityId: string): void;
  unclaimTask(moduleKey: string, taskId: string): void;
}

declare interface datasource {
  /**
   * 获取数据库连接
   * @param moduleKey 模块标识符 
   * @param dataSourceKey 数据源Key 
   * @param info 数据源连接信息 
   * @returns 
   */
  getConnection(moduleKey: string, dataSourceKey: string, info: DataSourceConnnectionSetting): JDBCConnection;
}

declare interface xml {
  /**
   * 创建一个新的Document对象
   * @returns 
   */
  createDocument(): Document;
  /**
   * 将Document对象转换为xml字符串
   * @param doc xml文档对象 
   * @param config 输出配置 
   * @returns 
   */
  doc2xml(doc: Document, config: Doc2XmlConfig): string;
  /**
   * 读取XML内容并返回Document对象
   * @param xml xml内容 
   * @returns 
   */
  parse(xml: string): Document;
}

declare interface PictureRenderData {
}

/**
 * Word图片
 */
declare interface WordPicture {
  /**
   * 高度
   */
  height: number;
  /**
   * 路径
   */
  path: string;
  /**
   * 存储路径
   */
  storagePath: string;
  /**
   * 链接
   */
  url: string;
  /**
   * 宽度
   */
  width: number;
}

/**
 * 应用设计模型
 */
declare interface DefineObject {
  build: number;
  createTime: string;
  createUser: string;
  /**
   * 显示名称
   */
  displayName: string;
  draftVersion: number;
  /**
   * ID
   */
  id: string;
  isDeleted: boolean;
  /**
   * 标识符
   */
  key: string;
  /**
   * 名称
   */
  name: string;
  parentId: string;
  parentName: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 作用域
   */
  scope: string;
  updateTime: string;
  updateUser: string;
}

/**
 * 数据表字段定义
 */
declare interface TableFieldDefineSimple {
  /**
   * ID
   */
  id: string;
  /**
   * 标识符
   */
  key: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 作用域
   */
  scope: string;
  /**
   * 类型
   */
  type: string;
}

/**
 * DefineObject查询对象
 */
declare interface DefineObjectQuery {
  /**
   * key
   */
  key: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 页码，默认值1
   */
  pageIndex: number;
  /**
   * 每页大小，默认值50
   */
  pageSize: number;
  /**
   * 作用域
   */
  scope: string;
  /**
   * 类型
   */
  type: string;
}

/**
 * 应用脚本定义
 */
declare interface ScriptDefine {
  /**
   * 内容
   */
  content: string;
}

/**
 * 部门
 */
declare interface Department {
  /**
   * ID
   */
  id: string;
  /**
   * 是否禁用
   */
  isDisable: boolean;
  /**
   * 部门名称
   */
  name: string;
  /**
   * 负责人列表
   */
  ownerList: Array<string>;
  /**
   * 上级部门ID
   */
  parentId: string;
  /**
   * 描述
   */
  remark: string;
  /**
   * 排序
   */
  rowNumber: number;
  /**
   * 简称
   */
  shortName: string;
}

/**
 * MPP配置文件
 */
declare interface MppWriterConfig {
  /**
   * 输出是否可以被MS Project读取，默认值为true
   */
  microsoftProjectCompatibleOutput: boolean;
  /**
   * 设置在生成MSPDI文件时要使用的保存版本,默认值Project2016
   */
  saveVersion: string;
  /**
   * 控制是否将分时分配数据拆分成天。默认值为true
   */
  splitTimephasedAsDays: boolean;
  /**
   * 控制是否将分时资源分配数据写入文件。默认值为false
   */
  writeTimephasedData: boolean;
}

declare interface MppResourceAssignment {
  getActualCost(): Number;
  getActualFinish(): Date;
  getActualStart(): Date;
  getActualWork(): MppDuration;
  getBaselineCost(): Number;
  getBaselineFinish(): Date;
  getBaselineStart(): Date;
  getBaselineWork(): MppDuration;
  getCost(): Number;
  getDelay(): MppDuration;
  getFinish(): Date;
  getOvertimeWork(): MppDuration;
  getResource(): MppResource;
  getResourceUniqueID(): number;
  getStart(): Date;
  getTask(): MppTask;
  getUniqueID(): number;
  getUnits(): Number;
  getWork(): MppDuration;
  setActualCost(actualCost: Number): void;
  setActualFinish(finish: Date): void;
  setActualStart(start: Date): void;
  setActualWork(val: MppDuration): void;
  setBaselineCost(val: Number): void;
  setBaselineFinish(finish: Date): void;
  setBaselineStart(start: Date): void;
  setBaselineWork(val: MppDuration): void;
  setCost(cost: Number): void;
  setDelay(dur: MppDuration): void;
  setFinish(val: Date): void;
  setOvertimeWork(overtimeWork: MppDuration): void;
  setResourceUniqueID(val: number): void;
  setStart(val: Date): void;
  setUniqueID(uniqueID: number): void;
  setUnits(val: Number): void;
  setWork(dur: MppDuration): void;
}

declare interface MppTable {
  addColumn(column: MppColumn): void;
  getColumns(): Array<MppColumn>;
  getID(): number;
  getName(): string;
  getResourceFlag(): boolean;
}

declare interface MppColumn {
  getFieldType(): string;
  getTitle(): string;
  getWidth(): number;
  setTitle(title: string): void;
  setWidth(width: number): void;
}

declare interface MppTask {
  addChildTask(child: MppTask): void;
  addChildTask(child: MppTask, childOutlineLevel: number): void;
  addPredecessor(targetTask: MppTask, relationType: string, lag: MppDuration): MppRelation;
  addResourceAssignment(assignment: MppResourceAssignment): void;
  addResourceAssignment(resource: MppResource): MppResourceAssignment;
  addTask(): MppTask;
  clearChildTasks(): void;
  generateOutlineNumber(parent: MppTask): void;
  generateWBS(parent: MppTask): void;
  getACWP(): Number;
  getActive(): boolean;
  getActivityID(): string;
  getActivityStatus(): string;
  getActivityType(): string;
  getActualCost(): Number;
  getActualDuration(): MppDuration;
  getActualFinish(): Date;
  getActualOvertimeCost(): Number;
  getActualOvertimeWork(): MppDuration;
  getActualOvertimeWorkProtected(): MppDuration;
  getActualStart(): Date;
  getActualWork(): MppDuration;
  getActualWorkProtected(): MppDuration;
  getBCWP(): Number;
  getBCWS(): Number;
  getBarName(): string;
  getBaselineBudgetCost(): Number;
  getBaselineBudgetCost(baselineNumber: number): Number;
  getBaselineBudgetWork(): MppDuration;
  getBaselineBudgetWork(baselineNumber: number): MppDuration;
  getBaselineCost(): Number;
  getBaselineCost(baselineNumber: number): Number;
  getBaselineDuration(): MppDuration;
  getBaselineDuration(baselineNumber: number): MppDuration;
  getBaselineDurationText(): string;
  getBaselineDurationText(baselineNumber: number): string;
  getBaselineEstimatedDuration(): MppDuration;
  getBaselineEstimatedDuration(baselineNumber: number): MppDuration;
  getBaselineEstimatedFinish(): Date;
  getBaselineEstimatedFinish(baselineNumber: number): Date;
  getBaselineEstimatedStart(): Date;
  getBaselineEstimatedStart(baselineNumber: number): Date;
  getBaselineFinish(): Date;
  getBaselineFinish(baselineNumber: number): Date;
  getBaselineFinishText(): string;
  getBaselineFinishText(baselineNumber: number): string;
  getBaselineFixedCost(): Number;
  getBaselineFixedCost(baselineNumber: number): Number;
  getBaselineFixedCostAccrual(): string;
  getBaselineFixedCostAccrual(baselineNumber: number): string;
  getBaselineStart(): Date;
  getBaselineStart(baselineNumber: number): Date;
  getBaselineStartText(): string;
  getBaselineStartText(baselineNumber: number): string;
  getBaselineWork(): MppDuration;
  getBaselineWork(baselineNumber: number): MppDuration;
  getBidItem(): string;
  getBoardStatusID(): number;
  getBudgetCost(): Number;
  getBudgetWork(): MppDuration;
  getCV(): Number;
  getCanonicalActivityID(): string;
  getCategoryOfWork(): string;
  getChildTasks(): Array<MppTask>;
  getCompleteThrough(): Date;
  getConfirmed(): boolean;
  getConstraintDate(): Date;
  getConstraintType(): string;
  getContact(): string;
  getCost(): Number;
  getCost(index: number): Number;
  getCostVariance(): Number;
  getCreateDate(): Date;
  getCritical(): boolean;
  getDate(index: number): Date;
  getDeadline(): Date;
  getDepartment(): string;
  getDuration(): MppDuration;
  getDuration(index: number): MppDuration;
  getDurationText(): string;
  getDurationVariance(): MppDuration;
  getEarlyFinish(): Date;
  getEarlyStart(): Date;
  getEffortDriven(): boolean;
  getEnterpriseCost(index: number): Number;
  getEnterpriseDate(index: number): Date;
  getEnterpriseDuration(index: number): MppDuration;
  getEnterpriseFlag(index: number): boolean;
  getEnterpriseNumber(index: number): Number;
  getEnterpriseText(index: number): string;
  getExistingResourceAssignment(resource: MppResource): MppResourceAssignment;
  getExpanded(): boolean;
  getExpectedFinish(): Date;
  getExternalEarlyStart(): Date;
  getExternalLateFinish(): Date;
  getExternalProject(): boolean;
  getExternalTask(): boolean;
  getFeatureOfWork(): string;
  getFieldByAlias(alias: string): Object;
  getFinish(): Date;
  getFinish(index: number): Date;
  getFinishSlack(): MppDuration;
  getFinishText(): string;
  getFinishVariance(): MppDuration;
  getFixedCost(): Number;
  getFixedCostAccrual(): string;
  getFlag(index: number): boolean;
  getFreeSlack(): MppDuration;
  getGUID(): string;
  getHammockCode(): boolean;
  getHideBar(): boolean;
  getHyperlink(): string;
  getHyperlinkAddress(): string;
  getHyperlinkScreenTip(): string;
  getHyperlinkSubAddress(): string;
  getID(): number;
  getIgnoreResourceCalendar(): boolean;
  getLateFinish(): Date;
  getLateStart(): Date;
  getLevelAssignments(): boolean;
  getLevelingCanSplit(): boolean;
  getLevelingDelay(): MppDuration;
  getLevelingDelayFormat(): string;
  getLinkedFields(): boolean;
  getLocationUniqueID(): number;
  getLongestPath(): boolean;
  getMail(): string;
  getManager(): string;
  getManualDuration(): MppDuration;
  getMarked(): boolean;
  getMilestone(): boolean;
  getModOrClaimNumber(): string;
  getName(): string;
  getNotes(): string;
  getNull(): boolean;
  getNumber(index: number): Number;
  getObjects(): number;
  getOutlineCode(index: number): string;
  getOutlineLevel(): number;
  getOutlineNumber(): string;
  getOverAllocated(): boolean;
  getOverallPercentComplete(): Number;
  getOvertimeCost(): Number;
  getOvertimeWork(): MppDuration;
  getParentTask(): MppTask;
  getParentTaskUniqueID(): number;
  getPercentCompleteType(): string;
  getPercentageComplete(): Number;
  getPercentageWorkComplete(): Number;
  getPhaseOfWork(): string;
  getPhysicalPercentComplete(): Number;
  getPlannedCost(): Number;
  getPlannedDuration(): MppDuration;
  getPlannedFinish(): Date;
  getPlannedStart(): Date;
  getPlannedWork(): MppDuration;
  getPredecessors(): Array<MppRelation>;
  getPreleveledFinish(): Date;
  getPreleveledStart(): Date;
  getPrimaryResourceID(): number;
  getPriority(): number;
  getProject(): string;
  getRecurring(): boolean;
  getRegularWork(): MppDuration;
  getRemainingCost(): Number;
  getRemainingDuration(): MppDuration;
  getRemainingEarlyFinish(): Date;
  getRemainingEarlyStart(): Date;
  getRemainingLateFinish(): Date;
  getRemainingLateStart(): Date;
  getRemainingOvertimeCost(): Number;
  getRemainingOvertimeWork(): MppDuration;
  getRemainingWork(): MppDuration;
  getResourceAssignments(): Array<MppResourceAssignment>;
  getResourceGroup(): string;
  getResourceInitials(): string;
  getResourceNames(): string;
  getResponsePending(): boolean;
  getResponsibilityCode(): string;
  getResume(): Date;
  getResumeValid(): boolean;
  getRollup(): boolean;
  getSV(): Number;
  getScheduledDuration(): MppDuration;
  getScheduledFinish(): Date;
  getScheduledStart(): Date;
  getSecondaryConstraintDate(): Date;
  getSecondaryConstraintType(): string;
  getSection(): string;
  getSequenceNumber(): number;
  getSprintID(): number;
  getStart(): Date;
  getStart(index: number): Date;
  getStartSlack(): MppDuration;
  getStartText(): string;
  getStartVariance(): MppDuration;
  getStop(): Date;
  getStoredMaterial(): Number;
  getSubprojectFile(): string;
  getSubprojectReadOnly(): boolean;
  getSubprojectTaskID(): number;
  getSubprojectTaskUniqueID(): number;
  getSubprojectTasksUniqueIDOffset(): number;
  getSuccessors(): Array<MppRelation>;
  getSummary(): boolean;
  getSummaryProgress(): Date;
  getSuspendDate(): Date;
  getTaskMode(): string;
  getText(index: number): string;
  getTotalSlack(): MppDuration;
  getType(): string;
  getUniqueID(): number;
  getWBS(): string;
  getWork(): MppDuration;
  getWorkAreaCode(): string;
  getWorkVariance(): MppDuration;
  getWorkersPerDay(): number;
  hasChildTasks(): boolean;
  remove(): void;
  removeChildTask(child: MppTask): void;
  setACWP(acwp: Number): void;
  setActive(active: boolean): void;
  setActivityID(value: string): void;
  setActivityStatus(value: string): void;
  setActivityType(value: string): void;
  setActualCost(val: Number): void;
  setActualDuration(val: MppDuration): void;
  setActualFinish(val: Date): void;
  setActualOvertimeCost(cost: Number): void;
  setActualOvertimeWork(work: MppDuration): void;
  setActualOvertimeWorkProtected(actualOvertimeWorkProtected: MppDuration): void;
  setActualStart(val: Date): void;
  setActualWork(val: MppDuration): void;
  setActualWorkProtected(actualWorkProtected: MppDuration): void;
  setBCWP(val: Number): void;
  setBCWS(val: Number): void;
  setBarName(value: string): void;
  setBaselineBudgetCost(value: Number): void;
  setBaselineBudgetCost(baselineNumber: number, value: Number): void;
  setBaselineBudgetWork(value: MppDuration): void;
  setBaselineBudgetWork(baselineNumber: number, value: MppDuration): void;
  setBaselineCost(val: Number): void;
  setBaselineCost(baselineNumber: number, value: Number): void;
  setBaselineDuration(val: MppDuration): void;
  setBaselineDuration(baselineNumber: number, value: MppDuration): void;
  setBaselineDurationText(value: string): void;
  setBaselineDurationText(baselineNumber: number, value: string): void;
  setBaselineEstimatedDuration(duration: MppDuration): void;
  setBaselineEstimatedDuration(baselineNumber: number, value: MppDuration): void;
  setBaselineEstimatedFinish(date: Date): void;
  setBaselineEstimatedFinish(baselineNumber: number, value: Date): void;
  setBaselineEstimatedStart(date: Date): void;
  setBaselineEstimatedStart(baselineNumber: number, value: Date): void;
  setBaselineFinish(val: Date): void;
  setBaselineFinish(baselineNumber: number, value: Date): void;
  setBaselineFinishText(value: string): void;
  setBaselineFinishText(baselineNumber: number, value: string): void;
  setBaselineFixedCost(val: Number): void;
  setBaselineFixedCost(baselineNumber: number, value: Number): void;
  setBaselineFixedCostAccrual(type: string): void;
  setBaselineFixedCostAccrual(baselineNumber: number, value: string): void;
  setBaselineStart(val: Date): void;
  setBaselineStart(baselineNumber: number, value: Date): void;
  setBaselineStartText(value: string): void;
  setBaselineStartText(baselineNumber: number, value: string): void;
  setBaselineWork(val: MppDuration): void;
  setBaselineWork(baselineNumber: number, value: MppDuration): void;
  setBidItem(value: string): void;
  setBoardStatusID(value: number): void;
  setBudgetCost(value: Number): void;
  setBudgetWork(value: MppDuration): void;
  setCV(val: Number): void;
  setCategoryOfWork(value: string): void;
  setCompleteThrough(value: Date): void;
  setConfirmed(val: boolean): void;
  setConstraintDate(val: Date): void;
  setConstraintType(type: string): void;
  setContact(val: string): void;
  setCost(val: Number): void;
  setCost(index: number, value: Number): void;
  setCostVariance(val: Number): void;
  setCreateDate(val: Date): void;
  setCritical(val: boolean): void;
  setDate(index: number, value: Date): void;
  setDeadline(deadline: Date): void;
  setDepartment(value: string): void;
  setDuration(val: MppDuration): void;
  setDuration(index: number, value: MppDuration): void;
  setDurationText(val: string): void;
  setDurationVariance(duration: MppDuration): void;
  setEarlyFinish(date: Date): void;
  setEarlyStart(date: Date): void;
  setEffortDriven(flag: boolean): void;
  setEnterpriseCost(index: number, value: Number): void;
  setEnterpriseDate(index: number, value: Date): void;
  setEnterpriseDuration(index: number, value: MppDuration): void;
  setEnterpriseFlag(index: number, value: boolean): void;
  setEnterpriseNumber(index: number, value: Number): void;
  setEnterpriseText(index: number, value: string): void;
  setExpanded(expanded: boolean): void;
  setExpectedFinish(value: Date): void;
  setExternalEarlyStart(value: Date): void;
  setExternalLateFinish(value: Date): void;
  setExternalTask(externalTask: boolean): void;
  setFeatureOfWork(value: string): void;
  setFieldByAlias(alias: string, value: Object): void;
  setFinish(date: Date): void;
  setFinish(index: number, value: Date): void;
  setFinishSlack(duration: MppDuration): void;
  setFinishText(val: string): void;
  setFinishVariance(duration: MppDuration): void;
  setFixedCost(val: Number): void;
  setFixedCostAccrual(type: string): void;
  setFlag(index: number, value: boolean): void;
  setFreeSlack(duration: MppDuration): void;
  setGUID(value: string): void;
  setHammockCode(value: boolean): void;
  setHideBar(flag: boolean): void;
  setHyperlink(text: string): void;
  setHyperlinkAddress(text: string): void;
  setHyperlinkScreenTip(text: string): void;
  setHyperlinkSubAddress(text: string): void;
  setID(val: number): void;
  setIgnoreResourceCalendar(ignoreResourceCalendar: boolean): void;
  setLateFinish(date: Date): void;
  setLateStart(date: Date): void;
  setLevelAssignments(flag: boolean): void;
  setLevelingCanSplit(flag: boolean): void;
  setLevelingDelay(val: MppDuration): void;
  setLevelingDelayFormat(levelingDelayFormat: string): void;
  setLinkedFields(flag: boolean): void;
  setLocationUniqueID(uniqueID: number): void;
  setLongestPath(value: boolean): void;
  setMail(value: string): void;
  setManager(value: string): void;
  setManualDuration(dur: MppDuration): void;
  setMarked(flag: boolean): void;
  setMilestone(flag: boolean): void;
  setModOrClaimNumber(value: string): void;
  setName(name: string): void;
  setNotes(notes: string): void;
  setNull(isNull: boolean): void;
  setNumber(index: number, value: Number): void;
  setObjects(val: number): void;
  setOutlineCode(index: number, value: string): void;
  setOutlineLevel(val: number): void;
  setOutlineNumber(val: string): void;
  setOverAllocated(overAllocated: boolean): void;
  setOverallPercentComplete(value: Number): void;
  setOvertimeCost(number: Number): void;
  setOvertimeWork(work: MppDuration): void;
  setPercentCompleteType(value: string): void;
  setPercentageComplete(val: Number): void;
  setPercentageWorkComplete(val: Number): void;
  setPhaseOfWork(value: string): void;
  setPhysicalPercentComplete(physicalPercentComplete: Number): void;
  setPlannedCost(value: Number): void;
  setPlannedDuration(value: MppDuration): void;
  setPlannedFinish(value: Date): void;
  setPlannedStart(value: Date): void;
  setPlannedWork(value: MppDuration): void;
  setPreleveledFinish(date: Date): void;
  setPreleveledStart(date: Date): void;
  setPrimaryResourceID(value: number): void;
  setPriority(priority: number): void;
  setProject(val: string): void;
  setRecurring(recurring: boolean): void;
  setRegularWork(regularWork: MppDuration): void;
  setRemainingCost(val: Number): void;
  setRemainingDuration(val: MppDuration): void;
  setRemainingEarlyFinish(date: Date): void;
  setRemainingEarlyStart(date: Date): void;
  setRemainingLateFinish(date: Date): void;
  setRemainingLateStart(date: Date): void;
  setRemainingOvertimeCost(cost: Number): void;
  setRemainingOvertimeWork(work: MppDuration): void;
  setRemainingWork(val: MppDuration): void;
  setResourceGroup(val: string): void;
  setResourceInitials(val: string): void;
  setResourceNames(val: string): void;
  setResponsePending(value: boolean): void;
  setResponsibilityCode(value: string): void;
  setResume(val: Date): void;
  setResumeValid(resumeValid: boolean): void;
  setRollup(val: boolean): void;
  setSV(val: Number): void;
  setScheduledDuration(value: MppDuration): void;
  setScheduledFinish(value: Date): void;
  setScheduledStart(value: Date): void;
  setSecondaryConstraintDate(date: Date): void;
  setSecondaryConstraintType(type: string): void;
  setSection(value: string): void;
  setSequenceNumber(sequenceNumber: number): void;
  setSprintID(value: number): void;
  setStart(date: Date): void;
  setStart(index: number, value: Date): void;
  setStartSlack(duration: MppDuration): void;
  setStartText(val: string): void;
  setStartVariance(val: MppDuration): void;
  setStop(val: Date): void;
  setStoredMaterial(value: Number): void;
  setSubprojectFile(val: string): void;
  setSubprojectReadOnly(subprojectReadOnly: boolean): void;
  setSubprojectTaskID(subprojectTaskID: number): void;
  setSubprojectTaskUniqueID(subprojectUniqueTaskID: number): void;
  setSubprojectTasksUniqueIDOffset(offset: number): void;
  setSummary(val: boolean): void;
  setSummaryProgress(value: Date): void;
  setSuspendDate(value: Date): void;
  setTaskMode(mode: string): void;
  setText(index: number, value: string): void;
  setTotalSlack(val: MppDuration): void;
  setType(type: string): void;
  setUniqueID(val: number): void;
  setUpdateNeeded(val: boolean): void;
  setWBS(val: string): void;
  setWork(val: MppDuration): void;
  setWorkAreaCode(value: string): void;
  setWorkVariance(val: MppDuration): void;
  setWorkersPerDay(value: number): void;
}

declare interface MppTaskContainer {
  add(): MppTask;
  list(): Array<MppTask>;
  size(): number;
}

declare interface MppResourceAssignmentContainer {
  list(): Array<MppResourceAssignment>;
  size(): number;
}

declare interface MppGroupContainer {
  list(): Array<MppGroup>;
  size(): number;
}

declare interface MppDuration {
  duration: number;
  timeUnit: string;
}

declare interface MppCustomField {
  getAlias(): string;
  getFieldType(): string;
  getMasks(): Array<MppCustomFieldValueMask>;
  getUniqueID(): number;
  setAlias(alias: string): MppCustomField;
  setUniqueID(uniqueID: number): MppCustomField;
}

declare interface MppResourceContainer {
  list(): Array<MppResource>;
  size(): number;
}

declare interface MppCustomFieldContainer {
  add(fieldType: string): MppCustomField;
  get(fieldType: string): MppCustomField;
  getOrCreate(fieldType: string): MppCustomField;
  list(): Array<MppCustomField>;
  size(): number;
}

declare interface MppRelation {
  getLag(): MppDuration;
  getSourceTask(): MppTask;
  getTargetTask(): MppTask;
  getType(): string;
  getUniqueID(): number;
}

/**
 * MPP自定义字段掩码
 */
declare interface MppCustomFieldValueMask {
  /**
   * 长度
   */
  length: number;
  /**
   * 级别
   */
  level: number;
  /**
   * 分隔符
   */
  separator: string;
  type: MppCustomFieldValueDataType;
}

declare interface MppTableContainer {
  list(): Array<MppTable>;
  size(): number;
}

declare interface MppGroup {
  getID(): number;
  getName(): string;
  getShowSummaryTasks(): boolean;
}

/**
 * 自定义字段数据类型
 */
declare interface MppCustomFieldValueDataType {
  /**
   * 数据类型
   */
  dataType: string;
  /**
   * 掩码
   */
  maskValue: number;
  /**
   * 值
   */
  value: number;
}

declare interface MppProjectFile {
  addResource(): MppResource;
  addTask(): MppTask;
  getCustomFields(): MppCustomFieldContainer;
  getGroups(): MppGroupContainer;
  getResourceAssignments(): MppResourceAssignmentContainer;
  getResources(): MppResourceContainer;
  getTables(): MppTableContainer;
  getTasks(): MppTaskContainer;
}

declare interface MppResource {
  getID(): number;
  getName(): string;
  getType(): string;
  setName(val: string): void;
}

declare interface notification {
  /**
   * 删除通知
   * @param id 通知ID 
   * @returns 
   */
  deleteNotification(id: string): number;
  /**
   * 获取当前应用下是否启用通知的线程局部变量
   * @returns 
   */
  isThreadLocalEnableNotify(): boolean;
  /**
   * 获取通知列表
   * @param query 查询条件 
   * @returns 
   */
  queryCustomNotificationList(query: Query): Array<Notification>;
  /**
   * 获取通知总数
   * @param filter 过滤条件 
   * @returns 
   */
  queryCustomNotificationListCount(filter: Filter): number;
  /**
   * 获取通知列表
   * @param query 查询条件 
   * @returns 
   */
  queryNotificationList(query: Query): Array<Notification>;
  /**
   * 获取通知总数
   * @param filter 过滤条件 
   * @returns 
   */
  queryNotificationListCount(filter: Filter): number;
  /**
   * 发送消息通知
   * @param notification 系统通知 
   * @returns 
   */
  sendNotification(notification: NotificationForm): string;
  /**
   * 设置自定义消息已发送
   * @param notificationId 系统通知ID 
   * @returns 
   */
  setCustomNotificationSent(notificationId: string): void;
  /**
   * 设置当前应用下是否启用通知的线程局部变量
   * @param enable 是否启用 
   * @returns 
   */
  setThreadLocalEnableNotify(enable: boolean): void;
  /**
   * 更新通知
   * @param form 通知对象 
   * @param updateFieldList 更新字段列表 
   * @returns 
   */
  updateNotification(form: Notification, updateFieldList: Array<string>): number;
}

/**
 * 消息发布设置
 */
declare interface MqPublishSetting {
  /**
   * 投递模式
   */
  deliveryMode: number;
  /**
   * 生效时长 单位：毫秒
   */
  expiration: number;
  /**
   * 优先级
   */
  priority: number;
  /**
   * 是否等待确认
   */
  waitForConfirms: boolean;
}

/**
 * 消息队列消息
 */
declare interface MqMessage {
  /**
   * 消息体
   */
  body: Object;
  /**
   * 消息参数
   */
  props: MqMessageProperties;
}

/**
 * 消息参数
 */
declare interface MqMessageProperties {
  /**
   * 发生应用ID
   */
  appId: string;
  /**
   * 集群ID
   */
  clusterId: string;
  /**
   * 消费队列
   */
  consumerQueue: string;
  /**
   * 消费标记
   */
  consumerTag: string;
  /**
   * 消息内容的编码方式
   */
  contentEncoding: string;
  /**
   * 消息内容长度
   */
  contentLength: number;
  /**
   * 消息内容的MIME类型
   */
  contentType: string;
  /**
   * 关联请求和响应的ID
   */
  correlationId: string;
  /**
   * 消息的持久性，2表示持久化消息，1表示非持久化消息。
   */
  deliveryMode: string;
  /**
   * 接收标志
   */
  deliveryTag: number;
  /**
   * 消息的过期时间，单位为毫秒。
   */
  expiration: string;
  /**
   * 最后重试
   */
  finalRetryForMessageWithNoId: boolean;
  /**
   * 消息头
   */
  headers: Record<string, Object>;
  /**
   * 是否最后一个
   */
  lastInBatch: boolean;
  /**
   * 消息数量
   */
  messageCount: number;
  /**
   * 消息ID
   */
  messageId: string;
  /**
   * 消息的优先级，数值越高优先级越高。
   */
  priority: number;
  /**
   * 投影
   */
  projectionUsed: boolean;
  /**
   * 发布序列号
   */
  publishSequenceNumber: number;
  /**
   * 接收时延
   */
  receivedDelay: number;
  /**
   * 接收模式
   */
  receivedDeliveryMode: string;
  /**
   * 接收交换机
   */
  receivedExchange: string;
  /**
   * 接收路由
   */
  receivedRoutingKey: string;
  /**
   * 接收用户
   */
  receivedUserId: string;
  /**
   * 是否已发送
   */
  redelivered: boolean;
  /**
   * 指定接收响应的队列名称
   */
  replyTo: string;
  /**
   * 消息的时间戳，消息生成的时间。
   */
  timestamp: Date;
  /**
   * 消息的类型
   */
  type: string;
  /**
   * 发送用户
   */
  userId: string;
}

/**
 * AI聊天配置
 */
declare interface OpenAIChatSetting {
  /**
   * OpenAI API 密钥
   */
  apiKey: string;
  /**
   * 频率惩罚，防止重复内容 默认是0
   */
  frequencyPenalty: number;
  /**
   * 生成的最大Token数 默认是0
   */
  maxTokens: number;
  /**
   * 发送的内容
   */
  messages: Array<OpenAIChatMessageSetting>;
  /**
   * 使用的 GPT 模型，默认是 gpt-4o
   */
  model: string;
  /**
   * 生成的回答数量 默认是1
   */
  n: number;
  /**
   * 话题新颖性惩罚 默认是0
   */
  presencePenalty: number;
  /**
   * 停止词（在遇到以下词的时候停止生成，多个停止词之间用,分割。最多4个
   */
  stop: string;
  /**
   * 采样温度，值越高，输出的随机性越大 默认是1
   */
  temperature: number;
  /**
   * 超时时间（秒）默认是0
   */
  timeout: number;
  /**
   * Top-p 采样（核采样）参数 默认是1
   */
  topp: number;
  /**
   * OpenAI API 请求地址, 默认是https://api.openai.com/v1/chat/completions
   */
  url: string;
}

/**
 * AI会话
 */
declare interface AiAgentThread {
  /**
   * 应用ID
   */
  applicationId: string;
  /**
   * 团队ID
   */
  companyId: string;
  /**
   * 创建人头像
   */
  createAccountAvatar: string;
  /**
   * 创建人ID
   */
  createAccountId: string;
  /**
   * 创建人名称
   */
  createAccountName: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * ID
   */
  id: string;
  /**
   * 是否是调试模式
   */
  isDebug: boolean;
  /**
   * 模块ID
   */
  moduleId: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 排序字段
   */
  rowNumber: number;
  /**
   * 最后更新时间
   */
  updateTime: Date;
  setDebug(isDebug: boolean): void;
}

/**
 * AI聊天消息音频出参数
 */
declare interface OpenAIChatAudioOptions {
  /**
   * 格式（如wav, mp3, flac, opus,  pcm16）
   */
  format: string;
  /**
   * 语音类型（如alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer）
   */
  voice: string;
}

/**
 * AI消息
 */
declare interface AiAgentContentMessage {
  /**
   * 图片链接
   */
  imageUrl: string;
  /**
   * 文本
   */
  text: string;
  /**
   * 类型
   */
  type: string;
}

/**
 * AI聊天响应toolcall函数
 */
declare interface OpenAIChatRespToolFunction {
  /**
   * 参数
   */
  arguments: string;
  /**
   * 函数ID
   */
  name: string;
}

/**
 * AI接口调用错误信息
 */
declare interface OpenAIChatRespError {
  /**
   * 错误码
   */
  code: string;
  /**
   * 错误消息
   */
  message: string;
  /**
   * 参数
   */
  param: Object;
  /**
   * 错误类型
   */
  type: string;
}

/**
 * AI聊天消息流式传输配置选项
 */
declare interface OpenAIChatStreamOptions {
  /**
   * 是否包含使用统计信息
启用时：
1. 在流结束前发送最终统计块
2. 各数据块含空usage字段
注意：
- 流中断时可能丢失最终统计
   */
  include_usage: boolean;
}

/**
 * AI聊天近似地理位置配置
 */
declare interface OpenAIChatUserLocation {
  /**
   * 近似位置参数（必填）
   */
  approximate: OpenAIChatApproximate;
  /**
   * 位置近似的类型。始终为approximate
   */
  type: string;
}

/**
 * AI聊天消息预测输出配置
 */
declare interface OpenAIChatPredictionOptions {
  /**
   * 静态预测内容（需与模型生成内容匹配）
格式：字符串或数组
典型用例：
- 重新生成代码文件（90%内容不变）
- 模板填充场景（仅少数变量变化）
示例：
content = "public class User {\n  private String id;\n"
   */
  content: Object;
  /**
   * 预测内容类型（当前仅支持'content'）
必填字段
   */
  type: string;
}

/**
 * AI聊天工具调用策略配置(对象时配置)
 */
declare interface OpenAIChatToolChoice {
  /**
   * 函数详细定义
   */
  function: OpenAIChatToolChoiceFunction;
  /**
   * 工具类型（当前仅支持function）
   */
  type: string;
}

/**
 * AI聊天请求包
 */
declare interface OpenAIChatReq {
  /**
   * 音频输出参数，当modalities包含audio时必填
   */
  audio: OpenAIChatAudioOptions;
  /**
   * 频率惩罚值，介于-2.0到2.0，正值减少重复内容
   */
  frequency_penalty: number;
  /**
   * 标记偏差映射表（token ID → 偏差值-100~100）通过调整特定标记的生成概率：正值增加出现概率（100强制选择）负值降低出现概率（-100强制排除）示例：禁用政治相关词汇时，可设置对应token ID为-100
   */
  logit_bias: Record<number, number>;
  /**
   * 是否返回输出标记的对数概率（需配合top_logprobs使用）true时返回每个输出token的
   */
  logprobs: boolean;
  /**
   * 生成的最大token数（包括可见输出和推理token）
   */
  max_completion_tokens: number;
  /**
   * 生成的最大token数（包括可见输出和推理token）
   */
  max_tokens: number;
  /**
   * 对话消息列表（支持文本/图像/音频等多模态输入）
   */
  messages: Array<OpenAIChatMessage>;
  /**
   * 元数据键值对（最多16组）
技术规格：
- 键：字符串（最长64字符）
- 值：字符串（最长512字符）
典型用例：
1. 请求追踪（如session_id）
2. 环境标记（如env=production）
3. 数据分类（如category=finance）
   */
  metadata: Record<string, string>;
  /**
   * 输出类型配置（需与model能力匹配）
支持值：
- 文本：["text"]（默认）
- 多模态：["text", "audio"]
音频输出需同时配置audio参数
   */
  modalities: Array<string>;
  /**
   * 模型ID，如gpt-4o，决定生成能力和价格
   */
  model: string;
  /**
   * 生成的消息选项数量（建议保持1以节省成本）
   */
  n: number;
  /**
   * 是否启用并行工具调用（默认true）
启用时允许同时执行多个工具调用
适用场景：
- 需要同时调用多个API的复杂任务
- 工具调用之间无依赖关系时
禁用场景：
- 工具调用存在严格顺序要求
   */
  parallel_tool_calls: boolean;
  /**
   * 预测输出配置（加速内容再生）
当响应内容大部分已知时使用：
1. 文档模板填充（90%内容不变）
2. 代码文件局部修改（函数主体不变）
3. 结构化数据更新（仅部分字段变化）
需配合prediction_options配置使用
   */
  prediction: OpenAIChatPredictionOptions;
  /**
   * 话题新颖度惩罚，介于-2.0到2.0，正值增加新话题可能性
   */
  presence_penalty: number;
  /**
   * 响应格式约束配置
支持模式：
1. 默认文本：{ type: "text" }
2. 旧版JSON：{ type: "json_object" }
3. 结构化JSON：{ type: "json_schema", json_schema: {...} }
推荐优先使用json_schema模式
   */
  response_format: OpenAIChatResponseFormatConfig;
  /**
   * 确定性生成种子（Beta功能）
技术特性：
- 相同seed+参数组合会尽可能产生相同输出
- 需配合system_fingerprint监控后端变化
使用场景：
1. 结果可复现性测试（seed=123）
2. A/B测试中保持部分参数恒定
注意：实际仍可能有微小差异
   */
  seed: number;
  /**
   * 服务层级配置（默认auto）
可选值：
auto - 自动选择（优先使用scale tier额度）
default - 基础服务（无延迟保证）
flex - 弹性处理（专用资源池）
响应中将包含实际使用的service_tier值
   */
  service_tier: string;
  /**
   * 停止序列（最多4个），不适用于o3/o4-mini等最新推理模型
   */
  stop: Object;
  /**
   * 是否存储输出（用于模型蒸馏）
   */
  store: boolean;
  /**
   * 是否启用流式传输，true表示流式输出
   */
  stream: boolean;
  /**
   * 流式传输配置选项（仅在stream=true时生效）
功能说明：
- 控制流式响应数据格式
- 监控实时资源消耗
典型配置：
new StreamOptions().setIncludeUsage(true)
   */
  stream_options: OpenAIChatStreamOptions;
  /**
   * 采样温度（0-2），值越高输出越随机，建议与top_p二选一调整
   */
  temperature: number;
  /**
   * 工具调用策略配置
支持格式：
1. 字符串模式：
   - 'none'：禁用工具调用
   - 'auto'：自动选择（默认）
   - 'required'：必须调用工具
2. 对象模式：
   {"type":"function","function":{"name":"get_weather"}}
   */
  tool_choice: Object;
  /**
   * 可调用工具列表（当前仅支持函数）
技术规格：
- 最多128个函数
- 每个工具必须包含function定义
典型用例：
1. 数据查询API集成
2. 数学计算工具集
3. 第三方服务连接器
   */
  tools: Array<OpenAIChatReqTool>;
  /**
   * 返回每个token位置的前N个可能标记
技术规格：
- 取值范围：0-20
- 需配合logprobs=true使用
示例：
设置5时返回每个位置概率前5的token
输出结构包含：
- token文本
- 对数概率值
- 偏移量信息
   */
  top_logprobs: number;
  /**
   * 核采样阈值（默认1.0）
工作原理：
0.1 → 仅考虑概率质量前10%的token
典型配置：
- 创意生成：0.9
- 精确回答：0.5
注意：
与temperature参数二选一调整
   */
  top_p: number;
  /**
   * 终端用户标识符
功能说明：
- 用于滥用行为监控
- 支持格式：字母/数字/特殊字符混合
合规要求：
1. 不得包含PII信息
2. 建议使用匿名UUID
示例："user_9FQ3Z"
   */
  user: string;
  /**
   * 网络搜索工具配置
启用后模型将自动联网检索信息
典型用例：
1. 实时资讯查询
2. 本地化信息获取
3. 事实性数据验证
   */
  web_search_options: OpenAIChatWebSearchOptions;
}

/**
 * AI聊天消息
 */
declare interface OpenAIChatMessage {
  /**
   * 消息内容（支持多种格式）
允许类型：
1. 纯文本字符串
2. 内容部件数组（当前仅支持text类型）
示例：
- 简单文本："你好，世界"
- 多段落：[
  {"type":"text", "text":"第一段"},
  {"type":"text", "text":"第二段"}
]
   */
  content: Object;
  /**
   * 角色名称（可选）
   */
  name: string;
  /**
   * 角色（如 "system"、"user"、"assistant"）
   */
  role: string;
  /**
   * 工具调用 ID
   */
  tool_call_id: string;
  /**
   * 工具调用信息（可能是 JSON 结构）
   */
  tool_calls: Object;
}

/**
 * AI会话消息
 */
declare interface AiAgentThreadMessage {
  /**
   * 应用ID
   */
  applicationId: string;
  /**
   * 团队ID
   */
  companyId: string;
  /**
   * 生成内容token数
   */
  completionTokens: number;
  /**
   * 内容
   */
  content: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 结束时间
   */
  endTime: Date;
  /**
   * 完成原因
   */
  finishReason: string;
  /**
   * ID
   */
  id: number;
  /**
   * 图片
   */
  images: string;
  /**
   * 消息ID
   */
  messageId: string;
  /**
   * 模块ID
   */
  moduleId: string;
  /**
   * 提示词token数
   */
  promptTokens: number;
  /**
   * 角色
   */
  role: string;
  /**
   * 开始时间
   */
  startTime: Date;
  /**
   * 会话ID
   */
  threadId: string;
  /**
   * 工具调用
   */
  toolCalls: string;
  /**
   * 总token数
   */
  totalTokens: number;
}

/**
 * AI聊天消息内容
 */
declare interface OpenAIChatMessageContent {
  /**
   * 文本内容
格式要求：
- 非空字符串
- 长度限制：4096字符
   */
  text: string;
}

/**
 * AI聊天返回值
 */
declare interface OpenAIChatResp {
  /**
   * 响应选项列表（数量由请求参数n决定）
每个选项包含：
- 生成内容
- 终止原因
- 索引序号
   */
  choices: Array<OpenAIChatRespChoices>;
  /**
   * 响应创建时间戳（Unix秒级时间）
示例：1715751234 → 2024-05-15 10:33:54
   */
  created: number;
  /**
   * 错误信息
   */
  error: OpenAIChatRespError;
  /**
   * 响应唯一标识符（格式：chatcmpl-XXXXXX）
用于日志追踪和审计
   */
  id: string;
  /**
   * 实际使用的模型标识
可能与请求模型不同（自动升级时）
示例：gpt-4o-2024-05-13
   */
  model: string;
  /**
   * 对象类型固定值（chat.completion）
用于响应类型识别
   */
  object: string;
  /**
   * 实际使用的服务层级
可能值：auto/default/flex
用于计费分析和性能监控
   */
  service_tier: string;
  /**
   * 后端配置指纹（格式：fp_xxxxxx）
技术特性：
1. 标识模型运行时环境
2. 检测后台配置变更
3. 与seed参数共同保障确定性输出
   */
  system_fingerprint: string;
  /**
   * 消耗的Token统计信息
   */
  usage: OpenAIChatRespUsage;
}

/**
 * AI聊天请求函数详细定义
 */
declare interface OpenAIChatReqToolFunction {
  /**
   * 函数功能描述（影响模型调用决策）
示例："计算商业贷款月供金额"
   */
  description: string;
  /**
   * 函数名称（需符合[a-zA-Z0-9_-]格式，最长64字符）
示例：calculate_loan_payment
   */
  name: string;
  /**
   * 参数JSON Schema定义
示例：{"type":"object", "required":["amount"], 
"properties":{"amount":{"type":"number", "description":"贷款总额"}}}
   */
  parameters: Object;
  /**
   * 严格模式（默认false）
启用时：
- 强制参数类型检查
- 必须提供required字段
- 不支持正则表达式等复杂约束
   */
  strict_mode: boolean;
}

/**
 * AI聊天工具调用策略配置函数定义
 */
declare interface OpenAIChatToolChoiceFunction {
  /**
   * 函数名称（需符合命名规范）
示例：get_current_weather
   */
  name: string;
}

/**
 * AI使用token细分
 */
declare interface OpenAIChatRespCompletionTokensDetails {
  /**
   * 预测输出中被采纳的token数量
应用场景：
当使用Predicted Outputs时，模型实际采纳的预测内容token数
示例：
预测提供100token，其中80被采用 → accepted=80
   */
  accepted_prediction_tokens: number;
  /**
   * 音频生成消耗的token数
计费规则：
1秒音频 ≈ 50 tokens
示例：
生成30秒语音 → 约1500 tokens
   */
  audio_tokens: number;
  /**
   * 推理过程消耗的token数
技术特性：
1. 反映模型内部思考过程
2. 可通过reasoning_effort参数调节
优化建议：
简单任务设为low可减少30%推理token
   */
  reasoning_tokens: number;
  /**
   * 预测输出中被拒绝的token数量
计费说明：
虽未采用但仍会计入账单
最佳实践：
优化预测内容匹配率以减少浪费
   */
  rejected_prediction_tokens: number;
}

/**
 * AI聊天响应选择
 */
declare interface OpenAIChatRespChoices {
  /**
   * 生成终止原因
可能值：
stop - 正常终止
length - 达到token限制
tool_calls - 触发了工具调用
   */
  finish_reason: string;
  /**
   * 生成结果索引号（从0开始）
   */
  index: number;
  /**
   * 生成的聊天消息
可能包含多模态内容（文本/音频）
   */
  message: OpenAIChatMessage;
}

/**
 * 输入提示token使用细分
 */
declare interface OpenAIChatRespPromptTokensDetails {
  /**
   * 音频输入token数量
换算规则：
1秒音频 ≈ 50 tokens
示例：
30秒语音输入 → 约1500 tokens
计费说明：与文本token采用相同费率
   */
  audio_tokens: number;
  /**
   * 缓存复用token数量
技术特性：
1. 来自历史相似请求的缓存
2. 不计入实际计费token
优化建议：
重复内容请求可提升缓存命中率
   */
  cached_tokens: number;
}

/**
 * AI聊天响应ToolCall
 */
declare interface OpenAIChatRespTool {
  /**
   * ToolCall函数
   */
  function: OpenAIChatRespToolFunction;
  /**
   * ID
   */
  id: string;
  /**
   * 工具类型（固定值'function'）
   */
  type: string;
}

/**
 * AI聊天请求可调用工具定义
 */
declare interface OpenAIChatReqTool {
  /**
   * 函数详细定义（名称/描述/参数schema）
   */
  function: OpenAIChatReqToolFunction;
  /**
   * 工具类型（固定值'function'）
   */
  type: string;
}

/**
 * AI聊天消息辅助配置类
 */
declare interface OpenAIChatResponseFormatConfig {
  /**
   * JSON Schema定义（type=json_schema时必填）
示例：{"type":"object","properties":{"name":{"type":"string"}}}
   */
  json_schema: Object;
  /**
   * 格式类型（必填）
可选值：text/json_object/json_schema
   */
  type: string;
}

/**
 * AI聊天消息网络搜索配置
 */
declare interface OpenAIChatWebSearchOptions {
  /**
   * 搜索上下文窗口大小（默认medium）
可选值：
- low：精简上下文（约500 tokens）
- medium：平衡模式（约1500 tokens）
- high：扩展上下文（约3000 tokens）
   */
  search_context_size: string;
  /**
   * 近似地理位置配置
用于地域相关性搜索
示例：设置用户所在城市范围
   */
  user_location: OpenAIChatUserLocation;
}

/**
 * AI聊天消息配置
 */
declare interface OpenAIChatMessageSetting {
  /**
   * 内容
   */
  content: Object;
  /**
   * 角色
   */
  role: string;
}

/**
 * AI消耗的Token统计信息
 */
declare interface OpenAIChatRespUsage {
  /**
   * 生成内容消耗的token数量
包含：
- 文本生成
- 音频/图像生成（如果启用多模态）
计费依据：0.002美元/千token（示例）
   */
  completion_tokens: number;
  /**
   * 生成内容token使用明细
详细拆分：
- 文本token
- 音频token（如启用）
- 图像token（如启用）
用途：
1. 多模态成本分析
2. 生成内容优化
   */
  completion_tokens_details: OpenAIChatRespCompletionTokensDetails;
  /**
   * 输入提示消耗的token数量
计算方式：
(文本字符数 ÷ 4) + 多模态内容token加成
   */
  prompt_tokens: number;
  /**
   * 输入提示token明细
   */
  prompt_tokens_details: OpenAIChatRespPromptTokensDetails;
  /**
   * 总token消耗量
计算规则：
prompt_tokens + completion_tokens
监控建议：
设置阈值告警（如单次请求>4096 tokens）
   */
  total_tokens: number;
}

/**
 * AI聊天近似地理位置
 */
declare interface OpenAIChatApproximate {
  /**
   * 城市名称（自由文本输入）
示例："北京市"
   */
  city: string;
  /**
   * 国家代码（ISO 3166-1两位字母标准）
示例："CN"（中国）
验证建议：
1. 长度必须为2字符
2. 仅允许大写字母
   */
  country: string;
  /**
   * 纬度（-90~90）
   */
  latitude: number;
  /**
   * 经度（-180~180）
   */
  longitude: number;
  /**
   * 搜索半径（米）
   */
  radius: number;
  /**
   * 行政区域名称（自由文本输入）
示例："广东省"或"California"
注意：
- 不同于省份，可包含更小行政单位
   */
  region: string;
  /**
   * 时区配置（IANA格式）
示例："Asia/Shanghai"
典型值：
- 中国标准时间：Asia/Shanghai
- 太平洋时间：America/Los_Angeles
   */
  timezone: string;
}

declare interface company {
  /**
   * 新增应用分组
   * @param bean 应用分组 
   * @returns 
   */
  addAppGroup(bean: AppGroup): string;
  /**
   * 将账号添加到团队成员列表中
   * @param accountId 账号ID 
   * @param departmentOidList 部门OID列表 
   * @param roleKeyList 角色Key列表 
   * @returns 
   */
  addCompanyMember(accountId: string, departmentOidList: Array<string>, roleKeyList: Array<string>): void;
  /**
   * 删除应用分组
   * @param groupId 应用分组ID 
   * @returns 
   */
  deleteAppGroup(groupId: string): number;
  /**
   * 将账号从团队成员中移除
   * @param accountId 账号ID 
   * @returns 
   */
  deleteCompanyMember(accountId: string): number;
  /**
   * 查询当前团队信息
   * @returns 
   */
  getCompany(): Company;
  /**
   * 查询用户能访问的应用列表
   * @param accountId 账号ID 
   * @returns 
   */
  getUserAppList(accountId: string): UserAppList;
  /**
   * 安装应用
   * @param req 安装应用请求 
   * @returns 
   */
  installApp(req: InstallAppRequest): string;
  /**
   * 通过ID查询应用分组
   * @param id 应用分组ID 
   * @returns 
   */
  queryAppGroupById(id: string): AppGroup;
  /**
   * 查询应用分组列表
   * @param query 查询对象 
   * @returns 
   */
  queryAppGroupList(query: Query): Array<AppGroup>;
  /**
   * 查询应用分组列表数量
   * @param filter 过滤条件 
   * @returns 
   */
  queryAppGroupListCount(filter: Filter): number;
  /**
   * 查询应用列表
   * @param query 查询对象 
   * @returns 
   */
  queryAppList(query: Query): Array<App>;
  /**
   * 查询应用列表数量
   * @param filter 过滤条件 
   * @returns 
   */
  queryAppListCount(filter: Filter): number;
  /**
   * 查询团队成员列表
   * @param query 查询对象 
   * @returns 
   */
  queryCompanyMemberList(query: Query): Array<CompanyMember>;
  /**
   * 查询团队成员列表数量
   * @param filter 过滤条件 
   * @returns 
   */
  queryCompanyMemberListCount(filter: Filter): number;
  /**
   * 查询团队角色列表
   * @returns 
   */
  queryRoleList(): Array<CompanyRole>;
  /**
   * 卸载应用
   * @param appId 应用ID 
   * @returns 
   */
  uninstallApp(appId: string): void;
  /**
   * 编辑应用分组
   * @param bean 应用分组 
   * @param updateFields 更新的字段列表 
   * @returns 
   */
  updateAppGroup(bean: AppGroup, updateFields: Array<string>): number;
  /**
   * 更新团队成员
   * @param member 团队成员 
   * @param updateFields 更新字段 
   * @returns 
   */
  updateCompanyMember(member: CompanyMember, updateFields: Array<string>): number;
}

declare interface textindex {
  /**
   * 搜索
   * @param moduleKey 模块标识符 
   * @param vquery 查询条件 
   * @returns 
   */
  search(moduleKey: string, vquery: TextindexSearchQuery): TextindexSearchResult;
}

declare interface excel {
  /**
   * 创建模板Cell对象
   * @param templateCell 模板Cell 
   * @returns 
   */
  createTemplateCell(templateCell: TemplateCell): ExcelCellEntity;
  /**
   * 创建模板图片对象
   * @param tp 模板图片 
   * @returns 
   */
  createTemplatePicture(tp: TemplatePicture): ExcelImageEntity;
  /**
   * 打开一个已经存在的Excel文件
   * @param file 文件路径 
   * @returns 
   */
  openExistFile(file: string): ExcelWorkbook;
  /**
   * 创建一个新的Excel文件
   * @param file 文件路径 
   * @returns 
   */
  openNewFile(file: string): ExcelWorkbook;
  /**
   * 使用模板文件生成Excel
   * @param file 文件路径 
   * @param template 模板文件 
   * @param ctx 上下文 
   * @returns 
   */
  openWithTemplate(file: string, template: string, ctx: Record<string, Object>): ExcelWorkbook;
  /**
   * 使用模板文件生成Excel
   * @param file 文件路径 
   * @param template 模板文件 
   * @param sheetNums 上下文 
   * @param ctx sheet序号 
   * @returns 
   */
  openWithTemplateWithSheets(file: string, template: string, sheetNums: Array<number>, ctx: Record<string, Object>): ExcelWorkbook;
}

declare interface app {
  /**
   * 终止当前脚本的运行
   * @param message 消息 
   * @returns 
   */
  abort(message: string): void;
  /**
   * 终止当前脚本的运行
   * @param message 消息 
   * @param code 代码 
   * @returns 
   */
  abort(message: string, code: number): void;
  /**
   * 新增应用变更记录
   * @param content 变更内容 
   * @returns 
   */
  addAppChangeLog(content: string): string;
  /**
   * 新增自定义角色
   * @param role 自定义角色 
   * @returns 
   */
  addCustomRole(role: CustomRole): void;
  /**
   * 新增应用设计成员列表
   * @param type 类型 
   * @param userList 用户列表 
   * @returns 
   */
  addDesignerUserList(type: string, userList: Array<string>): void;
  /**
   * 获取当前应用的配置信息
   * @returns 
   */
  appDefine(): AppDefine;
  /**
   * 获取环境变量
   * @param id 环境变量ID 
   * @returns 
   */
  appEnvProp(id: string): string;
  /**
   * 查询当前的应用ID
   * @returns 
   */
  appId(): string;
  /**
   * 查询应用运行信息
   * @returns 
   */
  appInfo(): App;
  /**
   * 取消收藏模块列表
   * @param moduleIdList 模块ID列表 
   * @returns 
   */
  cancelFavoriteModule(moduleIdList: Array<string>): number;
  /**
   * 删除应用变更记录
   * @param id 变更记录ID 
   * @returns 
   */
  deleteAppChangeLog(id: string): number;
  /**
   * 删除自定义角色
   * @param id 自定义角色ID 
   * @returns 
   */
  deleteCustomRole(id: string): number;
  /**
   * 获取钉钉AccessToken
   * @returns 
   */
  dingtalkAccessToken(): string;
  /**
   * 执行脚本
   * @param script 脚本 
   * @returns 
   */
  eval(script: string): Object;
  /**
   * 收藏模块列表
   * @param moduleIdList 模块ID列表 
   * @returns 
   */
  favoriteModule(moduleIdList: Array<string>): Array<string>;
  /**
   * 获取飞书应用AccessToken
   * @returns 
   */
  feishuAccessToken(): string;
  /**
   * 获取飞书租户AccessToken
   * @returns 
   */
  feishuTenantAccessToken(): string;
  /**
   * 通过应用标识符查询应用Id
   * @param key 应用标识符 
   * @returns 
   */
  getAppIdByKey(key: string): string;
  /**
   * 查询应用设计成员列表
   * @param type 类型 
   * @returns 
   */
  getDesignerUserList(type: string): Array<string>;
  /**
   * 通过模块标识符查询模块ID
   * @param key 模块标识符 
   * @returns 
   */
  getModuleIdByKey(key: string): string;
  /**
   * 通过模块ID查询模块标识符
   * @param id 模块ID 
   * @returns 
   */
  getModuleKeyById(id: string): string;
  /**
   * 返回当前app的性能统计列表
   * @returns 
   */
  getPerformanceStatistics(): Array<ApplicationProcess>;
  /**
   * 通过路径返回脚本内容
   * @param path 路径 
   * @returns 
   */
  getScriptContent(path: string): string;
  /**
   * 通过路径返回脚本列表，空路径表示根目录
   * @param path 路径 
   * @returns 
   */
  getScriptList(path: string): Array<ScriptDefine>;
  /**
   * 隐藏模块提示信息
   * @param moduleKey 模块标识符 
   * @returns 
   */
  hideModuleAlert(moduleKey: string): void;
  /**
   * 调用自动化程序；如果自动化程序不存在则抛出异常
   * @param automaticKey 自动化程序标识符 
   * @param args 参数 
   * @returns 
   */
  invokeAutomatic(automaticKey: string, ...args: any): Object;
  /**
   * 返回模块树
   * @returns 
   */
  moduleTree(): Array<ObjectRef>;
  /**
   * 发布应用事件 ；团队中的其他应用可以通过监听器接收到事件消息
   * @param event 应用事件 
   * @returns 
   */
  publishAppEvent(event: AppEvent): void;
  /**
   * 推送事件给客户端
   * @param event 推送事件 
   * @returns 
   */
  pushEvent(event: PushEvent): void;
  /**
   * 查询应用变更记录列表
   * @param query 查询对象 
   * @returns 
   */
  queryAppChangeLogList(query: Query): Array<AppChangeLog>;
  /**
   * 查询应用变更记录数量
   * @param filter 过滤条件 
   * @returns 
   */
  queryAppChangeLogListCount(filter: Filter): number;
  /**
   * 查询自定义角色列表
   * @param query 查询对象 
   * @returns 
   */
  queryCustomRoleList(query: Query): Array<CustomRole>;
  /**
   * 查询自定义角色列表总数
   * @param filter 过滤条件 
   * @returns 
   */
  queryCustomRoleListCount(filter: Filter): number;
  /**
   * 查询收藏模块列表
   * @param query 查询对象 
   * @returns 
   */
  queryFavoriteModuleList(query: Query): Array<ModuleFavorite>;
  /**
   * 查询收藏模块列表总数
   * @param filter 过滤条件 
   * @returns 
   */
  queryFavoriteModuleListCount(filter: Filter): number;
  /**
   * 删除应用设计成员列表
   * @param type 类型 
   * @param userList 用户列表 
   * @returns 
   */
  removeDesignerUserList(type: string, userList: Array<string>): void;
  /**
   * 运行定时任务
   * @param scheduleId 定时任务标识符 
   * @returns 
   */
  runSchedule(scheduleId: string): void;
  setAppBadge(content: string): void;
  /**
   * 设置模块提示信息；模块提示信息会显示在模块页面的顶部，用来展示一些描述性文字。例如在数据导入的时候显示当前的导入进度
   * @param alert 模块提示信息 
   * @returns 
   */
  showModuleAlert(alert: ModuleAlert): void;
  /**
   * 编辑自定义角色
   * @param role 自定义角色 
   * @param updateFields 更新字段 
   * @returns 
   */
  updateCustomRole(role: CustomRole, updateFields: Array<string>): number;
  /**
   * 查询当前操作的用户ID
   * @returns 
   */
  userId(): string;
  /**
   * 获取企业微信AccessToken
   * @returns 
   */
  weworkAccessToken(): string;
}

declare interface word {
  /**
   * 生成Word中插入的图片数据
   * @param pic 图片配置 
   * @returns 
   */
  createPicture(pic: WordPicture): PictureRenderData;
  /**
   * 通过模板和数据生成一个Word文件
   * @param template 模板文件在本地沙盒中的路径 
   * @param path 生成的文件在本地沙盒中的路径 
   * @param data 传递给模板的数据 
   * @returns 
   */
  createWithTemplate(template: string, path: string, data: Record<string, Object>): void;
}

declare interface utils {
  /**
   * 将byte数组转换为字符串
   * @param data byte数组 
   * @returns 
   */
  bytesToString(data: Array<any>): string;
  /**
   * 将byte数组转换为字符串
   * @param data byte数组 
   * @param charset 字符集,可选项UTF-8，ISO-8859-1，GBK等 
   * @returns 
   */
  bytesToString(data: Array<any>, charset: string): string;
  /**
   * 字符串转义
   * @param content 字符串 
   * @returns 
   */
  escape(content: string): string;
  /**
   * 返回系统的环境变量
   * @returns 
   */
  getEnv(): Record<string, string>;
  /**
   * 返回拼音
   * @param str 要转换的字符串 
   * @param separator 分隔符 
   * @returns 
   */
  getPinyin(str: string, separator: string): string;
  /**
   * 返回拼音首字母
   * @param str 要转换的字符串 
   * @param separator 分隔符 
   * @returns 
   */
  getShortPinyin(str: string, separator: string): string;
  /**
   * HTML格式文本转换为纯文本格式
   * @param html html格式文本 
   * @returns 
   */
  html2text(html: string): string;
  /**
   * HTML格式文本转换为纯文本格式
   * @param html html格式文本 
   * @returns 
   */
  htmlToMarkdown(html: string): string;
  /**
   * js对象转化为java对象
   * @param value js对象 
   * @returns 
   */
  js2java(value: Object): Object;
  /**
   * 计算两个json字符串的差异
   * @param jsonA jsonA 
   * @param jsonB jsonB 
   * @returns 
   */
  jsonDiff(jsonA: string, jsonB: string): string;
  /**
   * json补丁应用
   * @param json json 
   * @param patch patch 
   * @returns 
   */
  jsonPatch(json: string, patch: string): string;
  /**
   * Markdown格式文本转换为HTML格式
   * @param markdown Markdown格式文本 
   * @returns 
   */
  markdownToHtml(markdown: string): string;
  /**
   * 返回随机的UUID
   * @returns 
   */
  randomUUID(): string;
  /**
   * 休眠
   * @param millis 休眠时间 
   * @returns 
   */
  sleep(millis: number): void;
  /**
   * 将字符串转换为byte数组
   * @param data 字符串 
   * @returns 
   */
  stringToBytes(data: string): Array<any>;
  /**
   * 将字符串转换为byte数组
   * @param data 字符串 
   * @param charset 字符集,可选项UTF-8，ISO-8859-1，GBK等 
   * @returns 
   */
  stringToBytes(data: string, charset: string): Array<any>;
  /**
   * 将对象转换为JSON字符串
   * @param obj 要转换的对象 
   * @returns 
   */
  toJSON(obj: Object): string;
  /**
   * 将对象转换为JSON字符串
   * @param o 要转换的对象 
   * @returns 
   */
  toJSONWithPretty(o: Object): string;
  /**
   * 字符串反转义
   * @param content 字符串 
   * @returns 
   */
  unescape(content: string): string;
  /**
   * URL解码，将经过URL编码的字符串恢复为其原始形式
   * @param urlEncode 字符串 
   * @returns 
   */
  urlDecode(urlEncode: string): string;
  /**
   * URL编码，将特殊字符转换为可在URL中安全传输的编码方式
   * @param url 字符串 
   * @returns 
   */
  urlEncode(url: string): string;
}

/**
 * 问卷字段默认值
 */
declare interface SurveyItemField {
  /**
   * 字段Id
   */
  id: string;
  /**
   * 默认值
   */
  value: Object;
}

/**
 * 调查问卷
 */
declare interface SurveyItem {
  /**
   * 应用ID
   */
  applicationId: string;
  /**
   * 创建者头像
   */
  createAccountAvatar: string;
  /**
   * 创建者账号ID
   */
  createAccountId: string;
  /**
   * 创建者名称
   */
  createAccountName: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 调查问卷定义ID
   */
  defineId: string;
  /**
   * 终止时间
   */
  endTime: Date;
  /**
   * 问卷字段
   */
  fieldList: Array<SurveyItemField>;
  /**
   * 调查问卷ID
   */
  id: string;
  /**
   * 是否启用
   */
  isEnable: boolean;
  /**
   * 最后填写时间
   */
  lastSubmitTime: Date;
  /**
   * 模块ID
   */
  moduleId: string;
  /**
   * 调查问卷名称
   */
  name: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 排序
   */
  rowNumber: number;
  /**
   * 源ID
   */
  sourceId: string;
  /**
   * 开始时间
   */
  startTime: Date;
  /**
   * 填写数量
   */
  submitCount: number;
  /**
   * 问卷表ID
   */
  tableId: string;
  /**
   * 更新账号ID
   */
  updateAccountId: string;
  /**
   * 更新时间
   */
  updateTime: Date;
  /**
   * UUID
   */
  uuid: string;
}

/**
 * 问卷调查字段
 */
declare interface SurveyField {
  /**
   * 字段分组
   */
  group: string;
  /**
   * 字段图标
   */
  icon: string;
  /**
   * 字段ID
   */
  id: string;
  /**
   * 字段名称
   */
  name: string;
  /**
   * 字段配置
   */
  setting: Record<string, Object>;
  /**
   * 字段类型
   */
  type: string;
}

/**
 * 调查问卷定义
 */
declare interface SurveyItemDefine {
  /**
   * 允许重复提交
   */
  allowResubmit: boolean;
  /**
   * 鉴权方式
   */
  authType: string;
  /**
   * 创建时间
   */
  createTime: string;
  /**
   * 字段列表
   */
  fieldList: Array<SurveyField>;
  /**
   * 提交完成后的提示
   */
  finishText: string;
  /**
   * 隐藏支持
   */
  hideSupport: boolean;
  /**
   * ID
   */
  id: string;
  /**
   * 标识符
   */
  key: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 存储微信openId
   */
  openIdFieldId: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 范围
   */
  scope: string;
  /**
   * 提交后能否编辑
   */
  submitEdit: boolean;
  /**
   * 数据表ID
   */
  tableId: string;
}

/**
 * 查询条件
 */
declare interface Query {
  /**
   * 包含字段列表
   */
  excludeFields: Array<string>;
  /**
   * 过滤器
   */
  filter: Filter;
  /**
   * 返回字段列表
   */
  includeFields: Array<string>;
  /**
   * 排序方式
   */
  orderByList: Array<OrderBy>;
  /**
   * 页码，默认值：1
   */
  pageIndex: number;
  /**
   * 每页大小，默认值：50
   */
  pageSize: number;
}

/**
 * 聚合查询
 */
declare interface AggregationQuery {
  /**
   * 是否去重
   */
  distinct: boolean;
  /**
   * 聚合字段
   */
  fieldId: string;
  /**
   * 聚合函数
   */
  func: string;
}

/**
 * 过滤器
 */
declare interface Filter {
  /**
   * 子过滤条件
   */
  children: Array<Filter>;
  /**
   * 过滤条件
   */
  conditionList: Array<Condition>;
  /**
   * 操作符
   */
  opt: string;
}

/**
 * 排序
 */
declare interface OrderBy {
  /**
   * 字段名
   */
  field: string;
  /**
   * 排序类型
   */
  type: string;
}

/**
 * 查询条件
 */
declare interface Condition {
  /**
   * 字段ID
   */
  fieldId: string;
  /**
   * 是否是函数
   */
  formula: boolean;
  /**
   * 函数 dayofyear=本年度天数,dayofmonth=本月第几天,week本周天数,weekofyear=本年第几周,month=月份,quarter=季度,year=年份,daytonow=距离今天天数,weektonow=距离今天的周数,yeartonow=距离今天的年份数,monthtonow=距离今天的月份数,quartertonow=距离今天的季度数,fmtday=年-月-日 格式:2021-01-01,fmtweek=年-周 格式:2021-1,fmtmonth=年-月 格式:2021-01,fmtquarter=年-季度 格式:2021-1,nlevel=子对象层级
   */
  func: string;
  /**
   * 是否忽略空值
   */
  ignoreNull: boolean;
  /**
   * 操作符类型说明：基础比较：eq=等于(精确匹配值，不适用列表字段), ne=不等于(排除值,不适用列表字段), gt=大于(数值/日期), ge=大于等于(数值/日期), lt=小于(数值/日期), le=小于等于(数值/日期); 字符串集合匹配：contains=包含子串(模糊搜索;列表包含), notcontains=不包含子串(排除关键词,列表不包含), startswith=以指定字符串开头(前缀匹配), endswith=以指定字符串结尾(后缀匹配); 空值判断：isnull=字段为空(缺失数据), isnotnull=字段非空(有效数据); 集合操作：in=值在集合内(多选匹配), notin=值不在集合内(排除多选); 范围判断：between=值在区间内(范围查询), notbetween=值在区间外(范围排除); 树形结构：parentrooteq=根节点匹配(直属根节点), parenteq=父节点匹配(指定父节点), parentcontains=父节点路径包含(树形路径), intree=在子树中(所有子节点)
   */
  opt: string;
  /**
   * 比较值
   */
  value: Object;
  /**
   * 是否是表达式
   */
  var: boolean;
}

declare interface EmailFolder {
  close(): void;
  delete(recurse: boolean): boolean;
  getAllMessages(): Array<EmailMessage>;
  getDeletedMessageCount(): number;
  getFullName(): string;
  getMessage(messageNumber: number): EmailMessage;
  getMessageCount(): number;
  getMessages(startMessageNumber: number, endMessageNumber: number): Array<EmailMessage>;
  getName(): string;
  getNewMessageCount(): number;
  getType(): number;
  getURLName(): string;
  getUnreadMessageCount(): number;
  hasNewMessages(): boolean;
  list(): Array<EmailFolder>;
  open(type: string): void;
}

/**
 * email收件人
 */
declare interface EmailRecipient {
  TYPE_BCC: string;
  TYPE_CC: string;
  TYPE_TO: string;
  /**
   * 地址
   */
  address: string;
  /**
   * 姓名
   */
  personal: string;
  /**
   * 发送类型
   */
  type: string;
}

/**
 * email服务器
 */
declare interface EmailServer {
  /**
   * 账号
   */
  account: string;
  /**
   * 是否启用认证
   */
  auth: boolean;
  /**
   * 主机
   */
  host: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 端口
   */
  port: number;
  /**
   * 协议
   */
  protocol: string;
  /**
   * 是否启用ssl
   */
  ssl: boolean;
}

declare interface EmailStore {
  getDefaultFolder(): EmailFolder;
  getFolder(name: string): EmailFolder;
  getPersonalNamespaces(): Array<EmailFolder>;
  getSharedNamespaces(): Array<EmailFolder>;
  getUserNamespaces(user: string): Array<EmailFolder>;
}

declare interface EmailMessage {
}

/**
 * 应用列表
 */
declare interface UserAppList {
  appGroupList: Array<AppGroup>;
  appList: Array<App>;
}

/**
 * 团队
 */
declare interface Company {
  /**
   * 团队logo
   */
  avatar: string;
  /**
   * 创建人
   */
  createAccountId: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 数据库索引
   */
  dbIndex: number;
  /**
   * 浏览器图标
   */
  favicon: string;
  /**
   * ID
   */
  id: string;
  maxApplicationNum: number;
  maxUserNum: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 最后更新时间
   */
  updateTime: Date;
  /**
   * 当前套餐
   */
  version: string;
}

/**
 * 团队角色
 */
declare interface CompanyRole {
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 标识符
   */
  id: string;
  /**
   * 是否为管理员
   */
  isAdmin: boolean;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限列表
   */
  permissionIds: Array<string>;
  setAdmin(isAdmin: boolean): void;
}

/**
 * 升级应用请求
 */
declare interface UpgradeAppRequest {
  /**
   * 应用ID
   */
  appId: string;
  /**
   * imr文件URL
   */
  imrUrl: string;
  /**
   * 是否强制
   */
  isForce: boolean;
  setForce(isForce: boolean): void;
}

/**
 * 安装应用请求
 */
declare interface InstallAppRequest {
  /**
   * 分组ID
   */
  groupId: string;
  /**
   * imr文件URL
   */
  imrUrl: string;
  /**
   * 是否强制
   */
  isForce: boolean;
  setForce(isForce: boolean): void;
}

/**
 * 团队成员
 */
declare interface CompanyMember {
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 所在部门标识符列表
   */
  departmentKeyList: Array<string>;
  /**
   * 所在部门列表
   */
  departmentList: Array<string>;
  /**
   * 钉钉账号ID
   */
  dingtalkUserId: string;
  /**
   * 飞书账号ID
   */
  feishuUserId: string;
  /**
   * 账号ID
   */
  id: string;
  /**
   * 直属上级列表
   */
  leaderList: Array<string>;
  /**
   * 账号名称
   */
  name: string;
  /**
   * 角色列表
   */
  roleList: Array<string>;
  /**
   * 排序权重
   */
  rowNumber: number;
  /**
   * 最后更新时间
   */
  updateTime: Date;
  /**
   * 企业微信账号ID
   */
  weworkUserId: string;
}

/**
 * 应用分组
 */
declare interface AppGroup {
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * ID
   */
  id: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 排序
   */
  rowNumber: number;
  /**
   * 最后更新时间
   */
  updateTime: Date;
}

/**
 * 操作日志
 */
declare interface OptLog {
  /**
   * 操作账号头像
   */
  accountAvatar: string;
  /**
   * 操作账号ID
   */
  accountId: string;
  /**
   * 操作账号名称
   */
  accountName: string;
  /**
   * 关联ID
   */
  associatedId: string;
  /**
   * 团队ID
   */
  companyId: string;
  /**
   * 团队名称
   */
  companyName: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * ID
   */
  id: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 类型
   */
  type: string;
  /**
   * 更新时间
   */
  updateTime: Date;
}

/**
 * 更新应用团队请求
 */
declare interface UpdateAppGroupRequest {
  /**
   * 团队ID
   */
  groupId: string;
  /**
   * imr文件URL
   */
  imrUrl: string;
}

declare interface sftp {
  /**
   * 创建sftp客户端
   * @returns 
   */
  createClient(): SftpClient;
}

declare class informat {
  static aiagent: aiagent
  static app: app
  static bpmn: bpmn
  static codec: codec
  static company: company
  static csv: csv
  static datasource: datasource
  static date: date
  static dept: dept
  static designer: designer
  static email: email
  static excel: excel
  static file: file
  static ftp: ftp
  static http: http
  static jdbc: jdbc
  static ldap: ldap
  static mpp: mpp
  static mq: mq
  static notification: notification
  static redis: redis
  static sftp: sftp
  static storage: storage
  static survey: survey
  static system: system
  static table: table
  static textindex: textindex
  static transaction: transaction
  static user: user
  static utils: utils
  static website: website
  static word: word
  static xml: xml
}
/**
 * 自动化代码片段
 */
declare namespace automatic {
    /**
     * 获取上下文变量
     * @param key 变量key
     *
     * @example
     * ```javascript
     *  automatic.getVar(key)
     * ```
     */
    function getVar(key: string): Object;

    /**
     * 设置或更新变量
     * @param {string} key   变量key
     * @param {Object} value 变量值
     */
    function setVar(key: string, value: Object): void;

    /**
     * 设置当前自动化的执行进度
     * @param {Number} progress 0-100的进度
     * @param {string} message  进度描述文字
     *
     * @example
     * ```javascript
     * automatic.setProgress(progress,message)
     * ```
     */
    function setProgress(progress: Number, message: string): void;

    /**
     * 设置当前自动化的返回值
     * @param {Object|any} value 值
     *
     * @example
     * ```javascript
     * automatic.setReturnValue(value)
     * ```
     */
    function setReturnValue(value: any): void;
}
declare var console: Console;

