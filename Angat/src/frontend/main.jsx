import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Landing.jsx";
import Register from "./register.jsx";
import AboutUs from "./AboutUs.jsx";
import Login from "./login.jsx";
import ForgotPass from "./ForgotPass.jsx";
import CreateNewPass from "./CreateNewPass.jsx";
import Linkages from "./linkages.jsx";
import ManageUsers from "./ManageUsers.jsx";
import News from "./News.jsx";
import PendingNews from "./PendingNews.jsx";
import SuccessPage from "./successPage.jsx";
import Projects from "./Projects.jsx";
import ViewItem from "./ViewItem.jsx";
import PendingProjects from "./PendingProjects.jsx";
import AddNewsProjects from "./addNewsProject.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/create-new-password" element={<CreateNewPass />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/linkages" element={<Linkages />} />
        <Route path="/pending-news" element={<PendingNews />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/view-item" element={<ViewItem />} />
        <Route path="/pending-projects" element={<PendingProjects />} />
        <Route path="/news" element={<News />} />
        <Route path="/add-news-projects" element={<AddNewsProjects />} />
      </Routes>
    </Router>
  </StrictMode>
);
