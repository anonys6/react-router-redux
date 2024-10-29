import "./App.css";
import { Provider } from "react-redux";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Provider>
        <Todo />
      </Provider>
    </>
  );
}

export default App;