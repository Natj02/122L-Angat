import './components/header'
import PendingProject from './components/pendingproject'
import { Link } from "react-router";
import { formatDate } from '../helpers/misc'
import useStore from '../helpers/Store';
import { useState , useEffect } from "react";

function PendingProjects() {
    const { projects, fetchProjects, getImage, subscribeToProjects } = useStore();
    const [pendingProjects, setPendingProjects] = useState([]);

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
        setPendingProjects(projects.filter((project) => project.status === "pending"));
    }, [projects]);
    
    return (
        <>
            <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between ">
                    <div className="text-3xl font-bold">
                        Pending Projects
                    </div>
                    <div className='flex gap-2'>
                        <Link to="/projects">
                            <div className='btn btn-primary'>
                                Back
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col pt-4 gap-4">
                    {pendingProjects.length > 0 ? (
                        pendingProjects.map((project) => (
                            <PendingProject
                                key={project.projectid}
                                projectId={project.projectid}
                                title={project.name}
                                date={`${
                                    project.start_date === project.end_date
                                      ? formatDate(project.start_date)
                                      : `${formatDate(project.start_date)} - ${formatDate(project.end_date)}`
                                  }`}
                                creationDate={formatDate(project.created_at)}
                                description={project.description}
                                img={getImage("projects_news", project.image_filename)}
                            />
                        ))
                    ) : (
                        <h2 className="text-2xl font-bold">No projects to review.</h2>
                    )}
                </div>
            </div>
        </>
    )
}

export default PendingProjects
