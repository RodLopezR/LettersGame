import clsx from 'clsx';
import { FunctionComponent, useContext } from 'react';
import { BoardContext } from '../../context/context';
import BoxType from '../../types/BoxType';
import Styles from './Box.module.css';

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
  const [, { clickItem }] = useContext(BoardContext);

  const handleClickBox = () => {
    if (box.selected) return;
    clickItem(indexRow, indexColumn);
  };

  return (
    <div
      className={clsx(
        Styles.box,
        'noSelectUI',
        box.selected ? Styles.selected : ''
      )}
      onClick={handleClickBox}
    >
      <div className={Styles.text}>{box.letter}</div>
    </div>
  );
};

export default BoxComponent;
