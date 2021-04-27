import React from 'react'
import { useCounter } from './hooks/useCounter'
import { useFetchUrl } from './hooks/useFetchUrl'

export const BreakinBadApp = () => {

    const {counter,handleSum,handleResta} = useCounter(1)

    const {data,loading} = useFetchUrl(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {author,quote} = !!data && data[0]

    console.log(author,quote)
    return (
        <div>
            <h1>BreakingBadApp</h1>
            <hr/>
            {
                (loading)
                ?
                <div className="alert alert-info" role="alert">
                    Loading...
                </div>
                :
                <>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>{quote}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {author}
                    </figcaption>
                </figure>
                <button
                    onClick={handleSum}
                >
                    Avanzar
                </button>
                <button
                    onClick={handleResta}
                >
                    Retroceder
                </button>
                </>
            }
        </div>
    )
}
