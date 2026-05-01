import { useState } from "react"
import style from "../../Style/form/AddTask.module.css"
function AddTask(){
    const [ TaskName , setTaskName ] = useState("")
    const [ TaskOwner , setTaskOwner ] = useState("")
    const [ TaskDescription , setTaskDescription ] = useState("")
    const [ Results , setResults ] = useState([]);
    const [ NameHasError , setNameHasError ] = useState(false)
    const [ DescriptionHasError , setDescriptionHasError ] = useState(false)

    const Handlesubmit = async (e) => {
        e.preventDefault();
        const hasSymbol = /[!@#$%^&*()+={}\\[\]|\\"'<>?\\/=]/.test(TaskName);
        if(TaskName.length<8 || typeof(TaskName[0])===Number || hasSymbol || TaskDescription.length<24){
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
            <form method="POST" onSubmit={Handlesubmit}>
                <button type="button" className={style.close}>X</button>
                <div className={style.formGroup}>
                    <span className={NameHasError ? style.taskNameError : style.hidden}></span>
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
                    <span className={Results.length===0 ? style.OwnerError : style.Hidden}></span>
                    <label htmlFor="TaskOwner" className={style.label}>Owner</label>
                    <input 
                        type="number"
                        id="TaskOwner"
                        name="TaskOwner"
                        className={style.input}
                        placeholder="entre the Owner ID" 
                        required
                        onChange={(e)=>setTaskOwner(e.target.value)}
                    />
                </div>
                <div className={style.formGroup}>
                    <span className={DescriptionHasError ? style.taskDescriptionError : style.hidden}></span>
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
            </form>
        </>
    )
}
export default AddTask