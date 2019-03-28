import React from 'react';
import { Button } from 'reactstrap'

const SearchBox = ({ styleName, placeholder, onChange, value, clickEvent }) => {

    return (
        <div className={`right-side-icon bg-transparent ${styleName} search-parent`}>
            <div className="form-group search-box">
                <input className="form-control border-solid-purple search-height" type="search"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value} />
                <Button className="button-link button-search" onClick={clickEvent}>Send</Button>
            </div>

        </div>
    )
};
export default SearchBox;

SearchBox.defaultProps = {
    styleName: "",
    value: "",
};
