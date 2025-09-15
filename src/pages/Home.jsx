import AboutLassiLab from '../components/aboutlassilab'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LassiLabExperience from '../components/LassiLabExperience'
import SignatureDelights from '../components/SignatureDelights'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutLassiLab/>
        <SignatureDelights/>
        <LassiLabExperience/>
    </div>
  )
}

export default Home