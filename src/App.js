import './App.css';
//import {Navbar} from './components/Navbar/Navbar'; //pq se desestructura??
import {data} from './data'
import {Main} from './Views/Main'


function App() {
  return (
    <div className="App">
      <p>Hi</p>
      {/* <Navbar data={data} /> */}
      <Main valor={data} />
    </div>
  );
}

export default App;
