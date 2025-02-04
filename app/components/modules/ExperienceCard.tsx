import { Chain, ArrowLink } from '../partials/SVG';

interface ExperienceCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  link: string;
  techStack: string[];
  projects: {
    projectName: string;
    link: string;
  }[];
}

const ExperienceCard = ({
  company,
  position,
  description,
  startDate,
  endDate,
  link,
  techStack,
  projects,
}: ExperienceCardProps) => {
  return (
    <div className='cursor-pointer transition-all duration-500 hover:scale-105'>
      <p className='mb-1 text-sm font-semibold text-customSlate'>
        {startDate} - {endDate}
      </p>

      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='group/link mb-3 inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
      >
        <span>
          {company} - {position}
          <span className='inline-block'>
            <ArrowLink />
          </span>
        </span>
      </a>

      <p className='text-sm text-customSlate'>{description}</p>

      <div className='mt-5 flex flex-wrap gap-3'>
        {projects.map((value) => (
          <a
            key={value.projectName}
            href={value.link}
            target='_blank'
            rel='noreferrer'
            className='flex flex-row items-center text-sm font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
          >
            <Chain />
            {value.projectName}
          </a>
        ))}
      </div>

      <div className='mt-5 flex flex-wrap gap-3'>
        {techStack.map((value) => (
          <div
            key={value}
            className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
