import React from 'react';
import { connect } from "react-redux";
import { actionSetInput } from "../ducks/inputReducer";
import Countries from '../constants/Countries';
import {actionSetSuggestion} from "../ducks/suggestionsReducer";

const Input = ({ input, actionSetInput, actionSetSuggestion }) => {

    const handleTextChange = (e) => {
        const value = e.target.value;
        actionSetInput(value);
        const filteredSuggestions = Countries.filter(c => value.includes(c));
        const autoSuggestions = value.length === 0 ? [] : filteredSuggestions;
        actionSetSuggestion(autoSuggestions);
    };

    return (
        <input
            type="text"
            onChange={(e) => handleTextChange(e)}
            value={input}
        />
    );
};

const mapStateToProps = (state) => ({
   input: state.input,
});

export default connect(mapStateToProps, { actionSetInput, actionSetSuggestion })(Input);
