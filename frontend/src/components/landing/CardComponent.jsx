import style from "../../Style/landing/CardComponent.module.css";

const Card = ({ title, description, image,icon }) => {
    return (
        <div className={style.card}>
            <img src={image} alt={title} className={style.cardImg}/>
            <img src={icon} alt={title} className={style.cardIcon}/>
            <h2 className={style.cardTitle}>{title}</h2>
            <p className={style.cardDesc}>{description}</p>
        </div>
    );
};
export default Card;