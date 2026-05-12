import style from "../../../Style/StructuralUI/social/UserCard.module.css"
import profile from "../../../assets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/free-solid-svg-icons';
function UserCard({firstName , lastName , Role , Age , Team , section , fullName , onDelete}) {
    return (
        <div className={style.projectCard}>
            <img src={profile} alt=""  className={style.Profile}/>
            { section === 'team' &&      
            <>
                <div className={style.projeectData}>
                    <p className={style.name}>{fullName}</p>
                </div>
                <div className={style.actions}>
                    <button className={style.Delete} type="button" onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </>
            }
            { section === 'social' &&      
            <div className={style.projeectData}>
                <p className={style.name}>{firstName} {lastName}</p>
                <p className={style.age}>{Age} Years Old</p>
                <p className={style.role}>{Role}</p>
                <p className={style.team}>{Team}</p>
            </div>
            }
        </div>
    )
}

export default UserCard