import {useContext, useEffect, useState } from "react"
import style from "../../../Style/StructuralUI/teams/TeamList.module.css"
import TeamCard from "./TeamCard";
import ConfirmationBox from '../ConfirmationBox'
import { get } from "../../../api/client";
import AddTeamMate from "../../forms/AddTeamMate";
import { AuthContext } from "../../../context/AuthContext";

const TeamList = ({setTeamId}) => {
    const {user} =useContext(AuthContext)
    const [ searchTerm , setSearchTerm ] = useState("")
    const [ teamList , setTeamList ] = useState([])
    const [isdeleteTeamOpen , setIsDeleteTeamOpen ] = useState(false)
    const [isAddTeamMateOpen , setIsAddTeamMateOpen ] = useState(false)
    const [selectedTeam, setSelectedTeam] = useState("")
    const deleteToggel = () => setIsDeleteTeamOpen(!isdeleteTeamOpen);
    const addTeamMateToggel = () => setIsAddTeamMateOpen(!isAddTeamMateOpen);
    const openDelete = (team) => {
        setSelectedTeam(team)
        setIsDeleteTeamOpen(true)
    }
    const openAddTeamMate = (team) => {
        setSelectedTeam(team)
        setIsAddTeamMateOpen(true)
    }
    const removeTeamFromState = (id) => {
        setTeamList((prevList) => prevList.filter((team) => team.id !== id));
    };
    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await get('/teams/teamsList');
                if(response){
                    setTeamList(response)
                    setTeamId(response[0].id);
                }
            }catch(e){
                console.error(e.message)
            }
        }
        fetchData()
    },[setTeamId,user.role])
    const filtredData = teamList.filter(
        (team) => team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <>
            <div className={style.Container}>
                <div className={style.inputContainer}>
                    <input 
                        type="text"
                        onChange={(e)=>setSearchTerm(e.target.value)}
                        placeholder="Search teams..."
                        value={searchTerm}
                        className={style.input}
                    />
                </div>
                <div className={style.list}>
                {
                    filtredData.length > 0 ? 
                    (
                        filtredData.map((data) => (
                            <div key={data.id} onClick={() => setTeamId(data.id)}>
                                <TeamCard
                                    TeamName={data.name} 
                                    managerName={data.fullName} 
                                    onDelete={(e) => {  e.stopPropagation(); openDelete(data); }}
                                    onAdd={(e) => { e.stopPropagation(); openAddTeamMate(data); }}
                                    />
                            </div>
                        ))
                    )
                    :
                    <p className={style.noResults}>No teams found matching "{searchTerm}"</p>
                }
                </div>
                {isdeleteTeamOpen && (
                    <div className={style.modal} onClick={deleteToggel}>
                        <ConfirmationBox 
                            type='Team' 
                            Name={selectedTeam.name} 
                            onClose={deleteToggel} 
                            teamId={selectedTeam.id} 
                            managerId={selectedTeam.managerId}
                            onSuccess={() => removeTeamFromState(selectedTeam.id)}
                            />
                    </div>
                )}
                {isAddTeamMateOpen && (
                    <div className={style.modal} onClick={addTeamMateToggel}>
                        <AddTeamMate
                            onClose={addTeamMateToggel}
                            teamId={selectedTeam.id}
                            teamName={selectedTeam.name}
                        />
                    </div>
                )}
            </div>

        </>
    )
}

export default TeamList