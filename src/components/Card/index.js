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
                <p className={cardStyle.author}>{author}</p>
                <p>{title}</p>
                <p>{description}</p>
                <a href={url} className={cardStyle.link}>read more...</a>
                <p className={cardStyle.time}>{publishedAt}</p>
                </div>
                <img src={urlToImage} alt="img" className={cardStyle.img}/>
                
                

                </div>
        </div>
        </div>
    )
}

export default Card;