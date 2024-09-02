import React from 'react'
import { RouterProvider } from 'react-router-dom'
import{ Toaster } from 'react-hot-toast';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {

  return (
    <>
      <RouterProvider router={router}/>
       <Toaster />
    </>
  )
}

export default App
