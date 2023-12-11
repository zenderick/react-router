import Navbar from "./assets/components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Inicio from "./assets/pages/Inicio";
import Contacto from "./assets/pages/Contacto";
import Blog from "./assets/pages/Blog";
import LayoutPublic from "./assets/layouts/LayoutPublic";
import NotFound from "./assets/pages/NotFound";
import BlogDeails from "./assets/pages/BlogDeails";


const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LayoutPublic/>}>
            <Route element={<Inicio/>} index></Route>
            <Route element={<Contacto/>} path="/contacto"></Route>
            <Route element={<Blog/>} path="/blog"></Route>
            <Route element={<BlogDeails/>} path="/blog/:id"></Route>
            <Route element={<NotFound/>} path="*"></Route>

          </Route>
        </Routes>
    </>
  );
}

export default App;