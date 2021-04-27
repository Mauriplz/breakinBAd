import { useState, useEffect } from "react"

export const useFetchUrl = (url)=>{

    const [state, setState] = useState({
        data:null,
        loading:true,
    })

    useEffect(()=>{
        setState({data:null,loading:true})
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            setState({
                data: data,
                loading:false
            })
        })
    },[url])

    return state

}