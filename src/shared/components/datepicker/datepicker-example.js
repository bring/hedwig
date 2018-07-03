if(document.getElementById('datepicker-ajsd4ks8')) {
  const datepickerWrapper = document.getElementById('datepicker-ajsd4ks8').querySelector('.hw-datepicker__inner');
  var picker = new Pikaday({ 
    container: datepickerWrapper,
    field: datepickerWrapper.querySelector('input'),
  });
};

if(document.getElementById('datepicker-ajsd4ks9')) {
  const datepickerWrapper2 = document.getElementById('datepicker-ajsd4ks9').querySelector('.hw-datepicker__inner');
  var picker2 = new Pikaday({
    container: datepickerWrapper2,
    field: datepickerWrapper2.querySelector('input'),
  });
};
