import style from "../../Style/Main/Projects.module.css"
import Header from "../../components/StructuralUI/Header"
import ProjectList from "../../components/StructuralUI/projects/ProjectList"
import ProjectDash from "../../components/StructuralUI/projects/ProjectDash"
import { useState } from "react"

const Projects = () =>{
    const [ projectId , setProjectId ] = useState(null)
    return(
        <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Projects'}/>
                <div className={style.Overview}>
                    <ProjectList  Project={true} setProjectId={setProjectId}/>
                    {projectId ? (
                        <ProjectDash projectId={projectId} />
                        ) : (
                            <div className={style.loadingPlaceholder}>Selecting a project...</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Projects