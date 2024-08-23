/**
 * characteristic-list
 * @Component CharacteristicList
 * @title 测试组件
 */
export default interface CharacteristicListIProps {
  /**
   * 标题配置
   *
   * @title 标题配置
   * @description 标题内容格式配置
   * @type object
   */
  titleConfig: TitleConfig;

  /**
   * 副标题配置
   *
   * @title 副标题配置
   * @description 副标题内容格式配置
   * @type object
   */
  subTitleConfig: SubTitleConfig;


  /**
   * 内容配置
   * @minItems 1
   * @maxItems 4
   * @title 内容配置
   */
  list: ItemCardProps[];
}


export interface ItemCardProps {
  /**
   * 主题图片
   *
   * @title 主题图片
   * @type string
   * @format image
   * @default https://tianshu.alicdn.com/9652b6f7-8bc9-4527-9854-06c59f2b0bc8.png
   */
  backgroundImage: string;

  /**
   * 标题
   *
   * @title 标题
   * @maxLength 10
   * @type string
   * @default 标题
   */
  description?: string;

  /**
   * 字体大小
   *
   * @title 字体大小
   * @min 12
   * @max 24
   * @type number
   * @default 16
   */
  fontSize: number;

  /**
   * 字体颜色
   *
   * @title 字体颜色
   * @format color
   * @type string
   * @default #000
   */
  fontColor: string;

  /**
   * 图片宽度
   *
   * @title 字体大小
   * @min 60
   * @max 200
   * @type number
   * @default 90
   */
  width: number;
}



interface TitleConfig {
  /**
   * 标题
   *
   * @title 标题
   * @maxLength 24
   * @type string
   * @default 标题
   */
  text: string;

  /**
   * 字体大小
   *
   * @title 字体大小
   * @min 12
   * @max 56
   * @type number
   * @default 40
   */
  fontSize: number;

  /**
   * 字体颜色
   *
   * @title 字体颜色
   * @format color
   * @type string
   * @default #000
   */
  fontColor: string;
}


/**
 * @title 标题配置
 */
interface SubTitleConfig {
  /**
   * 标题
   *
   * @title 标题
   * @maxLength 24
   * @type string
   * @default 标题
   */
  text: string;

  /**
   * 字体大小
   *
   * @title 字体大小
   * @min 12
   * @max 56
   * @type number
   * @default 16
   */
  fontSize: number;

  /**
   * 字体颜色
   *
   * @title 字体颜色
   * @format color
   * @type string
   * @default #959ba6
   */
  fontColor: string;
}
