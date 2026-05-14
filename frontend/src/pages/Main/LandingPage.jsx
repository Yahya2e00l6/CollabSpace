import LandingHeader from "../../components/landing/LandingHeader";
import LandingHome from "../../components/landing/LandingHome"
import LandingFeatures from "../../components/landing/LandingFeatures";
import LandingFooter from "../../components/landing/LandingFooter"
import { useRef } from "react";
import "../../Style/landing/LandingPage.css"

function LandingPage() {
    const homeRef = useRef(null);
    const dashboardRef = useRef(null);
    const projectsRef = useRef(null);
    const tasksRef = useRef(null);
    const teamsRef = useRef(null);
    const requestsRef = useRef(null);
    const socialRef = useRef(null);
    const learnMoreRef = useRef(null);
    const refs = { homeRef, dashboardRef, projectsRef, tasksRef, teamsRef, requestsRef, socialRef, learnMoreRef };
   
    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
   
    return (
        <>
            <LandingHeader refs={refs} scrollTo={scrollTo}/>
            <LandingHome homeRef={homeRef}/>
            <LandingFeatures dashboardRef={dashboardRef} projectsRef={projectsRef} tasksRef={tasksRef} teamsRef={teamsRef} requestsRef={requestsRef} socialRef={socialRef}/>
            <LandingFooter homeRef={homeRef} scrollTo={scrollTo} learnMoreRef={learnMoreRef}/>
        </>
    );
}

export default LandingPage;