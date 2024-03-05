import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { DefaultLayout } from "./Layout";

import { publicRoutes } from "./routes";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
        {publicRoutes.map(route => {
          const Layout = route.layout || DefaultLayout
          const path = route.path
          const Component = route.component
          return <Route path={path} element={<Layout>{<Component/>}</Layout>} ></Route>
        })}
      </Routes>
    </div>
  );
}

export default App;
