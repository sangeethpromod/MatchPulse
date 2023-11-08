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
import AdminPlayerCreate from "./admin/admin pages/adminPlayer-create.jsx";
import AdminCreateTeam from "./admin/admin pages/createTeam.jsx";
import AdminContact from "./admin/admin pages/admincontact"
import Newsletter from "./admin/admin pages/adminewsletter";
import AdminAccount from "./admin/admin pages/adminAccount";
import AdminNews from "./admin/admin pages/adminNews.jsx";
import Playerinfo from "./pages/playerinfo.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/searchplayer" element={<SearchPlayer />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/leauge" element={<SelectLeauge />}></Route>
        <Route path="/premireleauge" element={<PremireLeauge />}></Route>
        <Route path="/admin" element={<Dashtest />}></Route>
        <Route path="/teampage" element={<Teampage />}></Route>
        <Route path="/playerinfo" element={<Playerinfo />}></Route>
        <Route
          path="admin/createplayer"
          element={<AdminPlayerCreate />}
        ></Route>
        <Route path="/admin/createteam" element={<AdminCreateTeam/>}></Route>
        <Route path="/admin/contact" element={<AdminContact />}></Route>
        <Route path="/admin/newsletter" element={<Newsletter />}></Route>
        <Route path="/admin/newsedit" element={<AdminNews />}></Route>
        <Route path="/admin/account" element={<AdminAccount />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App