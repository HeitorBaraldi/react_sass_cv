import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name:'linkedin', icon: <FaLinkedinIn/>, site:'https://www.linkedin.com/in/carlos-heitor-gobbi-baraldi-73083a71/'},
    {name:'github', icon: <FaGithub/>, site:'https://github.com/HeitorBaraldi'},
    {name:'instagram', icon: <FaInstagram/>, site:''},
]

const SocialNetworks = () => {
  return <section id='social-networks'>
    {socialNetworks.map((network) => (
        <a href={network.site} className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
}

export default SocialNetworks