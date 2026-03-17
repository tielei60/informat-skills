declare namespace informat {
    /**
     * 团队信息
     */
    interface Company {
        /**
         * 团队ID
         */
        id: string;
        /**
         * 团队名
         */
        name: string;
        /**
         * 所在数据库分区
         */
        dbIndex: Number;
        /**
         * 团队logo
         */
        avatar: string;
        /**
         * 团队浏览器标签页logo
         */
        favicon: string;
        /**
         * 版本
         */
        version: string;
        /**
         * 团队创建人
         */
        createAccountId: string;
        /**
         * 团队创建时间
         */
        createTime: Date;
        /**
         * 团队最后更新时间
         */
        updateTime: Date;
    }

    /**
     * 账号定义数据
     */
    interface Account extends Record<string, Object> {
        /**
         * ID
         */
        id: string;
        /**
         * 姓名
         */
        name: string;
        /**
         * 头像
         */
        avatar: string;
        /**
         * 用户名
         */
        userName: string;
        /**
         * 手机号码
         */
        mobileNo: string;
        /**
         * 邮箱地址
         */
        email: string;
        /**
         * 是否有效
         */
        isValid: Boolean;
        /**
         * 第三方ID
         */
        oid: Boolean;
        /**
         * 当前登录的团队ID
         */
        companyId: string;
        /**
         * 创建时间
         */
        createTime: Date;
        /**
         * 更新时间
         */
        updateTime: Date;
    }


    /**
     * 应用成员信息
     * @example
     * ```json
     * {
     *   "avatar": "pic16.png",
     *   "departmentList": ['xxxx'],
     *   "id": "xxxx",
     *   "leaderList": ['xxx'],
     *   "name": "xxxx",
     *   "roleList": ['admin']
     * }
     * ```
     */
    interface User {
        /**
         * 用户ID
         */
        id: string;
        /**
         * 姓名
         */
        name: string;
        /**
         * 头像
         */
        avatar: string;
        /**
         * 应用角色列表
         */
        roleList: Array<string>;
        /**
         * 用户上级ID列表
         */
        leaderList: Array<string>;
    }

    /**
     * 自动化调用参数结构定义
     */
    interface AutomaticParams {
        /**
         * 调用的自动化所属应用ID,不传递则使用当前应用ID
         */
        appId?: string;
        /**
         * 调用的自动化标识符
         */
        automaticId: string;
        /**
         * 调用自动化传递的参数
         */
        args: Array<any>;
        /**
         * 是否展示系统的loading
         */
        withoutTimeoutLoading: Boolean;
        /**
         * 自动化的上下文sourceId
         */
        sourceId: string;
    }

    /**
     * 应用自动化配置项
     */
    interface AutomaticSetting {
        /**
         * 是否默认配置项
         */
        readonly isDefault: boolean;
        /**
         * 是否展示自动化loading
         */
        withoutLoading: boolean;
        /**
         * 自动化的loading延时，默认(2000ms)
         */
        loadingDelayMs: number;
    }

    /**
     * 系统确认框配置项
     */
    interface SystemConfirmOption {
        /**
         * 对话框标题
         */
        title: string;
        /**
         * 提示内容（必填）
         */
        content: string;
        /**
         * 窗口距顶距离，默认(15vh)
         */
        dialogTop: string;
        /**
         * 窗口高度
         */
        dialogHeight: string;
        /**
         * 窗口宽度，默认(400px)
         */
        dialogWidth: string;
        /**
         * 提示内容水平对齐方式
         *
         * |值|描述|
         * |left|居左|
         * |center|居中(默认)|
         * |right|居右|
         * |justify|两端对齐|
         */
        horizontalAlign: string | 'left' | 'center' | 'right' | 'justify';
        /**
         * 提示内容垂直对齐方式
         *
         * |值|描述|
         * |top|顶部|
         * |center|居中(默认)|
         * |bottom|底部|
         */
        verticalAlign: string | 'top' | 'center' | 'bottom';
        /**
         * 是否展示取消按钮，默认(true)
         */
        showCancel: boolean;
        /**
         * 取消按钮文字，默认(取消)
         */
        cancelText: string;
        /**
         * 确认按钮文字，默认(确认)
         */
        confirmText: string;
    }


    /**
     * 图片预览的图片项
     */
    interface PreviewImageItem {
        /**
         * 图片的ID，可选参数
         */
        id?: string;
        /**
         * 图片的名称，可选参数
         */
        name?: string;
        /**
         * 图片地址，必填参数
         */
        src: string;
    }

    /**
     * 图片预览配置项
     */
    interface PreviewImageOptions {

        /**
         * 预览的图片在列表中的索引位置，从0 开始
         */
        startIndex: Number;
        /**
         * 预览的图片列表
         */
        list: Array<PreviewImageItem | Object>;
    }


    type RequestHeaders = Record<string, string | number | boolean>;

    type ResponseHeaders = Record<string, string> & {
        'set-cookie'?: string[]
    };

    type Method =
        | 'get' | 'GET'
        | 'delete' | 'DELETE'
        | 'head' | 'HEAD'
        | 'options' | 'OPTIONS'
        | 'post' | 'POST'
        | 'put' | 'PUT'
        | 'patch' | 'PATCH'
        | 'purge' | 'PURGE'
        | 'link' | 'LINK'
        | 'unlink' | 'UNLINK';

    type ResponseType =
        | 'arraybuffer'
        | 'blob'
        | 'document'
        | 'json'
        | 'text'
        | 'stream';

    type responseEncoding =
        | 'ascii' | 'ASCII'
        | 'ansi' | 'ANSI'
        | 'binary' | 'BINARY'
        | 'base64' | 'BASE64'
        | 'base64url' | 'BASE64URL'
        | 'hex' | 'HEX'
        | 'latin1' | 'LATIN1'
        | 'ucs-2' | 'UCS-2'
        | 'ucs2' | 'UCS2'
        | 'utf-8' | 'UTF-8'
        | 'utf8' | 'UTF8'
        | 'utf16le' | 'UTF16LE';


    interface RequestTransformer {
        (data: any, headers?: RequestHeaders): any;
    }

    interface ResponseTransformer {
        (data: any, headers?: ResponseHeaders): any;
    }

    interface RequestAdapter {
        (config: RequestConfig): Promise<any>;
    }

    /**
     * 网络请求配置
     */
    interface RequestConfig {
        url?: string;
        method?: Method | string;
        baseURL?: string;
        transformRequest?: RequestTransformer | RequestTransformer[];
        transformResponse?: ResponseTransformer | ResponseTransformer[];
        headers?: RequestHeaders;
        params?: any;
        paramsSerializer?: (params: any) => string;
        data?: Record<string, any>;
        timeout?: number;
        timeoutErrorMessage?: string;
        withCredentials?: boolean;
        adapter?: RequestAdapter;
        responseType?: ResponseType;
        responseEncoding?: responseEncoding | string;
        xsrfCookieName?: string;
        xsrfHeaderName?: string;
        onUploadProgress?: (progressEvent: any) => void;
        onDownloadProgress?: (progressEvent: any) => void;
        maxContentLength?: number;
        validateStatus?: ((status: number) => boolean) | null;
        maxBodyLength?: number;
        maxRedirects?: number;
        beforeRedirect?: (options: Record<string, any>, responseDetails: { headers: Record<string, string> }) => void;
        socketPath?: string | null;
        httpAgent?: any;
        httpsAgent?: any;
        decompress?: boolean;
        insecureHTTPParser?: boolean;
        env?: {
            FormData?: new (...args: any[]) => object;
        };
    }

    interface Component {

    }

    /**
     * 打开数据表记录列表弹窗
     */
    interface AutomaticRecordSelectComponent extends Component {
        /**
         * 重新加载数据
         */
        reloadData(): void;

        /**
         * 关闭弹窗
         */
        close(): void;
    }

    /**
     * 数据表视图模块
     */
    interface TableViewComponent extends Component {
        /**
         * 加载数据，
         * @param {Number} [pageIndex] 不传递则默认为重新加载当前页数据
         */
        _loadData(pageIndex?: number): void;

        /**
         * 设置分页大小，此操作仅会设置分页数量，不会主动加载数据。加载数据请调用{@link _loadData}
         * @param {Number} pageSize 分页数据量大小
         */
        _setPageSize(pageSize?: number): void;

        /**
         * 打开记录详情页
         * @param recordId
         */
        _openRecord(recordId: string): void;

        /**
         * 重置视图过滤条件，并将页码重置为1后，重新加载数据
         */
        _resetQueryFilterConditions(): void;

        /**
         * 设置视图过滤条件项的值,
         * @param {string} key  字段标识符
         * @param {any} value   字段值
         */
        _setQueryFilterConditionValue(key: string, value: any): void;

        /**
         * 设置视图过滤条件项的值计算函数,
         * @param {string} key  字段标识符
         * @param {any} func   计算函数
         */
        _setQueryFilterConditionFunc(key: string, func: any): void;

        /**
         * 设置视图过滤条件项的值比较方式
         * @param {string} key  字段标识符
         * @param {any} opt   比较方式
         */
        _setQueryFilterConditionOpt(key: string, opt: any): void;

        /**
         * 设置视图中选中的记录
         * @param {Array<string>} idList 记录ID列表
         * @param {string} mode          设置选中的模式，支持replace:重置,add:追加,remove:移除,toggle:翻转选中
         */
        _setSelectionIdList(idList: Array<string>, mode: 'replace' | 'add' | 'remove' | 'toggle' | string): void;

        /**
         * 获取视图中选中的记录ID列表
         * @returns Array<string>
         */
        _getSelectionIdList(): Array<string>;

        /**
         * 获取视图中的数据信息
         * @returns Object
         */
        _getTableData(): {
            /**
             * 数据表原始纪录列表
             */
            tableRawRecordList: Array<Record<string, any>>,
            /**
             * 数据表标识符字段纪录列表
             */
            tableRecordList: Array<Record<string, any>>,
            /**
             * 视图数据总数
             */
            tableRecordPageTotal: number,
            /**
             * 视图当前分页页码
             */
            tableRecordPageIndex: number,
            /**
             * 视图当前分页大小
             */
            tableRecordPageSize: number,
        };

        /**
         * 获得表格视图数据信息
         */
        _getTableGridData(): {
            /**
             * 获取已激活的行数据
             */
            activeEditRecord: {
                row: any
                rowIndex: number
                column: Record<string, any>
                columnIndex: number
            } | undefined,
            editableColumnList: {
                edit: boolean,
                icon: string,
                id: string,
                name: string,
                type: string,
                width: string,
            }[]
        }

        /**
         * 激活下一个可编辑的单元格
         * @param cellActiveType 激活下一个单元格的方式
         * @param nextActiveCellEditInfoHandler  自定义激活的可编辑单元格信息。不传递则系统自动计算，默认从第一行第一个可编辑的单元格开始
         */
        _activeGridNextCellEdit(cellActiveType: 'column' | 'row', nextActiveCellEditInfoHandler?: (data: {
            /**
             * 获取已激活的行数据
             */
            activeEditRecord: {
                row: any
                rowIndex: number
                column: Record<string, any>
                columnIndex: number
            } | undefined,
            /**
             * 激活下一个单元格的方式
             */
            cellActiveType: string,
            /**
             * 可编辑的列数据
             */
            editableColumnList: {
                edit: boolean,
                icon: string,
                id: string,
                name: string,
                type: string,
                width: string,
            }[]
        }) => {
            editRowIndex: number,
            editColumnIndex: number,
        }): Promise<any>;

        /**
         * 激活指定的单元格
         * @param recordId  记录ID
         * @param columnIndex   列ID,不传递则默认为0
         */
        _activeGridCellEdit(recordId: string, columnIndex?: number): Promise<any>;
    }

    /**
     * 仪表盘模块
     */
    interface DashboardModuleComponent extends Component {
        /**
         * 重新加载仪表盘数据
         */
        _loadData(): void;

        /**
         * 设置仪表盘过滤条件值
         * @param {string} key  字段标识符
         * @param {any} value   字段值
         */
        _setFilterConditionValue(key: string, value: any): void;

        /**
         * 获取卡片列表
         */
        _getCardList(): Array<{
            /**
             * 卡片ID
             */
            id: string
            /**
             * 卡片名称
             */
            name: string,
            /**
             * 卡片类型
             */
            type: string,
            /**
             * 是否在卡片内部(标签页卡片、卡片容器、折叠面板)
             */
            isInTab: boolean,
        }>;

        /**
         * 刷新卡片
         * @param {string} cardId
         */
        _loadCardData(cardId: string): void;

        /**
         * 设置仪表盘卡片过滤条件值
         * @param {string} cardId
         * @param {string} key
         * @param {string} value
         */
        _setCardFilterConditionValue(cardId: string, key: string, value: any): void;
    }

    /**
     * 数据表单
     */
    interface RecordFormComponent extends Component {
        /**
         * 获取表单数据信息
         */
        _getFormData(): {
            /**
             * 应用信息
             */
            app: Record<string, any>,
            /**
             * 用户信息
             */
            user: User,
            /**
             * 表单记录数据
             */
            formRecord: Record<string, any>,
            /**
             * 表单模块标识符
             */
            formModuleKey: string
        };

        /**
         * 设置字段值
         * @param {string} key  字段标识符
         * @param {any} value   字段值
         * @param {string} setType 设置方式，仅在子表字段生效.reset:覆盖,append:追加尾部,insert:追加头部
         * @private
         */
        _setFieldValue(key: string, value: any, setType?: 'reset' | 'append' | 'insert' | string): void;

        /**
         * 关闭当前表单
         */
        _close(): void;

        /**
         * 重新加载表单
         * @private
         */
        _reload(): void;

        /**
         * 校验表单
         * @param callback 校验后回调函数并传入表单校验结果
         */
        _validate(callback?: (valid: boolean) => {}): void;
    }

    /**
     * 数据表字段
     */
    interface RecordFormFieldComponent extends Component {
        /**
         * 获得表单关联列表、子对象、查找列表字段数据信息
         */
        _getTableFormData(): {
            /**
             * 获取已激活的行数据
             */
            activeEditRecord: {
                row: any
                rowIndex: number
                column: Record<string, any>
                columnIndex: number
            } | undefined,
            editableColumnList: {
                edit: boolean,
                icon: string,
                id: string,
                name: string,
                type: string,
                width: string,
            }[]
        }

        /**
         * 激活表单关联列表、子对象、查找列表下一个可编辑的单元格
         * @param cellActiveType 激活下一个单元格的方式
         * @param nextActiveCellEditInfoHandler  自定义激活的可编辑单元格信息。不传递则系统自动计算，默认从第一行第一个可编辑的单元格开始
         */
        _activeTableNextCellEdit(cellActiveType: 'column' | 'row', nextActiveCellEditInfoHandler?: (data: {
            /**
             * 获取已激活的行数据
             */
            activeEditRecord: {
                row: any
                rowIndex: number
                column: Record<string, any>
                columnIndex: number
            } | undefined,
            /**
             * 激活下一个单元格的方式
             */
            cellActiveType: string,
            /**
             * 可编辑的列数据
             */
            editableColumnList: {
                edit: boolean,
                icon: string,
                id: string,
                name: string,
                type: string,
                width: string,
            }[]
        }) => {
            editRowIndex: number,
            editColumnIndex: number,
        }): Promise<any>;

        /**
         * 激活表单关联列表、子对象、查找列表指定的单元格
         * @param recordId  记录ID
         * @param columnIndex   列ID,不传递则默认为0
         */
        _activeTableCellEdit(recordId: string, columnIndex?: number): Promise<any>;
    }

    /**
     * 应用对象
     */
    interface app {
        /**
         * 调用应用中的自动化
         * @param params
         * @example AutomaticParams结构
         * {
         *   automaticId: 'xxxxx';
         *   args: [];
         * }
         */
        callAutomatic(params: AutomaticParams): Promise<any>;

        /**
         * 设置当前应用自动化配置
         * @param setting
         * @example AutomaticSetting结构
         * {
         *    withoutLoading: false,
         *    loadingDelayMs: 1000
         * }
         */
        setAutomaticSetting(setting: AutomaticSetting): Promise<boolean>;
        /**
         * 获取当前应用自动化配置
         */
        getAutomaticSetting(): Promise<AutomaticSetting>;

        /**
         * 重置当前应用自动化配置为默认配置
         */
        resetAutomaticSetting(): Promise<boolean>;
        /**
         * 重置所有已配置的应用自动化配置为默认配置
         */
        resetAllAutomaticSetting(): Promise<boolean>;
        /**
         * 在客户端设置App的数据
         */
        setAppData(key: string, value: any): Promise<any>;

        /**
         * 在客户端获取指定key的App数据
         */
        getAppData(key: string): Promise<any>;

        /**
         * 获取当前的应用信息
         */
        getApp(): Promise<any>;

        /**
         * 获取当前的应用环境变量信息
         */
        getAppEnv(): Promise<any>;

        /**
         * 通过Key获取当前的应用环境变量的值
         */
        getAppEnvByKey(key: string): Promise<any>;

        /**
         * 获取访问当前的应用的用户信息
         */
        getUser(): Promise<any>;

        /**
         * 获取数据表附件字段文件链接
         */
        attachmentUrl(tableKey: string, fieldKey: string, fileId: string): string;

        /**
         * 获取网站模块根节点链接
         */
        baseURL(websiteModuleKey: string): string;

        /**
         * 获取网站模块资源文件链接
         * @param websiteModuleKey 网站模块标识符
         * @param resourceRelativePath 网站模块资源文件相对路径
         */
        websiteResourceUrl(websiteModuleKey: string, resourceRelativePath: string): string;

        /**
         * 通过refKey获取系统内暴露的系统组件实例
         */
        getRef(refKey: string): AutomaticRecordSelectComponent | TableViewComponent | DashboardModuleComponent | RecordFormComponent | RecordFormFieldComponent | Component | null;

        /**
         * 获取系统内绑定的系统组件实例refKey列表
         */
        getRefKeys(): Array<string>;

        /**
         * 监听任一组件实例挂载
         */
        onAnyRefMounted(handler: (payload?: any) => void): void;

        /**
         * 单次监听任一组件实例挂载
         */
        onceAnyRefMounted(handler: (payload?: any) => void): void;

        /**
         * 移除监听任一组件实例挂载
         */
        offAnyRefMounted(andler: (payload?: any) => void): void;

        /**
         * 监听组件实例挂载
         */
        onRefMounted(refKey: string, handler: (payload?: any) => void): void;

        /**
         * 单次监听组件实例挂载
         */
        onceRefMounted(refKey: string, handler: (payload?: any) => void): void;

        /**
         * 移除监听组件实例挂载
         */
        offRefMounted(refKey: string, handler: (payload?: any) => void): void;

        /**
         * 监听任一组件实例销毁
         */
        onAnyRefDestroy(handler: (payload?: any) => void): void;

        /**
         * 单次监听任一组件实例销毁
         */
        onceAnyRefDestroy(handler: (payload?: any) => void): void;

        /**
         * 移除监听任一组件实例销毁
         */
        offAnyRefDestroy(handler: (payload?: any) => void): void;

        /**
         * 监听组件实例销毁
         */
        onRefDestroy(refKey: string, handler: (payload?: any) => void): void;

        /**
         * 单次监听组件实例销毁
         */
        onceRefDestroy(refKey: string, handler: (payload?: any) => void): void;

        /**
         * 移除监听组件实例销毁
         */
        offRefDestroy(refKey: string, handler: (payload?: any) => void): void;
    }

    /**
     * 应用对象
     */
    interface http {
        /**
         * 发送网络请求
         * @param config
         */
        request(config: RequestConfig): Promise<any>;
    }

    /**
     * 系统全局操作
     * 使用`informat.system`对象进行系统全局操作
     */
    interface system {
        /**
         * 调用系统Toast提示
         * @param message
         */
        toast(message: string): Promise<any>;

        /**
         * 调用系统确认提示框
         * @param options 传入[配置项]{@link SystemConfirmOption }
         * @example
         * ```javascript
         * systemService.confirm({
         *   title: '确定要执行该操作吗？'
         * }).then(confirm => {
         *   if (!confirm) {
         *     console.log('取消了');
         *     return;
         *   }
         *   console.log('确认了');
         * });
         * ```
         */
        confirm(options: SystemConfirmOption): Promise<any>;

        /**
         * 获取系统全局配置数据
         */
        getSystemConfig(): Promise<any>;

        /**
         * 获取当前登录的用户的团队信息
         */
        getCompany(): Promise<Company>;

        /**
         * 获取当前登录的用户
         */
        getAccount(): Promise<Account>;

        /**
         * 获取当前登录用户的Token数据
         */
        getToken(): Promise<string>;

        /**
         * 获取平台接口服务地址
         */
        getServerUrl(): Promise<string>;

        /**
         * 获取平台资源服务地址
         */
        getClientUrl(): Promise<string>;

        /**
         * 图片预览
         * @param options 图片预览[配置项]{@link PreviewImageOptions }
         */
        previewImage(options: PreviewImageOptions | Object): Promise<any>;

        /**
         * 展示系统加载Loading状态
         */
        showLoading(): Promise<any>;

        /**
         * 设置隐藏系统加载Loading状态
         */
        hideLoading(): Promise<any>;

        /**
         * 设置应用导航栏布局
         */
        setModuleBarStyle(layout: 'top' | 'left' | 'lefttop' | 'topmini' | 'none' | string): Promise<any>;

        /**
         * 设置应用颜色标识
         */
        setAppColor(color: string): Promise<any>;

        /**
         * 显示模块访问历史
         */
        setVisitHistoryVisible(visible: boolean): Promise<any>;

        /**
         * 显示导航栏模块路径
         */
        setNavBreadcrumbVisible(visible: boolean): Promise<any>;

        /**
         * 显示模块标题
         */
        setModuleTitleVisible(visible: boolean): Promise<any>;

        /**
         * 设置应用属性
         * @param key 数字，字符串。字符串支持.方式的属性层级设置
         * @param value
         *
         * ```
         * // 设置应用隐藏模块层级面包屑展示
         * informat.system.updateAppDefine('enableModuleNavBreadcrumb',false);
         * ```
         */
        updateAppDefine(key: number | string, value: any): Promise<any>;

        /**
         *
         * @param key 数字，字符串。字符串支持.方式的属性层级设置[eg:]
         * @param value
         *
         * @example
         * ```js
         * // 设置视图过滤器展示位置
         * informat.system.updateModuleDefine('tableSetting.tableView.filterViewType','top');
         * ```
         */
        updateModuleDefine(key: number | string, value: any): Promise<any>;
    }
}


/**
 * 全局操作对象
 */
declare class informat {
    /**
     * 应用操作
     */
    static app: informat.app;
    /**
     * HTTP网络请求
     */
    static http: informat.http;
    /**
     * 系统全局操作
     */
    static system: informat.system;
}
