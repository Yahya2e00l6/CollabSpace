import style from "../../Style/Main/Tasks.module.css"
import Header from "../../components/StructuralUI/Header"

const Tasks = () =>{
    return(
        <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Tasks'}/>
            </div>
        </>
    )
}

export default Tasks