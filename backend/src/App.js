import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import ProductsAll from './pages/ProductsAll';
import ProductAdd from './pages/ProductAdd';
import Profile from './pages/Profile';
import Faq from './pages/Faq';
import Register from './pages/Register';
import Employee from './pages/Employee';
import EmployeeAdd from './pages/EmployeeAdd';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='*' element={<NoPage></NoPage>}></Route>
          <Route path='/products' element={<ProductsAll></ProductsAll>}></Route>
          <Route path='/add-product' element={<ProductAdd></ProductAdd>}></Route>
          <Route path='/users-profile' element={<Profile></Profile>}></Route>
          <Route path='/faq' element={<Faq></Faq>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/employees' element={<Employee></Employee>}></Route>
          <Route path='/add-employee' element={<EmployeeAdd></EmployeeAdd>}></Route>
        </Route>
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
