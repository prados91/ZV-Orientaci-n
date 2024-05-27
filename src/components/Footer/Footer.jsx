
import { format } from "@formkit/tempo"
import './Footer.css'

const Footer = () => {

    const date = new Date()
    const now = format(date, { date: "medium", time: "short" })
    return (
        <footer className='footer-container'>
            <p className='footer-text'>Copyright {now} - Derechos reservados.</p>
        </footer>
    )
}

export default Footer

