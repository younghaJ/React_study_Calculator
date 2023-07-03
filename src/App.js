import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './Calculator';
import Home from './Home';
import Ant from './Ant';

function App() {
  
  return (
    <div>
      <ui>
        <li>
          <Link to= "/">Home</Link>
        </li>
        <li>
          <Link to= "/Calculator">계산기</Link>
        </li>
      </ui>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Calculator" element={<Calculator/>} />
      </Routes>
    </div>
      

  );
};

export default App;
