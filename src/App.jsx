import { useState } from 'react'
import './App.css'
import MainPage from './Components/MainPage'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import RecipePage from './Components/RecipePage'


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<div>
        <MainPage></MainPage>
      </div>
    },{
      path:'/recipe/:idMeal',
      element:<div>
      <RecipePage></RecipePage>
    </div>
    }
  ])

  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
  )
}

export default App
