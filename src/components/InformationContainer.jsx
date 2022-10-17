import {AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return <section id='information'>
    <div className="info-card">
        <AiOutlineWhatsApp id='phone-icon'/>
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
        <AiFillEnvironment id='pin-icon'/>
        <div>
            <h3>Localização</h3>
            <p>Campinas / SP</p>
        </div>
    </div>
  </section>
}

export default InformationContainer