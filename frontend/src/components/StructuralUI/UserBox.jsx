import femaleProfile from '../../assets/femaleProfile.png'
import maleProfile from '../../assets/maleProfile.png'
import style from "../../Style/StructuralUI/UserBox.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons' 
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { get } from '../../api/client'
const UserBox = ({ onSignOut }) =>{
    const { user } =useContext(AuthContext)
    const [ gender , setGender ] =useState('')
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = get(`/auth/gender/${user.id}`)
                setGender(response.gender)
            }catch(e){
                console.error(e)
            }
        }
        fetchData()
    },[user.id])

    return(
        <>
            <div className={style.UserBox}>
                <img className={style.profile} src={gender==='f'?femaleProfile : maleProfile} alt="" />
                <div className={style.UserName}>{user.identifier}</div>
                <button className={style.logout} onClick={onSignOut}><FontAwesomeIcon icon={faRightFromBracket} /></button>
            </div>
        </>
    )
}

export default UserBox