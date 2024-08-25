import './index.scss';
import React, {useMemo} from "react";
import IProps, { ItemCardProps } from "../IProps";

const Item = (props: ItemCardProps) => {
  const { backgroundImage, fontColor, fontSize, description, width = 90} = props;

  const styleVal = useMemo(() => {
    const val: React.CSSProperties = {};
    if (fontColor) {
      val.color = fontColor;
    }
    if (fontSize) {
      val.fontSize = fontSize + 'px';
    }
    return val
  }, [fontSize, fontColor])

  const imageStyle = useMemo(() => {
    const val: React.CSSProperties = {};
    if (width) {
      val.width = width + 'px';
    }
    return val
  }, [width])

  return (
    <div className={'item'}>
      <img crossOrigin="anonymous" className="image" src={backgroundImage} style={imageStyle} />
      <div className="text" style={styleVal}>{description}</div>
    </div>
  )

}
export default (props: IProps): React.JSX.Element => {
  // @ts-ignore
  const {titleConfig, subTitleConfig, list = [], style = {}} = props;

  const titleStyle = useMemo(() => {
    const val: React.CSSProperties = {};
    if (titleConfig?.fontColor) {
      val.color = titleConfig?.fontColor;
    }
    if (titleConfig?.fontSize) {
      val.fontSize = titleConfig?.fontSize + 'px';
    }
    return val
  }, [titleConfig?.text, titleConfig?.fontColor, titleConfig?.fontSize])

  const subTitleStyle = useMemo(() => {
    const val: React.CSSProperties = {};
    if (subTitleConfig?.fontColor) {
      val.color = subTitleConfig?.fontColor;
    }
    if (subTitleConfig?.fontSize) {
      val.fontSize = subTitleConfig?.fontSize + 'px';
    }
    return val
  }, [subTitleConfig?.text, subTitleConfig?.fontColor, subTitleConfig?.fontSize])


  return (
    <div className={'characteristicList_container'} style={style}>
      {
        titleConfig.text? (
          <div className={'title'} style={titleStyle}>
            {titleConfig.text}
          </div>
        ): null
      }
      {
        subTitleConfig.text? (
          <div className={'subTitle'} style={subTitleStyle}>
            {subTitleConfig.text}
          </div>
        ): null

      }
      {
        list.length? (
          <div className={'list'}>
            {
              list.map((item, index) => {
                return (
                  <Item {...item} key={index} />
                )
              })
            }

          </div>
        ): null
      }
    </div>
  )
}