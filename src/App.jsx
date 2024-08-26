import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Root'
import{ Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
       <Toaster />
    </>
  )
}

export default App
