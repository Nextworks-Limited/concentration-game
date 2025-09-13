function Login() {
    return (
        <main className="container root-center">
            <div className="logo">
                <img src="/Logo.svg" alt="Logo" />
            </div>
            <form className="input-wrapper">
                <label htmlFor="username-input">
                    <span className="sr-only">Enter your username</span>
                    <input
                        id="username-input"
                        type="text"
                        placeholder="Enter your username"
                    />
                    <button>Enter</button>
                </label>
            </form>
        </main>
    );
}

export default Login;
