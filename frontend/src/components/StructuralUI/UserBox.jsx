import profile from "../../assets/profile.png"
import style from "../../Style/StructuralUI/UserBox.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons' 
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
const UserBox = ({ onSignOut }) =>{
    const { user } =useContext(AuthContext)
    return(
        <>
            <div className={style.UserBox}>
                <img className={style.profile} src={profile} alt="" />
                <div className={style.UserName}>{user.identifier}</div>
                <button className={style.logout} onClick={onSignOut}><FontAwesomeIcon icon={faRightFromBracket} /></button>
            </div>
        </>
    )
}

export default UserBox