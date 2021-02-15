import React from "react";
import Card from "../../components/Card";
import conStyle from "./style/Content.module.css";
import Spinner from "../../components/Spinner";


const Content = () => {
    const [data, setData] = React.useState([]);
    const [isloading, setisloading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afb6c60a0e864a67ad1d9120da7c8f4b")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setisloading(false);
        console.log(data);
      });
  }, []);

  const newsFeed = data?.map((articles, i) => (
    <Card
      key={i}
      name={articles.name}
    />
  ));
  return isloading ? <Spinner /> : newsFeed;
};


export default Content;