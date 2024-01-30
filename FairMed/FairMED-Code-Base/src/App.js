import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp'
import './App.css';
import PatientDashboard from './Pages/PatientDashboard';
import FAQ from './Pages/FAQ';
import Rateandreview from './Pages/Rateandreview';
import Medicalrecord from './Pages/Medicalrecord';



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NoPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/patient-dashboard" element={<PatientDashboard />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/rate-review" element={<Rateandreview />}></Route>
          <Route path="/medicalrecord" element={<Medicalrecord />}></Route>
        </Routes>
      </BrowserRouter>
  
    </div>


  );
}

export default App;
