import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent petname="Pepper1" age={13}/>
      <FunctionalComponent petname="Pepper2" age={13}/>
    </div>
  );
}

export default App;
