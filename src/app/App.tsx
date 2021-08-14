import BoxComponent from "../components/Box";

function App() {
  return (
    <div>
      Hola mundo
      <div>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
      </div>
      <div>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "B", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
      </div>
      <div>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
      </div>
      <div>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
        <BoxComponent box={{ letter: "A", clickeable: false, selected: false }}/>
      </div>
    </div>
  );
}

export default App;
