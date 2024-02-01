import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllBooks from '../AllBooks/AllBooks'
import Form from '../Form/Form'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AllBooks/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
    </Routes>
  )
}

export default AllRoutes
