import React from 'react'

export const GifGridItem=({id,title, url, contadoree})=>{
   // console.log(id,title, url, contadoree);
   
    return (
            <div className='col-md-3'>
                <div className="card  target">
                    <img src={url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{title}</p>
                    </div>
                </div>
            </div>
                
       
    )
} 
      
    

