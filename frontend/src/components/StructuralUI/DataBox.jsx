import style from '../../Style/StructuralUI/DataBox.module.css'

function DataBox({name , value}){
    return(
        <>
            <div className={style.DataBox}>
                <p className={style.boxName}>{name}</p>
                <p className={style.Data}>{value}</p>
            </div>
        </>
    )
}

export default DataBox