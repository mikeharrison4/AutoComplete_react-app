import React from 'react';
import {connect} from "react-redux";

const RenderSuggestions = ({ suggestions }) => {
    let list;
    if(suggestions.length > 0) {
        list = suggestions.map( (suggestion, i) => (
            <li key={i}>{suggestion}</li>
        ));
    }
    return (
        <ul>
            {list}
        </ul>
    );
};

const mapStateToProps = (state) => ({
   suggestions: state.suggestions,
});

export default connect(mapStateToProps)(RenderSuggestions);
