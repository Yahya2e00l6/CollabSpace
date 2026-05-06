import RegisterForm from "../../components/forms/RegistreForm";
import style from "../../Style/auth/Register.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationLottie from '../../assets/lottieFiles/Recruitment.lottie';
import Typewriter from 'typewriter-effect';

const Register = () => {
    return (
        <div className={style.Register}>
            {/* Left Side: Visual Hero Section */}
            <div className={style.sideBox}>
                <div className={style.logo}>CollabSpace</div>
                
                <div className={style.introduction}>
                    <div className={style.mainTitle}>
                        Your workforce management
                        <span className={style.accentText}>starts here.</span>
                    </div>
                    <div className={style.heroMeta}>
                        <h2 className={style.formTitle}>Join the Team</h2>
                        <p className={style.formSubtext}>Enter your details to request access.</p>
                    </div>
                    
                    <div className={style.typewriterWrapper}>
                        <Typewriter
                                options={{
                                    strings: [
                                        'Welcome to the CollabSpace Enrollment Portal.',
                                        'Submit credentials to initiate onboarding.',
                                        'Subject to administrative review.',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 45,
                                    deleteSpeed: 30,
                                }}
                            />
                    </div>
                </div>

                <div className={style.LottieDiv}>
                    <DotLottieReact
                        className={style.lottie}
                        src={animationLottie}
                        loop
                        autoplay
                    />
                </div>
            </div>
            <div className={style.formSection}>
                <div className={style.formContainer}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default Register;