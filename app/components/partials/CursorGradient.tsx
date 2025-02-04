interface Props {
  mousePositionX: number;
  mousePositionY: number;
}

const CursorGradient = ({ mousePositionY, mousePositionX }: Props) => {
  return (
    <div
      className='pointer-events-none absolute inset-0 z-30 transition duration-300'
      style={{
        background: `radial-gradient(600px at ${mousePositionX}px ${mousePositionY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default CursorGradient;
