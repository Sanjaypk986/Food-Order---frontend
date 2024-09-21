import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import{ Toaster } from 'react-hot-toast';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { router } from './routes/Root';
import ScrollAnimation from './hooks/ScrollAnimation';


const App = () => {

  return (
    <>
    <ScrollAnimation />
      <RouterProvider router={router}/>
       <Toaster />
    </>
  )
}

export default App
