import { createRoot } from "react-dom/client";
// import './index.css'
import Landing from "./Landing.jsx";
import Register from "./register.jsx";
import AboutUs from "./AboutUs.jsx";
import Login from "./login.jsx";
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
import ConfirmEmailLanding from "./components/ConfirmEmailLanding.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./components/NotFound.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* Routes outside the Base layout */}
        <Route path="success-page" element={<SuccessPage />} />
        <Route path="create-pass" element={<CreateNewPass />} />
        <Route path="confirm-email" element={<ConfirmEmailLanding />} />

        {/* Base layout routes */}
        <Route path="/" element={<Base />}>
          <Route index element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<AboutUs />} />

          {/* Private routes for admin */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="manage-user" element={<ManageUsers />} />
            <Route path="pending-news" element={<PendingNews />} />
            <Route path="pending-projects" element={<PendingProjects />} />
          </Route>

          {/* Private routes for admin and user */}
          <Route element={<PrivateRoute allowedRoles={["admin", "user"]} />}>
            <Route path="add-content" element={<AddNewsProjects />} />
          </Route>

          {/* Public routes */}
          <Route path="linkages" element={<Linkages />} />
          <Route path="view-item/:category/:id" element={<ViewItem />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<News />} />
        </Route>

        {/* Catch-all route for not found pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
</QueryClientProvider>
);
