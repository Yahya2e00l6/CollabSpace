import style from "../../Style/TeamsList.module.css"
import profile from "../../assets/profile.png"

function TeamsList(){
    return(
        <>
            <div>
                <img src={profile} alt="user image" className={style.profile} />
                <div className={style.TeamData}>
                    <p className="Name">Team Name</p>
                    <p className="Speciality">web development</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <p className="Manager">Manager Name</p>
                        <p className="MembersNumber">23</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamsList