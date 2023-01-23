import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins"
import Coin from "./routes/Coin"

function Router() {
    return ( 
    <BrowserRouter>
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />} />
            <Route path="/:coinId/*" element={<Coin />} />
            {/* '/*'는 v6에서 nested routes를 구현하는 방법*/}
        </Routes>
    </BrowserRouter>
    )
}

export default Router;