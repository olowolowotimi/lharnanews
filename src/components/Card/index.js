import React from "react";
import cardStyle from "./style/Card.module.css";


const Card = ({
    name,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
    
  }) => {
    return(
        <div className={cardStyle.container}>
            <div className={`card ${cardStyle.card}`}>
                <div className={cardStyle.content}>
                    <div className={cardStyle.text}>
                <h4>{name}</h4>
                <p>{author}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{url}</p>
                <p>{publishedAt}</p>
                <p>{content}</p>
                </div>
                <img src={urlToImage} alt="image"/>
                

                </div>
        </div>
        </div>
    )
}

export default Card;