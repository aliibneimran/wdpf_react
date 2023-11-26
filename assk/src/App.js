import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Layout from './components/Layout';
import Single from './pages/Single';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='*' element={<NoPage></NoPage>}></Route>
            <Route path='/single' element={<Single></Single>}></Route>
            <Route path='/about' element={<About></About>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
