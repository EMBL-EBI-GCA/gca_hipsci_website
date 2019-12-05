/**
 * Injects the Data Protection notice onto sites
 * For guidance on using: https://www.ebi.ac.uk/style-lab/websites/patterns/banner-data-protection.html
 */
function createRetirementBanner() {
  var banner = document.createElement('div');
  var wrapper = document.createElement('div');
  var inner = document.createElement('div');

  // don't accidently create two banners
  if (document.getElementById("retirement_banner") != null) {
    document.getElementById("retirement_banner").remove();
  }

  banner.id = "retirement_banner";
  banner.className = "retirement_banner";
  banner.style.cssText = "position: fixed; background: #111; width: 100%; padding: .75rem 1%; left: 0; bottom: 0; color: #eee; z-index: 1000000;";
  wrapper.className = "row";
  wrapper.innerHTML = "" +
    "<div class='columns medium-8 large-9 white-color'>" +
    retirementSettings.message +
    "</div>" +
    "<div class='columns medium-4 large-3 text-right white-color'><a id='retirement-agree' class=''>Dismiss this notification.</a></div>" +
    "";

  document.body.appendChild(banner);
  banner.appendChild(wrapper);

  trackRetirementBanner();

  openRetirementBanner();
}

/**
 * Log acceptance of banner, if GA is set and using EBIFoundationExtend
 *
 */
function trackRetirementBanner() {
  var bannerTrackingEventLoadNum = 0; // has the tracking coad loaded?
  if ((typeof analyticsTrackInteractions == 'function') && (typeof jQuery == 'function')) {
    if (jQuery("body").hasClass("google-analytics-loaded")) {
      bannerTrackingEventLoadNum = 1;
      jQuery("body.google-analytics-loaded .retirement_banner a").on('mousedown', function(e) {
        analyticsTrackInteractions(e.target,'Retirement banner');
      });
    } else {
      bannerTrackingEventLoadNum = frameworkRetryTrackRetirementBanner(bannerTrackingEventLoadNum);
    }
  } else {
    bannerTrackingEventLoadNum = frameworkRetryTrackRetirementBanner(bannerTrackingEventLoadNum);
  }
}

/**
 * Give a second for banner checking if GA was slow to load
 *
 */
function frameworkRetryTrackRetirementBanner(bannerTrackingEventLoadNum) {
  bannerTrackingEventLoadNum --;
  if (bannerTrackingEventLoadNum > -3) { // try up to 3 fails
    setTimeout(trackRetirementBanner, 900);
  }
  return bannerTrackingEventLoadNum;
}

/**
 * Shows the Retirement banner on screen.
 */
function openRetirementBanner() {
  var height = document.getElementById('retirement_banner').offsetHeight || 0;
  document.getElementById('retirement_banner').style.display = 'block';
  document.body.style.paddingBottom = height+'px';

  document.getElementById('retirement-agree').onclick = function() {
    closeRetirementBanner();
    return false;
  };
}

/**
 * Hides the Retirement banner from the screen.
 */
function closeRetirementBanner() {
  var height = document.getElementById('retirement_banner').offsetHeight;
  document.getElementById('retirement_banner').style.display = 'none';
  document.body.style.paddingBottom = '0';
  retirmentFrameworkSetCookie(retirementSettings.cookieName, 'true', 90);
}

function retirmentFrameworkSetCookie(c_name, value, exdays) {
  var exdate = new Date();
  var c_value;
  exdate.setDate(exdate.getDate() + exdays);
  // c_value = escape(value) + ((exdays===null) ? "" : ";expires=" + exdate.toUTCString()) + ";domain=.ebi.ac.uk;path=/";
  // document.cookie = c_name + "=" + c_value;
  c_value = escape(value) + ((exdays===null) ? "" : ";expires=" + exdate.toUTCString()) + ";domain=" + document.domain + ";path=/";
  document.cookie = c_name + "=" + c_value;
}

function retirmentFrameworkGetCookie(c_name) {
  var i, x, y, ARRcookies=document.cookie.split(";");
  for (i=0; i<ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x = x.replace(/^\s+|\s+$/g,"");
    if (x===c_name) {
      return unescape(y);
    }
  }
}

var retirementSettings =  new Object();

