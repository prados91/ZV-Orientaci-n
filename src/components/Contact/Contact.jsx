import { FaWhatsapp } from "react-icons/fa";
import { phoneNumber } from '../../assets/db.js';

import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact-container container text-center">
                <div className="row d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <p>Lic. Zulma Vinet</p>
                        <p>Tel: (2477) 15631943</p>
                        <p>Dirección: Dr. Alem 1725, Pergamino, CP 2700</p>
                        <p>Email: zuvinet@gmail.com</p>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                        <div className="iframe-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.370945391154!2d-60.57855592350374!3d-33.90585132098027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9b54961982b8b%3A0x7acc10fa55807f8f!2sDr.%20Alem%201725%2C%20Pergamino%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716831542474!5m2!1ses-419!2sar"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-whatsapp">
                <a
                    href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-container"
                >
                    <div className="whatsapp-link">
                        <FaWhatsapp size={35} color="#F8F9FA" />
                    </div>
                </a>
            </div>
        </>
    );
};
export default Contact;
