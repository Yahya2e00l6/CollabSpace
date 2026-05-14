import { useEffect, useState } from "react"
import style from "../../Style/form/AddTask.module.css"
import { get, post } from "../../api/client"
import Select from 'react-select'
function AddTask({onClose,projectId,projectName}){
        const Now = new Date();
    const [ TaskName , setTaskName ] = useState("")
    const [ TaskOwner , setTaskOwner ] = useState("")
    const [ TaskDescription , setTaskDescription ] = useState("")
    const [ ProjectMembersData , setProjectMembersData ] = useState('')
    const [ NameHasError , setNameHasError ] = useState(false)
    const [ DescriptionHasError , setDescriptionHasError ] = useState(false)
    const today = new Date().toISOString().split('T')[0];
    const [ DeadLine , setDeadLine ] = useState(today);
    


    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await get(`/projects/projectMembers/${projectId}`)
                if(response){
                    setProjectMembersData(response)
                    console.log(response)
                }
            }catch(e){
                console.error(e.message)
            }
        }
        fetchData()
    },[projectId])
    const Handlesubmit = async (e) => {
        e.preventDefault();
        const hasSymbol = /[!@#$%^*()+={}\\[\]|\\"'<>?\\/=]/.test(TaskName);
        if(TaskName.length<3 || typeof(TaskName[0])===Number || hasSymbol){
            setNameHasError(true);
            return;
        }
        if(TaskDescription.length < 12){
            setDescriptionHasError(true);
            return;
        }

        try{
            await post(`/tasks/createtask/${projectId}`,{TaskName,TaskOwner,TaskDescription,DeadLine})
            onClose()
        }catch(e){
            console.log(e.message)
        }
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
                    <label htmlFor="TaskOwner" className={style.label}>Project</label>
                    <input 
                        type="text"
                        id="TaskProject"
                        name="TaskProject"
                        className={style.input}
                        value={projectName}
                        disabled
                    />
                    <input 
                        type="hidden" 
                        name="projectId" 
                        value={projectId}
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="TaskOwner" className={style.label}>Owner</label>
                    <Select
                        options={Array.isArray(ProjectMembersData)?ProjectMembersData.map((data)=>({
                            value : data.userId,
                            label : data.fullName
                        })) : []}
                        id="TaskOwner"
                        name="TaskOwner"
                        onChange={(selectedOption) => setTaskOwner(selectedOption.value)} 
                        className={style.Select}
                        required
                        placeholder="Select Task Owner..."
                    />
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
                <div className={style.formGroup}>
                    <label htmlFor="DeadLine" className={style.label}>Dead Line</label>
                    <input 
                        type="date"
                        id="DeadLine"
                        name="DeadLine"
                        value={DeadLine}
                        min={today}
                        onChange={(e)=>setDeadLine(e.target.value)} 
                        className={style.input}
                    />
                </div>
                <button type="submit" className={style.submitBtn} onClick={Handlesubmit}>Create Task</button>
                </fieldset>
            </form>
            </div>
        </div>
        </>
    )
}
export default AddTask