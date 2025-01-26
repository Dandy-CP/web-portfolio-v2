const About = () => {
  return (
    <section id='about' className='scroll-mt-16'>
      <div className='my-10 hidden phone:mt-0 phone:block tablet:block'>
        <div className='divider divider-start hidden text-xl font-bold phone:flex tablet:flex'>
          Summary
        </div>
      </div>

      <div className='mb-14 phone:mb-0 tablet:mb-0'>
        <p className='text-customSlate'>
          I’m a Software Engineer passionate about crafting accessible,
          pixel-perfect user interfaces that blend thoughtful design with robust
          engineering. My favorite work lies at the intersection of design and
          development, creating experiences that not only look great but are
          meticulously built for performance and usability.
        </p>

        <br />

        <p className='text-customSlate'>
          Experienced in developing Web and Mobile Applications using Tech stack
          TypeScript, React.JS, Next.JS, and React Native. Expertise in
          implementing clean code, producing modular, scalable and easy to
          manage applications.
        </p>
      </div>
    </section>
  );
};

export default About;
