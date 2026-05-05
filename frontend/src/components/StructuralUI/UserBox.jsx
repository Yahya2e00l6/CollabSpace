import profile from "../../assets/profile.png"
import style from "../../Style/StructuralUI/UserBox.module.css"
const UserBox = () =>{
    return(
        <>
            <div className={style.UserBox}>
                <img className={style.profile} src={profile} alt="" />
                <div className={style.UserName}>User Name</div>
            </div>
        </>
    )
}

export default UserBox