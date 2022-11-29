import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = []

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' )) || [];
}


const useTodo = () => {
    //Si solo tenemos un reducer, podemos dejar solo con dispatch, pero si tenemos más de uno podemos especificar 
    //el tercer argumento del useReducer es el que incializa nuestro reducer o podemos hacer que el segundo argumento initialState ya venga cargado, en caso de que no, podemos utilizar el 3 argumento
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    //Perisistiendo nuestra data con LocalStorge, queremos que 
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ])


    const handleNewTodo = ( todo ) => {
        //Creamos nuestra acción
        const action = {
            type: '[TODO] Add toDo',
            payload: todo
        }
        //Se la mandamos mediante el dispatach al reducer
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove toDo',
            payload: id
        }
        dispatch( action );
    }

    const onToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] Toggle toDo',
            payload: id
        }
        dispatch( action );
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length
    }
}

export default useTodo;