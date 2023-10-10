import ProjectsCard from './ProjectsCard';
import { UseFetchProjects } from '../fetchProjects';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const { loading, projects } = UseFetchProjects();
  if (loading) {
    return (
      <section className='py-20 align-element'>
        <h2>Loading......</h2>
      </section>
    );
  }
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='Projects' />
      <div className='py-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
        {projects.map(project => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
