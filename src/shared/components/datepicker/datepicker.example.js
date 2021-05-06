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
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i) || typeof(Pikaday)== "undefined") {
      SETTINGS.elements.forEach(element => {
        const _dateInput = [].slice.call(element.querySelectorAll("input"))[0];
        if (_dateInput) {
          _dateInput.parentElement.classList.add("hw-datepicker__native");
          _dateInput.type = "date";
          _dateInput.removeAttribute("readonly");
        }
      });
    } else {
      SETTINGS.elements.forEach(element => {
        const _dpContainer = [].slice.call(element.querySelectorAll(".hw-datepicker__inner"))[0];
        if(!_dpContainer.dataset.initialized){
          _dpContainer.dataset.initialized = true;
          var picker2 = new Pikaday({
                container: _dpContainer,
                field: _dpContainer.querySelector('input[type="text"]'),
          });
        }
      });
    }
  }

  init();
};

HWDatepicker();
