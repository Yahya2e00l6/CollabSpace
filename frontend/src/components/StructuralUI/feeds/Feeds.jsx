import { useContext, useState } from "react"
import style from "../../../Style/StructuralUI/feeds/Feeds.module.css"
import TaskDeadLineList from "./TaskDeadLineList"
import ProjectDeadLineList from "./ProjectsDeadLineList"
import CompletedList from "./CompletedProject"
import CompletedProjectList from "./CompletedProjectList"
import { AuthContext } from "../../../context/AuthContext"
const Feeds = () =>{
    const [ selectedList , setSelectedList ] = useState("Projects")
    const { user } = useContext(AuthContext)
    return(
        <>
            <div className={style.Feeds}>
                {
                    user.role === 'manager' && 
                    <div className={style.Manager}>
                        <div className={style.feedList}>
                            <div className={style.BtnsBox}>
                                <button type="button" onClick={()=>setSelectedList("Projects")} 
                                className={`${style.button} ${selectedList === "Projects" ? style.active : ""}`}>
                                    Projects DeadLine
                                </button>
                                <button type="button" onClick={()=>setSelectedList("Tasks")}
                                    className={`${style.button} ${selectedList === "Tasks" ? style.active : ""}`}>
                                    Tasks DeadLine
                                </button>
                            </div>
                            {selectedList === 'Projects' && <ProjectDeadLineList/>}
                            {selectedList === 'Tasks' && <TaskDeadLineList/>}
                        </div>
                    </div>
                }
                {
                    user.role === 'member' && 
                    <div className={style.user}>
                        <div className={style.title}>
                            <h1>Task DeadLines</h1>
                        </div>
                        <div className={style.feedList}>
                            <TaskDeadLineList/>
                        </div>
                    </div>
                }
                {
                    user.role === 'admin' &&
                    <div className={style.admin}>
                        <div className={style.title}>
                            <h1> Completed Project </h1>
                        </div>
                        <div className={style.feedList}>
                            <CompletedProjectList/>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Feeds