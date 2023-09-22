import React, { useState } from "react";
import "./ScrollingPage.css";

const ScrollingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrolling-page">
      <nav className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Teams</div>
        <div className="nav-item signout">Sign Out</div>
      </nav>
      <div className="content">
        <div className="rectangle" style={{ opacity: scrollPosition / 400 }} />
        <div className="main-content">{/* Your main content here */}</div>
      </div>
    </div>
  );
};

export default ScrollingPage;
