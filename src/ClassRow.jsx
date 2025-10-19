import React from "react";
import PropTypes from "prop-types";
import "./ClassRow.css";

export default function ClassRow({code, days, time, OnAdd}) 
{
    return (
        <div className = "class-row">
            <div className = "class-left">
                <div className = "classcode">{code}</div>
            </div>
            <div className = "class-center">{days}</div>
            <div className = "class-right">
                <div className = "class-time">{time}</div>
                <button className = "class-add" onClick = {OnAdd} aria-label = {`Add ${code}`}> Add </button>
            </div>
        </div>
    );
}

ClassRow.protoTypes = 
{
    code: PropTypes.string.isRequired,
    days: PropTypes.string,
    time: PropTypes.string,
    onAdd: PropTypes.func,
};

ClassRow.defaultProps =
{
    days: "",
    time: "",
    onAdd: () => {},
}