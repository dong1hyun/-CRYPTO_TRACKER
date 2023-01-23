import axios from "axios";

export async function fetchCoins() {
    return (await axios(`https://api.coinpaprika.com/v1/coins`)).data;
}

export async function fetchCoinInfo(coinId?: string) {
    return (await (axios(`https://api.coinpaprika.com/v1/coins/${coinId}`))).data;
}

export async function fetchCoinTickers(coinId?: string) {
    return (await (axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`))).data;
}

export async function fetchCoinHistory(coinId: string) {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7;
    let data = (await axios(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)).data;
    return data;
}