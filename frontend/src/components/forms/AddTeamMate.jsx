import { useEffect, useState } from 'react'
import Select from 'react-select'
import style from '../../Style/form/AddTeamMate.module.css'
import { get, post } from '../../api/client'

const AddTeamMate = ({onClose ,teamId , teamName}) => {

    const [selectedTeamMates , setSelectedTeamMates ] = useState([])
    const [noTeamMembers , setNoTeamMate ] = useState({})
    const removeMemberFromState = (id) => {
        setNoTeamMate((prevList) => prevList.filter((team) => team.id !== id));
    };
    useEffect( () => {
        const fetchData = async () =>{
            try{
                const response = await get('/auth/noTeamMembers')
                setNoTeamMate(response)
            }catch(e){
                console.error(e.message)
            }
        }
        fetchData()
    },[teamId])
    const Handlesubmit = async(e) => {
        e.preventDefault()
        const userIds = selectedTeamMates ? selectedTeamMates.map(mate => mate.value || mate.id) : [];
        try{
            const response =await post(`/teams/assignMultipleToTeam/${teamId}`,{userIds})
            if(response){
                onClose()
                removeMemberFromState(userIds)
            }
        }catch(e){
            console.error(e)
        }
    }
    return(
        <>
            <div className={style.container} onClick={e => {e.stopPropagation()}}>
            <button type="button" className={style.close} onClick={onClose}>&times;</button>
            <form method="POST" className={style.form} onSubmit={Handlesubmit}>
            <fieldset className={style.fieldset}>
                <legend className={style.legend}>Add TeamMate</legend>
                <div className={style.formGroup}>
                    <label htmlFor="teamName" className={style.label}>Team Name</label>
                    <input 
                        type="text" 
                        id="teamName" 
                        name="teamName" 
                        value={teamName}
                        className={style.input}
                        disabled
                    />
                    <input 
                        type="hidden" 
                        name="teamId" 
                        value={teamId}
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="TeamMate" className={style.label}>Team Manager</label>
                    <Select 
                        options={Array.isArray(noTeamMembers) ? noTeamMembers.map((m)=>({
                            value : m.id,
                            label : m.fullName
                        })):[]} 
                        id="TeamMate"
                        name="TeamMate"
                        isMulti
                        onChange={(selectedOption) => setSelectedTeamMates(selectedOption)} 
                        className={style.Select}
                        required
                        placeholder="Select Team Mates..."
                        />
                </div>
                <button type="submit" className={style.submitBtn}>Add TeamMate</button>
            </fieldset>
            </form>
            </div>
        </>
    )
}

export default AddTeamMate