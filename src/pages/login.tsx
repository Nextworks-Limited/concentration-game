import { useNavigate } from "react-router";
import Logo from "../components/Logo";
import Input from "../components/Input";

function Login() {
    const navigate = useNavigate();
    return (
        <main className="container root-center">
            <Logo/>
            <form onSubmit={(e)=>{
                e.preventDefault();

                navigate("/lobby");

            }}>
                <Input/>
            </form>
        </main>
    );
}

export default Login;
