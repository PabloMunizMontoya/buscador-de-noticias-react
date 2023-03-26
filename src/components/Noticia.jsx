import React from 'react'

const Noticia = ({noticia}) => {

    const { urlToImage, url, title, description, source} = noticia

    return ( 
        <div className='col s12 m6 l4'>
            <div className='card'>
                <div className='card-image'>
                    <img src={urlToImage} alt={title}/>
                    <span className='card-title'>{source.name}</span> 
                </div>
                <div className='card-content'>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className='card-action'>
                    <a
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='waves-effect waves-light btn'
                    >Ver noticia Completa</a>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;