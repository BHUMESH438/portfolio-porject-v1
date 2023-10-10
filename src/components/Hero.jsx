import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24' id='home'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8 pt-8 lg:pt-8'>
        <article>
          <h1 className='text-6xl font-bold tracking-wider'>I'm Bhumesh</h1>
          <p className='mt-4 text-3xl text-slate-700  capitalize tracking-wide'>MERN developer</p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>turning ideas into interactive reality</p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/BHUMESH438' rel='noreferrer' target='_blank'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/bhumesh-c-5aba25243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' rel='noreferrer' target='_blank'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='mailto:bhumesh1719@gmail.com' rel='noreferrer' target='_blank'>
              <FaMailBulk className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};

export default Hero;
