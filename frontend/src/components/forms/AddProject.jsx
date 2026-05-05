import { useState } from "react"
import style from "../../Style/form/AddProject.module.css"

function AddProject({onClose}){
    const Now = new Date();

    const [ ProjectName, setProjectName] = useState("")
    const [ ProjectDescription , setProjectDescription ] = useState("");
    const [ NameHasError , setNameHasError ] = useState(false)
    const [ isTeamValide , setIsTeamValide ] = useState(false)
    const [ ProjectTeam , setProjectTeam ] = useState('')

    const [ DescriptionHasError , setDescriptionHasError ] = useState(false)
    const [ DeadLine , setDeadLine ] = useState(Now.toLocaleDateString())
    const today = new Date().toISOString().split('T')[0];
    const Handlesubmit = async(e)=>{
        e.preventDefault();
        const hasSymbol = /[!@#$%^&*()+={}\\[\]|\\"'<>?\\/=]/.test(ProjectName);
        if(ProjectName.length<8 || typeof(ProjectName[0])===Number || hasSymbol){
            setNameHasError(true);
            return;
        }
        if(ProjectDescription.length < 24){
            setDescriptionHasError(true);
            return;
        }
        //API
    }
    const role='admin';
    return(
        <>
            <div className={style.container} onClick={e => {e.stopPropagation()}}>
            <button type="button" className={style.close} onClick={onClose}>&times;</button>
            <form method="POST" className={style.form} onSubmit={Handlesubmit}>
            <fieldset className={style.fieldset}>
                <legend className={style.legend}>AddProject</legend>
                <span className={NameHasError ? style.Error : style.Hidden }>Name must be at least 8 characters and contain no symbols.</span>
                <div className={style.formGroup}>
                    <label htmlFor="projectName" className={style.label}>Project Name:</label>
                    <input 
                        type="text" 
                        id="projectName" 
                        name="projectName" 
                        required 
                        className={style.input}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                </div>
                    {role==='admin' ? (
                        <div className={style.formGroup}>
                            <span className={isTeamValide? style.OwnerError : style.Hidden}>Invalide Team</span>
                            <label htmlFor="TeamManager" className={style.label}>Team</label>
                            <input 
                                id="TeamManager"
                                name="TeamManager"
                                className={style.input}
                                list="members"
                                required
                                onChange={(e) => setProjectTeam(e.target.value)}
                            />
                            <datalist id="members">
                                <option value="team 1" />
                                <option value="team 2" />
                                <option value="team 3" />
                            </datalist>
                        </div>
                    ) : ''}
                <div className={style.formGroup}>
                <span className={DescriptionHasError ? style.Error : style.Hidden }>Name must be at least 8 characters and contain no symbols.</span>
                    <label htmlFor="description" className={style.label}>Description:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        placeholder="Project Description (Optional)" 
                        className={style.textarea}
                        onChange={(e)=>setProjectDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="DeadLine" className={style.label}>Dead Line</label>
                    <input 
                        type="date"
                        id="DeadLine"
                        name="DeadLine"
                        value={today}
                        min={today}
                        onChange={(e)=>setDeadLine(e.target.value)} 
                        className={style.input}
                    />
                </div>
                <button type="submit" className={style.submitBtn}>Create Project</button>
            </fieldset>
            </form>
            </div>
        </>
    )
}
export default AddProject