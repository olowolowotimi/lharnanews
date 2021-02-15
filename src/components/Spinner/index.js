import React from "react";
import spinStyle from "./style/Spinner.module.css";

const Spinner = () =>{
    return(
<div className={spinStyle.skchase}>
  <div className={spinStyle.skchasedot}></div>
  <div className={spinStyle.skchasedot}></div>
  <div className={spinStyle.skchasedot}></div>
  <div className={spinStyle.skchasedot}></div>
  <div className={spinStyle.skchasedot}></div>
  <div className={spinStyle.skchasedot}></div>
</div>
    )
}

export default Spinner;