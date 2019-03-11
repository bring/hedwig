import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';
import horizontalScroll from '../../utilities/js/horizontalScroll';

const HWTab = ({
  tabSelector = '.hw-tab',
  selectedClass = 'hw-tab__item--selected',
  itemSelector = '.hw-tab__item',
  markerSelector = '.hw-tab__marker',
  initClass = 'hw-tab__initialized'
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
      item.classList.remove(selectedClass);
    });
    clickedItem.classList.add(selectedClass);
  }

  function moveMarkerTo(item){
    var itemProperties = item.getBoundingClientRect();
    var left = itemProperties.left - SETTINGS.tab.getBoundingClientRect().left + SETTINGS.tab.scrollLeft;
    SETTINGS.marker.style.left = left + 'px';
    SETTINGS.marker.style.width = itemProperties.width + 'px';
    const offset = item.offsetLeft - (SETTINGS.tab.clientWidth / 2) + (item.clientWidth / 2);
    horizontalScroll(SETTINGS.tab, offset);
  }


  function init() {
    // Don't initialize when already initialized
    if (!SETTINGS.tab || !SETTINGS.marker || SETTINGS.tab.classList.contains(initClass)) {
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
    // Mark this Tab as initialized
    SETTINGS.tab.classList.add(initClass);
  }
  init();
};
HWTab();

export function HWTab_adjustMarker(){
  const tab = q('.hw-tab');
  const marker = q('.hw-tab__marker');
  const itemProperties = q('.hw-tab__item--selected').getBoundingClientRect();
  const left = itemProperties.left - tab.getBoundingClientRect().left + tab.scrollLeft;
  marker.style.left = left + 'px';
  marker.style.width = itemProperties.width + 'px';
}
