import { useState } from "react"
import style from "../../../Style/StructuralUI/teams/TeamList.module.css"
import TeamCard from "./TeamCard";

const TeamList = ({teamsData}) => {
    const [ searchTerm , setSearchTerm ] = useState("")
    const filtredData = teamsData.filter(
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
                    filtredData.map((d) => (
                        <TeamCard TeamName={d.name} key={d.id}/>
                    ))
                )
                :
                <p className={style.noResults}>No teams found matching "{searchTerm}"</p>
            }
            </div>
        </div>
        </>
    )
}

export default TeamList