import style from "../../Style/Main/Teams.module.css"
import Header from "../../components/StructuralUI/Header"
import TeamList from "../../components/StructuralUI/teams/TeamList"
import TeamDash from "../../components/StructuralUI/teams/TeamDash"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import UserList from "../../components/StructuralUI/social/UserList"

const Teams = () =>{
const { user } = useContext(AuthContext)
const [ teamId , setTeamId ] = useState(null)
return(
    <>
        <div className={style.selectedSection}>
            <Header selectedPage={'Teams'}/>
            { 
                user.role === 'admin' &&
                <div className={style.Overview}>
                    <TeamList setTeamId={setTeamId}/>
                    {teamId ? (
                        <TeamDash teamId={teamId} />
                        ) : (
                            <div className={style.loadingPlaceholder}>Selecting a team...</div>
                    )}
                </div>
            }
            { 
                user.role === 'user' &&
                <div className={style.Overview}>
                    <UserList/>
                    {user.teamId ? (
                        <TeamDash teamId={user.teamId} />
                        ) : (
                            <div className={style.loadingPlaceholder}>Selecting a team...</div>
                    )}
                </div>
            }
            { 
                user.role === 'manager' &&
                <div className={style.Overview}>
                    <UserList section={'team'} teamId={user.teamId}/>
                    <TeamDash teamId={user.teamId} />
                </div>
            }
        </div>
        </>
    )
}

export default Teams