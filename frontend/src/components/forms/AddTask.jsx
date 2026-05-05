import { useState } from "react"
import style from "../../Style/form/AddTask.module.css"
function AddTask({onClose}){
    const [ TaskName , setTaskName ] = useState("")
    const [ TaskOwner , setTaskOwner ] = useState("")
    const [ TaskDescription , setTaskDescription ] = useState("")
    const [ taskProject , setTaskProject ] = useState('')
    
    const [ isTaskOwnerValide , setIsTaskOwnerValide ] = useState(false)
    const [ isProjectValide , setIsProjectValide ] = useState(false);
    const [ NameHasError , setNameHasError ] = useState(false)
    const [ DescriptionHasError , setDescriptionHasError ] = useState(false)

    const Handlesubmit = async (e) => {
        e.preventDefault();
        const hasSymbol = /[!@#$%^&*()+={}\\[\]|\\"'<>?\\/=]/.test(TaskName);
        if(TaskName.length<8 || typeof(TaskName[0])===Number || hasSymbol){
            setNameHasError(true);
            return;
        }
        if(TaskDescription.length < 24){
            setDescriptionHasError(true);
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
            <form method="POST" className={style.form} onSubmit={Handlesubmit}>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>AddTask</legend>
                <div className={style.formGroup}>
                    <span className={NameHasError ? style.taskNameError : style.hidden}>Name must be at least 8 characters and contain no symbols.</span>
                    <label htmlFor="TaskName" className={style.label}>Name</label>
                    <input
                        type="text" 
                        id="TaskName"
                        name="TaskName"
                        className={style.input}
                        required 
                        onChange={(e)=>setTaskName(e.target.value)}
                    />
                </div>
                <div className={style.formGroup}>
                    <span className={isProjectValide ? style.OwnerError : style.Hidden}></span>
                    <label htmlFor="TaskOwner" className={style.label}>Project</label>
                    <input 
                        id="TaskProject"
                        name="TaskProject"
                        className={style.input}
                        list="Projects"
                        required
                        onChange={(e) => setTaskProject(e.target.value)}
                    />
                    <datalist id="Projects">
                        <option value="collab" />
                        <option value="taskflow" />
                        <option value="pool" />
                    </datalist>
                </div>
                <div className={style.formGroup}>
                    <span className={isTaskOwnerValide? style.OwnerError : style.Hidden}></span>
                    <label htmlFor="TaskOwner" className={style.label}>Owner</label>
                    <input 
                        id="TaskOwner"
                        name="TaskOwner"
                        className={style.input}
                        list="members"
                        required
                        onChange={(e) => setTaskOwner(e.target.value)}
                    />
                    <datalist id="members">
                        <option value="Ayoub saad" />
                        <option value="Ossama" />
                        <option value="Saad" />
                    </datalist>
                </div>
                <div className={style.formGroup}>
                    <span className={DescriptionHasError ? style.taskDescriptionError : style.hidden}>Description must be at least 24 characters.</span>
                    <label htmlFor="TaskDescription" className={style.label}>Description</label>
                    <textarea 
                        id="TaskDescription"
                        name="TaskDescription" 
                        className={style.textarea}
                        placeholder="entre the Task description" 
                        required
                        onChange={(e)=>setTaskDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className={style.submitBtn} >Create Task</button>
                </fieldset>
            </form>
            </div>
        </div>
        </>
    )
}
export default AddTask