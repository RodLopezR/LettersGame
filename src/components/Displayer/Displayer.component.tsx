import clsx from 'clsx';
import { FunctionComponent, useContext } from 'react';
import { BoardContext } from '../../context/context';
import Styles from './Displayer.module.css';

const DisplayerComponent: FunctionComponent = () => {
  const [{ letters, dictionary }, { clearAll }] = useContext(BoardContext);
  const text = letters.join('');
  const isValid = dictionary.includes(text.toLowerCase());
  return (
    <div className={Styles.container}>
      <div>
        <button id="btn-clear" className={Styles.button} onClick={clearAll}>
          Clear all
        </button>
      </div>
      <div className={Styles.textBox}>
        <div className={clsx(Styles.text, !isValid ? Styles.error : '')}>
          {text}
        </div>
        {text.length > 0 ? (
          <div className={clsx(Styles.validator, !isValid ? Styles.error : '')}>
            {isValid ? 'valid' : 'invalid'}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayerComponent;
