import Marginals from "./components/Marginals";
import Card from "./components/Card";
import Grid from "./components/Grid";


function App() {
  return (
    <div>
      <header>
        <Marginals />
      </header>

      <Grid />


      <footer>
        <Card />
        <Marginals />
      </footer>
    </div>
  );
}

export default App;
