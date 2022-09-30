import { Provider } from "react-redux";
import "./App.css";
import Landing from "./Components/Landing";
import store from "./Redux/store";

function App() {


  return (
    <Provider store={store}>
      <div className="App min-h-screen ">
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
