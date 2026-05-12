import style from "../../../Style/StructuralUI/requests/TeamRequestCardList.module.css"
import TeamRequestCard from "./TeamRequestCard"

const TeamRequestCardList = () =>{
    const joinRequests = [
    {
        id: 1,
        Gender: "m",
        firstName: "Saad",
        lastName: "Mansour",
        Email: "saad.mansour@email.com",
        Phone: "+212 612-345678",
        Status: "Pending",
        Age: 24,
        requestDate: "2026-05-05",
        TeamName:"Team1"
    },
    {
        id: 2,
        Gender: "f",
        firstName: "Lina",
        lastName: "Chen",
        Email: "l.chen@techcorp.com",
        Phone: "+212 655-987654",
        Status: "Pending",
        Age: 29,
        TeamName:"Team2",
        requestDate: "2026-05-06"
    },
    {
        id: 3,
        Gender: "m",
        firstName: "Ayoub",
        lastName: "Benali",
        Email: "ayoub.dev@gmail.com",
        Phone: "+212 701-223344",
        Status: "Pending",
        Age: 21,
        TeamName:"Team3",
        requestDate: "2026-05-07"
    },
    {
        id: 4,
        Gender: "f",
        firstName: "Sarah",
        lastName: "Williams",
        Email: "sarah.w@freelance.org",
        Phone: "+1 555-0199",
        Status: "Pending",
        Age: 32,
        TeamName:"Team4",
        requestDate: "2026-05-04"
    },
    {
        id: 5,
        Gender: "m",
        firstName: "Ossama",
        lastName: "Zahir",
        Email: "ossama.z@univ.ma",
        Phone: "+212 600-112233",
        Status: "Pending",
        Age: 22,
        TeamName:"Team5",
        requestDate: "2026-05-07"
    }
];
    return(
        <>
            <div className={style.list}>
                {
                    joinRequests.length > 0 ? 
                    (
                        <table className={style.table}>
                            <thead className={style.thead}>
                                <tr>                                
                                    <th className={style.th}></th>
                                    <th className={style.th}>Full Name</th>
                                    <th className={style.th}>Gender</th>
                                    <th className={style.th}>Age</th>
                                    <th className={style.th}>Email</th>
                                    <th className={style.th}>Phone</th>
                                    <th className={style.th}>Team Name</th>
                                    <th className={style.th}>Request Date</th>
                                    <th className={style.th}>Status</th>
                                    <th className={style.th}>Action</th>
                                </tr>
                            </thead>
                            <tbody className={style.tbody}>
                                {
                                    joinRequests.map((d) => (
                                        <TeamRequestCard 
                                        key={d.id} 
                                        Gender={d.Gender} 
                                        firstName={d.firstName} 
                                        lastName={d.lastName} 
                                        Email={d.Email} 
                                        Phone={d.Phone} 
                                        Status={d.Status}
                                        Age={d.Age} 
                                        requestDate={d.requestDate} 
                                        teamName={d.TeamName}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                    :
                    <p className={style.noResults}>No Request found</p>
                }
            </div>
        </>
    )
}

export default TeamRequestCardList