/**
 * material-test
 * @Component MaterialTest
 * @title 测试组件
 */
export default interface MaterialTestIProps {
  /**
   * 名称
   *
   * @title 名称
   * @type string
   * @default 测试
   */
  name: string;

  /**
   * 年龄
   *
   * @title 年龄
   * @min 0
   * @max 100
   * @type number
   */
  age: number;


  /**
   * 图片选择
   *
   * @title 图片选择
   * @type string
   * @format image
   * @default https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg
   */
  image?: string

  /**
   * 日期选择器
   *
   * @title 日期选择器
   * @type string
   * @format date
   * @default 2021-03-23
   */
  date?: string;

  /**
   * 时间选择器
   *
   * @title 时间选择器
   * @type string
   * @format time
   * @default 12:23:24
   */
  time?: string;

  /**
   * 日期时间选择器
   *
   * @title 日期时间选择器
   * @type string
   * @format dateTime
   * @default 2021-03-23 12:23:24
   */
  dateTime?: string;

  /**
   * 颜色
   *
   * @title 颜色
   * @type string
   * @format color
   * @default #000000
   */
  color?: string;

  /**
   * 开关
   *
   * @title 开关
   * @type boolean
   * @default true
   */
  switch: boolean;

  /**
   * 下拉选择
   *
   * @title 下拉选择单选
   * @type string
   */
  selectVal?: TestSelectValue;

  /**
   * 下拉多选择
   *
   * @title 下拉选多择单选
   * @type string
   */
  selectMulVal?: TestSelectValue[];
}
// @ts-ignore
enum TestSelectValue {
  test1 = '1',
  test2 = '2',
  test3 = '3',
}