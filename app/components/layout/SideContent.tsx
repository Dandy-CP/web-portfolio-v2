import { Github, Linkedin, Mail } from '~/components/partials/SVG';
import { useScrollSpy } from '~/hooks';
import Navigation from './partials/Navigation';

const SideContent = () => {
  const tagID = ['about', 'experience', 'projects'];
  const activeID = useScrollSpy(tagID, 100);

  return (
    <div className='flex h-full flex-col justify-between'>
      <div className='flex flex-col gap-10'>
        <div>
          <h1 className='text-5xl font-bold'>Dandy Candra</h1>
          <p className='my-3 text-xl'>Software Developer</p>
          <p className='w-[400px] text-base text-customSlate phone:w-full desktop:w-full'>
            I build things for the web and mobile, producing scalable, modular
            and easy to manage applications
          </p>
        </div>

        <nav className='nav phone:hidden tablet:hidden'>
          <ul className='flex w-max flex-col'>
            {tagID.map((value) => (
              <Navigation
                key={value}
                label={value}
                tag={`#${value}`}
                activeTag={activeID}
              />
            ))}
          </ul>
        </nav>
      </div>

      <div className='flex flex-row items-center gap-5 phone:mt-10 tablet:mt-10'>
        <a href='https://github.com/Dandy-CP' target='_blank' rel='noreferrer'>
          <Github />
        </a>

        <a
          href='https://www.linkedin.com/in/dandycandra/'
          target='_blank'
          rel='noreferrer'
        >
          <Linkedin />
        </a>

        <a href='mailto:dandycandrapratama@gmail.com'>
          <Mail />
        </a>
      </div>
    </div>
  );
};

export default SideContent;
