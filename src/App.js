import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LogIn />}></Route>
        <Route  path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
