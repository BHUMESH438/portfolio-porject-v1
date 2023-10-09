import { FaGithubSquare } from 'react-icons/fa';
//, FaLinkedin, FaTwitterSquare
import { TbWorldWww } from 'react-icons/tb';
const ProjectsCard = ({ url, image, github, title, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img src={image} alt={title} className='w-full object-cover rounded-t-lg h-64' />
      <div className='text-xl tracking-wide font-medium'>{title}</div>
      <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
      <div className='mt-4 flex gap-x-4'>
        <a href={url} rel='noreferrer' target='_blank'>
          <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
        </a>
        <a href={github} rel='noreferrer' target='_blank'>
          <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
        </a>
      </div>
    </article>
  );
};
export default ProjectsCard;