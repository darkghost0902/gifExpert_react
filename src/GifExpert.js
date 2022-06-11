import React, { useState } from 'react'
import { AddCategoria } from './componentes/AddCategoria';
import GifGrid from './componentes/GifGrid';
   
   //const categoria=['goku','saitama','naruto'];
   export const GifExpert = () => {
     const [categoria, setcategoria]=useState(['rick y morty']);
    //  const addarray= ()=>{
    //   //setcategoria([...categoria,'luffy']);
    //     setcategoria(cat=>[...cat,"luffy"]);
    //  }
     return (
       <>
       <h2>gifExpert</h2>
       <hr />
       <AddCategoria setcategoriaa={setcategoria}/>
       {/* <button onClick={addarray}>ADD</button> */}
        <div>
           {/* { categoria.map((categoria)=><li key={categoria} >{categoria}</li>)} */}
           {categoria.map((categoria)=>(
            <GifGrid key={categoria} categoriasss={categoria} />
           ))}
        </div>
       </>
     )
   }

   export default GifExpert
   