import style from "../../../Style/StructuralUI/feeds/MemberCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
const MemberCard = ({MemberName,Gender,PendingTasks,onGoingTasks,CompletedTasks}) => {
    return(
        <>
            <div className={style.MemberItem}>
                <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>
                <div className={style.MemberData}>
                    <p className={style.Name}>{MemberName}</p>
                    <p className={style.Gender}>{Gender}</p>
                    <div className={style.Tasks}>
                        <p className={style.CompletedTasks}>{CompletedTasks} Completed</p>
                        <p className={style.PendingTasks}>{PendingTasks} Pending</p>
                        <p className={style.onGoingTasks}>{onGoingTasks} Ongoing</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberCard