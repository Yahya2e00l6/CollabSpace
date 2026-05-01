import LoginForm from "../../components/forms/SignInForm";
import style from "../../Style/SignIn.module.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationLottie from '../../assets/lottieFiles/Welcome.lottie';
import Typewriter from 'typewriter-effect';
const SignIn = ()=>{
    return(
        <>
        <div className={style.SignIn}>
            <div className={style.sideBox}>
                <div className={style.logo}>CollabSpace</div>
                
                <div className={style.introduction}>
                    <div className={style.mainTitle}>
                        Welcome Back to the Workspace
                        <span className={style.accentText}>Sign In</span>
                    </div>
                    <div className={style.heroMeta}>
                        <p>Access your verified enterprise profile.</p>
                    </div>
                    
                    <div className={style.typewriterWrapper}>
                        <Typewriter
                                options={{
                                    strings: [
                                        'Securely access your project dashboard.',
                                        'Connect with your team and start collaborating.',
                                        'Your authorized workspace is ready.',
                                        'Synchronizing your enterprise data...',
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

            {/* Right Side: Form Section */}
            <div className={style.formSection}>
                <div className={style.formContainer}>
                    <LoginForm />
                </div>
            </div>
        </div>
        </>
    )
}
export default SignIn