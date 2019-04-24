const HWDatepicker = ({
  selector = '.hw-datepicker'
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: [].slice.call(document.querySelectorAll(selector)) // All datepicker DOM nodes
  };

  /**
   * Attach Pikaday if not on Mobile OS
   */
  function init() {
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i)) {
      SETTINGS.elements.forEach(element => {
        const _dateInput = [].slice.call(element.querySelectorAll("input"))[0];
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
        const _dpContainer = [].slice.call(element.querySelectorAll(".hw-datepicker__inner"))[0];
        _dpContainer.dataset.initialized = true;
        var picker2 = new Pikaday({
          container: _dpContainer,
          field: _dpContainer.querySelector('input[type="text"]'),
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