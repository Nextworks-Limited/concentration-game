import Logo from "../components/Logo";
import Button from "../components/button";


const rollCallTitle = "Conversation";

// 
function Lobby() {

    const url = `https://quickchart.io/qr?text=${rollCallTitle}&size=200`;


    return (
        <main className="container">
            <Logo />

            {/* Hold the QR code */}
            <section className="mata-display">
                <div className="qr-display">
                    <img src={url} alt="Qr COde" />
                </div>

                <div className="call-to-action">
                    <Button
                        text="Download"
                        icon={<span className="icon download-icon" />}
                    />
                    <Button
                        text="Share"
                        icon={<span className="icon link-icon" />}
                    />
                </div>
            </section>
        </main>
    );
}

export default Lobby;
