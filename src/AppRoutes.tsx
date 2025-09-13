import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Lobby from "./pages/lobby";
import Arena from "./pages/arena";

function App() {
    return (
        <Routes>
            <Route path="/arena" element={<Arena />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/" index element={<Login />} />
        </Routes>
    );  
}

export default App
