import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route index path="home" element={<Home/>}/>
         <Route index element={<Home/>}/>
         <Route path="projects" element={<Projects/>}/>
         <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
