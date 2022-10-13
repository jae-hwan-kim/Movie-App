import React, { useEffect } from 'react'; 

function App() {// eslint-disable-next-line
    const [loading, setLoading] = React.useState(true);
    const [coins, setCoins] = React.useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div className="App">
            <h1>The Coins! {loading ? "" : `(${ coins.length })` }</h1>
            {loading ? <strong>is Loading...</strong>
                :
                <select>
                    {coins.map((coin) => <option key={coin.id}>{coin.name} {coin.symbol} : ${coin.quotes.USD.price} USD</option>)}
                </select>
            }
        </div>
    );
}

export default App;
