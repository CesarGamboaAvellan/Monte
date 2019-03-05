import React from 'react';
import { Button } from 'reactstrap';

const ContactCard = (props) => {
    return (
        <div className="jr-card p-0 overflow-hidden">
            <div className="jr-card-header mb-0 p-4 min-height-boxes">
                <h3 className="card-heading">Basic Profile information</h3>
            </div>

            <div className="card-body">
                <ul className="contact-list list-unstyled">
                    <li className="media">
                        <i className="zmdi zmdi-phone zmdi-hc-fw zmdi-hc-lg text-primary align-self-center" />
                        <span className="media-body">
                            {props.basicInformation.phoneNumber}
                        </span>
                    </li>
                    <li className="media">
                        <i className="zmdi zmdi-email zmdi-hc-fw zmdi-hc-lg text-primary align-self-center" />
                        <span className="media-body">
                            {props.basicInformation.email}
                        </span>
                    </li>
                    <li className="media">
                        <i className="zmdi zmdi-facebook-box zmdi-hc-fw zmdi-hc-lg text-primary align-self-center" />
                        <span className="media-body">
                            {props.basicInformation.facebook}
                        </span>
                    </li>
                    <li className="media">
                        <i className="zmdi zmdi-twitter-box zmdi-hc-fw zmdi-hc-lg text-primary align-self-center" />
                        <span className="media-body">
                            {props.basicInformation.twitter}
                        </span>
                    </li>
                    <li className="media">
                        <i className="zmdi zmdi-pin zmdi-hc-fw zmdi-hc-lg text-primary align-self-center" />
                        <span className="media-body">
                            {props.basicInformation.Address}
                            <br />
                            NJ, KC45 5473
                        </span>
                    </li>
                </ul>

                <Button size="sm" outline color="primary" className="text-uppercase">{props.buttonText}</Button>
            </div>
        </div>
    );
};

export default ContactCard;
