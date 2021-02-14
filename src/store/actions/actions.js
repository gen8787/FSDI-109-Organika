// A C T I O N S

export const increaseCounter = (qty) => {
    return {
        type: 'INCREASE_COUNTER',
        payload: qty
    };
};


export const decreaseCounter = () => {
    return {
        type: 'DECREASE_COUNTER'
    };
};

// import { a, b } from '';