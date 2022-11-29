import { useEffect, useState } from "react";


const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        //aqui podriamos enviar directamente solo el state, pero lo enviamos de esta otra forma, para mejor lectura del código en el return
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

export default useFetch;