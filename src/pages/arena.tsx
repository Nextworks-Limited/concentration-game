import Input from "../components/Input";
import Logo from "../components/Logo";



function Arena() {

    return (
        <main className="container">
            <Logo />

            {/* Hold the QR code */}
            <section className="arena-section">
                {/* <div className="qr-display">
                    <img src={url} alt="Qr COde" />
                </div> */}

                <Input/>
            </section>


        </main>
    );
}

export default Arena;
