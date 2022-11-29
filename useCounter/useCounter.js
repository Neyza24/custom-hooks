import { useState } from 'react'

const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue);

    //exponer métodos del hook
    const incrementValue = ( value) => {
        setCounter(counter + value);
    }

    const decrementValue = ( value) => {
        //validación para que no sea menor a cero
        if (counter === 0) return;

        setCounter(counter - value);
    }

    const resetValue = ( ) => {
        setCounter(initialValue);
    }

    //nuestro return puede ser lo que nosotros necesitamos que retorne, un objeto, arreglo, etc
    //nuestro custom hooks pueden estar atados a un hook 
    return {
        counter,
        incrementValue,
        decrementValue,
        resetValue
    }
}

export default useCounter;