import { Route, Routes } from "react-router-dom";
import BBQ from "./Bbq";
import Jacuzzi from "./Jacuzzi";
import StandByMe from "./StandByMe";

export default function Rulebody(){
    return (
        <Routes>
            <Route exact path="/Jaccuzi" element={<Jacuzzi></Jacuzzi>}></Route>
            <Route exact path="/BBQ" element={<BBQ></BBQ>}></Route>
            <Route exact path="/StandByMe" element={<StandByMe></StandByMe>}></Route>
        </Routes>
    )
}