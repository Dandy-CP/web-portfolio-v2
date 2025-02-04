import { useState, useEffect } from 'react';

interface Props {
  ref: React.RefObject<HTMLDivElement>;
}

const useMousePosition = ({ ref }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();

      if (rect) {
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mousePosition;
};

export default useMousePosition;
