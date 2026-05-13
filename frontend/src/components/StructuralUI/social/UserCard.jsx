import style from "../../../Style/StructuralUI/social/UserCard.module.css"
import femaleProfile from '../../../assets/femaleProfile.png'
import maleProfile from '../../../assets/maleProfile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
function UserCard({gender , Role , Age , Team , section , fullName , onDelete}) {
    const {user} = useContext(AuthContext)
    return (
        <div className={style.projectCard}>
            <img src={gender==='f'?femaleProfile : maleProfile} alt=""  className={style.Profile}/>
            { section === 'team' &&      
            <>
                <div className={style.projeectData}>
                    <p className={style.name}>{fullName}</p>
                </div>
                {user?.role === 'manager' && (
                    <div className={style.actions}>
                        <button className={style.Delete} type="button" onClick={onDelete}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                )}
            </>
            }
            { section === 'social' && 
            <>
                <div className={style.projeectData}>
                    <p className={style.name}>{fullName}</p>
                    <p className={style.age}>{Age} Years Old</p>
                    <p className={style.role}>{Role}</p>
                    {Team && <p className={style.team}>{Team}</p>}
                    {gender === 'f' && <p className={style.team}>Female</p>}
                    {gender === 'm' && <p className={style.team}>Male</p>}
                </div>
                {user?.role === 'admin' && (
                        <div className={style.actions}>
                            <button className={style.Delete} type="button" onClick={onDelete}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                )}
            </>
            
            }
        </div>
    )
}

export default UserCard