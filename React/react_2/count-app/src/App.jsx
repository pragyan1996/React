import ControlledComponent from "./components/controlledComponent/controlledComponent";
import Counter from "./components/counter/Counter";
import MainList from "./components/Todo/mainList";

function App() {
  return (
    <>
      <Counter initial={1} />
      <Counter initial={2} />
      <Counter initial={3} />
      <br />
      <br />
      <br />
      <ControlledComponent />

      <br />
      <br />
      <MainList />
    </>
  );
}

export default App
