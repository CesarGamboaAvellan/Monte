import React from 'react';
import TextValidator from '../../shared/textValidator';
import { ValidatorForm } from 'react-form-validator-core';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            domain: e.target.value,
        })
    }
    render() {

        return (
            <div className={`right-side-icon bg-transparent ${this.props.styleName} search-parent`}>
                {/* <form>
                <div className="form-group search-box">
                    <input className="form-control border-solid-purple search-height" type="search"
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        pattern="(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]"
                        required />
                    <Button
                        className="button-link button-search"
                        type="submit"
                        onClick={clickEvent
                        }>Send</Button>
                </div>
            </form> */}
                <ValidatorForm
                    ref="form"
                    onSubmit={() => this.props.clickEvent(this.state.domain)}
                >
                    `<TextValidator
                        onChange={(e) => this.handleChange(e)}
                        name="email"
                        value={this.state.domain}
                        validators={['required', 'matchRegexp:^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+[.][a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$']}
                        errorMessages={['this field is required', 'valid domain example: yourdomain.com']}
                    />
                    <div className="div-button-form">
                        <button
                            className="button-link button-search white-color"
                            type="submit"
                        >send</button>
                    </div>
                </ValidatorForm>


            </div>
        )
    }
}


export default SearchBox;

SearchBox.defaultProps = {
    styleName: "",
    value: "",
};
