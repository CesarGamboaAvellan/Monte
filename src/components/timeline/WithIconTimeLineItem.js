import React from 'react';
import { Button } from 'reactstrap';

const WithIconTimeLineItem = (props) => {
    console.log(props);
    const { time, title, description } = props.timeLine;
    return (
        <div className={`timeline-item timeline-time-item ${props.styleName}`}>
            <div className="timeline-time">{time}</div>
           
                   
                    <div className={`timeline-badge bg-${props.color}`}>
                     
            {props.canBeAccess ? <Button className="button-no-styles"
                    onClick={props.onclick}>
                    {props.children}
                    </Button>: props.children}
                    </div>
            
            <div className="timeline-panel">
                <h4 className={`timeline-tile text-${props.color}`}>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
};
export default WithIconTimeLineItem;

