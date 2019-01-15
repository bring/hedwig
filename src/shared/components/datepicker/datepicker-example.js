const datepickerWrapper = document.getElementById('datepicker-ajsd4ks8');
if(datepickerWrapper && !datepickerWrapper.dataset.initialized) {
  datepickerWrapper.dataset.initialized = true;
  var picker = new Pikaday({
    container: datepickerWrapper,
    field: datepickerWrapper.querySelector('input'),
  });
};

const datepickerWrapper2 = document.getElementById('datepicker-ajsd4ks9');
if(datepickerWrapper2 && !datepickerWrapper2.dataset.initialized) {
  datepickerWrapper2.dataset.initialized = true;
  var picker2 = new Pikaday({
    container: datepickerWrapper2,
    field: datepickerWrapper2.querySelector('input'),
  });
};
