const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let copy = [...state];
            copy.push(action.payload);
            return copy;

        case 'REMOVE_TODO':
            return state.filter(todo => todo !== action.payload);

        default:
            return state;
    }
};

export default todoReducer;