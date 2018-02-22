import throttle from 'lodash/throttle';
import Tablesort from './table-sort';
import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';

/**
 * @function HWTable
 * @version 0.0.1
 * @desc
 * @param {object} settings
 */
const HWTable = ({ tableSelector = '[data-hw-table]' } = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(tableSelector), // All module DOM nodes
  };

  /**
   * @function scrollHeader
   * @desc Scroll the header when table body is scrolled
   * @param {node} table
   */

  function scrollHeader(e, headersFixedLeft, topHeader) {
    const scrollPosition = e.target.scrollLeft;

    topHeader.scrollLeft = scrollPosition;
    headersFixedLeft.forEach((head) => {
      head.style.transform = `translateX(${scrollPosition}px)`;
    });
  }

  /**
   * @function setSize
   * @desc Scroll the header when table body is scrolled
   * @param {node} table
   */

  function setSize(table) {
    const tHeader = table.tHead;
    const tBody = table.tBodies[0];
    const tHeads = qa('th', tHeader);
    const tRows = qa('tr', tBody);

    // Set padding on body to height of fixed header
    tBody.style.paddingTop = `${tHeader.offsetHeight}px`;

    // Find width of each table header and set every table column the same width
    tHeads.forEach((head, headerIndex) => {
      const headerWidth = head.offsetWidth;
      head.style.width = `${headerWidth}px`;

      tRows.forEach(row => {
        const columns = [...qa('td', row)];
        columns[headerIndex].style.width = `${headerWidth}px`;
      });
    });
  }

  /**
   * @function bindEvents
   * @desc Adds listener to the table
   * @param {node} table
   */

  function bindEvents(table) {
    const topHeader = table.querySelector('thead');
    const headersFixedLeft = [...qa('[data-hw-table-fixed-left]', table)];

    table.addEventListener('scroll', (e) => {
      scrollHeader(e, headersFixedLeft, topHeader);
    });
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
      if (table.getAttribute('data-hw-table-initialised') === 'true') {
        return false;
      }

      // Mark as initialised
      table.setAttribute('data-hw-table-initialised', true);

      setSize(table);

      bindEvents(table);

      // Create a new table instance
      const newTable = new Tablesort(table);
    });
  }

  // Initialise HWTable component
  init();
};

HWTable();
