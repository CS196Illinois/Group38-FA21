import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GetUserTweets from './Pages/GetUserTweets';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/Analysis' component={GetUserTweets} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;