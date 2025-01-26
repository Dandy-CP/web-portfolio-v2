import type { MetaFunction } from '@remix-run/node';
import { Footer, SideContent } from '~/components/layout';
import { About, Experience, Projects } from '~/components/modules/home';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dandy Candra' },
    { name: 'Personal Website', content: 'Personal Website Portfolio' },
  ];
};

export default function Index() {
  return (
    <div className='flex h-full w-full px-40 phone:flex-col phone:px-3 tablet:flex-col tablet:px-10 desktop:px-10'>
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
  );
}
