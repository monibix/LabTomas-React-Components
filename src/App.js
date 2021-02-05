import './App.css';
import {data} from './data'
import {Main} from './Views/Main'


function App() {
  return (
    <div className="App">
      <Main valor={data} />
    </div>
  );
}

export default App;
