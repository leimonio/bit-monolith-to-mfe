import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import { HomeDetails } from '../../pages/HomeDetails'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/details/:id" element={<HomeDetails />}></Route>
    </Routes>
  )
}

export { AllRoutes }
