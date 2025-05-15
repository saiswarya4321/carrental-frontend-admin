import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // ✅ correct

import { Provider } from 'react-redux'
import store from './redux/store.js'
import 'bootstrap-icons/font/bootstrap-icons.css';




 import Root from './layouts/Root.jsx';


import Outerhome from './components/Outerpages/Outerhome.jsx';
import Outerlayout from './layouts/Outerlayout.jsx';
import Adminhome from './pages/admin/Adminhome.jsx';

import Adminlayout from './layouts/Adminlayout.jsx';



import Allusers from './pages/admin/Allusers.jsx';
import Alldealers from './pages/admin/Alldealers.jsx';
import Allbooking from './pages/admin/Allbooking.jsx';
import Allcars from './pages/admin/Allcars.jsx';


import { ThemeProvider } from './context/ThemeContext.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';


const router=createBrowserRouter([
  
  {
    path: "/",
    element: <Outerlayout />,
    children: [
      { path: "/", element: <Outerhome /> },
      { path: "/home", element: <Outerhome /> },
      // { path: "/signup", element: <Signup /> },
      { path: "/login", element: <AdminLogin /> },
    ],
  },
  

  {
    path: "/admindashboard", // 👈 top-level parent
    element: <Adminlayout/>,
    children: [
      { path: "adminhome", element: <Adminhome /> }, // 
      { path: "allusers", element: <Allusers /> }, 
      { path: "alldealers", element: <Alldealers /> }, 
      { path: "allbooking", element: <Allbooking /> }, 
      { path: "allcars", element: <Allcars /> }, 
      
      
    ],
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
    <ThemeProvider>
    <RouterProvider router={router} />
        <ToastContainer />
  </ThemeProvider>
       
     
    </Provider>
  </StrictMode>
  
   
)
