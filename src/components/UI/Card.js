import React from "react";
import './Card.css'

function Frame(props) {
    const classes = 'card ' +  props.className;
    return <div className={classes}>{props.children}</div>
}

export default Frame;