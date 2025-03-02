import { useState } from 'react'
import banner from '../assets/img/banner.png'
import './components/header'
import LandingCard from './components/LandingCard.jsx'
import { useProjects } from '../helpers/dbHelper.js'
import { formatDate } from '../helpers/misc'
// import './App.css'

function Landing() {
  const [count, setCount] = useState(0)
  const ongoingProjects = useProjects(["ongoing"],true); 
  const recentProjects = useProjects(["completed"]);

  return (
    <>
      {/* Hero Banner */}
      <div
        class="hero min-h-160 justify-items-start items-end "
        style={{
          backgroundImage: `url(${banner})`,
        }}>
        <div class="hero-overlay"></div>
        <div class="hero-content text-base-100">
          <div class="max-w-4xl">
            <h1 class="mb-5 text-8xl font-bold ">Angat Cembo</h1>
            <p class="mb-5">
              We, the Angat Cembo Community Inc., are a non-government organization based in Cembo, Taguig City that aims to help, serve, and uplift our fellow people by empowering them towards becoming active citizens of the Cembo community advocating for volunteerism and social welfare.
            </p>
          </div>
        </div>
      </div>
      {/* //////////////////////// */}
      <div className='w-full p-8 md:p-16 bg-base-200 shadow-sm'>
        <div className="m-auto w-full lg:w-7/10">
          <div className="text-center text-4xl font-bold">
            Upcoming and Ongoing Projects
          </div>
          <div className='flex flex-col md:flex-row mt-8 gap-8 justify-center'>
            {ongoingProjects.length > 0 ? (
              ongoingProjects.map((project) => (
                <LandingCard
                  key={project.projectid}
                  title={project.name}
                  date={`${formatDate(project.start_date)} - ${formatDate(project.end_date)}`}
                />
              ))
            ) : (
              <>
                <LandingCard
                  title="Loading..."
                  date="Loading..."
                />
                <LandingCard
                  title="Loading..."
                  date="Loading..."
                />
                <LandingCard
                  title="Loading..."
                  date="Loading..."
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className='w-full p-8 md:p-16 bg-secondary shadow-sm'>
        <div className="m-auto w-full lg:w-7/10">
          <div className="text-center text-4xl font-bold text-base-100">
            Recent Projects
          </div>
          <div className='flex flex-col md:flex-row mt-8 gap-8 justify-center'>
          {recentProjects.length > 0 ? (
              recentProjects.slice(0, 3).map((project) => (
                <LandingCard
                  key={project.projectid}
                  title={project.name}
                  date={`${formatDate(project.start_date)} - ${formatDate(project.end_date)}`}
                />
              ))
            ) : (
              <>
                <LandingCard
                  title="Loading..."
                  date="Loading..."
                />
                <LandingCard
                  title="Loading..."
                  date="Loading..."
                />
                <LandingCard
                  title="Loading..."
                  date="Loading..."
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
