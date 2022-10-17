import {SiTypescript, SiMicrosoftexcel, SiHtml5, SiCss3, SiJavascript,SiNodedotjs,SiReact} from 'react-icons/si'

import '../styles/components/techcontainer.sass'

const technologies = [
  {id:'html', name:'HTML5', icon:<SiHtml5/>, desc:'Conhecimento básico'},
  {id:'css', name:'CSS3', icon:<SiCss3/>, desc:'Conhecimento básico'},
  {id:'js', name:'Javascrip', icon:<SiJavascript/>, desc:'Conhecimento básico'},
  {id:'node', name:'Node.js', icon:<SiNodedotjs/>, desc:'Conhecimento básico'},
  {id:'type', name:'Typescript', icon:<SiTypescript/>, desc:'Conhecimento básico'},
  {id:'react', name:'React', icon:<SiReact/>, desc:'Conhecimento básico'},
  {id:'excel', name:'Excel', icon:<SiMicrosoftexcel/>, desc:'Conhecimento básico'},
]

const TechContainer = () => {
  return <section className='technologies-container'>
    <h2>Tecnologias</h2>
    <div className='technologies-grid'>
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className='technology-infro'>
            <h3>{tech.name}</h3>
            <p>{tech.desc}</p>
          </div>
        </div>
      ))}
     
    </div>
  </section>
}

export default TechContainer