import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const WithIconTimeLineItem = (props) => {
    const { time, title, description, id } = props.timeLine;
    return (
        <div className={`timeline-item timeline-time-item ${props.styleName}`}>
            <div className="timeline-time">{time}</div>


            <div className={`timeline-badge bg-${props.color}`}>
                {props.children}
            </div>

            <div className="timeline-panel">
                <h4 className={`timeline-tile text-${props.color}`}>{title}</h4>
                <p>{description}</p>
                {(props.canBeAccess && props.modalTask) ? <Button
                    onClick={props.buttonClick}
                    className="btn-metro btn-metro-outline-warning">
                    {props.buttonText}
                </Button> : (props.canBeAccess && <Link className=" link-btn btn-metro btn-metro-outline-warning" to={`/app/activity/${id}`}>
                    {props.buttonText}
                </Link>)}
            </div>
        </div>
    )
};
export default WithIconTimeLineItem;
