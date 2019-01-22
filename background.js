/*
 * Created by @ScuffedDev
 */

chrome.webRequest.onBeforeRequest.addListener(function(d){
  return {cancel:true};
},{urls:["*://*.gstatic.com/chat/sounds/*"]},
  ["blocking"]);
