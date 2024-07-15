import { useState,useEffect } from "react";
// custom hook that fetches data from a given url
//usefetch is used in data fetching
//useeffect is used for perfoming side effects in functional components

const useFetch = (url) => {   //runs when the components mounts and a url is changed 
    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);


    useEffect(() =>{
        const abortCont = new AbortController(); //allows you to abort fetch requests when needed 


        fetch(url, {signal: abortCont.signal})
        .then(res =>{
            console.log(res)
            if(!res.ok){
                throw Error('could not fetch the data for that result')

            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false)
            setError(null);

        })
        .catch(err =>{
            if (err.name == 'AbortError'){
             console.log('fetch-aborted');   
            } else{
                setError(err.message);
                setIsPending(false);

            }
        }) 

        return () => abortCont.abort();
  
    }, [url]);
    
    return{data, isPending, error}
}

export default useFetch;