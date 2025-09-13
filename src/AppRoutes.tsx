import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Lobby from "./pages/lobby";

function App() {
    return (
        <Routes>
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/" index element={<Login />} />
        </Routes>
    );  
}

export default App
