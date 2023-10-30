import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Homepage from "./pages/Homepage";
import ForgotPassword from "./pages/forgotpassword"
import SelectLeauge from './pages/leauge';
import SearchPlayer from './pages/searchPlayer';
import Contact from './pages/contactpage';
import PremireLeauge from "./pages/premireLeauge";
import Dashtest from "./admin//dashboardtest.jsx";
import Teampage from "./pages/teampage.jsx"
import CreateTeam from "./admin/admin pages/createTeam"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/searchplayer" element={<SearchPlayer />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/leauge" element={<SelectLeauge />}></Route>
        <Route path="/premireleauge" element={<PremireLeauge />}></Route>
        <Route path="/admin" element={<Dashtest />}></Route>
        <Route path="/teampage" element={<Teampage />}></Route>
        <Route path="/createteam" element={<CreateTeam />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App