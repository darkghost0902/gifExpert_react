//import React, { useEffect, useState } from 'react'
//import { getGif } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid =({categoriasss})=> {

    const {data, loading} = useFetchGifs(categoriasss);
    console.log(data, loading)
   // const [imagen, setimagen] = useState([]);
  
        // useEffect(()=>{
        //     getGif(categoriasss).then(setimagen)
        // },[categoriasss]);   //el componente renderiza por una unica vez

    // const getGif= async()=>{
    //     const url=`https://api.giphy.com/v1/gifs/search?api_key=3lRDavPaonx7llzC7nKMxS0WjLLp9MUd&q=${encodeURI(   categoriasss  )}`;
    //     const resp = await fetch(url);
    //     const {data}= await resp.json() ;
        
    //     const gifs= data.map((e,i)=>{
            
    //         setcontador(contador+i+1);
    //         return {
    //             title: e.title,
    //             url: e.images.fixed_height_small_still.url,
    //             id: e.id,
    //             contadoree: i+1
    //         }
    //      }) 


    //     console.log(gifs);
       
    //     console.log(imagen);
        
    //     // console.log(data.data[0].url, data.data[0].name);
    //     setimagen(gifs)
    //     setcontador(contador+1);
    // }
    // getGif();
  return (
    <div>
        <hr/>
        <h2>{categoriasss}</h2>
        <hr/>
         {loading && <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>}
        {/* {loading?'cargando....':'cargo'} */}
        {/* <h1>{contador}</h1>
        <button onClick={()=>setcontador(contador+1)}>click</button> */}
        <div className='row'>
            <div className='row'>
            { 
        data.map((img)=> ( 
           <GifGridItem key={img.id} {...img}/>

                     )

        ) }
            </div>
        </div>
    </div>
  )
}

export default GifGrid