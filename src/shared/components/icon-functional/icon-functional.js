import { library, dom, config } from "@fortawesome/fontawesome-svg-core";
import * as fas from "@fortawesome/pro-solid-svg-icons";
import * as far from "@fortawesome/pro-regular-svg-icons";
import * as fal from "@fortawesome/pro-light-svg-icons";
import * as fab from "@fortawesome/free-brands-svg-icons";

/**
 *
 * Documentation from Font Awesome:
 * https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core
 * https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro
 *
 * fas - Font Awesome Solid
 * fab - Font Awesome Brands
 * far - Font Awesome Regular
 */

/** Enable searching through pseudo elements like ::before and ::after for icons
 *  Also see:
 *  - https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements
 *  - https://fontawesome.com/how-to-use/with-the-api/setup/configuration#searchpseudoelements
 */
config.searchPseudoElements = true;

// We are only using the some of the icons
library.add(fas.faAt);
library.add(fas.faArrowsAltH);
library.add(fas.faAward);
library.add(fas.faBarcodeAlt);
library.add(fas.faBars);
library.add(fas.faBox);
library.add(fas.faCalculator);
library.add(fas.faCalendarAlt);
library.add(fas.faCamera);
library.add(fas.faChartLine);
library.add(fas.faCheck);
library.add(fas.faCheckCircle);
library.add(fas.faChevronDown);
library.add(fas.faChevronLeft);
library.add(fas.faChevronRight);
library.add(fas.faChevronUp);
library.add(fas.faClock);
library.add(fas.faCloudDownload);
library.add(fas.faCloudUpload);
library.add(fas.faComments);
library.add(fas.faCommentsAlt);
library.add(fas.faCreditCard);
library.add(fas.faDesktop);
library.add(fas.faDotCircle);
library.add(fas.faEnvelope);
library.add(fas.faEnvelopeOpen);
library.add(fas.faExclamation);
library.add(fas.faExclamationCircle);
library.add(fas.faEye);
library.add(fas.faFile);
library.add(fas.faFlag);
library.add(fas.faFolder);
library.add(fas.faGlobe);
library.add(fas.faHome);
library.add(fas.faInfo);
library.add(fas.faKey);
library.add(fas.faLock);
library.add(fas.faMapMarkerAlt);
library.add(fas.faMinus);
library.add(fas.faMobile);
library.add(fas.faPaperclip);
library.add(fas.faPauseCircle);
library.add(fas.faPlay);
library.add(fas.faPencil);
library.add(fas.faPhone);
library.add(fas.faPlus);
library.add(fas.faQuestionCircle);
library.add(fas.faReply);
library.add(fas.faSearch);
library.add(fas.faShoppingCart);
library.add(fas.faStar);
library.add(fas.faSyncAlt);
library.add(fas.faTimes);
library.add(fas.faTimesCircle);
library.add(fas.faTrashAlt);
library.add(fas.faUnlock);
library.add(fas.faUser);
library.add(fas.faLocationArrow);
library.add(fas.faBoxOpen);

library.add(fab.faFacebookF);
library.add(fab.faGooglePlusG);
library.add(fab.faInstagram);
library.add(fab.faLinkedinIn);
library.add(fab.faTwitter);

library.add(far.faBars);
library.add(far.faLockOpenAlt);
library.add(far.faSearch);
library.add(far.faTimes);
library.add(far.faUser);

library.add(fal.faTimes);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
