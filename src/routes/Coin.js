import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Coin = () => {

    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    })

    return (
        <div>
            <h1>{coin.id}</h1>
        </div>
    )
}

export default Coin