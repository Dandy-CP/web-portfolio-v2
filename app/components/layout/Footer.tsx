import { Sribu, Fastwork } from '~/components/partials/SVG';

const Footer = () => {
  return (
    <div className='mt-40 w-[400px] phone:mb-10 phone:w-full tablet:mb-10'>
      <div className='mb-3 flex flex-row items-center gap-5'>
        <a
          href='https://www.sribu.com/id/users/dandycandra'
          target='_blank'
          rel='noreferrer'
        >
          <Sribu />
        </a>

        <a
          href='https://fastwork.id/user/dandycp'
          target='_blank'
          rel='noreferrer'
        >
          <Fastwork />
        </a>
      </div>

      <div className='w-full'>
        <p className='text-sm font-light text-customSlate'>
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
