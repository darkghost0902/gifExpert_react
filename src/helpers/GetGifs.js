

 export  const getGif= async(categoriasss)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=3lRDavPaonx7llzC7nKMxS0WjLLp9MUd&q=${encodeURI(   categoriasss  )}`;
    const resp = await fetch(url);
    const {data}= await resp.json() ;
    const gifs= data.map((e,i)=>{
        
       
        
        return {
            title: e.title,
            url: e.images.fixed_height_small_still.url,
            id: e.id,
            contadoree: i+1
        }
     }) 
    
    // console.log(data.data[0].url, data.data[0].name);
    return (gifs)
    
}