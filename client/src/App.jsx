import HealthAI from './pages/HealthAI'
import PatientForm from './pages/PatientForm'
import Navbar from './components/Navbar'
import CopyrightFooter from './components/Footer'
import Patient from './pages/Patients'
import Appointments from './pages/Appointments'

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { AuthProvider } from './store/auth'

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
<Navbar />
    <Routes>
      <Route path="/" element={<Appointments />} />
      <Route path="/healthai" element={<HealthAI />} />
      <Route path="/patientform" element={<PatientForm />} />
      <Route path="/patients" element={<Patient />} />
    </Routes>
</BrowserRouter>
      <CopyrightFooter />
    </AuthProvider>



    </>
  )
}

export default App