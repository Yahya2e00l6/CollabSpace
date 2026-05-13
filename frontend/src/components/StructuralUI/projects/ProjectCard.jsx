import style from "../../../Style/StructuralUI/projects/ProjectCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject ,faTrash ,faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
function ProjectCard({ProjectName , ProjectTeam , Project , onDelete , onAdd}) {
    const { user } = useContext(AuthContext)
    return (
        <div className={style.projectCard}>
            <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
            <div className={style.projeectData}>
                <p className={style.name}>{ProjectName}</p>
                {user.role === "admin" && <p className={style.team}>{ProjectTeam ? ProjectTeam : 'No Team'}</p>}
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
                <div className={style.actions}>
                    <button className={style.Add} type="button" onClick={onAdd}>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                    <button className={style.Delete} type="button" onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>           
            }
        </div>
    )
}

export default ProjectCard