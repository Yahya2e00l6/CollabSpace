import style from "../../Style/landing/LandingHome.module.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import heroImg from "../../assets/Landing/platformsmascot.webp"
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import img1 from "../../assets/Landing/submit.webp"
import img2 from "../../assets/Landing/apprej.webp"
import img3 from "../../assets/Landing/notif.webp"
import img4 from "../../assets/Landing/access.webp"
import whyMascot from "../../assets/Landing/whymascot.webp"
import submitIcon from "../../assets/Landing/submit.svg"
import vettingIcon from "../../assets/Landing/usercheck.svg"
import notifIcon from "../../assets/Landing/bell.svg"
import accessIcon from "../../assets/Landing/thunder.svg"
import { motion } from "framer-motion";

function LandingHome({ homeRef }) {
    return (
        <>
            <motion.section
                ref={homeRef}
                className={style.home}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.1
                        }
                    }
                }}
            >
                <div className={style.heroContainer}>
                    <motion.h1
                        className={style.bigTitle}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" }
                            }
                        }}
                    >
                        Dont Let Your <span className={style.businessWord}>Business </span><br /> Get Left Behind!
                    </motion.h1>

                    <motion.div
                        className={style.underTitle}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5 }
                            }
                        }}
                    >
                        <Link to="/Register" className={style.getStartedBtn}>
                            GET STARTED
                        </Link>
                    </motion.div>
                        <motion.h4 className={style.alreadyIn}
                            variants={{
                                hidden: { opacity: 0, right: 500 },
                                visible: {
                                    opacity: 1,
                                    right: 330,
                                    transition: { duration: 0.5,delay: 1 }
                                }
                            }}
                        >Or <Link to="/SignIn" className={style.loginLink}>Join your business</Link> if you're already in. </motion.h4>
                </div>

                <motion.img
                    className={style.heroImg}
                    src={heroImg}
                    autoPlay
                    loop
                    variants={{
                        hidden: { opacity: 0, right: -500 },
                        visible: {
                            opacity: 1,
                            right: -192,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }
                        }
                    }}

                />
            </motion.section >

            <section id="about" className={style.about}>
                <h1>Why CollabSpace?</h1>
                <section className={style.whySection}>
                    <div className={style.container}>
                        <section className={style.whySection}>
                            <div className={style.splitLayout}>

                                <div className={style.leftSidebar}>
                                    <img src={whyMascot} alt="mascot" className={style.whyMascot} />
                                    <h1 className={style.sidewaysTitle}>You might wonder why you should choose us, right ?</h1>
                                </div>

                                <div className={style.rightContent}>
                                    <div className={style.featurePoint}>
                                        <span className={style.index}>01</span>
                                        <div className={style.textGroup}>
                                            <h2>The Gatekeeper Logic</h2>
                                            <p>No open-door chaos. Our request-based system ensures only vetted talent and verified clients enter your business perimeter.</p>
                                        </div>
                                    </div>

                                    <div className={style.featurePoint}>
                                        <span className={style.index}>02</span>
                                        <div className={style.textGroup}>
                                            <h2>Operational Clarity</h2>
                                            <p>Visualize progress through high-precision bar charts and color-coded task timelines. See the big picture without the noise.</p>
                                        </div>
                                    </div>

                                    <div className={style.featurePoint}>
                                        <span className={style.index}>03</span>
                                        <div className={style.textGroup}>
                                            <h2>Unified Ecosystem</h2>
                                            <p>Your teams, tasks, and social feeds synced in real-time. A single source of truth for your entire organization's workflow.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>


                    </div>
                </section>

                <h1>How it works?</h1>
                <p className={style.aboutQuote}>Transforming complex workflows into simple actions. CollabSpace provides the tools you need to stay organized, secure, and ahead of schedule.</p>
                <div className={style.cardsGroup}>
                    <CardComponent image={img1} icon={submitIcon} title={"Submit Request"} description={"Guests apply to integrate with the business hub by providing their credentials."} />
                    <CardComponent image={img2} icon={vettingIcon} title={"Admin Vetting"} description={"Business owners evaluate the request within the secure Gatekeeper queue."} />
                    <CardComponent image={img3} icon={notifIcon} title={"Get Notified"} description={"Receive an instant system notification once your access has been provisioned."} />
                    <CardComponent image={img4} icon={accessIcon} title={"Instant Access"} description={"Gain full access to your assigned teams, tasks, and project dashboards."} />
                </div>

            </section>
        </>
    )
}

export default LandingHome;
