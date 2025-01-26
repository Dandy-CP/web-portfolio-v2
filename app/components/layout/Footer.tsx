const Footer = () => {
  return (
    <div className='mt-40 w-[400px] phone:mb-10 tablet:mb-10'>
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
  );
};

export default Footer;
