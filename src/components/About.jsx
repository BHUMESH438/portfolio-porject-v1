import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16 pt-8 lg:pt-8'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>I strongly believe in continuous learning and stay updated with the latest advancements in the MERN stack. My approach to development is guided by best practices, clean code, and a deep understanding of the technologies involved. I am constantly exploring new tools and methodologies to enhance my skills and deliver high-quality software. </p>
        </article>
      </div>
    </section>
  );
};
export default About;
