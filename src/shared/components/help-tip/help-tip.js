import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';

/**
 * @function HWHelptip
 * @version 0.0.1
 * @desc Creates interactive helptip from ul
 * @param {object} settings
 */
const HWHelptip = ({
  helptipWrapper = '.hw-help-tip .hw-help-tip__wrapper',
  helptipContent = '.hw-help-tip__content',
} = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(helptipWrapper), // All helptip wrapper DOM nodes
  };


  /**
   * @function setPosition
   * @desc Set position of all the content Nodes
   */
  function setPosition() {
    // Check if any helptip exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all helptip and initialise each
    SETTINGS.elements.forEach((helptip) => {
      const posFromLeft = helptip.getBoundingClientRect().right;
      const posFromRight = window.innerWidth - posFromLeft;
      const htContent = q(helptipContent, helptip);
      let alignPos = "";
      if (window.innerWidth < 375) {
        alignPos = "CENTER";
      } else {
        if (posFromLeft < 180) {
          alignPos = posFromRight > 280 ? "LEFT" : "RIGHT";
        }
        if (posFromRight < 180) {
          alignPos = posFromLeft > 280 ? "RIGHT" : "LEFT";
        }
      }
      switch(alignPos){
        case "RIGHT": htContent.style["right"] = (-1 * posFromRight + 13) + "px";
        break;
        case "LEFT": htContent.style["right"] = "-270px";
        break;
        case "CENTER": htContent.style["right"] = (-1 * posFromRight + Math.max(Math.ceil((window.innerWidth - 300)/2), 1)) + "px";
        break;
        default: htContent.removeAttribute("style");
      }
    });
    return null;
  }

  /**
   * @param {function} func 
   * @param {time} wait 
   * @param {boolean} immediate 
   * @desc This function is optimise the number of calls made a function
   */
  function debounce(func, wait, immediate) {
    var timeout;
    return () => {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  /**
   * @desc Handles resetting positions of help tip contents in the page
   */
  const resetPosition = debounce(setPosition, 1000, false);

  //Resize event to get the new sizes
  window.addEventListener("resize", resetPosition);

  // Initialise HWHelptip component
  window.addEventListener("load", setPosition);
};

HWHelptip();