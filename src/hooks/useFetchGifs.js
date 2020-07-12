import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    // Cuando usemos por primera vez a "useFetchGifs", va a cargar un estado por defecto.
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    // Se hace el efecto para que solo se dispare cuando cambia la categoria.
    useEffect( () => {
        // Hace la petición http.
        getGifs(category)
            // Obtenermos las imagenes.
            .then( imgs => {

                // setTimeout(() => {
                    // Cuando tenemos la data llamamos al setState cambiando la imformacion para el loading
                    // para el disparo de la renderización del componente.
                    setState({
                        data: imgs,
                        loading: false
                    })
                // }, 3000);
                
            } )
    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data:[1,2,3,4,5,6,7,8,9],
    //         loading: false
    //     })
    // }, 3000);

    return state; // {data:[], loading: true}
}