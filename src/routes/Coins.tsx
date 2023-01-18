import styled from "styled-components";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

const Container = styled.div`
    padding: 0px 20px;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color .2s ease-in;
    }
    :hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`

const Loader = styled.div`
    text-align: center;
`

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const res = await axios("https://api.coinpaprika.com/v1/coins");
            setCoins(res.data.slice(0, 100));
            setLoading(false);
        })();
    }, [])
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> :
                <CoinList>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link 
                            to={`/${coin.id}`} 
                            state={{name:coin.name}}
                            >
                                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>)
                    )}
                </CoinList>}
        </Container>
    );
}

export default Coins;