/**
 * The main 'brain' of the EBI Retirement banner.
 * Further documentation at https://www.ebi.ac.uk/style-lab/websites/patterns/banner-data-protection.html
 * @param {string} [targetFrameworkVersion=generic] targeted Framework version; options: 1.1, 1.2, 1.3, compliance, other
 */
function retirementBanner(targetFrameworkVersion) {
  try {

    if (typeof newBaner !== "undefined") {
      targetFrameworkVersion = newBaner.src.split('legacyRequest=')[1] || 'generic';
    }

    var compatibilityStyles = document.createElement('style');
    compatibilityStyles.innerHTML = `
      #ret_cookie-banner {
        display: none;
      }
      .retirement_banner {
        box-sizing: border-box;
      }
      .retirement_banner a,
      .retirement_banner a:hover {
        cursor: pointer;
        color: #fff;
        border-bottom-width: 1px;
        border-bottom-style: dotted;
        border-bottom-color: inherit;
        text-decoration: none;
      }
      .retirement_banner .medium-8 {
        width: 75%; margin-left: 1%; float: left;
      }
      .retirement_banner .medium-4 {
        width: 23%; margin-right: 1%; float: right; text-align: right;
      }
    `;

    // remove any old style cookie banner
    switch (targetFrameworkVersion) {
      case '1.1':
      case '1.2':
        if (document.getElementById("ret_cookie-banner") != null) {
          document.getElementById("ret_cookie-banner").remove();
        }
        document.body.style.paddingBottom = 0;
        break;
      case '1.3':
        // cookie banner really shouldn't be here, but just in case
        if (document.getElementById("ret_cookie-banner") != null) {
          document.getElementById("ret_cookie-banner").remove();
        }
        break;
      case 'compliance':
        if (document.getElementById("ret_cookie-banner") != null) {
          document.getElementById("ret_cookie-banner").remove();
        }
        document.body.style.paddingTop = 0;
        document.body.appendChild(compatibilityStyles);
        break;
      case 'other':
        // If you're not using any fomally supported framework, we'll do our best to help out
        document.body.appendChild(compatibilityStyles);
        break;
      default:
        console.warn('You should specify the targeted FrameworkVersion (allowed values: 1.1, 1.2, 1.3, compliance, other). You sent: ' + targetFrameworkVersion);
    }

    // Default global values
    retirementSettings.message = 'The HipSci website will be decommissioned on 30th March 2020.';
    retirementSettings.serviceId = 'embl-ebi-public-website'; // use the URL stub from your DP record at http://content.ebi.ac.uk/list-data-protection-records
    retirementSettings.dataProtectionVersion = '1.0';

    // If there's a div#retirment-message-configuration, override defaults
    var divRetirementBanner = document.getElementById('retirment-message-configuration');
    if (divRetirementBanner !== null) {
      if (typeof divRetirementBanner.dataset.message !== "undefined") {
        retirementSettings.message = divRetirementBanner.dataset.message;
      }
      if (typeof divRetirementBanner.dataset.serviceId !== "undefined") {
        retirementSettings.serviceId = divRetirementBanner.dataset.serviceId;
      }
      if (typeof divRetirementBanner.dataset.dataProtectionVersion !== "undefined") {
        retirementSettings.dataProtectionVersion = divRetirementBanner.dataset.dataProtectionVersion;
      }
    }

    retirementSettings.cookieName = retirementSettings.serviceId + "-v" + retirementSettings.dataProtectionVersion + "-data-protection-accepted";

    // If this version of banner not accpeted, show it:
    if (retirmentFrameworkGetCookie(retirementSettings.cookieName) != "true") {
      createRetirementBanner();
    }

  } catch(err) { setTimeout(retirementBanner, 100); }
}

/**
 * Clear the cooke. This is mostly a development tool.
 */
function resetRetirementBanner() {
  document.cookie = retirementSettings.cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=" + document.domain + ";path=/";
  retirementBanner('1.3');
}

/**
 * Fallback for any code that was directly calling the old cookie banner:
 * https://github.com/ebiwd/EBI-Framework/blob/6707eff40e15036f735637413deed0dcb7392818/js/ebi-global-includes/script/5_retirementCookieBanner.js
 */
function retirementCookieBanner() {
  console.warn('You are calling an old function name, update it to retirementBanner();')
  retirementBanner('1.3');
}

// execute
// retirementBanner('1.3');