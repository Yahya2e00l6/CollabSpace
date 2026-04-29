import { useState } from "react"
import style from "../../Style/AddProject.module.css"

function AddProject(){
    const Now = new Date();

    const [ ProjectName, setProjectName] = useState("")
    const [ ProjectDescription , setProjectDescription ] = useState("");
    const [ ProjectVisibility , setProjectVisibility ] = useState("public")
    const [ HasError , setHasError ] = useState(false)
    const [ DeadLine , setDeadLine ] = useState(Now.toLocaleDateString())
    const today = new Date().toISOString().split('T')[0];
    const Handlesubmit = async(e)=>{
        e.preventDefault();
        const hasSymbol = /[!@#$%^&*()+={}\\[\]|\\"'<>?\\/=]/.test(ProjectName);
        if(ProjectName.length<8 || typeof(ProjectName[0])===Number || hasSymbol){
            setHasError(true);
            return;
        }
        //API
    }
    return(
        <>
            <form method="POST" className={style.form} onSubmit={Handlesubmit}>
                <button type="button" className={style.close}>X</button>
                <span className={HasError ? style.Error : style.Hidden }></span>
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
                <div className={style.formGroup}>
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
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>Visibility:</legend>
                    <div className={style.radioOption}>
                        <input 
                            type="radio" 
                            id="public" 
                            name="visibility" 
                            value="public" 
                            checked={ProjectVisibility == "public"} 
                            onChange={(e)=>setProjectVisibility(e.target.value)}
                        />
                        <label htmlFor="public">Public</label>
                    </div>
                    <div className={style.radioOption}>
                        <input 
                            type="radio" 
                            id="private" 
                            name="visibility" 
                            value="private" 
                            checked={ProjectVisibility=="private"}
                            onChange={(e)=>setProjectVisibility(e.target.value)}
                        />
                        <label htmlFor="private">Private</label>
                    </div>
                </fieldset>
                <button type="submit" className={style.submitBtn}>Create Project</button>
            </form>
        </>
    )
}
export default AddProject