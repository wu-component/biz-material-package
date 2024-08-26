/**
 * rc-table
 * @Component RcTable
 * @title 测试组件
 */
export default interface RcTableIProps {
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
}
