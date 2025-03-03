import './components/header'
import Project from './components/project'
import { Link } from "react-router-dom";
import { useAuth } from '../helpers/AuthContext';
import { useProjects, getImage } from '../helpers/dbHelper';
import { formatDate } from '../helpers/misc';

function Projects() {
    const { user, userRole, loading } = useAuth();
    const projects = useProjects(["ongoing", "completed"], false);
    
    return (
        <>
            <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between">
                    <div className="text-3xl font-bold">
                        Projects
                    </div>
                    <div className='flex gap-2'>
                        {(userRole && (userRole === "admin" || userRole === "user")) &&
                            <Link to="/add-content" className='btn btn-primary'>
                                Add
                            </Link>}
                        {(userRole && userRole === "admin") && <Link to="/pending-projects" className='btn btn-primary'>
                            Pending
                        </Link>}
                    </div>
                </div>

                <div className="flex flex-col pt-4 gap-4">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <Project
                                key={project.projectid}
                                title={project.name}
                                date={`${formatDate(project.start_date)} - ${formatDate(project.end_date)}`}
                                description={project.description}
                                img={getImage("projects_news", project.image_filename)}
                            />
                        ))
                    ) : (
                        <>
                            <Project title='Loading...' date='' description='' />
                            <Project title='Loading...'  date=''description='' />
                            <Project title='Loading...' date='' description='' />
                        </>

                    )}
                </div>
            </div>
        </>
    )
}

export default Projects
