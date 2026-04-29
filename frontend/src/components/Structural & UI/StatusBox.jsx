import style from "../../Style/StatusBox.module.css"

function StatusBox(){
    return(
        <>
            <div className={style.Box}>
                <p style={style.boxName}>total Project</p>
                <P style={style.boxData}>35</P>
                <p style={style.boxUpdate}>5%up</p>
            </div>
        </>
    )
}

export default StatusBox