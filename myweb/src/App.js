import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>.........</h1>,
  },

  {
    path: "/Contact",
    element: <Contact />,
  },

  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
]);

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
