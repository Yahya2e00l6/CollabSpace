import style from "../../Style/ProjectList.module.css"
import profile from "../../assets/profile.png"
function ProjectList(){
    return(
        <>
            <div>
                <img src={profile} alt="user image" className={style.profile} />
                <div className={style.ProjectData}>
                    <p className="Name">Project Name</p>
                    <p className="ProjectTeam">Project Team</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <p className="Manager">Manager Name</p>
                        <p className="ProjectCollabs">23</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectList