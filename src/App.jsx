import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects"
import { ContactPage } from "./pages/ContactPage";
import { Blog } from "./pages/Blog";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route index element={<Home/>}/>
         <Route index path="home" element={<Home/>}/>
         <Route path="projects" element={<Projects/>}/>
         <Route path="contact" element={<ContactPage/>}/>
         <Route path="blog" element={<Blog/>}/>
         <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
