import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(37,99,235,0.38),rgba(30,58,138,0.12)_55%,transparent)]"
      />
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
