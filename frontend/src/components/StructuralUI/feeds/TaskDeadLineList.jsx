import style from "../../../Style/feeds/TaskDeadLineList.module.css"
import { eachDayOfInterval } from "date-fns"
import { useState } from "react"
import TaskDeadLine from "./TaskDeadLine"
const TaskDeadLineList = () => {
    
        const data = [
            {
                id :1,
                ProjectName : "project 2",
                TaskName : "Task 5",
                remaining : 2
            },
            {
                id:2,
                ProjectName : "project 4",
                TaskName : "Task 4",
                remaining : 5
            },
            {
                id:3,
                ProjectName : "project 1",
                TaskName : "Task 1",
                remaining : 7,
            },
            {
                id:4,
                ProjectName : "project 1",
                TaskName : "Task 3",
                remaining : 9
            },
            {
                id:6,
                ProjectName : "project 3",
                TaskName : "Task 7",
                remaining : 11,
            },
            {
                id:7,
                ProjectName : "project 8",
                TaskName : "Task 23",
                remaining : 14
            },
            {
                id:5,
                ProjectName : "project 2",
                TaskName : "Task 2",
                remaining : 30
            },
    ]
    return(
        <>
        <div className={style.List}>
            {
                data.map((d) => (
                        <TaskDeadLine  
                            key={d.id}
                            ProjectName={d.ProjectName} 
                            DeadLine={'2026-06-1'}
                            TaskName={d.TaskName}
                            remainingDays={d.remaining}
                            />
                ))
            }
        </div>
        </>
    )
}

export default TaskDeadLineList