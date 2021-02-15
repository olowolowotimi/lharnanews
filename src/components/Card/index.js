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
                <h1>{name}</h1>
        </div>
        </div>
    )
}

export default Card;