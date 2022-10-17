import {AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return <section id='information'>
    <div className="info-card">
    <a href="https://wa.me/5519997254885"><AiOutlineWhatsApp id='phone-icon'/></a>
        <div>
            <h3>Telefone</h3>
            <p>(19)99725-4885</p>
        </div>
    </div>
    <div className="info-card">
        <AiOutlineMail id='email-icon'/>
        <div>
            <h3>Email</h3>
            <p>carlos.hgb88@gmail.com</p>
        </div>
    </div>
    <div className="info-card">
        <a href="https://www.google.com/maps/place/Campinas,+SP/data=!4m2!3m1!1s0x94c8c61de74b6325:0x17e53a6a2178c22a?sa=X&ved=2ahUKEwjwiqX2suf6AhUUlZUCHRabCLIQ8gF6BAgJEAE"><AiFillEnvironment id='pin-icon'/></a>
        <div>
            <h3>Localização</h3>
            <p>Campinas / SP</p>
        </div>
    </div>
  </section>
}

export default InformationContainer