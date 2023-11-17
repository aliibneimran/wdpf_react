import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import Feature from "./pages/Feature";
import Quote from "./pages/Quote";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";



function App() {
  return (
    <>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="*" element={<NoPage></NoPage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
        <Route path="/feature" element={<Feature></Feature>}></Route>
        <Route path="/quote" element={<Quote></Quote>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/testimonial" element={<Testimonial></Testimonial>}></Route>
      </Route>
    </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
