import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';

const App = () => {
  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/:userid" element={<Dashboard />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router= {router}/>
    </div>
  )
}

export default App