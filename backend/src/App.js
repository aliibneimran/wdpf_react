import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import ProductsAll from './pages/ProductsAll';
import ProductAdd from './pages/ProductAdd';

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
        </Route>
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
