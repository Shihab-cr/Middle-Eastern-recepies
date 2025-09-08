import { useCallback, useEffect, useState } from "react";

function useFetch<T> (url: string,)  {
    const [data, setData] = useState<T|[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const refetch = useCallback(()=>{
        setIsLoading(true);
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                setIsLoading(false);
                throw new Error("could not load data from data base check useFetch");
            }
            return res.json() as T
        })
        .then((data)=>{
            setIsLoading(false);
            setData(data);
            setError(null);
        })
        .catch((err)=>{
            setError(err.message);
            setIsLoading(false);
        })
    }, [])
    useEffect(()=>{
        refetch();
    },[refetch, url])
    return ( 
        {error, isLoading, data, refetch}
     );
}
 
export default useFetch;