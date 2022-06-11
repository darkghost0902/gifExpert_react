import { useState, useEffect } from "react";
import { getGif } from "../helpers/GetGifs";

export const useFetchGifs =(categoriasss)=>{
    const [state, setstate] = useState({
        data:[],
        loading: true
    });
    
    useEffect(()=>{
        getGif(categoriasss).then(
            img=>{
                setstate({
                    data:img,
                    loading: false
                })
            }
                )
    },[]);



    // setTimeout(()=>(setstate({
    //     data:[],
    //     loading: false
    // })),3000)
     return state;
}