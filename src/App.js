import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="containerGeneral">
        <header className="header">
          <NavBar />
        </header>
        <main className="main">
          <ItemListContainer curso="ReactJS" />
        </main>
      </div>
    </>
  );
}

export default App;
