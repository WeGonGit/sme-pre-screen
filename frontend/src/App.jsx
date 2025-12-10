import React from "react";
import ApplicationForm from "./components/ApplicationForm";
import Dashboard from "./components/Dashboard";

import hdfcLogo from "./assets/hdfc-logo.png";

export default function App() {
  return (
    <div className="page">

      {/* ---------- HEADER ---------- */}
      <header className="page-header">
        <img src={hdfcLogo} alt="HDFC Bank" className="logo-left" />
        <h1>SME RFT Pre-Screen</h1>
      </header>

      {/* ---------- MAIN CONTENT ---------- */}
      <ApplicationForm />
      <Dashboard />

      {/* ---------- FOOTER ---------- */}
      <footer className="hdfc-footer">

        <div className="footer-logo">
          <img src={hdfcLogo} alt="HDFC Bank" />
        </div>

        <div className="footer-text">
          © {new Date().getFullYear()} HDFC Bank Ltd.  
          &nbsp;|&nbsp; All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}
