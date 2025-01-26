interface ExperienceCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  link: string;
  techStack?: string[];
}

const ExperienceCard = ({
  company,
  position,
  description,
  startDate,
  endDate,
  link,
  techStack,
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
  );
};

export default ExperienceCard;
