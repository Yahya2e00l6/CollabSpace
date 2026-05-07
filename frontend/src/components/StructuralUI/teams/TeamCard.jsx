import style from "../../../Style/StructuralUI/teams/TeamCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

function TeamCard({TeamName}) {
    return (
        <div className={style.teamCard}>
            <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
            <div className={style.teamData}>
                <p className={style.name}>{TeamName}</p>
            </div>
        </div>
    )
}

export default TeamCard