import style from "../../../Style/StructuralUI/feeds/MemberCardList.module.css"
import MemberCard from "./MemberCard"
const MemberCardList = () => {
    
const projectMembers = [
    {
        id: 1,
        MemberName: "Saad Mansour",
        Gender: "Male",
        PendingTasks: 2,
        onGoingTasks: 4,
        CompletedTasks: 15
    },
    {
        id: 2,
        MemberName: "Lina Chen",
        Gender: "Female",
        PendingTasks: 8,
        onGoingTasks: 2,
        CompletedTasks: 10
    },
    {
        id: 3,
        MemberName: "Ayoub Benali",
        Gender: "Male",
        PendingTasks: 0,
        onGoingTasks: 5,
        CompletedTasks: 22
    },
    {
        id: 4,
        MemberName: "Sarah Williams",
        Gender: "Female",
        PendingTasks: 4,
        onGoingTasks: 3,
        CompletedTasks: 7
    },
    {
        id: 5,
        MemberName: "Ossama Zahir",
        Gender: "Male",
        PendingTasks: 12,
        onGoingTasks: 1,
        CompletedTasks: 3
    },
    {
        id: 6,
        MemberName: "Yasmine Idris",
        Gender: "Female",
        PendingTasks: 1,
        onGoingTasks: 6,
        CompletedTasks: 18
    }
];
    return(
        <>
        <div className={style.List}>
            {
                projectMembers.map((d) => (
                        <MemberCard  
                            key={d.id}
                            MemberName={d.MemberName} 
                            Gender={d.Gender}
                            PendingTasks={d.PendingTasks}
                            onGoingTasks={d.onGoingTasks}
                            CompletedTasks={d.CompletedTasks}
                            />
                ))
            }
        </div>
        </>
    )
}

export default MemberCardList