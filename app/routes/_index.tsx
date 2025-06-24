import { useRef } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Footer, SideContent } from '~/components/layout';
import { About, Experience, Projects } from '~/components/modules/home';
import { CursorGradient } from '~/components/partials';
import { useMousePosition } from '~/hooks';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dandy Candra' },
    {
      name: 'Dandy Candra Personal Website',
      content:
        'Dandy Candra Software Developer - I build things for the web and mobile, producing scalable, modular and easy to manage applications',
    },
  ];
};

export default function Index() {
  const divRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition({ ref: divRef });

  return (
    <div className='relative' ref={divRef}>
      <CursorGradient
        mousePositionX={mousePosition.x}
        mousePositionY={mousePosition.y}
      />

      <div className='flex min-h-screen w-full gap-14 px-40 phone:flex-col phone:gap-0 phone:px-3 tablet:flex-col tablet:gap-0 tablet:px-10 desktop:px-10'>
        <div className='sticky top-0 max-h-screen w-2/5 py-24 phone:relative phone:w-full phone:py-10 tablet:relative tablet:w-full tablet:py-10'>
          <SideContent />
        </div>

        <div className='w-7/12 py-24 phone:w-full phone:py-0 tablet:w-full tablet:py-0'>
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
