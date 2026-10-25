import Hero from '../components/Hero.jsx'
import TrustedBrands from '../components/TrustedBrands.jsx'
import LearningPath from '../components/LearningPath.jsx'
import GetStartedBanner from '../components/GetStartedBanner.jsx'



function Home(){
     return(
          <div>
               <Hero />
               <TrustedBrands />
               <LearningPath />
               <GetStartedBanner />
          </div>
     )
}

export default Home;