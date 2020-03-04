export const actionSetSuggestion = arr => ({
    type: 'SET_SUGGESTION',
    arr
});

export const setSuggestionReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_SUGGESTION":
            return action.arr;
        default:
            return state;
    }
};
