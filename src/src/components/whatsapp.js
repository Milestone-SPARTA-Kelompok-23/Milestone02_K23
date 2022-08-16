import WhatsAppp from "../images/whatsapp-icon.png"
const WhatsApp = () => {
    return (
        <div className="whatsapp">
            <a target="_blank" rel="noreferrer" href="https://web.whatsapp.com/send?phone=+62812345678&amp;text=Hi, Saya mau bertanya mengenai sesuatu.">
                <img src={WhatsAppp} alt="whatsapp" />
            </a>
        </div>
    )
}

export default WhatsApp;