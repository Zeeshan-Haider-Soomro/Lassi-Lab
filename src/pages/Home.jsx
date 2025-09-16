import AboutLassiLab from '../components/aboutlassilab'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LassiLabExperience from '../components/LassiLabExperience'
import Location from '../components/Location'
import SignatureDelights from '../components/SignatureDelights'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutLassiLab/>
        <SignatureDelights/>
        <LassiLabExperience/>
        <Location/>
        <Testimonials/>
    </div>
  )
}

export default Home