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
            setData(data.articles);
            setIsPending(false)
            setError(null);

        })
        .catch(err =>{
            if (err.name === 'AbortError'){
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

// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const source = axios.CancelToken.source();

//     axios.get(url, { cancelToken: source.token })
//       .then(res => {
//         setData(res.data);
//         setIsPending(false);
//         setError(null);
//       })
//       .catch(err => {
//         if (axios.isCancel(err)) {
//           console.log('Fetch aborted');
//         } else {
//           console.error('Fetch error:', err.message);
//           setError(err.message);
//           setIsPending(false);
//         }
//       });

//     return () => {
//       source.cancel('Operation canceled by the user.');
//     };
//   }, [url]);

//   return { data, isPending, error };
// };

// export default useFetch;