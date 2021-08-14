import { BoardContextProvider } from '../context/context';
import { GetBoardData, GetDictionary } from '../services/BoardService';

import BoxContainer from '../components/BoxContainer/BoxContainer.component';
import DisplayerComponent from '../components/Displayer';

function App() {
  const board = GetBoardData();
  const dictionary = GetDictionary();
  return (
    <BoardContextProvider board={board} dictionary={dictionary}>
      <BoxContainer />
      <DisplayerComponent />
    </BoardContextProvider>
  );
}

export default App;
