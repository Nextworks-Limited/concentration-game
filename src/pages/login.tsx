import Button from "../components/button";
import Logo from "../components/Logo";

function Login() {
    return (
        <main className="container root-center">
            <Logo/>
            <form className="input-wrapper">
                <label htmlFor="username-input">
                    <span className="sr-only">Enter your username</span>
                    <input
                        id="username-input"
                        type="text"
                        placeholder="Enter your username"
                    />
                    <Button text="Enter"/>
                </label>
            </form>
        </main>
    );
}

export default Login;
