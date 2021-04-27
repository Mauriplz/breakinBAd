import { useState } from "react"

export const useCounter = (value = 1) =>{
    const [counter, setCounter] = useState(value)

    const handleSum = () =>{
        if(counter>0){
            setCounter(counter + 1)
        }
    }
    const handleResta = () =>{
        if(counter>1){
            setCounter(counter - 1)
        }
        
    }
    const handleReset = () =>{
        setCounter(value)
    }

    return {
        counter,
        handleSum,
        handleResta,
        handleReset
    }
}