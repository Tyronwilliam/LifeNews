import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./container/header";
import Footer from "./container/footer";
import Home from "./container/home";
import Login from "./container/user/login";
import Register from "./container/user/register";
import Forgot from "./container/user/forgot";
import Business from "./container/category/business";
import RequireAuth from "./helpers/require-auth";
import Logout from "./container/user/logout";
import Entertainment from "./container/category/entertainement";
import Sante from "./container/category/health";
import Science from "./container/category/science";
import Sport from "./container/category/sports";
import Techno from "./container/category/technology";
import Myaccount from "./container/account/myAccount";
import Search from "./container/category/search";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<RequireAuth child={Home} auth={true} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/business"
            element={<RequireAuth child={Business} auth={true} />}
          />
          <Route
            path="/entertainment"
            element={<RequireAuth child={Entertainment} auth={true} />}
          />
          <Route
            path="/sante"
            element={<RequireAuth child={Sante} auth={true} />}
          />
          <Route
            path="/science"
            element={<RequireAuth child={Science} auth={true} />}
          />
          <Route
            path="/sports"
            element={<RequireAuth child={Sport} auth={true} />}
          />
          <Route
            path="/technologie"
            element={<RequireAuth child={Techno} auth={true} />}
          />
          <Route
            path="/account/:id"
            element={<RequireAuth child={Myaccount} auth={true} />}
          />
          <Route
            path="/search/:id"
            element={<RequireAuth child={Search} auth={true} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
