import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../redux/store";
export function Dialog(props: DialogType) {
    const path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}