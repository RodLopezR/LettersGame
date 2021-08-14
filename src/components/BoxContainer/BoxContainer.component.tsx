import Box from '../../types/BoxType';
import BoxComponent from '../../components/Box';
import { useContext } from 'react';
import { BoardContext } from '../../context/context';
import Styles from './BoxContainer.module.css';

function BoxContainer() {
  const [{ board }] = useContext(BoardContext);
  return (
    <div className={Styles.container}>
      {board.items.map((fila, indexRow) => (
        <div key={indexRow}>
          {fila.items.map((box: Box, indexColumn) => (
            <BoxComponent
              key={`${indexRow}-${indexColumn}`}
              indexRow={indexRow}
              indexColumn={indexColumn}
              box={box}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoxContainer;
