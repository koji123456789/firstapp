import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import State from './components/State';
import Counter from './components/Counter';
import Signup from './components/Signup';
import Useeffect from './components/Useeffect';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/U' element={<Useeffect />}/>
        <Route path='/c' element={<Counter />}></Route>
      </Routes>
      {/* <Counter/> */}
      {/* <State/> */}
      {/* <Signup></Signup> */}
      {/* <Useeffect/> */}
    </div>
  );
}

export default App;
