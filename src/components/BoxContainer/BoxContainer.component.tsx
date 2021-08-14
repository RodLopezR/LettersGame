import Box from '../../types/BoxType';
import BoxComponent from '../../components/Box';
import Styles from './BoxContainer.module.css';
import { GetBoardData } from '../../services/BoardService';

function BoxContainer() {
  const board = GetBoardData();
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
