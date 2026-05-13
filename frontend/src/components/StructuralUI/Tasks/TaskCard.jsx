import style from "../../../Style/StructuralUI/Tasks/TaskCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck , faTrash } from '@fortawesome/free-solid-svg-icons';
import {del, patch } from "../../../api/client";
const TaskCard = ({TaskDescription ,TaskName , OwnerName , CreateAt , DeadLine , Status , taskId , onStatusUpdate , onDelete}) => {

    const statusClass = Status.toLowerCase() === "pending"
        ? style.statusPending
        : Status.toLowerCase() === "completed"
            ? style.statusCompleted
            : style.statusOngoing
    const updateState = async(newStatus) => {
        try{
            const response = patch(`/tasks/updateTaskState/${taskId}/${newStatus}`)
            if(response){
                onStatusUpdate(taskId , newStatus)
            }
        }catch(e){
            console.log(e.error)
        }
    }
    const deleteTask = async() => {
        try{
            const response = del(`/tasks/deleteTask/${taskId}`)
            if(response){
                onDelete(taskId)
            }
        }catch(e){
            console.log(e.error)
        }
    }
    return(
        <>
<tr className={style.MembershipCard}>
                <td className={style.profiles}>
                    <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>                </td>
                <td className={style.Name}>
                    <p>{TaskName}</p>
                </td>
                <td className={style.OwnerName}>
                    <p>{OwnerName}</p>
                </td>
                <td className={style.OwnerName}>
                    <p>{TaskDescription}</p>
                </td>
                <td className={style.Status}>
                    <p className={`${style.statusPill} ${statusClass}`}>{Status}</p>
                </td>
                <td className={style.CreateAt}>
                    {CreateAt}
                </td>
                <td className={style.DeadLine}>
                    <p>{DeadLine}</p>
                </td>
                { 
                    Status === "pending" && 
                    <td className={style.buttons}>
                        <button type="button" className={style.Completed} onClick={() => updateState('completed')}>Completed</button>
                        <button type="button" className={style.Ongoing} onClick={() => updateState('ongoing')}>Ongoing</button>
                        <button type="button" className={style.delete}><FontAwesomeIcon icon={faTrash} onClick={() => deleteTask()}/></button>
                    </td>
                }
                { 
                    Status === "completed" && 
                    <td className={style.buttons}>
                        <button type="button" className={style.pending} onClick={() => updateState('pending')}>pending</button>
                        <button type="button" className={style.Ongoing} onClick={() => updateState('ongoing')}>Ongoing</button>
                        <button type="button" className={style.delete}><FontAwesomeIcon icon={faTrash} onClick={() => deleteTask()}/></button>
                    </td>
                }
                { 
                    Status === "ongoing" && 
                    <td className={style.buttons}>
                        <button type="button" className={style.Completed} onClick={() => updateState('completed')}>Completed</button>
                        <button type="button" className={style.pending} onClick={() => updateState('pending')}>pending</button>
                        <button type="button" className={style.delete}><FontAwesomeIcon icon={faTrash} onClick={() => deleteTask()}/></button>
                    </td>
                }
            </tr>
        </>
     )
}

export default TaskCard