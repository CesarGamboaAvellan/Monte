import React from 'react';
import {Button} from 'reactstrap';
import { defaultProps } from 'recompose';


const SimpleCard = (props) =>  {
    return (
        <div className="jr-card">
        {props.children}
        </div>
    );
}

export default SimpleCard;