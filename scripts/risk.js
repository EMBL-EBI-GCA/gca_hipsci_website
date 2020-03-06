function createRiskBanner() {
  var banner = document.createElement('div');
  var wrapper = document.createElement('div');
  var inner = document.createElement('div');

  if (document.getElementById("risk_banner") != null) {
    document.getElementById("risk_banner").remove();
  }

  banner.id = "risk_banner";
  banner.className = "risk_banner";
  // banner.style.cssText = "position: fixed; background: #111; width: 100%; padding: .75rem 1%; left: 0; bottom: 0; color: #eee; z-index: 10;";
  banner.style.cssText = "position: absolute; width: 100%; top: 62px; background: #c7c7c7; color:#111; padding: 5px 10px 5px 10px;";
  wrapper.className = "row";
  wrapper.innerHTML = "" +
    "<div class='columns medium-8 large-9 white-color'>" +
    riskSettings.message +
    "</div>" +
    "<div class='columns medium-4 large-3 text-right white-color'><a id='risk-agree' class=''>Dismiss this notification.</a></div>" +
    "";

  document.body.appendChild(banner);
  banner.appendChild(wrapper);

  trackRiskBanner();

  openRiskBanner();
}


function trackRiskBanner() {
  var bannerTrackingEventLoadNum = 0;
  if ((typeof analyticsTrackInteractions == 'function') && (typeof jQuery == 'function')) {
    if (jQuery("body").hasClass("google-analytics-loaded")) {
      bannerTrackingEventLoadNum = 1;
      jQuery("body.google-analytics-loaded .risk_banner a").on('mousedown', function(e) {
        analyticsTrackInteractions(e.target,'Risk banner');
      });
    } else {
      bannerTrackingEventLoadNum = frameworkRetryTrackRiskBanner(bannerTrackingEventLoadNum);
    }
  } else {
    bannerTrackingEventLoadNum = frameworkRetryTrackRiskBanner(bannerTrackingEventLoadNum);
  }
}


function frameworkRetryTrackRiskBanner(bannerTrackingEventLoadNum) {
  bannerTrackingEventLoadNum --;
  if (bannerTrackingEventLoadNum > -3) {
    setTimeout(trackRiskBanner, 900);
  }
  return bannerTrackingEventLoadNum;
}


function openRiskBanner() {
  var height = document.getElementById('risk_banner').offsetHeight || 0;
  document.getElementById('risk_banner').style.display = 'block';
  document.body.style.paddingBottom = height+'px';

  document.getElementById('risk-agree').onclick = function() {
    closeRiskBanner();
    return false;
  };
}


function closeRiskBanner() {
  var height = document.getElementById('risk_banner').offsetHeight;
  document.getElementById('risk_banner').style.display = 'none';
  document.body.style.paddingBottom = '0';
  riskFrameworkSetCookie(riskSettings.cookieName, 'true', 7);
}


function riskFrameworkSetCookie(c_name, value, exdays) {
  var exdate = new Date();
  var c_value;
  exdate.setDate(exdate.getDate() + exdays);
  c_value = escape(value) + ((exdays===null) ? "" : ";expires=" + exdate.toUTCString()) + ";domain=" + document.domain + ";path=/";
  document.cookie = c_name + "=" + c_value;
}

function riskFrameworkGetCookie(c_name) {
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

var riskSettings =  new Object();


function riskBanner(targetFrameworkVersion) {
  try {

    if (typeof newBaner !== "undefined") {
      targetFrameworkVersion = newBaner.src.split('legacyRequest=')[1] || 'generic';
    }

    var compatibilityStyles = document.createElement('style');
    compatibilityStyles.innerHTML = `
      #ret_cookie-banner {
        display: none;
      }
      .risk_banner {
        box-sizing: border-box;
      }
      .risk_banner a,
      .risk_banner a:hover {
        cursor: pointer;
        color: #fff;
        border-bottom-width: 1px;
        border-bottom-style: dotted;
        border-bottom-color: inherit;
        text-decoration: none;
      }
      .risk_banner .medium-8 {
        width: 75%; margin-left: 1%; float: left;
      }
      .risk_banner .medium-4 {
        width: 23%; margin-right: 1%; float: right; text-align: right;
      }
    `;


    riskSettings.message = 'The HipSci website will be decommissioned on 30th March 2020.';
    riskSettings.serviceId = 'Hipsci-website'; // change this
    riskSettings.dataProtectionVersion = '1.0';

    var divRiskBanner = document.getElementById('risk-message-configuration');
    if (divRiskBanner !== null) {
      if (typeof divRiskBanner.dataset.message !== "undefined") {
        riskSettings.message = divRiskBanner.dataset.message;
      }
      if (typeof divRiskBanner.dataset.serviceId !== "undefined") {
        riskSettings.serviceId = divRiskBanner.dataset.serviceId;
      }
      if (typeof divRiskBanner.dataset.dataProtectionVersion !== "undefined") {
        riskSettings.dataProtectionVersion = divRiskBanner.dataset.dataProtectionVersion;
      }
    }

    riskSettings.cookieName = riskSettings.serviceId + "-v" + riskSettings.dataProtectionVersion + "-data-protection-accepted";

    if (riskFrameworkGetCookie(riskSettings.cookieName) != "true") {
      createRiskBanner();
    }

  } catch(err) { setTimeout(riskBanner, 100); }
}


function resetRiskBanner() {
  document.cookie = riskSettings.cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=" + document.domain + ";path=/";
  riskBanner('1.3');
}


function riskCookieBanner() {
  console.warn('You are calling an old function name, update it to riskBanner();')
  riskBanner('1.3');
}