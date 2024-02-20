import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Register from './views/register/Register';
import Main from './views/Main/Main';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path={"/"} element={<Main/>}/>
      <Route path={"/register"} element={<Register/>} />
      <Route path={"/login"} element={<Login/>} />
    </Routes>

    </>
  );
}

export default App;
