import {
        format, 
        endOfMonth, 
        startOfMonth, 
        startOfWeek, 
        endOfWeek,
        isSameMonth, 
        isToday, 
        eachDayOfInterval,
        addMonths,
        subMonths,
    } from "date-fns"
import style from "../../Style/Mini-SidebarCalendar.module.css"
import { useState } from "react";
function MiniSidebarCalendar({currentDate}){
    const [ selectedDate , setselectedDate ] = useState(new Date(new Date(currentDate)))
    const  start = startOfWeek(startOfMonth(selectedDate))
    const  end = endOfWeek(endOfMonth(selectedDate))
    const days  = eachDayOfInterval({start,end})
    const handlePrevSwitchMonth = (e)=>{
        e.preventDefault()
        setselectedDate(prev=>subMonths(prev , 1))

        
    }   
    const handleNextSwitchMonth = (e)=>{
        e.preventDefault()
        setselectedDate(prev=>addMonths(prev , 1))
    }   
    return(
        <>
        <div className={style.miniCalendar}>
            <div className={style.miniCalendarHeader}>
                <p className={style.selectedDate}>{format(selectedDate, 'MMMM yyyy')}</p>
                <button type="button" className={style.switchBtn} onClick={handlePrevSwitchMonth}>prev</button>
                <button type="button" className={style.switchBtn} onClick={handleNextSwitchMonth}>next</button>
            </div>
            <div className={style.daysList}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d , index) =><div key={index}>{d}</div>)}
            </div>
            <div className={style.miniCalendarBox}>
                {
                    days.map(day =>(  
                    <div key={day.toString()} className={style.dayBox}>
                        <span 
                            className = {`
                                ${style.daySpan} 
                                ${isSameMonth(day,selectedDate)? style.sameMonth : style.notSameMonth}
                                ${isToday(day) ? style.isToday : style.isNotToday}
                                `}
                        >{format(day,'d')}</span>
                    </div>
                    )
                    )
                }
            </div>
        </div>
        </>
    )
}

export default MiniSidebarCalendar