import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import ForgotPassword from "./pages/forgotpassword";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Your login logic here, set isLoggedIn to true if user is logged in
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      return Boolean(token); // For simplicity, consider the user logged in if there's a token
    };

    const userIsLoggedIn = checkLoginStatus();
    setIsLoggedIn(userIsLoggedIn);
  }, []);

  const PrivateRoute = ({ element, path }) => {
    if (isLoggedIn) {
      return element;
    } else {
      // Redirect to the login page if the user is not logged in
      return <Navigate to="/login" state={{ from: path }} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/searchplayer" element={<SearchPlayer />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leauge" element={<SelectLeauge />} />
        <Route path="/premireleauge" element={<PremireLeauge />} />
        <Route path="/teampage" element={<Teampage />} />
        <Route path="/playerinfo" element={<Playerinfo />} />
        <Route
          path="/admin"
          element={<PrivateRoute element={<Dashtest />} path="/admin" />}
        />
        <Route
          path="admin/createplayer"
          element={
            <PrivateRoute
              element={<AdminPlayerCreate />}
              path="/admin/createplayer"
            />
          }
        />
        <Route
          path="/admin/createteam"
          element={
            <PrivateRoute
              element={<AdminCreateTeam />}
              path="/admin/createteam"
            />
          }
        />
        <Route
          path="/admin/contact"
          element={
            <PrivateRoute element={<AdminContact />} path="/admin/contact" />
          }
        />
        <Route
          path="/admin/newsletter"
          element={
            <PrivateRoute element={<Newsletter />} path="/admin/newsletter" />
          }
        />
        <Route
          path="/admin/newsedit"
          element={
            <PrivateRoute element={<AdminNews />} path="/admin/newsedit" />
          }
        />
        <Route
          path="/admin/account"
          element={
            <PrivateRoute element={<AdminAccount />} path="/admin/account" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
