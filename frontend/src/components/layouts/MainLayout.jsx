import style from "../../Style/MainLayout.module.css";
import { Link, Outlet } from 'react-router-dom';
import UserBox from "../StructuralUI/UserBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
        faChartColumn ,
        faPeopleGroup , 
        faUserGroup , 
        faDiagramProject ,
        faListCheck ,
        faBell
        
    } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import CreateTeam from "../forms/CreateTeam";
import AddProject from "../forms/AddProject";
import AddTask from "../forms/AddTask";
const MainLayout = () => {
    const role = 'admin';
    const [ isAddProjectOpen ,setIsAddProjectOpen ] = useState(false)
    const [ isAddTaskOpen ,setIsAddTaskOpen ] = useState(false)
    const [ isCreateTeamOpen ,setIsCreateTeamOpen ] = useState(false)
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const toggelProject = ()=>setIsAddProjectOpen(!isAddProjectOpen);
    const toggelTask = ()=>setIsAddTaskOpen(!isAddTaskOpen);
    const toggelTeam = ()=>setIsCreateTeamOpen(!isCreateTeamOpen);
    const toggleMenu = () => setIsMenuOpen((open) => !open);

    return (
        <>
            <nav className={style.sidebar}>
                <div className={style.sidebarHeader}>
                    <div className={style.logo}>CollabSpace</div>
                    <button
                        className={`${style.mobileToggle} ${isMenuOpen ? style.isActive : ""}`}
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span className={style.toggleBar} />
                        <span className={style.toggleBar} />
                        <span className={style.toggleBar} />
                    </button>
                </div>
                <div className={`${style.menuSections} ${isMenuOpen ? style.menuOpen : ""}`}>
                    <div className={style.Identity}>
                        <UserBox/>
                    </div>
                    <p className={style.mainMenu}>Main Menu</p>
                    <div className={style.mainMenuList}>
                        {
                            role === 'admin' ?
                            (
                                <ul>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faChartColumn} /></div>
                                        <p>Dashboard</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
                                        <p>Teams</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faUserGroup} /></div>
                                        <p>Social</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                                        <p>Projects</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faBell} /></div>
                                        <p>Requests</p>
                                    </li>
                                </ul>
                            ) : 
                            role === 'manager' ?
                            (
                                <ul>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faChartColumn} /></div>
                                        <p>Dashboard</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
                                        <p>Team</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faUserGroup} /></div>
                                        <p>Social</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>
                                        <p>Tasks</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                                        <p>Projects</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faBell} /></div>
                                        <p>Requests</p>
                                    </li>
                                </ul>
                            ) : 
                            (
                                <ul>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faChartColumn} /></div>
                                        <p>Dashboard</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
                                        <p>Team</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faUserGroup} /></div>
                                        <p>Social</p>
                                    </li>setIsTeamValide
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>
                                        <p>Tasks</p>
                                    </li>
                                    <li>
                                        <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                                        <p>Projects</p>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                    <p className={style.General}>General</p>
                    <div className={style.actionBlock}>
                                            {
                            role === 'admin' ?
                            (
                                <div className={style.Container}>
                                    <button className={style.createTeam} onClick={toggelTeam}>Create Team</button>
                                    <button className={style.addProject} onClick={toggelProject}>Add Project</button>
                                </div>
                            ) : 
                            role === 'manager' ?
                            (
                                <div className={style.Container}>
                                    <div>
                                        <button className={style.addTask} onClick={toggelTask}>Add Task</button>
                                        <button className={style.addProject} onClick={toggelProject}>Add Project</button>
                                    </div>
                                </div>
                            ) : 
                            (
                                <div className={style.Container}>
                                    <button className={style.createTeam} onClick={toggelTeam}>Create Team</button>
                                </div>
                                
                            )
                        }
                    </div>
                </div>
            </nav>
            <div className={`${style.c_Container} ${(isCreateTeamOpen || isAddProjectOpen || isAddTaskOpen) ? style.isOpen : ""}`}>
                {isCreateTeamOpen && <CreateTeam onClose={toggelTeam}/>}
                {isAddProjectOpen && <AddProject onClose={toggelProject}/>}
                {isAddTaskOpen && <AddTask onClose={toggelTask}/>}
            </div>
        </>
    );
};

export default MainLayout;