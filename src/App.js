import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import { Contact, Favourites, GroupBuy, Home, Login, Register, Store } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/store"
            element={<Store />}
          />
          <Route
            path="/group-buy"
            element={<GroupBuy />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/favourites"
            element={<Favourites />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
