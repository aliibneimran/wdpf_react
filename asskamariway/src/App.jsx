import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<NoPage></NoPage>}></Route>
          <Route path="/" element={<NoPage></NoPage>}></Route>
          <Route path="/" element={<About></About>}></Route>
          <Route path="/" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
