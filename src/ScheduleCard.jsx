import React from "react";
import PropTypes from "prop-types";
import "./ScheduleCard.css";

export default function ScheduleCard({title, time, empty = false, className = ""}){
    if (empty) 
    return(
        <div className = { `schedule-card ${className}`}>
            <div className = "schedule-empty">No Classes</div>
        </div>
    );

return (
    <div className = {`schedule-card ${className}`}>
        <div className = "schedule-left">{title}</div>
        <div className = "schedule-right">{time}</div>
    </div>
);
}

ScheduleCard.propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    empty: PropTypes.bool,
    className: PropTypes.string,
};

ScheduleCard.defaultProps = {
    title: "",
    time: "",
    empty: false,
    className: "",
};

