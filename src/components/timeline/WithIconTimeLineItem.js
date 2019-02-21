import React from 'react';

const WithIconTimeLineItem = ({ styleName, color, timeLine, children }) => {
    // const {time, title, description } = timeLine;
    // const children = <i class="zdmi zdmi-android"></i>
    const title = "First Assigment"
    const description = "This is your first task, after completed, the next ones will be avaliable"
    return (
        <div className={`timeline-item timeline-time-item ${styleName}`}>
            {/* <div className="timeline-time">{time}</div> */}
            <div className="timeline-time">20, APRIL, 2019</div>
            {/* <div className={`timeline-badge bg-${color}`}>{children}</div> */}
            <div className={`timeline-badge bg-pink`}><i class="zdmi zdmi-android"></i></div>
            <div className="timeline-panel">
                {/* <h4 className={`timeline-tile text-${color}`}>{title}</h4> */}
                <h4 className={`timeline-tile text-pink`}>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
};
export default WithIconTimeLineItem;

/*
float: left;

text-align: right;

padding-left: 0;

padding-right: 55px;
*/
