import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     console.log(categories);
    //     // setCategories([...categories, 'Goku']);
    //     setCategories( cats => [...cats, 'Goku'] )
    //     // se puede hacer de las dos formas.
    // }
// NOTA: Si presionamos mas de una vez, dará un warning, pero al trabajar con una DB,
// la key será unica y no dará ese error.

    //console.log(categories);

    return (
        <>
            <h2>Gif Search App</h2>
            <AddCategory setCategories={setCategories} ></AddCategory>
            <hr></hr>

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol  >
                {
                    // categories.map( category => {
                    //     return <li key={category} > {category} </li>
                    // } )

                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        ></GifGrid>
                    ) )
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp