import { links } from '../data';
import About from './About';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Footer = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className='bg-emerald-100 p-4 flex sticky bottom-0 justify-center'>
        <div className='flex gap-x-4 sm:gap-x-12 md:gap-x-24 lg:gap-x-48'>
          {links.map(link => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href} className='capitalize font-bold md:text-2xl md:tracking-wider hover:text-emerald-600 duration-300'>
                {text}
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
