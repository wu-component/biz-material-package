import './index.scss';
import React, {useMemo} from "react";
import IProps, { ItemCardProps } from "../IProps";


interface ItemIProps extends ItemCardProps {
  className?: string;
  onClick: (item: ItemCardProps) => void;
}
const Item = (props: ItemIProps) => {
  const {
    icon,
    className,
    description,
    width = 325,
    title,
  } = props;

  const itemStyle = useMemo(() => {
    const val: React.CSSProperties = {};
    if (width) {
      val.width = width + 'px';
    }
    return val
  }, [width])

  return (
    <div className={`itemContainer ${className || ''}`} style={itemStyle} onClick={() => {
      const {onClick: _onClick = (..._args: any) => {}, ...params} = props
      _onClick && _onClick?.(params);
    }}>
      <div className={'item'}>
        <img crossOrigin="anonymous" className="image" src={icon}/>
        <div className={"content"}>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>

      </div>

    </div>
  )

}

function getPosition(columns: number, index: number) {
  const row = Math.ceil((index + 1) / columns);
  const col = (index % columns) + 1;
  return { x: col, y: row };
}
export default (props: IProps): React.JSX.Element => {
  // @ts-ignore
  const {titleConfig, subTitleConfig, list = [], style = {}, columns: propsColumns = 4, onClick: _onClick = (...args: any) => {}} = props;

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

  const columns = useMemo(() => {
    return propsColumns;

  }, [propsColumns, list])

  const listStyle = useMemo(() => {
    const val: React.CSSProperties = {};
    if (columns) {
      val.gridTemplateColumns = `repeat(${columns}, 325px)`;
      val.gridTemplateRows = `repeat(${Math.ceil(list.length / columns)}, 170px)`;
    }
    return val
  }, [columns, list])


  return (
    <div className={'characteristicCardList_container'} style={style}>
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
          <div className={'list'} style={listStyle}>
            {
              list.map((item, index) => {
                const {x, y} = getPosition(columns, index);
                const row = 'row' + y;
                const column = 'column' + x;

                const getX = () => {
                  let str = `${x !== 1 && x !== columns? `${column} not-first-last-column`: column}`;
                  if (x === columns) {
                    str += ' last-column'
                  }
                  return str
                }

                const getY = () => {
                  let str = `${y > 1 ? `not-first-row ${row}`: 'row' + y}`;
                  if (y >= Math.ceil(list.length / columns)) {
                    str += ' last-row'
                  }
                  return str
                }

                return (
                  <Item {...item} key={index} className={`${getX()} ${getY()}`} onClick={_onClick!} />
                )
              })
            }

          </div>
        ): null
      }
    </div>
  )
}