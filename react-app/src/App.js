import AddTask from './Components/List';
import './index.css'



function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>TO-DO LIST  </h1>
      <div className='todo'><AddTask /></div>
    </div>
  );
}

export default App;
