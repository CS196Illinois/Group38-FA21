import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
