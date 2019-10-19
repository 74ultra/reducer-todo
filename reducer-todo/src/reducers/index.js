export const initialState = {
    todoList: [
        {
            item: 'Buy survival guide',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn to identify edible plants',
            completed: false,
            id: 3892987588
        },
        {
            item: 'Learn how to track wild game',
            completed: false,
            id: 3892987587
        },
        {
            item: 'Learn to build improvised snares',
            completed: false,
            id: 3892987586
        },
        {
            item: 'Learn to construct emergency shelters',
            completed: false,
            id: 3892987585
        },
        {
            item: 'Learn how to filter water in the field',
            completed: false,
            id: 3892987584
        },
    ]
}

export function reducer(state, action){
    console.log('Action: ', action)
    switch (action.type) {
        case 'CLEAR_COMPLETED':
            return {
                todoList: state.todoList.filter(task => {
                    return task.completed !== true;
                })
            }
        case 'TOGGLE_TASK':
            return {
                todoList: state.todoList.map(task => {
                    if(task.id === action.payload){
                        return {
                            ...task, completed: !task.completed
                        } 
                    } else {
                        return task
                    }
                })
            }
        case 'ADD_TASK':
            const newTask = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                todoList: [...state.todoList, newTask]
            }
        default:
            return state;
    }
    
}