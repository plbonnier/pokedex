import "./App.css";
// import Hello from "./Hello";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {

  return (
    <>
      <section>
        <MyTitle />
      </section>
      {/* <Hello /> */}
      <PokemonCard />
    </>
  );
}

export default App;
