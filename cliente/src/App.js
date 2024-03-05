import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Register from './views/register/Register';
import Main from './views/Main/Main';
import User from './views/User/User';
import Lista from './components/Lista/Lista';
import Formulario from './components/Productos/Formulario';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <>
    <Navbar />

      <ProductProvider>
    <Routes>
      <Route path={"/"} element={<Main/>}/>
      <Route path={"/register"} element={<Register/>} />
      <Route path={"/login"} element={<Login/>} />
      
        <Route path={"/Profile/*"} element={<User/>}>
          <Route exact path='productos' element={<Lista/>}/>
          <Route exact path='agregar' element={<Formulario/>}/>
        </Route>


    </Routes>
      </ProductProvider>

    </>
  );
}

export default App;
