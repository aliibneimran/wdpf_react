import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Project from './pages/Project';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='*' element={<NoPage></NoPage>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/project' element={<Project></Project>}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
