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

// We are only using some of the icons
library.add(fab.faFacebookF);
library.add(fab.faGooglePlusG);
library.add(fab.faInstagram);
library.add(fab.faLinkedinIn);
library.add(fab.faTwitter);

library.add(fal.faTimes);
library.add(fal.faMinus);
library.add(fal.faPlus);

library.add(far.faBars);
library.add(far.faCheckCircle);
library.add(far.faExclamationCircle);
library.add(far.faInfoCircle);
library.add(far.faFileInvoiceDollar);
library.add(far.faLockOpenAlt);
library.add(far.faQuestionCircle);
library.add(far.faRulerCombined);
library.add(far.faSearch);
library.add(far.faTimes);
library.add(far.faUser);
library.add(far.faWeightHanging);
library.add(far.faChevronDown);
library.add(far.faChevronLeft);
library.add(far.faChevronRight);
library.add(far.faChevronUp);
library.add(far.faArrowAltToBottom);
library.add(far.faArrowsAltH);
library.add(far.faArrowSquareLeft);
library.add(far.faArrowLeft);
library.add(far.faArrowRight);
library.add(far.faArrowUp);
library.add(far.faArrowDown);
library.add(far.faBell);
library.add(far.faFile);
library.add(far.faFilePdf);
library.add(far.faPrint);
library.add(far.faWandMagicSparkles);
library.add(fas.faArchive);
library.add(fas.faArrowAltToBottom);
library.add(fas.faArrowsAltH);
library.add(fas.faArrowSquareLeft);
library.add(fas.faArrowLeft);
library.add(fas.faArrowRight);
library.add(fas.faArrowUp);
library.add(fas.faArrowDown);
library.add(fas.faAt);
library.add(fas.faAward);
library.add(fas.faBarcodeAlt);
library.add(fas.faBars);
library.add(fas.faBox);
library.add(fas.faBoxCheck);
library.add(fas.faBoxOpen);
library.add(fas.faBullseyeArrow);
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
library.add(fas.faCogs);
library.add(fas.faComments);
library.add(fas.faCommentsAlt);
library.add(fas.faCreditCard);
library.add(fas.faDesktop);
library.add(fas.faDotCircle);
library.add(fas.faEdit);
library.add(fas.faEnvelope);
library.add(fas.faEnvelopeOpen);
library.add(fas.faExchangeAlt);
library.add(fas.faExclamation);
library.add(fas.faExclamationCircle);
library.add(fas.faExclamationSquare);
library.add(fas.faExclamationTriangle);
library.add(fas.faEye);
library.add(fas.faFile);
library.add(fas.faFileUpload);
library.add(fas.faFlag);
library.add(fas.faFolder);
library.add(fas.faGlobe);
library.add(fas.faHome);
library.add(fas.faImage);
library.add(fas.faInfo);
library.add(fas.faInfoCircle);
library.add(fas.faInfoSquare);
library.add(fas.faKey);
library.add(fas.faLocationArrow);
library.add(fas.faLock);
library.add(fas.faMapMarkerAlt);
library.add(fas.faMinus);
library.add(fas.faMobile);
library.add(fas.faPaperclip);
library.add(fas.faPaperPlane);
library.add(fas.faPaste);
library.add(fas.faPauseCircle);
library.add(fas.faPencil);
library.add(fas.faPersonDolly);
library.add(fas.faPhone);
library.add(fas.faPlay);
library.add(fas.faPlus);
library.add(fas.faQuestionCircle);
library.add(fas.faQuestionSquare);
library.add(fas.faReply);
library.add(fas.faSearch);
library.add(fas.faShieldAlt);
library.add(fas.faShippingFast);
library.add(fas.faShoppingCart);
library.add(fas.faSpinnerThird);
library.add(fas.faStar);
library.add(fas.faStoreAlt);
library.add(fas.faSyncAlt);
library.add(fas.faTimes);
library.add(fas.faTimesCircle);
library.add(fas.faTrashAlt);
library.add(fas.faUnlock);
library.add(fas.faUser);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
