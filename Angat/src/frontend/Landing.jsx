import { useState, useEffect } from "react";
import banner from "../assets/img/banner.png";
import "./components/header";
import LandingCard from "./components/LandingCard.jsx";
import useStore from "../helpers/Store.js";
import { useLocation } from "react-router-dom";
import { formatDate } from "../helpers/misc";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Landing() {
  const { projects, fetchProjects, getImage, subscribeToProjects } = useStore();
  const [ongoingUpcomingProjects, setOngoingUpcomingProjects] = useState([]); // asc true
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProjects();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const subscription = subscribeToProjects(); // Call subscription function

    return () => {
      subscription.unsubscribe(); // Clean up on unmount
    };
  }, []);

  useEffect(() => {
    const today = new Date();

    const ongoing = projects
      .filter(
        (project) =>
          project.status === "approved" &&
          new Date(project.start_date) <= today &&
          new Date(project.end_date) >= today,
      )
      .sort((a, b) => new Date(a.end_date) - new Date(b.end_date));

    const upcoming = projects
      .filter(
        (project) =>
          project.status === "approved" && new Date(project.start_date) > today,
      )
      .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

    const recent = projects
      .filter(
        (project) =>
          project.status === "approved" && new Date(project.end_date) < today,
      )
      .sort((a, b) => new Date(b.end_date) - new Date(a.end_date));

    setOngoingUpcomingProjects([...ongoing, ...upcoming]);
    setRecentProjects(recent);
  }, [projects]);

  return (
    <>
      {/* Hero Banner */}
      <div
        class="hero min-h-160 justify-items-start items-end "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-base-100">
          <div class="max-w-4xl mx-12">
            <h1 class="mb-5 text-5xl font-bold lg:text-8xl">Angat Cembo</h1>
            <p class="mb-5">
              We, the Angat Cembo Community Inc., are a non-government
              organization based in Cembo, Taguig City that aims to help, serve,
              and uplift our fellow people by empowering them towards becoming
              active citizens of the Cembo community advocating for volunteerism
              and social welfare.
            </p>
          </div>
        </div>
      </div>
      {/* //////////////////////// */}
      <div className="w-full p-8 md:p-16 bg-base-200 shadow-sm">
        <div className="m-auto w-full lg:w-7/10">
          <div className="text-center text-4xl font-bold">
            Upcoming and Ongoing Projects
          </div>
          <div className="flex flex-col md:flex-row mt-8 gap-8 justify-center">
            {ongoingUpcomingProjects.length > 0 ? (
              // Display actual projects
              ongoingUpcomingProjects.map((project) => (
                <LandingCard
                  key={project.projectid}
                  id={project.projectid}
                  title={project.name}
                  date={`${formatDate(project.start_date)} - ${formatDate(project.end_date)}`}
                  img={getImage("projects_news", project.image_filename)}
                  description={project.description}
                  rowData={project}
                />
              ))
            ) : (
              // No upcoming/ongoing projects found
              <div className="text-center text-xl font-semibold text-gray-600">
                No upcoming or projects
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full p-8 md:p-16 bg-secondary shadow-sm">
        <div className="m-auto w-full lg:w-7/10">
          <div className="text-center text-4xl font-bold text-base-100">
            Recent Projects
          </div>
          <div className="flex flex-col md:flex-row mt-8 gap-8 justify-center">
            {recentProjects.length > 0 ? (
              recentProjects
                .slice(0, 3)
                .map((project) => (
                  <LandingCard
                    key={project.projectid}
                    id={project.projectid}
                    title={project.name}
                    date={`${formatDate(project.start_date)} - ${formatDate(project.end_date)}`}
                    img={getImage("projects_news", project.image_filename)}
                    description={project.description}
                    rowData={project}
                  />
                ))
            ) : (
              <>
                <div className="text-center text-xl font-semibold text-gray-600">
                  No recent projects
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
