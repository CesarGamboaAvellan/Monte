import React from 'react';
import { connect } from 'react-redux'
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './textValidator';



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        roleTitle: '',
        profileUrl: '',
        email: '',
        description: '',
        domain: '',
        number: '',
        strng: ''

      },
      text: [],
    }
  }
  handleSubmit = () => {
    console.log('submit');
  }
  handleChange = (e, type) => {
    if (type === 'email') {
      this.setState({
        email: e.target.value,
      })
    }
    if (type === 'domain') {
      this.setState({
        domain: e.target.value,
      })
    }
    if (type === 'number') {
      this.setState({
        number: e.target.value,
      })
    }
    if (type === 'string') {
      this.setState({
        string: e.target.value,
      })
    }
  }
  render() {


    return (
      <div className="app-wrapper">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
        >
          Email regex
          <TextValidator
            onChange={(e) => this.handleChange(e, 'email')}
            name="email"
            value={this.state.email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
          Domain regex (must include a . between)
          <TextValidator
            onChange={(e) => this.handleChange(e, 'domain')}
            name="email"
            value={this.state.domain}
            validators={['required', 'matchRegexp:^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+[.][a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$']}
            errorMessages={['this field is required', 'valid domain example: yourdomain.com']}
          />
          Numbers (only)
          <TextValidator
            onChange={(e) => this.handleChange(e, 'number')}
            name="email"
            value={this.state.number}
            validators={['required', 'isNumber']}
            errorMessages={['this field is required', 'this is not a number']}
          />
          Characters (only)
          <TextValidator
            onChange={(e) => this.handleChange(e, 'string')}
            name="email"
            value={this.state.string}
            validators={['required', 'matchRegexp:^[a-zA-Z]+$']}
            errorMessages={['this field is required', 'this must be a word']}
          />
          <div className="div-button-form">
            <button className="button-link button-search white-color" type="submit">submit</button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const userLoggedIn = auth;
  return { userLoggedIn }
};
export default connect(mapStateToProps)(Dashboard);
