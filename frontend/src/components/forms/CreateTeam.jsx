import { useContext, useState } from "react"
import style from "../../Style/form/CreateTeam.module.css"
import { AuthContext } from "../../context/AuthContext"
function CreateTeam({onClose}){
    const [ TeamName , setTeamName ] = useState("")
    const [ TeamManager , setTeamManager ] = useState("")
    const [ isTeamManagerValide , setIsTeamManagerValide ] = useState(false)
    const [ NameHasError , setNameHasError ] = useState(false)
    const { user } = useContext(AuthContext)
    
    const Handlesubmit = async (e) => {
        e.preventDefault();
        const hasSymbol = /[!@#$%^&*()+={}\\[\]|\\"'<>?\\/=]/.test(TeamName);
        if(TeamName.length<8 || typeof(TeamName[0])===Number || hasSymbol){
            setNameHasError(true);
            return;
        }

        
        // Owner check
        

        //API
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
                {user.role==='admin' ? (
                    <div className={style.formGroup}>
                        <span className={isTeamManagerValide? style.OwnerError : style.Hidden}></span>
                        <label htmlFor="TeamManager" className={style.label}>Team Manager</label>
                        <input 
                            id="TeamManager"
                            name="TeamManager"
                            className={style.input}
                            list="members"
                            required
                            onChange={(e) => setTeamManager(e.target.value)}
                        />
                        <datalist id="members">
                            <option value="Ayoub saad" />
                            <option value="Ossama" />
                            <option value="Saad" />
                        </datalist>
                    </div>
                ) : ''}
                <button type="submit" className={style.submitBtn} >Create Task</button>
                </fieldset>
            </form>
            </div>
        </div>
        </>
    )
}
export default CreateTeam