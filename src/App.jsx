import Hero from './components/Hero';
import BenefitsBanner from './components/BenefitsBanner';
import ProblemSolution from './components/ProblemSolution';
import ProjectsGrid from './components/ProjectsGrid';
import Instructor from './components/Instructor';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhyJavaScript from './components/WhyJavaScript';
import CareerPaths from './components/CareerPaths';
import Navbar from './components/Navbar';

import Syllabus from './components/Syllabus';


function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-green-500/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BenefitsBanner />
        <ProblemSolution />
        <div id="why-javascript">
          <WhyJavaScript />
        </div>
        <div id="curriculum">
          <Syllabus />
        </div>
        <div id="projects">
          <ProjectsGrid />
        </div>
        <div id="career-paths">
          <CareerPaths />
        </div>
        <Instructor />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
