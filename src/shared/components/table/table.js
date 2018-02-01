import Tablesort from './table-sort';
import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';

/**
 * @function HWTable
 * @version 0.0.1
 * @desc
 * @param {object} settings
 */
const HWTable = ({
    tableSelector = '[data-hw-table]',
  } = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(tableSelector), // All module DOM nodes
  };

  /**
   * @function scrollHeader
   * @desc Scroll the header when table body is scrolled
   * @param {node} table
   */

  function scrollHeader(e, table) {
    const tableHead = table.tHead;
    const scrollPosition = e.target.scrollLeft;
    tableHead.scrollTo(scrollPosition, 0);
  }

/**
 * @function bindEvents
 * @desc Adds listener to the table
 * @param {node} table
 */

  function bindEvents(table) {
    table.tBodies[0].addEventListener('scroll', e => scrollHeader(e, table));
  }

  /**
   * @function init
   * @desc Initialises the module
   */
  function init() {
    // Check if any modules exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }
    // Loop through all modules and initialise each
    SETTINGS.elements.forEach((table, index) => {
      // Skip if already initialised
      if (table.getAttribute('data-hw-table-initialised') === 'true') { return false; }

      // Mark as initialised
      table.setAttribute('data-hw-table-initialised', true);

      const tableHeight = table.getAttribute('data-hw-table-height');

      if (tableHeight) {
        table.tBodies[0].style.height = `${tableHeight}px`;
      }

      bindEvents(table);

      // Create a new table instance
      const newTable = new Tablesort(table);
    });
  }


  // Initialise HWTable component
  init();
};

HWTable();
