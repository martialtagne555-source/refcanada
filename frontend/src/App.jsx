import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ExerciceCE from './pages/ExerciceCE'
import ExerciceEE from './pages/ExerciceEE'
import ExerciceCO from './pages/ExerciceCO'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exercice/ce" element={<ExerciceCE />} />
        <Route path="/exercice/ee" element={<ExerciceEE />} />
        <Route path="/exercice/co" element={<ExerciceCO />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App