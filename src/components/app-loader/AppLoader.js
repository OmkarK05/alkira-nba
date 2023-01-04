import React from "react";
import "./AppLoader.scoped.scss";

const AppLoader = (props) => {

  return(
    <div className={`loader-overlay-screen d-flex flex-column align-items-center justify-content-center ${ props["fullScreen"] ? "full-screen" : "" }`}>
      <div className="lds-default">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
      {props["message"] && <div className="font-regular text-primary">{ props["message"] }</div>}
    </div>
  )
}

export default AppLoader;