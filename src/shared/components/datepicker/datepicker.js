import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';

const HWDatepicker = ({
  selector = '.hw-datepicker'
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(selector) // All datepicker DOM nodes
  };

  function init() {
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i)
    ) {
      SETTINGS.elements.forEach(element => {
        const _dateInput = q("input", element);
        if (_dateInput) {
          _dateInput.parentElement.classList.add("hw-datepicker__native");
          _dateInput.type = "date";
          _dateInput.removeAttribute("readonly");
          _dateInput.addEventListener("focus", toggleInputType);
          _dateInput.addEventListener("blur", toggleInputType);
        }
      });
    } else {
      SETTINGS.elements.forEach(element => {
        const _dpContainer = q(".hw-datepicker__inner", element);
        _dpContainer.dataset.initialized = true;
        var picker2 = new Pikaday({
          container: _dpContainer,
          field: _dpContainer.querySelector('input'),
        });
      });
    }
  }

  /**
   * Method to handle placeholder when native datepicker is used
   * @param {eventParam} e 
   */
  function toggleInputType(e) {
    const _selParent = e.target.parentElement;
    if (!e.target.value && e.type == "focus") {
      _selParent.classList.remove("hw-datepicker__native");
    }
    if (!e.target.value && e.type == "blur") {
      _selParent.classList.add("hw-datepicker__native");
    }
  }

  init();
};

HWDatepicker();