import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import State from './components/State';
import Counter from './components/Counter';
import Signup from './components/Signup';
import Useeffect from './components/Useeffect';
import { Route, Routes } from 'react-router-dom';
import Map from './components/Map';
import Listt from './components/Listt';
import Api from './components/Api';
import Grida from './components/Grida';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/U' element={<Useeffect />}/>
        <Route path='/c' element={<Counter />}></Route>
        <Route path='/t' element= {<Map/>}></Route>
        <Route path='/l' element= {<Listt/>}></Route>
        <Route path='/a' element= {<Api/>}></Route>
        <Route path='/g' element= {<Grida/>}></Route>
      </Routes>
      {/* <Counter/> */}
      {/* <State/> */}
      {/* <Signup></Signup> */}
      {/* <Useeffect/> */}
    </div>
  );
}

export default App;
