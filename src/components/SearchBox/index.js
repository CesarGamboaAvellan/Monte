import React from 'react';
import { Button } from 'reactstrap'

const SearchBox = ({styleName, placeholder, onChange, value}) => {

    return (
        <div className={`search-bar right-side-icon bg-transparent ${styleName}`}>
            <div className="form-group">
                <input className="form-control border-solid-purple" type="search" placeholder={placeholder} onChange={onChange}
                       value={value}/>
                <button className="search-icon"><i className="zmdi zmdi-search zmdi-hc-lg"/></button>
                <Button className="button-link margin-top-3">Search</Button>
            </div>
          
        </div>
    )
};
export default SearchBox;

SearchBox.defaultProps = {
    styleName: "",
    value: "",
    placeholder: "Search here.."
};