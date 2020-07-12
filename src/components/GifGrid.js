import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    // Acá usamos nuestro Custom Hooks que se puede reutilizar.
    const {data:images, loading} = useFetchGifs(category);
    
    // El arreglo vacío significa que este código así como está, solo quiero que se ejecute la instrucción 
    // getGifs() cuando el componente es renderizado por primera vez.

    // useEffect( () => {
    //     getGifs( category )
    //         .then( imgs => setImages( imgs ) );
    // }, [category])

    // Esta "getGifs" funcion hace la peticion http, trae las imagenes, las procesa y podria retornarlas.
    // Quizás no es necesario que esté en nuestro componenete.
    
    return (
        <>
            <h3 className="animate__animated animate__bounce animate__delay-2s" > {category} </h3>

            {/* { loading ? 'Cargando...' : 'Data cargada' } */}
            { loading && <p className="animate__animated animate__flash" >Loading</p> }

            {/* <div className="card-grid" > */}
            <div className="card-columns">
                    {
                        images.map( img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            ></GifGridItem>
                        ) )
                    }
            </div>
        </>
    )
}
