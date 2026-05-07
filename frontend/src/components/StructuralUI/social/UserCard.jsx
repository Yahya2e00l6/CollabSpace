import style from "../../../Style/StructuralUI/social/UserCard.module.css"
import profile from "../../../assets/profile.png"
function UserCard({firstName , lastName , Role , Age , Team}) {
    return (
        <div className={style.projectCard}>
            <img src={profile} alt=""  className={style.Profile}/>
            <div className={style.projeectData}>
                <p className={style.name}>{firstName} {lastName}</p>
                <p className={style.age}>{Age} Years Old</p>
                <p className={style.role}>{Role}</p>
                <p className={style.team}>{Team}</p>
            </div>
        </div>
    )
}

export default UserCard