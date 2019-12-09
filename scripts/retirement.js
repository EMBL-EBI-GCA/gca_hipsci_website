
function createRetirementBanner() {
  var banner = document.createElement('div');
  var wrapper = document.createElement('div');
  var inner = document.createElement('div');

  if (document.getElementById("retirement_banner") != null) {
    document.getElementById("retirement_banner").remove();
  }

  banner.id = "retirement_banner";
  banner.className = "retirement_banner";
  // banner.style.cssText = "position: fixed; background: #111; width: 100%; padding: .75rem 1%; left: 0; bottom: 0; color: #eee; z-index: 10;";
  banner.style.cssText = "position: absolute; width: 100%; top: 62px; background: #c7c7c7; color:#111; padding: 5px 10px 5px 10px;";
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


function trackRetirementBanner() {
  var bannerTrackingEventLoadNum = 0;
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


function frameworkRetryTrackRetirementBanner(bannerTrackingEventLoadNum) {
  bannerTrackingEventLoadNum --;
  if (bannerTrackingEventLoadNum > -3) {
    setTimeout(trackRetirementBanner, 900);
  }
  return bannerTrackingEventLoadNum;
}


function openRetirementBanner() {
  var height = document.getElementById('retirement_banner').offsetHeight || 0;
  document.getElementById('retirement_banner').style.display = 'block';
  document.body.style.paddingBottom = height+'px';

  document.getElementById('retirement-agree').onclick = function() {
    closeRetirementBanner();
    return false;
  };
}


function closeRetirementBanner() {
  var height = document.getElementById('retirement_banner').offsetHeight;
  document.getElementById('retirement_banner').style.display = 'none';
  document.body.style.paddingBottom = '0';
  retirmentFrameworkSetCookie(retirementSettings.cookieName, 'true', 7);
}


function retirmentFrameworkSetCookie(c_name, value, exdays) {
  var exdate = new Date();
  var c_value;
  exdate.setDate(exdate.getDate() + exdays);
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


    retirementSettings.message = 'The HipSci website will be decommissioned on 30th March 2020.';
    retirementSettings.serviceId = 'Hipsci-website'; // change this
    retirementSettings.dataProtectionVersion = '1.0';

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

    if (retirmentFrameworkGetCookie(retirementSettings.cookieName) != "true") {
      createRetirementBanner();
    }

  } catch(err) { setTimeout(retirementBanner, 100); }
}


function resetRetirementBanner() {
  document.cookie = retirementSettings.cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=" + document.domain + ";path=/";
  retirementBanner('1.3');
}


function retirementCookieBanner() {
  console.warn('You are calling an old function name, update it to retirementBanner();')
  retirementBanner('1.3');
}
