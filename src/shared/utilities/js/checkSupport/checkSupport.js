/**
 * @function checkSupport
 * @desc Removes the 'no-js' class from the html element if js is supported
 */
const checkSupport = () => {
  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
};

export default checkSupport;
