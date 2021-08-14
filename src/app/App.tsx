import { BoardContextProvider } from '../context/context';
import { GetBoardData } from '../services/BoardService';

import BoxContainer from '../components/BoxContainer/BoxContainer.component';
import DisplayerComponent from '../components/Displayer';

function App() {
  const board = GetBoardData();
  return (
    <BoardContextProvider board={board}>
      <BoxContainer />
      <DisplayerComponent />
    </BoardContextProvider>
  );
}

export default App;
