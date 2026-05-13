import style from '../../../Style/StructuralUI/feeds/TaskCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
const TaskCard = ({taskName,createdAt,taskStatus , projectName}) => {
    const statusClass = taskStatus?.toLowerCase();
    const statusStyle = statusClass === "completed"
        ? style.statusCompleted
        : statusClass === "ongoing"
            ? style.statusOngoing
            : statusClass === "pending"
                ? style.statusPending
                : "";
    return(
        <>
            <div className={style.ProjectItem}>
                <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>
                <div className={style.TaskData}>
                    <p className={style.TaskName}>{taskName}</p>
                    <p className={style.projectName}>{projectName}</p>
                    <p className={style.CreateAt}>{createdAt}</p>
                        <p className={`${style.TaskStatus} ${statusStyle}`}> {taskStatus}</p>
                    
                </div>
                {
                }
            </div>
        </>
    )
}

export default TaskCard