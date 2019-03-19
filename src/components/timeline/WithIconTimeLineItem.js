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
                    className="button-link">
                    {props.buttonText}
                </Button> : (props.canBeAccess && <Link className="btn button-link text-white" to={`/app/activity/${id}`}>
                    {props.buttonText}
                </Link>)}
            </div>
        </div>
    )
};
export default WithIconTimeLineItem;

