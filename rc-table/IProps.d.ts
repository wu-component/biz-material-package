enum ValueTypeEnum {
  password = '密码输入框',
  money = '金额输入框',
  textarea = '文本域',
  date = '日期',
  dateTime = '日期时间',
  dateWeek = '周',
  dateMonth = '月',
  dateQuarter = '季度输入',
  dateYear = '年份输入',
  dateRange = '日期区间',
  dateTimeRange = '日期时间区间',
  time = '时间',
  timeRange = '时间区间',
  text = '文本框',
  select = '下拉框',
  treeSelect = '树形下拉框',
  checkbox = '多选框',
  rate = '星级组件',
  radio = '单选框',
  radioButton = '按钮单选框',
  progress = '进度条',
  percent = '百分比组件',
  digit = '数字输入框',
  second = '秒格式化',
  avatar = '头像',
  code = '代码框',
  switch = '开关',
  fromNow = '相对于当前时间',
  image = '图片',
  jsonCode = '代码框，但是带了 json 格式化',
  color = '颜色选择器',
  cascader = '级联选择器',
  segmented = '分段器',
  group = '分组',
  formList = '表单列表',
  formSet = '表单集合',
  divider = '分割线',
  dependency = '依赖项'
}

interface Column {
  /**
   * 标题
   *
   * @title 标题
   * @placeholder 标题
   * @type string
   */
  title: string;

  /**
   * dataIndex
   *
   * @title dataIndex
   * @placeholder 如 id
   * @type string
   */
  dataIndex: string;

  /**
   * 值类型
   *
   * @title 值类型
   * @type string
   * @placeholder 请选择渲染类型
   * @defalut text
   */
  valueType: ValueTypeEnum;


  /**
   * 过长省略
   *
   * @title 过长省略
   * @type boolean
   */
  ellipsis: boolean;

  /**
   * 是否是搜索项
   *
   * @title 是否是搜索项
   * @type boolean
   * @default false
   */
  search: boolean;

  /**
   * 查询表单中不展示此项
   *
   * @title 查询表单中不展示此项
   * @type boolean
   * @default true
   */
  hideInSearch: boolean;

  /**
   * 复制按钮
   *
   * @title 复制按钮
   * @type boolean
   */
  copyable: boolean;

  /**
   * 列提示
   *
   * @title 列提示
   * @placeholder 请输入列提示
   * @type string
   */
  tooltip: string;

  /**
   * 自定义渲染
   *
   * @title 自定义渲染
   * @placeholder 请输入自定义渲染逻辑，建议绑定函数
   * @type string
   */
  render: string;
}

/**
 * rc-table
 * @Component RcTable
 * @title 测试组件
 */
export default interface RcTableIProps {
  /**
   * 数据列
   *
   * @title 数据列
   * @minItems 1
   * @maxItems 3
   * @type Array
   */
  columns: Column[];

  /**
   * rowKey
   *
   * @title rowKey
   * @type number
   */
  rowKey: string;

  /**
   * 是否显示搜索表单
   *
   * @title 是否显示搜索表单
   * @type boolean
   * @default true
   */
  search: boolean;
}
