import { useContext, useEffect, useState } from "react"
import style from "../../../Style/StructuralUI/feeds/TaskDeadLineList.module.css"
import TaskDeadLine from "./TaskDeadLine"
import { AuthContext } from "../../../context/AuthContext"
import { get } from "../../../api/client"
const TaskDeadLineList = () => {
    const {user} = useContext(AuthContext)
    const [ taskDeadLine , setTaskDeadLine ] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await get(`/tasks/taskDeadlineInfo/${user.id}`)
                if(response){
                    setTaskDeadLine(response)
                }
            }catch(e){
                console.error(e.message)
            }
        }
        fetchData()
    },[user.id])
    return(
        <>
        <div className={style.List}>
            {
                taskDeadLine.map((data) => (
                        <TaskDeadLine  
                            key={data.id}
                            ProjectName={data.projectName} 
                            DeadLine={data.deadLine.split('T')[0]}
                            TaskName={data.taskName}
                            remainingDays={data.remaining}
                            />
                ))
            }
        </div>
        </>
    )
}

export default TaskDeadLineList