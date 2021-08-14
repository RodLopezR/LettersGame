import { FunctionComponent, useContext } from 'react';
import { BoardContext } from '../../context/context';

import clsx from 'clsx';
import Styles from './Box.module.css';
import BoxType from '../../types/BoxType';

interface BoxProps {
  box: BoxType;
  indexRow: number;
  indexColumn: number;
}

const BoxComponent: FunctionComponent<BoxProps> = ({
  box,
  indexColumn,
  indexRow,
}) => {
  const [{ letters }, { clickItem }] = useContext(BoardContext);

  const handleClickBox = () => {
    if (box.selected) return;

    if (letters.length > 0) {
      if (box.clickeable) {
        clickItem(indexRow, indexColumn);
      }
    } else {
      clickItem(indexRow, indexColumn);
    }
  };

  return (
    <div
      className={clsx(
        Styles.box,
        'box-item',
        'noSelectUI',
        box.selected ? Styles.selected : '',
        box.clickeable && !box.selected && letters.length > 0
          ? Styles.clickeable
          : ''
      )}
      onClick={handleClickBox}
    >
      <div className={Styles.text}>{box.letter}</div>
    </div>
  );
};

export default BoxComponent;
