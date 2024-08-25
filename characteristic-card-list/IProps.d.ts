/**
 * characteristic-card-list
 * @Component CharacteristicCardList
 * @title 测试组件
 */
export default interface CharacteristicCardListIProps {
  /**
   * 标题
   *
   * @title 标题
   * @description 标题内容格式配置
   * @type object
   */
  titleConfig: TitleConfig;

  /**
   * 副标题
   *
   * @title 副标题
   * @description 副标题内容格式配置
   * @type object
   */
  subTitleConfig: SubTitleConfig;

  /**
   * 列数
   *
   * @title 每行个数
   * @min 3
   * @max 6
   * @type number
   * @default 4
   */
  columns: number;


  /**
   * 内容配置
   * @minItems 1
   * @maxItems 4
   * @title 内容配置
   */
  list: ItemCardProps[];

  /**
   * 点击函数
   *
   * @title 点击函数
   */
  onClick: (item: ItemCardProps) => void;
}


export interface ItemCardProps {

  /**
   * 标题
   *
   * @title 标题
   * @maxLength 10
   * @type string
   * @default 标题
   */
  title?: string;


  /**
   * 描述
   *
   * @title 描述
   * @maxLength 60
   * @type string
   * @default 标题
   */
  description?: string;

  /**
   * 字体大小
   *
   * @title 标题字体大小
   * @min 12
   * @max 24
   * @type number
   * @default 16
   */
  fontSize: number;

  /**
   * 字体颜色
   *
   * @title 标题字体颜色
   * @format color
   * @type string
   * @default #000
   */
  fontColor: string;

  /**
   * 宽度
   *
   * @title 宽度
   * @min 300
   * @max 600
   * @type number
   * @default 325
   */
  width: number;

  /**
   * 主题图片
   *
   * @title 主题图片
   * @type string
   * @format image
   * @action /file-server/v1.0/upload
   * @resultPath
   * @default https://tianshu.alicdn.com/9652b6f7-8bc9-4527-9854-06c59f2b0bc8.png
   */
  icon: string;
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
