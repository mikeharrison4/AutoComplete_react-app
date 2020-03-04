export const actionSetInput = value => ({
   type: 'SET_INPUT',
   value
});

export const setInputReducer = (state = '', action) => {
    switch(action.type) {
        case "SET_INPUT":
            return action.value;
        default:
            return state;
    }
};
