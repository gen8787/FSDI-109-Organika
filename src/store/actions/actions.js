// A C T I O N S

// I N C R E A S E   C O U N T E R
export const increaseCounter = qty => {
    return {
        type: 'INCREASE_COUNTER',
        payload: qty
    };
};


// D E C R E A S E   C O U N T E R
export const decreaseCounter = () => {
    return {
        type: 'DECREASE_COUNTER'
    };
};


// A D D   P R O D U C T   T O   C A R T
export const addProdToCart = productInfo => {
    return {
        type: 'ADD_PRODUCT',
        payload: productInfo
    };
}


export const removeProductFromCart = productId => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: productId
    }
}


export const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
}


export const removeTodo = todo => {
    return {
        type: 'REMOVE_TODO',
        payload: todo
    };
}

// import { a, b } from '';