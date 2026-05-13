import { useState } from "react"
import style from "../../Style/Main/Tasks.module.css"
import Header from "../../components/StructuralUI/Header"
import TaskCardList from "../../components/StructuralUI/Tasks/TaskCardList"
import ProjectList from "../../components/StructuralUI/projects/ProjectList"

const Tasks = () =>{
    const [ projectId , setProjectId ] = useState('')

    return(
        <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Tasks'}/>
                <div className={style.Overview}>
                    <ProjectList  Task={true} setProjectId={setProjectId}/>
                    <div className={style.feedList}>
                        {
                        projectId ? (
                        <TaskCardList projectId={projectId} />
                        ) : (
                            <div className={style.loadingPlaceholder}>Selecting a Tasks...</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks