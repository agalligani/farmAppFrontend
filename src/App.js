import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Welcome from './components/Welcome'
import DashLayout from './components/DashLayout'
import EditArea from './features/areas/EditArea'
import AreasList from './features/areas/AreasList'

function App() {
  return (
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

        </Route>{/* End Dash */}

      </Route>
    </Routes>
  );
}

export default App;