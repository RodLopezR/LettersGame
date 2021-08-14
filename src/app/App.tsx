import { BoardContextProvider } from '../context/context';
import { GetBoardData, GetDictionary } from '../services/BoardService';

import BoxContainer from '../components/BoxContainer/BoxContainer.component';
import DisplayerComponent from '../components/Displayer';
import HeaderComponent from '../components/Header';
import Footer from '../components/Footer';

function App() {
  const board = GetBoardData();
  const dictionary = GetDictionary();
  return (
    <BoardContextProvider board={board} dictionary={dictionary}>
      <HeaderComponent />
      <BoxContainer />
      <DisplayerComponent />
      <Footer />
    </BoardContextProvider>
  );
}

export default App;
