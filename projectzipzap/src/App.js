import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   {/* <Signup/> */}
    //   {/* <Login/> */}
    //   <Home/>
    // </div>
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/home/:id' Component={Home}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
