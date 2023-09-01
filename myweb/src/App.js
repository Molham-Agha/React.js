import "./App.css";
import { createBrowserRouter, RouterProvider , createRoutesFromElements , Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Layout from "./compontents/Layout";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element= {<Home />}/>
    <Route path='services' element= {<Services />}/>
    <Route path='about' element= {<About />}/>
    <Route path='/contact' element= {<Contact />}/>
  </Route>
))

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} >
        
          <Home />
        
       </RouterProvider>
    </div>
  );
}


export default App;
