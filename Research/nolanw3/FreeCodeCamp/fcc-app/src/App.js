import logo from './logo.svg';
import './App.css';
import User from './User';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <User userName='First User' message='What a nice day'/>
      <User userName='Tony Stark' message='I am Iron Man'/>
      <User userName='Bob' message='Hello everyone'/>
      <User userName='Julia Roberts' message='My new movie is out'/>
      <Welcome name='John'/>
      <Welcome name='Mary'/>
      <Welcome name='Alex'/>
      <Welcome/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
