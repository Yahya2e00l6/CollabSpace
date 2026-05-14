import style from "../../Style/landing/LandingFeatures.module.css"
import { motion } from "framer-motion"
import Dashboard from "../../assets/Landing/dashboard.webp"
import Tasks from "../../assets/Landing/tasksmascot.webp"
import Deadline from "../../assets/Landing/deadline.webp"
import Projects from "../../assets/Landing/projects.webp"
import Social from "../../assets/Landing/social.webp"
import Teams from "../../assets/Landing/teams.webp"
import Platforms from "../../assets/Landing/platforms.webp"
import sideMascot from "../../assets/Landing/sidemascot.webp"
import watchMascot from "../../assets/Landing/watchmascot.webp"
import tasksMascot from "../../assets/Landing/tasksmascot.webp"
import projectsMascot from "../../assets/Landing/projectsmascot.webp"
import platformsMascot from "../../assets/Landing/platformsmascot.webp"
import requestsMascot from "../../assets/Landing/requestsmascot.webp"
import requests from "../../assets/Landing/requests.webp"
import checkMark from "../../assets/Landing/checkmark.webp"
import teamsMascot from "../../assets/Landing/teamsmascot.webp"
import socialMascot from "../../assets/Landing/sidemascot.webp"


function LandingFeatures({ dashboardRef, requestsRef, teamsRef, socialRef, tasksRef, projectsRef }) {
    return (
        <>
            <section className={style.features}>
                <section ref={dashboardRef} className={style.featureSection}>
                    <div className={style.DashboardText}>
                        <h1>Your Team's <br />Command Center</h1>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Monitor projects in real time.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Track progress with clarity.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Focus on delivery, not tabs.</p>
                    </div>
                    <div className={style.imgGroup} >
                        <motion.img
                            src={sideMascot}
                            alt="Mascot"
                            className={style.sideMascot}
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: -150, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.8 }}
                        />
                        <motion.img
                            src={Dashboard}
                            alt="Dashboard Preview"
                            className={style.featureImage}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.10 }}
                        />
                    </div>
                </section>
                <section ref={projectsRef} className={style.featureSection}>
                    <div className={style.imgGroup}>
                        <motion.img
                            src={projectsMascot}
                            alt="Mascot"
                            className={style.projectsMascot}
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.8 }}
                        />
                        <motion.img
                            src={Projects}
                            alt="Projects Preview"
                            className={style.projectsImage}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.10 }}
                        />
                        <div className={style.ProjectsText}>
                            <h1>Manage Projects</h1>
                            <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Plan milestones with confidence.</p>
                            <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Assign ownership per deliverable.</p>
                            <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Ship with clear project scope.</p>
                        </div>
                    </div>
                </section>
                <section ref={tasksRef} className={style.featureSection}>
                    <div className={style.TasksText}>
                        <h1>Keep Track Of Tasks</h1>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Create tasks in seconds.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Assign owners instantly.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Track status at a glance.</p>
                    </div>
                    <div className={style.imgGroup}>
                        <motion.img
                            src={tasksMascot}
                            alt="Mascot"
                            className={style.tasksMascot}
                            initial={{ x: 200, rotate: -90, opacity: 0 }}
                            whileInView={{ x: 0, rotate: -90, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.8 }}
                        />
                        <motion.img
                            src={Deadline}
                            alt="Deadline Preview"
                            className={style.featureImage}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.10 }}
                        />
                    </div>
                </section>
                <section className={style.featureSection}>
                    <div className={style.imgGroup}>
                        <img src={watchMascot} alt="Mascot" className={style.watchMascot} />
                        <motion.img
                            src={Deadline}
                            alt="Deadline Preview"
                            className={style.deadlineImage}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.10 }}
                        />
                    </div>
                    <div className={style.DeadlineText}>
                        <h1>Never Miss a Deadline</h1>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Visual timelines keep you on track.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Catch risks before due dates.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Stay consistent across projects.</p>
                    </div>
                </section>
                <section ref={teamsRef} className={style.featureSection}>
                    <div className={style.TeamsText}>
                        <h1>Strengthen Your Team</h1>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Organize members by role.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Set permissions with clarity.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Keep collaboration structured.</p>
                    </div>
                    <div className={style.imgGroup}>
                        <img src={teamsMascot} alt="Mascot" className={style.teamsMascot} />
                        <img src={Teams} alt="Teams Preview" className={style.teamsImage} />
                    </div>
                </section>
                <section ref={requestsRef} className={style.featureSection}>
                    <div className={style.imgGroup}>
                        <motion.img
                            src={requestsMascot}
                            alt="Mascot"
                            className={style.requestsMascot}
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.15 }}
                        />
                        <img src={requests} alt="Teams Preview" className={style.requestsImage} />
                    </div>
                    <div className={style.RequestsText}>
                        <h1>Join By Requests</h1>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Submit requests in seconds.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Track approvals effortlessly.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Stay updated without noise.</p>
                    </div>
                </section>
                <section ref={socialRef} className={style.featureSection}>
                    <div className={style.SocialText}>
                        <h1>Be Social</h1>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Share updates with your team.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Discuss work in context.</p>
                        <p><img src={checkMark} alt="checkmark" className={style.checkMark} />Keep conversations focused.</p>
                    </div>
                    <div className={style.imgGroup}>
                        <motion.img
                            src={socialMascot}
                            alt="Mascot"
                            className={style.socialMascot}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.1 }}
                        />
                        <motion.img
                            src={Social}
                            alt="Social Preview"
                            className={style.socialImage}
                            initial={{ x: 150 }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.10 }}
                        />
                    </div>
                </section>
                <section className={style.platforms}>
                    <div className={style.imgGroup}>
                        <motion.img
                            src={platformsMascot}
                            alt="Mascot"
                            className={style.platformsMascot}
                            initial={{ x: 150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.15 }}
                        />
                        <img src={Platforms} alt="Platforms" className={style.platformsImage} />
                    </div>
                    <h1 className={style.platformsText}>Keep Your tasks In Sync Across A Device!</h1>
                </section>
            </section>
        </>
    )
}

export default LandingFeatures;
