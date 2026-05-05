import DataBox from "./DataBox"
import style from '../../Style/StructuralUI/Insights.module.css'

const Insights = () =>{
    const data = [
        {
            name : 'Total Employees',
            value : 298
        },
        {
            name : 'Total Projects',
            value : 37
        },
        {
            name : 'Completed Projects',
            value : 20
        },
        {
            name : 'Ongoing Projects',
            value : 13
        },
        {
            name : 'Pending Projects',
            value : 5
        },
    ]
    return(
        <>
        <div className={style.Insights}>
            {data.map((d)=>(
                <DataBox key={d.name} name={d.name} value={d.value}/>
            ))}
        </div>
        </>
    )
}

export default Insights