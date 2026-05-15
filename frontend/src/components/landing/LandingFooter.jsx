import style from "../../Style/landing/LandingFooter.module.css"
import facebookIcon from "../../assets/contacts/facebook.png"
import instagramIcon from "../../assets/contacts/instagram.png"
import redditIcon from "../../assets/contacts/reddit.png"
import xIcon from "../../assets/contacts/x-twitter.svg"
import githubIcon from "../../assets/contacts/github.svg"
import linkedinIcon from "../../assets/contacts/linkedin.png"
import phoneIcon from "../../assets/contacts/phone.svg"
import gmailIcon from "../../assets/contacts/gmail.svg"
import locationIcon from "../../assets/contacts/location.svg"
import angleRight from "../../assets/angleRight.svg"
import location from "../../assets/Landing/location.webp"
import { useState } from "react"

function LandingFooter({ homeRef, learnMoreRef, scrollTo }) {
    const [toggleDetails, setToggleDetails] = useState(null);

    const handleExpand = (idx) => {
        if (toggleDetails === idx) {
            setToggleDetails(null);
        } else {
            setToggleDetails(idx);
        }
    }

    return (
        <>
            <div className={style.locationContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.098705032937!2d-7.355918725202118!3d33.706394735914536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b6d37fd56af5%3A0x5e62c736d5933ac1!2sFaculty%20of%20Sciences%20and%20technologies%20Mohammedia!5e0!3m2!1sen!2sma!4v1778734690802!5m2!1sen!2sma" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <section ref={learnMoreRef} className={style.learnMore}>
                <div className={style.logoArea}>
                    <button className={style.logo} onClick={() => scrollTo(homeRef)}>Collabspace</button>
                    <p>Your project is our priority. <br /> Your success is our mission.</p>
                    <ul className={style.socials}>
                        <li><a href="https://www.facebook.com"><img src={facebookIcon} alt="Facebook" /></a></li>
                        <li><a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" /></a></li>
                        <li><a href="https://www.reddit.com"><img src={redditIcon} alt="Reddit" /></a></li>
                        <li><a href="https://x.com"><img src={xIcon} className={style.xIcon} alt="X" /></a></li>
                        <li><a href="https://github.com"><img src={githubIcon} alt="Github" /></a></li>
                        <li><a href="https://www.linkedin.com"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
                    </ul>
                </div>

                <div className={style.otherInfos}>
                    <div className={style.contactSupportContainers}>
                        <h3>Support</h3>
                        <ul className={style.support}>
                            <li>
                                <button type="button" onClick={() => handleExpand(0)}>
                                    <img src={angleRight} style={{ transform: toggleDetails === 0 ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                                    FAQ
                                </button>
                                <div className={`${style.expandedWrapper} ${toggleDetails === 0 ? style.open : ''}`}>
                                    <div className={style.expandedText}>
                                        <p><strong>What is CollabSpace?</strong><br /> It is a real-time collaboration platform for any kind of project management.</p><br />
                                        <p><strong>Team Invites:</strong><br /> Share your workspace link (public) or accept via requests.</p><br />
                                        <p><strong>Cost:</strong><br /> Completely free for students and open-source contributors.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <button type="button" onClick={() => handleExpand(1)}>
                                    <img src={angleRight} style={{ transform: toggleDetails === 1 ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                                    Help Center
                                </button>
                                <div className={`${style.expandedWrapper} ${toggleDetails === 1 ? style.open : ''}`}>
                                    <div className={style.expandedText}>
                                        <p><strong>Getting Started:</strong><br /> Follow our quick-start guide to set up your first repository.</p><br />
                                        <p><strong>Project Management:</strong><br /> Learn how to create tasks, assign roles, and track progress.</p><br />
                                        <p><strong>Troubleshooting:</strong><br /> Check our terminal-based fix guides for Git syncing or UI issues.</p><br />
                                        <p><strong>Contact:</strong><br /> Reach out via E-mail or open a GitHub issue.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <button type="button" onClick={() => handleExpand(2)}>
                                    <img src={angleRight} style={{ transform: toggleDetails === 2 ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                                    Privacy Policy
                                </button>
                                <div className={`${style.expandedWrapper} ${toggleDetails === 2 ? style.open : ''}`}>
                                    <div className={style.expandedText}>
                                        <p><strong>Data Collection:</strong><br /> We only collect GitHub profile data (username and email).</p><br />
                                        <p><strong>Data Usage:</strong><br /> Used exclusively to facilitate collaboration and save settings.</p><br />
                                        <p><strong>Security:</strong><br /> All data is encrypted; we do not sell your info.</p><br />
                                        <p><strong>Cookies:</strong><br /> Essential cookies are used to keep you logged in.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <button type="button" onClick={() => handleExpand(3)}>
                                    <img src={angleRight} style={{ transform: toggleDetails === 3 ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                                    Terms & Conditions
                                </button>
                                <div className={`${style.expandedWrapper} ${toggleDetails === 3 ? style.open : ''}`}>
                                    <div className={style.expandedText}>
                                        <p><strong>Usage:</strong><br /> Users are responsible for the content and code they upload.</p><br />
                                        <p><strong>Collaboration:</strong><br /> Respectful collaboration is required; malicious code is prohibited.</p><br />
                                        <p><strong>Updates:</strong><br /> We reserve the right to update features and terms as the platform evolves.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={style.contactSupportContainers}>
                        <h3>Contact Us</h3>
                        <ul className={style.contacts}>
                            <li><img src={phoneIcon} alt="Phone" />+212 XXX-XXXX</li>
                            <li><img src={locationIcon} alt="Location" />FSTM. BP 146 Mohammedia 28806, Morocco</li>
                            <li><img src={gmailIcon} alt="Gmail" />example@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </section>
            <footer className={style.landingFooter}>@Copyright 2026 CollabSpace. All rights reserved </footer>
        </>
    );
}

export default LandingFooter;
