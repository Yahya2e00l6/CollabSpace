import style from "../../../Style/StructuralUI/Tasks/TaskCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck , faTrash } from '@fortawesome/free-solid-svg-icons';
const TaskCard = ({TaskDescription ,TaskName , OwnerName , CreateAt , DeadLine , Status}) => {
    const statusClass = Status.toLowerCase() === "pending"
        ? style.statusPending
        : Status.toLowerCase() === "completed"
            ? style.statusCompleted
            : style.statusOngoing
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
                        <button type="button" className={style.Completed}>Completed</button>
                        <button type="button" className={style.Ongoing}>Ongoing</button>
                        <button type="button" className={style.delete}><FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                }
                { 
                    Status === "completed" && 
                    <td className={style.buttons}>
                        <button type="button" className={style.pending}>pending</button>
                        <button type="button" className={style.Ongoing}>Ongoing</button>
                        <button type="button" className={style.delete}><FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                }
                { 
                    Status === "ongoing" && 
                    <td className={style.buttons}>
                        <button type="button" className={style.Completed}>Completed</button>
                        <button type="button" className={style.pending}>pending</button>
                        <button type="button" className={style.delete}><FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                }
            </tr>
        </>
     )
}

export default TaskCard