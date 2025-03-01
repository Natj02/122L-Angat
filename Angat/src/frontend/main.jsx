import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
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
import Base from "./components/Base.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute.jsx";
import { AuthProvider } from "../helpers/AuthContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Landing />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-pass" element={<ForgotPass />} />
            <Route path="create-pass" element={<CreateNewPass />} />
            <Route path="about" element={<AboutUs />} />

            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route path="manage-user" element={<ManageUsers />} />
              <Route path="pending-news" element={<PendingNews />} />
              <Route path="pending-projects" element={<PendingProjects />} />
            </Route>

            <Route element={<PrivateRoute allowedRoles={["admin", "user"]} />}>
              <Route path="add-content" element={<AddNewsProjects />} />
            </Route>

            <Route path="linkages" element={<Linkages />} />
            <Route path="success-page" element={<SuccessPage />} />
            <Route path="view-item" element={<ViewItem />} />
            <Route path="projects" element={<Projects />} />
            <Route path="news" element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
