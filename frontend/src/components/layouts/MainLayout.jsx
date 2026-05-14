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
import {useContext, useState } from "react";
import CreateTeam from "../forms/CreateTeam";
import AddProject from "../forms/AddProject";
import AddTask from "../forms/AddTask";
import Dashboard from "../../pages/Main/Dashboard";
import ConfirmationBox from "../StructuralUI/ConfirmationBox";
import AddTeamMate from "../forms/AddTeamMate";
import { AuthContext } from "../../context/AuthContext";
const MainLayout = ({setSelected}) => {
    const [ isAddProjectOpen ,setIsAddProjectOpen ] = useState(false)
    const [ isAddTaskOpen ,setIsAddTaskOpen ] = useState(false)
    const [ isCreateTeamOpen ,setIsCreateTeamOpen ] = useState(false)
    const [ isSignOutOpen, setIsSignOutOpen ] = useState(false)
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const [ isAddTeamMateOpen, setIsAddTeamMateOpen ] = useState(false)
    const toggelProject = ()=>setIsAddProjectOpen(!isAddProjectOpen);
    const toggelTask = ()=>setIsAddTaskOpen(!isAddTaskOpen);
    const toggelTeam = ()=>setIsCreateTeamOpen(!isCreateTeamOpen);
    const toggelSignOut = ()=>setIsSignOutOpen(!isSignOutOpen);
    const toggelTeamMate = ()=>setIsAddTeamMateOpen(!isAddTeamMateOpen);
    const toggleMenu = () => setIsMenuOpen((open) => !open);
    const [selectedMenu , setSelectedMenu ] = useState("Dashboard")
    const isSelected = (selected) =>{
        setSelected(selected)
        setSelectedMenu(selected)
    }
    const { user } = useContext(AuthContext)
    if (!user) return null;
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
                        <UserBox onSignOut={toggelSignOut} />
                    </div>
                    <p className={style.mainMenu}>Main Menu</p>
                    <div className={style.mainMenuList}>
                        {
                            user.role === 'admin' ?
                            (
                                <ul>
                                    <li onClick={() => isSelected('Dashboard')} className={selectedMenu === "Dashboard" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faChartColumn} /></div>
                                        <p>Dashboard</p>
                                    </li>
                                    <li onClick={() => isSelected('Teams')} className={selectedMenu === "Teams" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
                                        <p>Teams</p>
                                    </li>
                                    <li onClick={() => isSelected('Social')} className={selectedMenu === "Social" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faUserGroup} /></div>
                                        <p>Social</p>
                                    </li>
                                    <li onClick={() => isSelected('Projects')} className={selectedMenu === "Projects" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                                        <p>Projects</p>
                                    </li>
                                    <li onClick={() => isSelected('Requests')} className={selectedMenu === "Requests" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faBell} /></div>
                                        <p>Requests</p>
                                    </li>
                                </ul>
                            ) : 
                            user.Role === 'manager' ?
                            (
                                <ul>
                                    <li onClick={() => isSelected('Dashboard')} className={selectedMenu === "Dashboard" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faChartColumn} /></div>
                                        <p>Dashboard</p>
                                    </li>
                                    <li onClick={() => isSelected('Teams')} className={selectedMenu === "Teams" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
                                        <p>Team</p>
                                    </li>
                                    <li onClick={() => isSelected('Social')} className={selectedMenu === "Social" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faUserGroup} /></div>
                                        <p>Social</p>
                                    </li>
                                    <li onClick={() => isSelected('Tasks')} className={selectedMenu === "Tasks" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>
                                        <p>Tasks</p>
                                    </li>
                                    <li onClick={() => isSelected('Projects')} className={selectedMenu === "Projects" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                                        <p>Projects</p>
                                    </li>
                                    <li onClick={() => isSelected('Requests')} className={selectedMenu === "Requests" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faBell} /></div>
                                        <p>Requests</p>toggelTeamMate
                                    </li>
                                </ul>
                            ) : 
                            (
                                <ul>
                                    <li onClick={() => isSelected('Dashboard')} className={selectedMenu === "Dashboard" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faChartColumn} /></div>
                                        <p>Dashboard</p>
                                    </li>
                                    <li onClick={() => isSelected('Teams')} className={selectedMenu === "Teams" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
                                        <p>Team</p>
                                    </li>
                                    <li onClick={() => isSelected('Social')} className={selectedMenu === "Social" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faUserGroup} /></div>
                                        <p>Social</p>
                                    </li>
                                    <li onClick={() => isSelected('Tasks')} className={selectedMenu === "Tasks" ? style.chosen : ''}>
                                        <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>
                                        <p>Tasks</p>
                                    </li>
                                    <li onClick={() => isSelected('Projects')} className={selectedMenu === "Projects" ? style.chosen : ''}>
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
                            user.role === 'admin' ?
                            (
                                <div className={style.Container}>
                                    <button className={style.addProject} onClick={toggelProject}>Add Project</button>
                                </div>
                            ) : 
                            (user.role === 'manager' && !user.teamId) ?
                            (
                                <div className={style.Container}>
                                    <div>
                                        <button className={style.addProject} onClick={toggelTeam}>Create Team</button>
                                    </div>
                                </div>
                            ) : 
                            user.role === 'manager' ?
                            (
                                <div className={style.Container}>
                                    <div>
                                        <button className={style.addProject} onClick={toggelProject}>Add Project</button>
                                        <button className={style.AddTeamMate} onClick={toggelTeamMate}>Add Teammate</button>
                                    </div>
                                </div>
                            ) : ''
                        }
                    </div>
                </div>
            </nav>
            <div className={`${style.c_Container} ${(isCreateTeamOpen || isAddProjectOpen || isAddTaskOpen || isSignOutOpen || isAddTeamMateOpen) ? style.isOpen : ""}`}>
                {isCreateTeamOpen && <CreateTeam onClose={toggelTeam}/>}
                {isAddProjectOpen && <AddProject onClose={toggelProject}/>}
                {isAddTaskOpen && <AddTask onClose={toggelTask}/>}
                {isSignOutOpen && <ConfirmationBox onClose={toggelSignOut} type='SignOut' />}
                {isAddTeamMateOpen && <AddTeamMate onClose={toggelTeamMate} teamId={user.teamId}/>}
            </div>
        </>
    );
};

export default MainLayout;