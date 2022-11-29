export const todoReducer = (initialState = [], action ) => {
    switch( action.type ) {
        //Definiendo nuestros casos de uso, deben de ser descriptivos
        case '[TODO] Add toDo': 
            // throw new Error('Action.type = ABC no esta implementada');
            return [ ...initialState, action.payload ]
        
        case '[TODO] Remove toDo':
            //Acá le estamos diciendo que nos filtre en un nuevo array todos los objetos que tengan un id diferente al que le enviamos como argumento en la acción( payload )
            return initialState.filter( todo => todo.id !== action.payload );
        
        case '[TODO] Toggle toDo':
            return initialState.map( todo => {
                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
        
        default:
            return initialState
    }
}