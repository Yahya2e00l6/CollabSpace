import style from "../../Style/Main/Projects.module.css"
import Header from "../../components/StructuralUI/Header"
import ProjectList from "../../components/StructuralUI/projects/ProjectList"
import ProjectDash from "../../components/StructuralUI/projects/ProjectDash"

const Projects = () =>{
    const projectData = [
    {
        id: 101,
        ProjectName: "Smart Transport Scheduler",
        TeamName: "Penguins",
        Status: "Ongoing",
        Deadline: "2026-06-15"
    },
    {
        id: 102,
        ProjectName: "CollabSpace UI Redesign",
        TeamName: "Alpha Squad",
        Status: "Pending",
        Deadline: "2026-07-01"
    },
    {
        id: 103,
        ProjectName: "Database Optimization",
        TeamName: "Penguins",
        Status: "Completed",
        Deadline: "2026-05-01"
    },
    {
        id: 104,
        ProjectName: "Mobile App Integration",
        TeamName: "Creative Bees",
        Status: "Ongoing",
        Deadline: "2026-08-20"
    },
    {
        id: 105,
        ProjectName: "API Security Audit",
        TeamName: "Delta Force",
        Status: "Pending",
        Deadline: "2026-06-30"
    },
    {
        id: 106,
        ProjectName: "User Feedback Portal",
        TeamName: "Growth Hackers",
        Status: "Ongoing",
        Deadline: "2026-09-12"
    }
];
    return(
        <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Projects'}/>
                <div className={style.Overview}>
                    <ProjectList projectsData={projectData} Project={true}/>
                    <ProjectDash/>
                </div>
            </div>
        </>
    )
}

export default Projects