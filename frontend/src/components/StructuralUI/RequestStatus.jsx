import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import style from "../../Style/StructuralUI/RequestStatus.module.css"
import approved from "../../assets/lottieFiles/Approval Stamp.lottie"
import rejected from "../../assets/lottieFiles/Rejected.lottie"
import pending from "../../assets/lottieFiles/Identity Verification Pending.lottie"
import { Link } from "react-router-dom"

const RequestStatus = ({ status = "accepted" }) => {
    
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
        }
    };
    const animationSource = {
        pending: pending,
        accepted: approved,
        rejected: rejected
    };

    return (
        <div className={`${style.container} ${style[status]}`}>
            <div className={style.requestResult}>
                <h2 className={style.statusTitle}>{statusData[status].title}</h2>
                <p className={style.statusDesc}>{statusData[status].desc}</p>
            </div>
            <div className={style.requestLottie}>
                <DotLottieReact
                    className={style.Lottie}
                    src={animationSource[status]}
                    loop={status === "pending"}
                    autoplay
                />
            </div>
            
            
            {/* Added an action button for better UX */}
            {status === "accepted" && (
                <Link to="/SignIn">
                    <button className={style.actionBtn}>Go to Workspace</button>
                </Link>
            )}
        </div>
    )
}
export default RequestStatus