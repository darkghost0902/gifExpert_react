import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategoria = ({setcategoriaa}) => {
    const[input, setinput] = useState('');
    const eventoclick= e=>{
        setinput(e.target.value)
    }
   
    const eventosubmit=e=>{
      e.preventDefault();
      console.log(typeof setcategoriaa)
      if(input.trim().length>2){
        setcategoriaa(cat=>[input,...cat]);
        setinput('');

      }
    }
  return (
    <form onSubmit={eventosubmit}>
    <h1>{input}</h1>
    <input className='form-control'
            type="text"
            value={input}
            onChange={eventoclick}
    ></input>
    </form>
  )
}

AddCategoria.propTypes={
  setcategoriaa: PropTypes.func.isRequired
}
