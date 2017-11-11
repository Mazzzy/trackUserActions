/**
 * A pure javascript based plugin
 *
 * Purpose: To track user's behavior events in any given page.
 * It tracks clicks, mouse events, key events, time spent, node (html) click etc. 
 *
 * Developed by: Mazahar S. Shaikh (Github: @Mazzzy | twitter: @mazahar_shaikh)
 */
(function () {
  // namespace to track user behavior
  var trackUser = { };

  // by default initials
  var initials = {
    clickCount: true,
    clickDetails: true,
    mouseMovement: true,
    context: true,
    keyLog: true
  };

  // For processing actions
  initials.actionItem = {
    processOnAction: false,
    selector: '',
    event: ''
  };
  initials.processTime = 15;
  initials.processData = function(endResult){ };

  // For end result - returned tracking JS object
  var endResult = {
    userInfo: {
      appCodeName: navigator.appCodeName || '',
      appName: navigator.appName || '',
      vendor: navigator.vendor || '',
      platform: navigator.platform || '',
      userAgent: navigator.userAgent || ''
    },
    time: {
      totalTime: 0,
      timeOnPage: 0,
    },
    clicks: {
      clickCount:0,
      clickDetails: []
    },
    mouseMovements: [],
    contextChange: [],
    keyLog: [],
  };

  // For supporting feature and settings
  var support = !!document.querySelector && !!document.addEventListener;
  var settings;

  /**
   * Merge initials with options
   * @private
   * @param {Object} default settings
   * @param {Object} user options
   * @returns {Object} merged object
  */
  function getSettings(initials, options){
    var option;
    for(option in options){
      if(options.hasOwnProperty(option)){
        initials[option] = options[option];
      }
    }
    return initials;
  }

  

  // generating endResult
  /**
  * Calls provided function with endResult as parameter
  * @public
  */
  function processEndResults(){
    if(settings.hasOwnProperty('processData')){
      return settings.processData.call(undefined, endResult);
    }
    return false;
  }

  // attaching stuffs on namespace
  // only expose necessary methds
  trackUser.processEndResults = processEndResults;

  // exporting namespace via window
  window.trackUser = trackUser;

})();