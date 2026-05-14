import style from "../../Style/landing/LandingHeader.module.css"
import { useEffect, useState } from "react";
import angleRight from "../../assets/angleRight.svg"
import { Link } from "react-router-dom";

function LandingHeader({ refs, scrollTo }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const { homeRef, dashboardRef, projectsRef, tasksRef, teamsRef, requestsRef, socialRef, learnMoreRef } = refs;

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header className={`${style.landingHeader} ${isScrolled ? style.scrolled : ''}`}>
                <button className={style.logo} onClick={() => scrollTo(homeRef)}>Collabspace</button>
                <ul className={style.headerTabGroup}>
                    <li><button className={style.headerTab} onClick={() => scrollTo(homeRef)}>HOME </button></li>
                    <li className={style.headerTabAbout}><button>
                        FEATURES <img src={angleRight} style={{ transform: 'rotate(90deg)' }} /></button>
                        <ul className={style.aboutMenu}>
                            <li><button onClick={() => scrollTo(dashboardRef)}>DASHBOARD</button></li>
                            <li><button onClick={() => scrollTo(projectsRef)}>PROJECTS</button></li>
                            <li><button onClick={() => scrollTo(tasksRef)}>TASKS</button></li>  
                            <li><button onClick={() => scrollTo(teamsRef)}>TEAMS</button></li>
                            <li><button onClick={() => scrollTo(requestsRef)}>REQUESTS</button></li>
                            <li><button onClick={() => scrollTo(socialRef)}>SOCIAL</button></li>
                        </ul>
                    </li>
                    <li><button className={style.headerTab} onClick={() => scrollTo(learnMoreRef)}>LEARN MORE </button></li>
                </ul >
                <ul className={style.btns}>
                    <li><Link to='/SignIn' className={style.loginBtn}>SIGN IN</Link></li>
                    <li><Link to='/Register' className={style.signupBtn}>REQUEST</Link></li>
                </ul>

            </header >
        </>);
}

export default LandingHeader;





























