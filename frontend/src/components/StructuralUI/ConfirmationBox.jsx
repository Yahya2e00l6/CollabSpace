import { useContext } from 'react'
import style from '../../Style/StructuralUI/ConfirmationBox.module.css'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { del , patch} from '../../api/client'

const SignOutBox = ({type , Name , onClose , teamId , userId ,onSuccess , projectId}) =>{
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogOut = (e) => {
        e.preventDefault()
        logout()
        navigate('/SignIn')
    }

    const handleDeleteTeam = async() => {
        try{
            await del(`/teams/deleteTeam/${teamId}`)
            console.log("Team deleted and manager demoted successfully.");
            onSuccess()
            onClose()
        }catch(e){
            console.error(e.message)
        }
    }
    const handleRemoveTeamMate = async () => {
        try{
            await patch(`/teams/${teamId}/removeTeamMate/${userId}`)
            console.log(`Team deleted  ${Name} successfully.`);
            onSuccess()
            onClose()
        }catch(e){
            console.error(e.message)
        }
    }
    const handleRemoveUser = async () => {
        try{
            await del(`/auth/deleteUser/${userId}`)
            console.log(`Team deleted  ${Name} successfully.`);
            onSuccess()
            onClose()
        }catch(e){
            console.error(e.message)
        }
    } 
    const handleDeleteProject = async () => {
        try{
            await del(`/projects/deleteProject/${projectId}`)
            console.log(`project deleted  ${Name} successfully.`);
            onSuccess()
            onClose()
        }catch(e){
            console.error(e.message)
        }
    }
    return(
        <>
        <div className={style.container} onClick={e => {e.stopPropagation()}}>
            <button type="button" className={style.close} onClick={onClose}>&times;</button>
            { 
                type === 'project' &&
                    <div className={style.box}>
                        <p className={style.title}>Delete Project?</p>
                        <p className={style.Body}>Are you sure you want to delete {Name}? This will permanently remove all associated tasks, 
                            milestones, and data. This action cannot be undone.</p>
                        <div className={style.buttons}>
                            <button type='button' className={style.accept} onClick={handleDeleteProject}>Delete Project</button>
                            <button type='button' className={style.decline} onClick={onClose}>Keep Project</button>
                        </div>
                    </div>
            }
            { 
                type === 'TeamMate' &&
                    <div className={style.box}>
                        <p className={style.title}>Remove Team Mate</p>
                        <p className={style.Body}>Are you sure you want to remove {Name} from this team?
                            They will lose access to all team-specific projects </p>
                        <div className={style.buttons}>
                            <button type='button' className={style.accept} onClick={handleRemoveTeamMate}>Remove Member</button>
                            <button type='button' className={style.decline} onClick={onClose}>Cancel</button>
                        </div>
                    </div>
            }
            {  
                type === 'SignOut' &&
                    <div className={style.box}>
                        <p className={style.title}>Sign Out</p>
                        <p className={style.Body}>Ready to head out? Make sure you've saved your progress before logging out of your workspace.</p>
                        <div className={style.buttons}>
                            <button type='button' className={style.accept} onClick={handleLogOut}>SignOut</button>
                            <button type='button' className={style.decline} onClick={onClose}>Stay</button>
                        </div>
                    </div>
            }
            { 
                type === 'Task' &&
                    <div className={style.box}>
                        <p className={style.title}>Delete Task?</p>
                        <p className={style.Body}>You are about to remove this task from the project
                            . Are you sure you want to proceed?</p>
                        <div className={style.buttons}>
                            <button type='button' className={style.accept}>Remove</button>
                            <button type='button' className={style.decline} onClick={onClose}>cancel</button>
                        </div>
                    </div>
            }
            { 
                type === 'Team' &&
                    <div className={style.box}>
                        <p className={style.title}>Delete Team?</p>
                        <p className={style.Body}>ou are about to permanently delete this team and all its member associations. This action cannot be undone. Are you sure you want to proceed?</p>
                        <div className={style.buttons}>
                            <button type='button' className={style.accept} onClick={handleDeleteTeam}>Remove</button>
                            <button type='button' className={style.decline} onClick={onClose}>cancel</button>
                        </div>
                    </div>
            }
            { 
                type === 'social' &&
                    <div className={style.box}>
                        <p className={style.title}>Removing User?</p>
                        <p className={style.Body}>Removing {Name} will permanently erase their profile, role associations, and activity history within the platform. They will immediately lose access to all collaborative spaces. Are you sure you want to continue?</p>
                        <div className={style.buttons}>
                            <button type='button' className={style.accept} onClick={handleRemoveUser}>Remove</button>
                            <button type='button' className={style.decline} onClick={onClose}>cancel</button>
                        </div>
                    </div>
            }
        </div>
        </>
    )
}

export default SignOutBox