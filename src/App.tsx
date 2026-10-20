import { Contact } from './components/Contact';
import { Demos } from './components/Demos';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PriceGuide } from './components/PriceGuide';
import { ProcessFaq } from './components/ProcessFaq';
import { Projects } from './components/Projects';
import { Services } from './components/Services';

export function App() {
  return (
    <div className="app-shell relative overflow-hidden bg-[#070a11] text-white">
      <div aria-hidden="true" className="site-background" />
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <Projects />
        <Demos />
        <PriceGuide />
        <ProcessFaq />
        <Contact />
      </main>
    </div>
  );
}
