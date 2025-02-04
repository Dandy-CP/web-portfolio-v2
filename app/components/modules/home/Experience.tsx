import { ArrowLink } from '~/components/partials/SVG';
import { experience as experienceData } from '~/utils';
import ExperienceCard from '../ExperienceCard';

const Experience = () => {
  return (
    <section id='experience' className='scroll-mt-16'>
      <div className='my-10'>
        <div className='divider divider-start hidden text-xl font-bold phone:flex tablet:flex'>
          Experience
        </div>
      </div>

      <div className='mt-20 flex flex-col gap-16 phone:mt-0 tablet:mt-0'>
        {experienceData.map((value) => (
          <ExperienceCard key={value.id} {...value} />
        ))}
      </div>

      <a
        href='./resume.pdf'
        target='_blank'
        className='group/link mt-10 inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
      >
        <span>
          View Full Resume
          <span className='inline-block'>
            <ArrowLink />
          </span>
        </span>
      </a>
    </section>
  );
};

export default Experience;
