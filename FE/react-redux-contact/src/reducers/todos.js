const initialState = {
    todos: []
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            debugger;
            return [
                ...state.todos,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }
}

export default todos