const handleSmoothScroll = (IDtag: string) => {
  const targetId = IDtag.replace(/.*#/, '');
  const element = document.getElementById(targetId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export default handleSmoothScroll;
