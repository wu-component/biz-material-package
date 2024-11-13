/**
 * material-new-component
 * @Component MaterialNewComponent
 * @title 测试组件
 */
export default interface MaterialNewComponentIProps {
  /**
   * 名称
   *
   * @title 名称
   * @type string
   * @default 测试
   */
  name: string;

  /**
   * 内容配置
   * @minItems 1
   * @maxItems 4
   * @title 内容配置
   */
  list: ListConfig[]

  /**
   * 概述
   *
   * @title 概述
   * @description 概述
   * @type object
   */
  item: ItemConfig

  /**
   * 直接点击
   *
   * @title 点击函数
   */
  onClick: (item: number) => void;
}

interface ListConfig {

  /**
   * 点击函数
   *
   * @title 点击函数
   */
  onClick: (item: number) => void;

  /**
   * 名称
   *
   * @title 名称
   * @type string
   * @default 测试
   */
  name: string;
}

interface ItemConfig {

  /**
   * 点击函数
   *
   * @title 点击函数
   */
  onClick: (item: number) => void;

  /**
   * 名称
   *
   * @title 名称
   * @type string
   * @default 测试
   */
  name: string;
}