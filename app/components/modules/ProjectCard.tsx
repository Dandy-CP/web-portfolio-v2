import { ArrowLink } from '../partials/SVG';

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
  techStack: string[];
}

const ProjectCard = ({
  name,
  image,
  description,
  techStack,
  link,
}: ProjectCardProps) => {
  return (
    <div className='cursor-pointer transition-all duration-500 hover:scale-105'>
      <div className='flex flex-row gap-3 phone:flex-col tablet:flex-col'>
        <img
          src={image}
          alt=''
          className='w-1/4 rounded-md border border-customGreen p-1 phone:w-full tablet:w-full desktop:w-1/3'
        />

        <div>
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='group/link inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
          >
            <span>
              {name}
              <span className='inline-block'>
                <ArrowLink />
              </span>
            </span>
          </a>

          <p className='text-sm text-customSlate'>{description}</p>

          <div className='mt-5 flex flex-wrap gap-3'>
            {techStack?.map((value) => (
              <div
                key={value}
                className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
