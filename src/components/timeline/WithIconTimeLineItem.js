import React from 'react';
import { Button } from 'reactstrap';
import IntlMessages from '../../util/IntlMessages';

const WithIconTimeLineItem = (props) => {
    console.log(props);
    const { time, title, description } = props.timeLine;
    return (
        <div className={`timeline-item timeline-time-item ${props.styleName}`}>
            <div className="timeline-time">{time}</div>
            <div className={`timeline-badge bg-${props.color}`}>{props.children}</div>
            <div className="timeline-panel">
                <h4 className={`timeline-tile text-${props.color}`}>{title}</h4>
                <p>{description}</p>
                {/* {props.hasButton ?
                    <Button className="text-uppercase button-link">
                        <IntlMessages id="appModule.Start" />

                    </Button> : ''} */}
            </div>
        </div>
    )
};
export default WithIconTimeLineItem;

