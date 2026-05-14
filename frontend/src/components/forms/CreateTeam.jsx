import { useContext, useState } from "react"
import style from "../../Style/form/CreateTeam.module.css"
import { AuthContext } from "../../context/AuthContext"
import { post } from "../../api/client"
function CreateTeam({onClose}){
    const [ TeamName , setTeamName ] = useState("")
    const [ NameHasError , setNameHasError ] = useState(false)
    const { user , setUser} = useContext(AuthContext)
    
    const Handlesubmit = async (e) => {
        e.preventDefault();
        const hasSymbol = /[!@#$%^&*()+={}\\[\]|\\"'<>?\\/=]/.test(TeamName);
        if(TeamName.length<4 || typeof(TeamName[0])===Number || hasSymbol){
            setNameHasError(true);
            return;
        }

        try{
            const response = await post(`/teams/createTeam` , {userId : user.id , TeamName})
            if (response && response.team) {
                setUser({
                    ...user,
                    role: 'manager',
                    teamId: response.team.id
                });
            }
            onClose()
        }catch(e){
            console.error(e.message)
        }
    }


    return(
        <>
        <div className={style.overlay} onClick={onClose}>
            <div className={style.container} onClick={e => {e.stopPropagation()}}>
            <button type="button" className={style.close} onClick={onClose}>&times;</button>
            <form method="POST" onSubmit={Handlesubmit} className={style.form}>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>CreateTeam</legend>
                <div className={style.formGroup}>
                    <span className={NameHasError ? style.TeamNameError : style.hidden}>Name must be at least 8 characters and contain no symbols.</span>
                    <label htmlFor="TeamName" className={style.label}>Name</label>
                    <input
                        type="text" 
                        id="TeamName"
                        name="TeamName"
                        className={style.input}
                        required 
                        onChange={(e)=>setTeamName(e.target.value)}
                    />
                </div>
                <button type="submit" className={style.submitBtn} >Create Team</button>
                </fieldset>
            </form>
            </div>
        </div>
        </>
    )
}
export default CreateTeam