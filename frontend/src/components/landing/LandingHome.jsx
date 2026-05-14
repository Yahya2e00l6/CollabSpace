import style from "../../Style/landing/LandingHome.module.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import heroLottie from "../../assets/Landing/heroLottie.lottie"
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import img1 from "../../assets/Landing/platformsmascot.webp"
import img2 from "../../assets/Landing/platformsmascot.webp"
import img3 from "../../assets/Landing/notif.webp"
import img4 from "../../assets/Landing/platformsmascot.webp"
import whyMascot from "../../assets/Landing/whymascot.webp"
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
                        transition: { staggerChildren: 0.5 }
                    }
                }}
            >
                <div className={style.heroContainer}>
                    <motion.h1
                        className={style.bigTitle}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        Dont Let Your <span className={style.businessWord}>Business </span><br /> Get Left Behind!
                    </motion.h1>

                    <motion.div
                        className={style.underTitle}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <button className={style.getStartedBtn}>
                            GET STARTED
                        </button>
                        <h4 className={style.alreadyIn}>Or <Link to="/" className={style.loginLink}>Join your business</Link> if you're already in. </h4>
                    </motion.div>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <DotLottieReact
                        className={style.firstAnimation}
                        src={heroLottie}
                        autoplay
                        loop
                        style={{ height: "400px", width: "400px", margin: "0 auto" }}
                    />
                </motion.div>
            </motion.section>

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
                    <CardComponent image={img1} title={"Submit Request"} description={"Guests apply to integrate with the business hub by providing their credentials."} />
                    <CardComponent image={img1} title={"Admin Vetting"} description={"Business owners evaluate the request within the secure Gatekeeper queue."} />
                    <CardComponent image={img3} title={"Get Notified"} description={"Receive an instant system notification once your access has been provisioned."} />
                    <CardComponent image={img1} title={"Instant Access"} description={"Gain full access to your assigned teams, tasks, and project dashboards."} />
                </div>

            </section>
        </>
    )
}

export default LandingHome;
