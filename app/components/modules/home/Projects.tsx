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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
        </span>
      </a>
    </section>
  );
};

export default Projects;
