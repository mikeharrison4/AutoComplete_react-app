import { combineReducers } from "redux";
import { setInputReducer as input } from "../ducks/inputReducer";
import { setSuggestionReducer as suggestions } from "../ducks/suggestionsReducer";

export const reducer = combineReducers({
    input,
    suggestions
});
