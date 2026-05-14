import style from "../../Style/landing/CardComponent.module.css";

const Card = ({ title, description, image }) => {
    return (
        <div className={style.card}>
            <img src={image} alt={title} className={style.cardImg}/>
            <h2 className={style.cardTitle}>{title}</h2>
            <p className={style.cardDesc}>{description}</p>
        </div>
    );
};
export default Card;