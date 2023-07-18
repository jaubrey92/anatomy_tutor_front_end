import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import MuscleIndex from './pages/MuscleIndex'
import MuscleDetails from './pages/MuscleDetails'
import RegionIndex from './pages/RegionIndex'
import AddMuscle from './pages/AddMuscle'
import RegionDetails from './pages/RegionDetails'
import LoginHeader from './components/LoginHeader'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated ? (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddMuscle />} />
          <Route path="/view/cards" element={<MuscleIndex />} />
          <Route path="/cards/details/:cardId" element={<MuscleDetails />} />
          <Route path="/view/region" element={<RegionIndex />} />
          <Route path="/view/region/:regionId" element={<RegionDetails />} />
        </Routes>
      </main>
    </div>
  ) : (
    <div>
      <LoginHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
