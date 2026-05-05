import style from "../../../Style/feeds/ProjectDeadlineList.module.css"
import { eachDayOfInterval } from "date-fns"
import { useState } from "react"
import ProjectDeadLine from "./ProjectDeadLine"
const ProjectDeadLineList = () => {
    
        const data = [
            {
                id:7,
                Name : "project 11",
                TotalTasks : 23,
                CompletedTask : 3,
                remaining : 1
            },
            {
                id :1,
                Name : "project 5",
                TotalTasks : 22,
                CompletedTask : 6,
                remaining : 2
            },
            {
                id:2,
                Name : "project 4",
                TotalTasks : 43,
                CompletedTask : 1,
                remaining : 5
            },
            {
                id:3,
                Name : "project 1",
                TotalTasks : 35,
                CompletedTask : 5,
                remaining : 7,
            },
            {
                id:4,
                Name : "project 3",
                TotalTasks : 10,
                CompletedTask : 2,
                remaining : 9
            },
            {
                id:6,
                Name : "project 8",
                TotalTasks : 50,
                CompletedTask : 49,
                remaining : 17
            },
            {
                id:5,
                Name : "project 2",
                TotalTasks : 20,
                CompletedTask : 7,
                remaining : 30
            },
    ]
    return(
        <>
        <div className={style.List}>
            {
                data.map((d) => (
                        <ProjectDeadLine
                            key={d.id}
                            Name={d.Name} 
                            DeadLine={'2026-06-1'}
                            totalTasks={d.TotalTasks}
                            completedTasks={d.CompletedTask}
                            remainingDays={d.remaining}
                            />
                ))
            }
        </div>
        </>
    )
}

export default ProjectDeadLineList