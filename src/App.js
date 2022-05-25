import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, Account, ProtectedRoute } from './components';

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
