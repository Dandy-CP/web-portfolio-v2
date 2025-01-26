import { handleSmoothScroll } from '~/utils';

interface NavigationProps {
  label: string;
  tag: string;
  activeTag: string;
}

const Navigation = ({ label, tag, activeTag }: NavigationProps) => {
  const isTagVisible = activeTag === tag.split('#')[1];

  return (
    <li>
      <button
        className='group flex items-center py-3'
        onClick={() => handleSmoothScroll(tag)}
      >
        <span
          className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${isTagVisible ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}
        ></span>
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${isTagVisible ? 'text-slate-200' : 'text-slate-500'}`}
        >
          {label}
        </span>
      </button>
    </li>
  );
};

export default Navigation;
