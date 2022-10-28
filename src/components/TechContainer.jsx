import {SiTypescript, SiMicrosoftexcel, SiHtml5, SiCss3, SiJavascript,SiNodedotjs,SiReact} from 'react-icons/si'

import '../styles/components/techcontainer.sass'

const technologies = [
  {id:'html', name:'HTML 5', icon:<SiHtml5/>, desc:'Conhecimento básico', site:'https://developer.mozilla.org/pt-BR/docs/Web/HTML'},
  {id:'css', name:'CSS 3', icon:<SiCss3/>, desc:'Conhecimento básico', site:'https://developer.mozilla.org/pt-BR/docs/Web/Css'},
  {id:'js', name:'Javascript', icon:<SiJavascript/>, desc:'Conhecimento básico', site:'https://developer.mozilla.org/pt-BR/docs/Web/javascript'},
  {id:'node', name:'Node.js', icon:<SiNodedotjs/>, desc:'Conhecimento básico', site:'https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction'},
  {id:'type', name:'Typescript', icon:<SiTypescript/>, desc:'Em desenvolvimento', site:'https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript'},
  {id:'react', name:'React', icon:<SiReact/>, desc:'Conhecimento básico',site:'https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started'},
  {id:'reactnative', name:'React Native',icon:<SiReact/>, desc:'Em desenvolvimento', site:'https://reactnative.dev/'},
  {id:'excel', name:'Excel', icon:<SiMicrosoftexcel/>, desc:'Conhecimento básico',site:'https://www.microsoft.com/pt-br/microsoft-365/p/excel-home-and-student/cfq7ttc0hlkr'},
]

const TechContainer = () => {
  return <section className='technologies-container'>
    <h2>Tecnologias</h2>
    <div className='technologies-grid'>
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          <a href={tech.site}>{tech.icon}</a>
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