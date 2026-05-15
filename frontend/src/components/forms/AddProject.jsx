import { useContext, useEffect, useState } from "react"
import style from "../../Style/form/AddProject.module.css"
import { AuthContext } from "../../context/AuthContext";
import { get,post } from "../../api/client";
import Select from 'react-select'

function AddProject({onClose}){
    const Now = new Date();
    const today = new Date().toISOString().split('T')[0];

    const [ ProjectName, setProjectName] = useState("")
    const [ ProjectDescription , setProjectDescription ] = useState("");
    const [ NameHasError , setNameHasError ] = useState(false)
    const [ ProjectTeam , setProjectTeam ] = useState('')
    const { user } = useContext(AuthContext)

    const [ DescriptionHasError , setDescriptionHasError ] = useState(false)
    const [ DeadLine , setDeadLine ] = useState(today)
    const [ teamList , setTeamList ] = useState([])
        useEffect(() => {
            if(user.role === 'admin'){
                const fetchData = async() => {
                    try{
                        const response = await get('/teams/teamsList')
                        if(response){
                            setTeamList(response)
                        }
                    }catch(e){
                        console.error(e.message)
                    }
                }
                fetchData()
            }
        },[user.role])
    const Handlesubmit = async(e)=>{
        e.preventDefault();
        const hasSymbol = /[!@#$%^*()+={}\\[\]|\\"'<>?\\/=]/.test(ProjectName);
        if(ProjectName.length<4 || typeof(ProjectName[0])===Number || hasSymbol){
            setNameHasError(true);
            return;
        }
        if(ProjectDescription.length < 4){
            setDescriptionHasError(true);
            return;
        }   
        const finalTeamId = user.role !== 'admin' ? user.teamId : ProjectTeam;
        console.log(ProjectTeam)
        if (!finalTeamId) {
            alert("Please select a Project Team!");
            return;
        }
        try{
            await post(`/projects/addProject/${finalTeamId}`,{ProjectName,teamId: finalTeamId , ProjectDescription , DeadLine , userId: user.id })
            onClose()
        }catch(e){
            console.error(e.message)
        }
    }
    return(
        <>
            <div className={style.container} onClick={e => {e.stopPropagation()}}>
            <button type="button" className={style.close} onClick={onClose}>&times;</button>
            <form method="POST" className={style.form} onSubmit={Handlesubmit}>
            <fieldset className={style.fieldset}>
                <legend className={style.legend}>Add Project</legend>
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
                    {user.role==='admin' ? (
                        <div className={style.formGroup}>
                            <label htmlFor="projectTeam" className={style.label}>Project Team</label>
                            <Select
                                options={Array.isArray(teamList)?teamList.map((data)=>({
                                    value : data.id,
                                    label : data.name
                                })) : []}
                                id="projectTeam"
                                name="projectTeam"
                                onChange={(selectedOption) => setProjectTeam(selectedOption.value)} 
                                className={style.Select}
                                required
                                placeholder="Select Project's Team..."
                            />
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
                        value={DeadLine}
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