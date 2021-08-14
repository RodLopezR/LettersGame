import { BoardContextProvider } from '../context/context';
import { GetBoardData } from '../services/BoardService';

import BoxContainer from '../components/BoxContainer/BoxContainer.component';

function App() {
  const board = GetBoardData();
  return (
    <BoardContextProvider board={board}>
      <BoxContainer />
    </BoardContextProvider>
  );
}

export default App;
