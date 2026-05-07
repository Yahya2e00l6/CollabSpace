import style from "../../Style/StructuralUI/Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
        faChartColumn ,
        faPeopleGroup , 
        faUserGroup , 
        faDiagramProject ,
        faListCheck ,
        faBell
    } from '@fortawesome/free-solid-svg-icons';
const Header = ({selectedPage}) => {
    const role = 'admin';
    return(
        <>
            {selectedPage === "Dashboard" && 
                <div className={style.HeaderDash}>
                    <div className={style.sectionLogo}>
                        <div className={style.icon}><FontAwesomeIcon icon={faChartColumn} /></div>
                        <h1 className={style.Name}>Dashboard</h1>
                    </div>
                    <p className={style.Introduction}>Welcome to your central hub. Get a quick bird's-eye view of your activity and see exactly where things stand right now</p>
                </div>
            }

            {selectedPage === "Teams" && (
                role === 'admin' ? 
                <div className={style.HeaderDash}>
                    <div className={style.sectionLogo}>
                        <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
                        <h1 className={style.Name}>Teams</h1>
                    </div>
                    <p className={style.Introduction}>A strong organization is built on a solid foundation. Manage your collective workforce, track the health of every team, and shape the future of your company’s collaboration</p>
                </div>
                :
                <div className={style.HeaderDash}>
                    <div className={style.sectionLogo}>
                        <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
                        <h1 className={style.Name}>Team</h1>
                    </div>
                    <p className={style.Introduction}>Everything starts with the right people. Check in with your squad, view your collaborators, and bring new talent into the fold</p>
                </div>
            )
            }

            {selectedPage === "Social" && 
                <div className={style.HeaderDash}>
                    <div className={style.sectionLogo}>
                        <div className={style.icon}><FontAwesomeIcon icon={faUserGroup} /></div>            
                        <h1 className={style.Name}>Social</h1>
                    </div>
                    <p className={style.Introduction}>Connect with the bigger picture. Discover the talented individuals across the company and see what other innovative teams are building</p>
                </div>
            }

            {selectedPage === "Projects" && 
                <div className={style.HeaderDash}>
                    <div className={style.sectionLogo}>
                        <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                        <h1 className={style.Name}>Projects</h1>
                    </div>
                    <p className={style.Introduction}>This is where the vision comes to life. Track your team's milestones, monitor the progress of every build, and keep the momentum moving forward</p>
                </div>
            }

            {selectedPage === "Tasks" && 
                <div className={style.HeaderDash}>
                    <div className={style.sectionLogo}>
                        <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>
                        <h1 className={style.Name}>Tasks</h1>
                    </div>
                    <p className={style.Introduction}>Ready to make some progress? Dive into your personal to-do list, manage your priorities, and keep your workflow organized and on track</p>
                </div>
            }

            {selectedPage === "Requests" && 
                <div className={style.HeaderDash}>
                    <div className={style.sectionLogo}>
                        <div className={style.icon}><FontAwesomeIcon icon={faBell} /></div>
                        <h1 className={style.Name}>Requests</h1>
                    </div>
                    <p className={style.Introduction}>The gateway to collaboration. Manage incoming invitations and oversee team growth to ensure the right people are in the right places.</p>
                </div>
            }
        </>
    )
}

export default Header