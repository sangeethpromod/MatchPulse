import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import SelectLeauge from "./pages/leauge";
import SearchPlayer from "./pages/searchPlayer";
import Contact from "./pages/contactpage";
import PremireLeauge from "./pages/premireLeauge";
import Dashtest from "./admin/dashboardtest.jsx";
import Teampage from "./pages/teampage.jsx";
import AdminPlayerCreate from "./admin/admin pages/adminPlayer-create.jsx";
import AdminCreateTeam from "./admin/admin pages/createTeam.jsx";
import AdminContact from "./admin/admin pages/admincontact";
import Newsletter from "./admin/admin pages/adminewsletter";
import AdminAccount from "./admin/admin pages/adminAccount";
import AdminNews from "./admin/admin pages/adminNews.jsx";
import Playerinfo from "./pages/playerinfo.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem("token"));
  });

  useEffect(() => {
    localStorage.setItem("token", isLoggedIn ? "yourAuthToken" : "");
  }, [isLoggedIn]);

  const PrivateRoute = ({ element, path }) => {
    const hasToken = Boolean(localStorage.getItem("token"));

    if (!hasToken) {
      // Redirect to login if not logged in
      return <Navigate to="/login" state={{ from: path }} />;
    }

    // Render the element if logged in
    return element;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/leauge" element={<SelectLeauge />} />
        <Route path="/searchplayer" element={<SearchPlayer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/premireleauge" element={<PremireLeauge />} />
        <Route path="/teampage" element={<Teampage />} />
        <Route path="/playerinfo" element={<Playerinfo />} />

        {/* Private routes */}
        <Route path="/admin" element={<PrivateRoute element={<Dashtest />} path="/admin" />} />
        <Route path="/admin/createplayer" element={<PrivateRoute element={<AdminPlayerCreate />} path="/admin/createplayer" />} />
        <Route path="/admin/createteam" element={<PrivateRoute element={<AdminCreateTeam />} path="/admin/createteam" />} />
        <Route path="/admin/contact" element={<PrivateRoute element={<AdminContact />} path="/admin/contact" />} />
        <Route path="/admin/newsletter" element={<PrivateRoute element={<Newsletter />} path="/admin/newsletter" />} />
        <Route path="/admin/newsedit" element={<PrivateRoute element={<AdminNews />} path="/admin/newsedit" />} />
        <Route path="/admin/account" element={<PrivateRoute element={<AdminAccount />} path="/admin/account" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
