import { ArrowLink } from '~/components/partials/SVG';
import { projects } from '~/utils';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-16'>
      <div className='my-10'>
        <div className='divider divider-start hidden text-xl font-bold phone:flex tablet:flex'>
          Projects
        </div>
      </div>

      <div className='mt-20 flex flex-col gap-8 phone:mt-0 tablet:mt-0'>
        {projects.map((value) => (
          <ProjectCard key={value.id} {...value} />
        ))}
      </div>

      <a
        href='https://github.com/Dandy-CP'
        target='_blank'
        rel='noreferrer'
        className='group/link mt-10 inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
      >
        <span>
          View Full Personal Projects
          <span className='inline-block'>
            <ArrowLink />
          </span>
        </span>
      </a>
    </section>
  );
};

export default Projects;
