import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Coin.css'

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
            <div className='coin-container'>
                <div className='content'>
                    <h1>{coin.name}</h1>
                </div>
                <div className='content'>
                    <div className='rank'>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {coin.image ? <img src={coin.image.small} alt="" /> : null}
                            <p>{coin.name}</p>
                            <p>{coin.symbol}</p>
                        </div>
                        <div className='coin-price'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin