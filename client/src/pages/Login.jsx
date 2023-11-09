import { useState } from "react";
import "../css/login.css";
import Header from "../components/navbar"
import bgm from "../images/premire Leauge/background prem.jpg"

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    setIsSignedUp(true);
  };

  const handleSignIn = () => {
    setIsSignedUp(false);
  };

  return (
    <div className="login-parent">
      <img className="bg-login-image" src={bgm}></img>
      <div>
        <Header />
      </div>
      <div className="edit-this-container">
        <div className={`container ${isSignedUp ? "right-panel-active" : ""}`}>
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>MATCH PULSE</h1>
              <div className="social-container">
                <h1>Create Account</h1>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div
                className={`overlay-panel overlay-left ${
                  isSignedUp ? "" : "right-panel-active"
                }`}
              >
                <h1>Hey Admin!</h1>
                <p>Enter your admin details and start the journey with us</p>
                <button className="ghost" onClick={handleSignIn} id="signIn">
                  Sign In
                </button>
              </div>
              <div
                className={`overlay-panel overlay-right ${
                  isSignedUp ? "right-panel-active" : ""
                }`}
              >
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" onClick={handleSignUp} id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
