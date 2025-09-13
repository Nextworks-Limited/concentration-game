import Button from "./button";


export default function Input() {
    return (
        <div className="input-wrapper">
            <label htmlFor="username-input" className="merged-input">
                <span className="sr-only">Enter your username</span>
                <input
                    id="username-input"
                    type="text"
                    placeholder="Enter your username"
                />
                <Button text="Enter" />
            </label>
        </div>
    );
}