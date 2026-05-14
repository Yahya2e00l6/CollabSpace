import style from "../../../Style/StructuralUI/projects/ProjectCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject ,faTrash ,faUserPlus , faPlus , faArrowsRotate} from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
function ProjectCard({ProjectName , ProjectTeam , Project , onDelete , onAdd , Task , openAddTask , onUpdate , status , }) {
    const { user } = useContext(AuthContext)
    const normalizedStatus = (status || "").toLowerCase()
    return (
        <div className={style.projectCard}>
            <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
            <div className={style.projeectData}>
                <p className={style.name}>{ProjectName}</p>
                {user.role === "admin" && <p className={style.team}>{ProjectTeam ? ProjectTeam : 'No Team'}</p>}
                <p className={`${style.projectStatus} ${normalizedStatus === "completed" ? style.projectStatusCompleted : ""} ${normalizedStatus === "pending" ? style.projectStatusPending : ""} ${normalizedStatus === "ongoing" ? style.projectStatusOngoing : ""}`}>
                    {status}
                </p>
            </div>
            {
                (user.role ==="admin") && Project &&
                <div className={style.actions}>
                    <button className={style.Delete} type="button" onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>           
            }
            {
                (user.role ==="manager") && Project &&
                <div className={`${style.actions} ${style.actionsWithStatus}`}>
                    <div className={style.actionGroup}>
                        <button className={style.Add} type="button" onClick={onAdd}>
                            <FontAwesomeIcon icon={faUserPlus} />
                        </button>
                        <button className={style.Delete} type="button" onClick={onDelete}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                    <button className={style.updateStatus} type="button" onClick={onUpdate}>
                        <FontAwesomeIcon icon={faArrowsRotate} />
                    </button>
                </div>
            }
            {
                (user.role ==="manager") && Task &&
                <div className={style.actions}>
                    <button className={style.Add} type="button" onClick={openAddTask}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>           
            }
        </div>
    )
}

export default ProjectCard