import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const App = () => {
  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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