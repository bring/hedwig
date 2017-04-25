const checkSupport = () => {
  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
};

export default checkSupport;
