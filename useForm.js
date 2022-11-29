
//como no sabemos que campos se pueden llegar a requerir (user, contraseña, etc), pasamos como argumento un objeto y así se puede customizar según los campos que queramos agregar al form

import { useState } from "react";

const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState( {
            ...formState,
            [ name ] : value
        })
    }

    const onResetForm = ( ) => {
        setFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm;