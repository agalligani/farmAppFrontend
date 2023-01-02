import { Fragment } from 'react'
import { Helmet } from "react-helmet"
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Welcome from './components/Welcome'
import DashLayout from './components/DashLayout'
import MainNav from './components/navs/MainNav'

import AreasList from './features/areas/AreasList'
import EditArea from './features/areas/EditArea'

import CropsList from './features/crops/CropsList'
import EditCrop from './features/crops/EditCrop'

function App() {
  return (
    <Fragment>
    <Helmet>
      <title>Sow Awesome | Farmer's Planting Guide</title>
      <meta name="description" content="Sow Awesome - An Application to Help Small Farms Grow" />
      <meta name="keywords" content="Farming, Planting, Schedule, Harvest, Pesticide, Cover crop, Maturity, Tracker" />
    </Helmet>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />


          {/* <Route index element={<Welcome />} /> */}

          <Route path="areas">
            <Route index element={<AreasList />} />
            <Route path=":id" element={<EditArea />} />
          </Route>

          <Route path="crops">
            <Route index element={<CropsList />} />
            <Route path=":id" element={<EditCrop />} />
          </Route>


        </Route>{/* End Dash */}

      </Route>
    </Routes>
    </Fragment>
  );
}

export default App;