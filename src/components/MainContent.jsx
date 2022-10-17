
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechContainer from './TechContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TechContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent