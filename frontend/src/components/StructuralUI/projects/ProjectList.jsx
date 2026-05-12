import { useState } from "react"
import style from "../../../Style/StructuralUI/projects/ProjectList.module.css"
import ProjectCard from "./ProjectCard";

const ProjectList = ({projectsData , Task ,setOption , Project}) => {
    const [ searchTerm , setSearchTerm ] = useState("")
    const filtredData = projectsData.filter(
        (project) => project.ProjectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <>
        <div className={style.Container}>
            <div className={style.inputContainer}>
                <input 
                    type="text"
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder="Search projects..."
                    value={searchTerm}
                    className={style.input}
                />
            </div>
            {
                Task && 
                <div className={style.projectFilter}>
                    <button type="button" onClick={() => setOption("All")} className={style.filterButton}>All Projects</button>
                    <button type="button" onClick={() => setOption("Mine")} className={style.filterButton}>My Projects</button>
                </div>
            }
            <div className={style.list}>
            {
                filtredData.length > 0 ? 
                (
                    filtredData.map((d) => (
                        <ProjectCard ProjectName={d.ProjectName} key={d.id} ProjectTeam={d.TeamName} Project={Project}/>
                    ))
                )
                :
                <p className={style.noResults}>No teams found matching "{searchTerm}"</p>
            }
            </div>
        </div>
        </>
    )
}

export default ProjectList