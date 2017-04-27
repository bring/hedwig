/* global window */

import qa from '../../utilities/js/qa';
import q from '../../utilities/js/q';

/**
 * @function HWCard
 * @version 0.0.1
 * @desc Controls character count of card contents
 * @param {object} settings
 */
const HWCard = ({
    cardSelector = '.hw-card',
    maxCharacters = 90,
  } = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(cardSelector), // All card DOM nodes
  };

  /**
   * @function init
   * @desc Initialises the card controller
   */
  function init() {
    // Check if any accordions exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all accordions and initialise each
    SETTINGS.elements.forEach((card) => {
      // Skip if already initialised
      if (card.getAttribute('data-hw-card-initialised') === 'true') { return false; }

      // Mark as initialised
      card.setAttribute('data-hw-card-initialised', true);

      // Check if text exceeds max length
      const cardTextEl = q('.hw-card__text', card);
      const cartText = cardTextEl.textContent.trim();

      if (cartText.length > maxCharacters) {
        const newText = cartText.slice(0, maxCharacters - 3);
        cardTextEl.textContent = `${newText}...`;
      }
    });
  }


  // Initialise HWCard component
  init();
};

HWCard();
