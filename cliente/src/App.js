import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Register from './views/register/Register';
import Main from './views/Main/Main';
import User from './views/User/User';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path={"/"} element={<Main/>}/>
      <Route path={"/register"} element={<Register/>} />
      <Route path={"/login"} element={<Login/>} />
      <Route path={"/Profile"} element={<User />} />
    </Routes>

    </>
  );
}

export default App;
