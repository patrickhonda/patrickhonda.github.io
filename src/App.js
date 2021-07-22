import logo from './logo.svg';
import './App.css';
import Code from './components/code'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="ptf">
          portfolio coming soon
        </div>
        <div className="load">
        loading<span>.</span><span>.</span><span>.</span>
        </div>
        <div className="code">
          <Code />
        </div>
        <div className="code">
          <Code />
        </div>
      </header>
    </div>
  );
}

export default App;
