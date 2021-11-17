import WhatsappQR from "../Assets/WhatsAppQR.JPG";
import FaceBookimg from "../Assets/fb.jpg";
import Intaimg from "../Assets/inst.png";

export default function ContactPage() {
    return(
        <>
            <div className= "contact wrapper">
                <a href="https://www.facebook.com/INT.tattoos"><img className="contact-link facebook" alt="facebook pro" src={FaceBookimg}/> </a> 
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/int.tattoos"><img className="contact-link instagram" alt="instagram" src={Intaimg}/> </a>
                &nbsp;&nbsp;&nbsp;
                <h3>Click or Scan this QR with WhatsApp Camera to start Chat!</h3>
                <a className="container" href="https://api.whatsapp.com/message/7SJZ3TRRFVM5G1"><img className="whatsapp-QR" alt='whatsapp chat' src={WhatsappQR}/></a> 
                
            </div>
        </>
    )
}