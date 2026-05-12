import style from "../../../Style/StructuralUI/Tasks/TaskCardList.module.css"
import TaskCard from "./TaskCard"
const TaskCardList = () => {
    const projectTasks = [
    {
        id: 1,
        Name: "Setup NestJS Boilerplate",
        Owner: "Yahya",
        Description: "Initialize the backend project using NestJS CLI and configure TypeORM with MariaDB.",
        Status: "Completed",
        CreateAt: "2026-05-01",
        DeadLine: "2026-05-03"
    },
    {
        id: 2,
        Name: "Design Dashboard Layout",
        Owner: "Lina Chen",
        Description: "Create a responsive sidebar and main content area using Tailwind CSS for the CollabSpace UI.",
        Status: "Ongoing",
        CreateAt: "2026-05-05",
        DeadLine: "2026-05-12"
    },
    {
        id: 3,
        Name: "Fix GitHub Auth Bug",
        Owner: "Ayoub Benali",
        Description: "Resolve the issue where users are redirected to the login page after a successful OAuth handshake.",
        Status: "Pending",
        CreateAt: "2026-05-08",
        DeadLine: "2026-05-10"
    },
    {
        id: 4,
        Name: "Write Project Documentation",
        Owner: "Sarah Williams",
        Description: "Draft the initial README and API endpoint documentation for the team collaborators.",
        Status: "Ongoing",
        CreateAt: "2026-05-07",
        DeadLine: "2026-05-15"
    },
    {
        id: 5,
        Name: "Optimize Database Queries",
        Owner: "Saad Mansour",
        Description: "Index the project and member tables to improve the search performance of the dashboard.",
        Status: "Pending",
        CreateAt: "2026-05-09",
        DeadLine: "2026-05-20"
    }
];
    return(
        <>
            <div className={style.list}>
                {
                    projectTasks.length > 0 ? 
                    (
                        <table className={style.table}>
                            <thead className={style.thead}>
                                <tr>
                                    <th className={style.th}></th>
                                    <th className={style.th}>Name</th>
                                    <th className={style.th}>Owner Name</th>
                                    <th className={style.th}>Description</th>
                                    <th className={style.th}>Status</th>
                                    <th className={style.th}>Create At</th>
                                    <th className={style.th}>DeadLine</th>
                                    <th className={style.th}>Action</th>
                                </tr>
                            </thead>
                            <tbody className={style.tbody}>
                                {
                                    projectTasks.map((d) => (
                                        <TaskCard 
                                        key={d.id} 
                                        TaskName={d.Name} 
                                        OwnerName={d.Owner} 
                                        TaskDescription={d.Description} 
                                        Status={d.Status.toLowerCase()} 
                                        CreateAt={d.CreateAt} 
                                        DeadLine={d.DeadLine}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                    :
                    <p className={style.noResults}>No Tasks Yet</p>
                }
            </div>
        </>
    )
}

export default TaskCardList