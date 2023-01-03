import React, { useEffect, useMemo } from "react";
import './AppDrawer.scoped.scss';
import cross from '../../assets/icons/x.svg'

const AppDrawer = (props) => {
    // Props
    useEffect(() => console.log(props.children))

    const getDrawerStyle = useMemo(() => {
        return{
            width: props.width || '300px',
            [props.direction || 'right']: 0
        }
    }, [props.width, props.direction])

    return(
        <div id="app-drawer" className="app-drawer-container">
            <div className="drawer" style={getDrawerStyle}>
                <div id="app-drawer-header-block" className="drawer-header px-3 py-2">
                    <p id="app-drawer-header-title" className="header-title mb-0 pr-2">{props['header']}</p>
                    <img id="app-drawer-header-close-button" className="close-icon" alt="close" src={cross} onClick={props['close']}/>
                </div>
                <div className="drawer-content px-3 py-2">
                    {props.children}
                </div>
           </div>
        </div>
    )
}

export default AppDrawer;