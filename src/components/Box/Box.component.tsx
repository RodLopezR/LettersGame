import clsx from 'clsx';
import { FunctionComponent, useContext } from 'react';
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
  return (
    <div className={clsx(Styles.box, 'noSelectUI')}>
      <div className={Styles.text}>{box.letter}</div>
    </div>
  );
};

export default BoxComponent;
