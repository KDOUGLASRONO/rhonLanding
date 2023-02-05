import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./state-manager";

import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const App = () => {
  const user = useAuth();
  const current = user.currentUser;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/signup"
          element={!current ? <SignUp /> : <Navigate to="/home" replace />}
        />
        <Route
          path="/signin"
          element={!current ? <SignIn /> : <Navigate to="/home" replace />}
        />
        <Route
          path="/home"
          element={current ? <Home /> : <Navigate to="/signin" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
