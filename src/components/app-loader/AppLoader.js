import React from "react";
import "./AppLoader.scoped.scss";

/**
 * This is global component to display loader
 * Props : 
 * fullScreen {Boolean} - to display loader on full screen
 * message {String} - Message to be displayed while loading
 */
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