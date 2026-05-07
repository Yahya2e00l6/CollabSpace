import style from "../../../Style/StructuralUI/feeds/ProjectCardList.module.css"
import ProjectCard from "./ProjectCard";
const ProjectCardList = () => {
    
    const projectsList = [
    {
        id: 101,
        ProjectName: "Smart Transport Scheduler",
        CreateAt: "2026-03-15",
        Description: "A real-time system for managing bus and train schedules across Morocco, featuring automated route updates.",
        ProjectStatus: "Ongoing"
    },
    {
        id: 102,
        ProjectName: "CollabSpace Core",
        CreateAt: "2026-04-01",
        Description: "Developing the central project management engine, including team hierarchies and real-time notifications.",
        ProjectStatus: "Ongoing"
    },
    {
        id: 103,
        ProjectName: "Database Migration v2",
        CreateAt: "2026-02-10",
        Description: "Moving legacy user data to a more scalable MariaDB structure with optimized indexing for fast searches.",
        ProjectStatus: "Completed"
    },
    {
        id: 104,
        ProjectName: "User Feedback Portal",
        CreateAt: "2026-05-01",
        Description: "A guest-facing portal where users can report bugs and suggest new features for the platform.",
        ProjectStatus: "Pending"
    },
    {
        id: 105,
        ProjectName: "API Security Audit",
        CreateAt: "2026-04-20",
        Description: "Comprehensive security testing of all NestJS endpoints to ensure data privacy and prevent unauthorized access.",
        ProjectStatus: "Ongoing"
    },
    {
        id: 106,
        ProjectName: "Mobile Integration",
        CreateAt: "2026-05-05",
        Description: "Building the React Native wrapper to allow users to check their task deadlines on the go.",
        ProjectStatus: "Pending"
    }
];
    return(
        <>
        <div className={style.List}>
            {
                projectsList.map((d) => (
                        <ProjectCard  
                            key={d.id}
                            ProjectName={d.ProjectName} 
                            CreateAt={d.CreateAt}
                            Description={d.Description}
                            ProjectStatus={d.ProjectStatus}
                            />
                ))
            }
        </div>
        </>
    )
}

export default ProjectCardList