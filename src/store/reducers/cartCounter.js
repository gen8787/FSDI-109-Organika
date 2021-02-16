// R E D U C E R S

const cartCounterReducer = (state = 0, action) => {
    if (action.type === 'INCREASE_COUNTER') {
        return state + action.payload;
    }
    else if (action.type === 'DECREASE_COUNTER') {
        return state - action.payload;
    }
    return state;
};

export default cartCounterReducer;