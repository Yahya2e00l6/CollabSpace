import { useContext, useEffect } from "react"
import style from "../../../Style/StructuralUI/Tasks/TaskCardList.module.css"
import TaskCard from "./TaskCard"
import { get } from "../../../api/client"
import { useState } from "react"
import { AuthContext } from "../../../context/AuthContext"
const TaskCardList = ({projectId}) => {
    const [ projectTasks , setProjectTasks ] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await get(`/projects/taskInfo/${projectId}`)
                const normalized = Array.isArray(response)
                    ? response.filter(task => task && task.taskId && task.taskName)
                    : []
                if (user.role === 'member') {
                    const filteredData = normalized.filter(task => task.OwnerId === user.id)
                    setProjectTasks(filteredData)
                } else {
                    setProjectTasks(normalized)
                }
            }catch(e){
                console.log(e.message)
            }
        }
        fetchData()
    },[projectId , setProjectTasks , user.role , user.id])
    const handleStatusUpdate = (taskIdToUpdate, newStatus) => {
        setProjectTasks(prevData => prevData.map(task => {
            if (task.taskId === taskIdToUpdate) {
                return { ...task, taskStatus: newStatus } 
            }
            return task; 
        }));
    }
    const handleTaskDelete = (taskIdToDelete) => {
            setProjectTasks(prevData => 
                prevData.filter(task => task.taskId !== taskIdToDelete)
            );
    }
    return(
        <>
            <div className={style.list}>
                {
                    projectTasks.length > 0 ? 
                    (
                        <div className={style.tableWrapper}>
                            <table className={style.table}>
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}></th>
                                        <th className={style.th}>Name</th>
                                        <th className={style.th}>Owner Name</th>
                                        <th className={style.th}>Description</th>
                                        <th className={style.th}>Status</th>
                                        <th className={style.th}>CREATED AT</th>
                                        <th className={style.th}>DeadLine</th>
                                        <th className={style.th}>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody className={style.tbody}>
                                    {
                                        projectTasks.map((d) => (
                                            <TaskCard 
                                            key={d.taskId} 
                                            OwnerId={d.OwnerId}
                                            taskId={d.taskId}
                                            TaskName={d.taskName}
                                            OwnerName={d.OwnerfullName} 
                                            TaskDescription={d.taskDescription} 
                                            Status={d.taskStatus?.toLowerCase() || "pending"}
                                            CreateAt={d.createdAt?.split('T')[0] || "No Date"} 
                                            DeadLine={d.taskDeadLine?.split('T')[0] || "No Date"}
                                            onStatusUpdate={handleStatusUpdate}
                                            onDelete={handleTaskDelete}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                    :
                    <p className={style.noResults}>No Tasks Yet</p>
                }
            </div>
        </>
    )
}

export default TaskCardList