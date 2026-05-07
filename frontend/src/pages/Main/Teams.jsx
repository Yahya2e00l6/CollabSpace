import style from "../../Style/Main/Teams.module.css"
import Header from "../../components/StructuralUI/Header"
import TeamList from "../../components/StructuralUI/teams/TeamList"
import TeamDash from "../../components/StructuralUI/teams/TeamDash"

const Teams = () =>{
    const teamsData = [
    { 
        id: "t1", 
        name: "Alpha Squad", 
        description: "Focusing on core infrastructure and backend stability.",
        members: 8 
    },
    { 
        id: "t2", 
        name: "Creative Bees", 
        description: "The UI/UX wizards making sure everything looks sharp.",
        members: 5 
    },
    { 
        id: "t3", 
        name: "Delta Force", 
        description: "Rapid response team for high-priority bugs and security.",
        members: 12 
    },
    { 
        id: "t4", 
        name: "Growth Hackers", 
        description: "Marketing and analytics team driving user acquisition.",
        members: 6 
    },
    { 
        id: "t5", 
        name: "coolaaab", 
        description: "Planning the long-term roadmap and system design.",
        members: 4 
    },
    { 
        id: "t6", 
        name: "sql", 
        description: "Planning the long-term roadmap and system design.",
        members: 4 
    },
    { 
        id: "t7", 
        name: "yahya", 
        description: "Planning the long-term roadmap and system design.",
        members: 4 
    },
    { 
        id: "t8", 
        name: "genshin", 
        description: "The frontline of customer satisfaction and troubleshooting.",
        members: 15 
    },
    { 
        id: "t9", 
        name: "sato", 
        description: "Planning the long-term roadmap and system design.",
        members: 4 
    },
    { 
        id: "t10", 
        name: "nino", 
        description: "The frontline of customer satisfaction and troubleshooting.",
        members: 15 
    },
    { 
        id: "t11", 
        name: "koya", 
        description: "Planning the long-term roadmap and system design.",
        members: 4 
    },
    { 
        id: "t12", 
        name: "hoyo", 
        description: "The frontline of customer satisfaction and troubleshooting.",
        members: 15 
    }
];
return(
    <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Teams'}/>
                <div className={style.Overview}>
                    <TeamList teamsData={teamsData}/>
                    <TeamDash/>
                </div>
            </div>
        </>
    )
}

export default Teams