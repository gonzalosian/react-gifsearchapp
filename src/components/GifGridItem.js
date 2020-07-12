import React from 'react'

export const GifGridItem = ( {title, url} ) => {

    // console.log({id, title, url});

    return (
        <div className="card">
            <img src={url} className="card-img-top" alt={title}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )

    // return (
    //     <div className="card animate__animated animate__bounce animate__delay-2s" >
    //         <img src={url} alt={title} ></img>
    //         <p>{title}</p>
    //     </div>
    // )
}