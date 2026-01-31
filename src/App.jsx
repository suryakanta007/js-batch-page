import Hero from './components/Hero';
import BenefitsBanner from './components/BenefitsBanner';
import ProblemSolution from './components/ProblemSolution';
import ProjectsGrid from './components/ProjectsGrid';
import Instructor from './components/Instructor';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import Syllabus from './components/Syllabus';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-green-500/30">
      <main>
        <Hero />
        <BenefitsBanner />
        <ProblemSolution />
        <ProjectsGrid />
        <Syllabus />
        <Instructor />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
