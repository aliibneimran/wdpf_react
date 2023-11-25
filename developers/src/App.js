import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
     <BrowserRouter>
     <Header></Header>
        <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path='*' element={<NoPage></NoPage>}></Route>
            <Route path='/about' element={<About></About>}></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
