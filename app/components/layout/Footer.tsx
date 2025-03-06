import FreelanceContent from './partials/FreelanceContent';

const Footer = () => {
  return (
    <div className='mt-40 flex w-[400px] flex-col phone:mb-10 phone:w-full tablet:mb-10 tablet:w-full tablet:items-center'>
      <FreelanceContent />

      <div className='w-full'>
        <p className='text-sm font-light text-customSlate phone:text-center tablet:text-center'>
          Built and coded with{' '}
          <a
            href='https://remix.run/'
            className='font-semibold text-customWhite hover:text-customGreen'
          >
            Remix
          </a>{' '}
          and{' '}
          <a
            href='https://tailwindcss.com/'
            className='font-semibold text-customWhite hover:text-customGreen'
          >
            Tailwind CSS
          </a>
          , deployed with{' '}
          <a
            href='https://vercel.com/'
            className='font-semibold text-customWhite hover:text-customGreen'
          >
            Vercel
          </a>
          . All text is set in the{' '}
          <a
            href='https://fonts.google.com/specimen/Open+Sans'
            className='font-semibold text-customWhite hover:text-customGreen'
          >
            Open Sans
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
