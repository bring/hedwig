import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';
const HWTab = ({
  tabSelector = '.hw-tab',
  selectedClass = 'hw-tab__item--selected',
  itemSelector = '.hw-tab__item',
  markerSelector = '.hw-tab__marker'
} = {}) => {
  // Module settings object
  const SETTINGS = {
    tab: q(tabSelector),
    items: qa(itemSelector),
    marker: q(markerSelector)
  };


  function clickItem(e) {
    //If e.target is an element within an hw-tab__item, find the surrounding hw-tab__item
    const clickedItem = findParent({ selector: itemSelector, elem: e.target });
    if(clickedItem.classList.contains(selectedClass)){
      //Already selected, don't do anything
      return;
    }

    moveMarkerTo(clickedItem);

    // Toggle selected class
    SETTINGS.items.forEach((item) => {
      if (item.classList.contains(selectedClass)) {
        item.classList.remove(selectedClass);
      }
    });
    clickedItem.classList.add(selectedClass);
  }

  function moveMarkerTo(item){
    var itemProperties = item.getBoundingClientRect();
    var left = itemProperties.x - SETTINGS.tab.getBoundingClientRect().x + SETTINGS.tab.scrollLeft;
    SETTINGS.marker.style.left = left + 'px';
    SETTINGS.marker.style.width = itemProperties.width + 'px';
  }


  function init() {
    if (!SETTINGS.tab || !SETTINGS.marker) {
      return;
    }

    SETTINGS.items.forEach((item) => {
      // Attach event listener
      item.addEventListener('click', clickItem);
      if(item.classList.contains(selectedClass)){
        // Save transition, remove it, move marker and restore transition
        var existingTransition = SETTINGS.marker.style.transition;
        SETTINGS.marker.style.transition = 'none';
        moveMarkerTo(item);
        SETTINGS.marker.style.transition = existingTransition;
      }
      /**
       * Hide the border for the selected item when using this script. Use marker instead to show the sliding marker
       * When this script is not in use, only show the border below the selected item
       */
      item.style.borderColor = 'transparent';
    });

  }
    init();
};
HWTab();

export function HWTab_adjustMarker(){
  const tab = q('.hw-tab');
  const marker = q('.hw-tab__marker');
  const itemProperties = q('.hw-tab__item--selected').getBoundingClientRect();
  const left = itemProperties.x - tab.getBoundingClientRect().x + tab.scrollLeft;
  marker.style.left = left + 'px';
  marker.style.width = itemProperties.width + 'px';
}
