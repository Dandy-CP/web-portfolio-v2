import { Sribu, Fastwork, Fiverr, Upwork } from '~/components/partials/SVG';

const FreelanceContent = () => {
  const freelanceData = [
    {
      platformFreelance: 'Sribuu',
      logo: Sribu,
      profileLink: 'https://www.sribu.com/id/users/dandycandra',
    },
    {
      platformFreelance: 'FastWork',
      logo: Fastwork,
      profileLink: 'https://fastwork.id/user/dandycp',
    },
    {
      platformFreelance: 'Fiverr',
      logo: Fiverr,
      profileLink: 'https://www.fiverr.com/dandycp',
    },
    {
      platformFreelance: 'Upwork',
      logo: Upwork,
      profileLink: 'https://www.upwork.com/freelancers/~0106c13ddcd1e33d12',
    },
  ];

  return (
    <div>
      <p className='text-sm font-semibold text-customWhite phone:text-center phone:text-xs tablet:text-center'>
        Interested in building a web or mobile app? Find me on:
      </p>

      <div className='mb-5 flex w-full flex-row items-center gap-5 phone:flex-wrap phone:justify-center tablet:justify-center'>
        {freelanceData.map((value) => (
          <a
            key={value.platformFreelance}
            href={value.profileLink}
            target='_blank'
            rel='noreferrer'
          >
            <value.logo />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FreelanceContent;
