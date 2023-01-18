import { useParams, useLocation } from "react-router";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
    padding: 0px 20px;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`

const Loader = styled.div`
    text-align: center;
`
interface RouteState {
    name: string
}
function Coin() {
    // const { coinId } = useParams(); 이렇게만 해주셔도 됩니다.
    // useParams쓰는 순간 타입이 string or undefined로 됩니다.
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams();
    const location = useLocation();
    // api가 name을 줄 때까지 기다리지 않고 바로 가져올 수 있음
    // state는 홈화면 즉 coins에 들어갈 때 생성되고 coin에 접속할 때 보내짐
    // 그래서 홈화면에 접속하지 않고 바로 coin으로 접속하면 에러가 발생 됨
    const state = location.state as RouteState; 
    return (
        <Container>
            <Header>
                <Title>{state?.name || "loading..."}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null}
        </Container>
    )
}

            export default Coin;