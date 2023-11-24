import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Alert from "./components/common/Alert";
import AlertState from "./context/alert/alertState";
import AuthState from "./context/auth/authState";
import ContactState from "./context/contact/contactState";
import AppRouter from "./router";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Alert />
            <AppRouter />
            {/* <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            </Routes> */}
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
