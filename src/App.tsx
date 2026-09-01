import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AwardsEducation from './components/AwardsEducation';
import ContactLinks from './components/ContactLinks';

export default function App() {
  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content — offset on desktop by sidebar width */}
      <main className="flex-1 lg:ml-[260px] pt-14 lg:pt-0">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <AwardsEducation />
        <ContactLinks />
      </main>
    </div>
  );
}
