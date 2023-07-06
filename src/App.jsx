
import './App.css'
// components

//layouts
import Root from "./layouts/Root";

// pages
import Login from './pages/login';
import Home from './pages/Home';
import User from './pages/User';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />}/>
        <Route path="user" element={<User />}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
