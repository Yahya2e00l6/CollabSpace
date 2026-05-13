import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import style from "../../Style/StructuralUI/RequestStatusBox.module.css"
import approved from "../../assets/lottieFiles/Approval Stamp.lottie"
import rejected from "../../assets/lottieFiles/Rejected.lottie"
import pending from "../../assets/lottieFiles/Identity Verification Pending.lottie"
import none from "../../assets/lottieFiles/Fill a Form Icon.lottie"
import { Link } from "react-router-dom"

const RequestStatusBox = ({ status , firstName , lastName }) => {
    
    const statusData = {
        pending: {
            title: "Application Under Review",
            desc: "Hang tight! We're currently looking over your details to get you into the workspace."
        },
        accepted: {
            title: "Welcome to the Team!",
            desc: "Great news! Your request has been approved. You're all set to start collaborating in CollabSpace."
        },
        rejected: {
            title: "Application Update",
            desc: "Thanks for your interest. Unfortunately, we aren't able to move forward with your request at this time."
        },
        none: {
            title: "Track Your Request",
            desc: "Curious about your application? Enter your details to check your real-time status and see if you're ready to join the workspace."
        }
    };
    const animationSource = {
        pending: pending,
        accepted: approved,
        rejected: rejected,
        none : none
    };

    return (
        <div className={style.sidebox}>
            {
                status !== 'none' && 
                <div className={style.requesterName}>
                    <p className={style.greeting}>Hi {firstName} {lastName}</p>
                </div>
            }
            <div className={`${style.container} ${style[status]}`}>
                <div className={style.requestResult}>
                    <h2 className={style.statusTitle}>{statusData[status].title}</h2>
                    <p className={style.statusDesc}>{statusData[status].desc}</p>
                </div>
                <div className={style.requestLottie}>
                    <DotLottieReact
                        className={style.Lottie}
                        src={animationSource[status]}
                        loop={status === "pending" || status === "none"}
                        autoplay
                    />
                </div>
                <Link to="/SignIn">
                    <button className={style.actionBtn}>Go to Workspace</button>
                </Link>
            </div>
        </div>
    )
}
export default RequestStatusBox