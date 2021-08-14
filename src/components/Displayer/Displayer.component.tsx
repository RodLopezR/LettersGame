import clsx from 'clsx';
import { FunctionComponent, useContext } from 'react';
import { BoardContext } from '../../context/context';
import Styles from './Displayer.module.css';

const DisplayerComponent: FunctionComponent = () => {
  const [{ letters }, { clearAll }] = useContext(BoardContext);
  const text = letters.join("");
  return (
    <div className={Styles.container}>
      <div>
        <button className={Styles.button} onClick={clearAll}>
          Clear all
        </button>
      </div>
      <div className={Styles.textBox}>
        <div className={clsx(Styles.text)}>{text}</div>
        {text.length > 0 ? (
          <div className={clsx(Styles.validator)}>valid</div>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayerComponent;
