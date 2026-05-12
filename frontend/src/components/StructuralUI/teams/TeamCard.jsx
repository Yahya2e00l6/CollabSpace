import style from "../../../Style/StructuralUI/teams/TeamCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup , faTrash , faUserPlus} from '@fortawesome/free-solid-svg-icons';

function TeamCard({TeamName , onDelete , managerName , onAdd}) {
    return (
        <div className={style.teamCard}>
            <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
            <div className={style.teamData}>
                <p className={style.name}>{TeamName}</p>
                <p className={style.managerName}>{managerName}</p>
            </div>
                <div className={style.actions}>
                    <button className={style.Add} type="button" onClick={onAdd}><FontAwesomeIcon icon={faUserPlus} /></button>
                    <button className={style.Delete} type="button" onClick={onDelete}><FontAwesomeIcon icon={faTrash} /></button>
                </div>   
        </div>
    )
}

export default TeamCard