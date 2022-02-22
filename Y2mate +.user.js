// ==UserScript==
// @name        Y2mate +
// @namespace   ytmateplus
// @version     1
// @date        2022-02-21
// @author      Y2Mate.is and Zen
// @description Y2Mate Downloader: Download Video and Audio for free
// @homepage    https://y2mate.is/
// @icon        https://ibb.co/qkTm8fN
// @icon64      https://ibb.co/qkTm8fN
// @updateURL
// @downloadURL
// @include     http://*
// @include     https://*
// @run-at      document-end
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_info
// @grant       GM_openInTab
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_notification
// @grant       GM_download
// @grant       GM.info
// @grant       GM.listValues
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       GM.deleteValue
// @grant       GM.openInTab
// @grant       GM.setClipboard
// @grant       GM.xmlHttpRequest
// @connect     youtube.com
// @connect     m.youtube.com
// @connect     www.youtube.com
// @connect     youtube-nocookie.com
// @connect     youtu.be
// @connect     y2mate.is
// @connect     self
// @connect     *
// ==/UserScript==

var Y2MateMain={oXHttpReq:null,vid:null,oldUrl:null,DocOnLoad:function(o){try{if(null!=o&&null!=o.body&&null!=o.location&&(Y2MateMain.vid=Y2MateMain.getVid(o),Y2MateMain.vid)){o.querySelector("#info-contents #menu-container").setAttribute("style","flex-wrap: wrap;");var t=o.querySelector("#menu-container"),e=o.querySelector("#y2mateconverter"),n=Y2MateMain.GetCommandButton();null==e&&(null!=t?t.parentNode.insertBefore(n,t):(t=o.querySelector("#eow-title")).parentNode.insertBefore(n,t)),Y2MateMain.oldUrl=o.location.href,Y2MateMain.checkChangeVid()}return!0}catch(o){console.log("Something went wrong Y2mate.DocOnLoad. ",o)}},checkChangeVid:function(){setTimeout(function(){Y2MateMain.oldUrl==window.location.href?Y2MateMain.checkChangeVid():Y2MateMain.WaitLoadDom(window.document)},1e3)},WaitLoadDom:function(o){Y2MateMain.vid=Y2MateMain.getVid(o),Y2MateMain.vid?null!=o.querySelector("#info #menu-container")?Y2MateMain.DocOnLoad(o):setTimeout(function(){Y2MateMain.WaitLoadDom(o)},1e3):Y2MateMain.checkChangeVid()},goToY2mate:function(o){try{var t="https://y2mate.is/?v="+Y2MateMain.vid+"&utm_source=chrome_addon";window.open(t,"_blank")}catch(o){console.log("Something went wrong Y2mate.OnButtonClick. ",o)}},GetCommandButton:function(){try{var o=document.createElement("button");return o.id="y2mateconverter",o.className="yt-uix-tooltip",o.setAttribute("type","button"),o.setAttribute("title",""),o.innerHTML="Download",o.addEventListener("click",function(o){Y2MateMain.goToY2mate(o)},!0),o.setAttribute("style","min-height:25px; top:1px; cursor: pointer; font: 13px Arial; background: #303030; color: #ffffff; display: block; padding: 10px 15px; margin: 5px 10px 0px 0px; border: 1px solid #303030; border-radius: 2px; font-weight:bold"),o}catch(o){console.log("Something went wrong Y2mate.GetCommandButton. ",o)}},getVid:function(o){var t=o.location.toString().match(/^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/);return!(!t||!t[3])&&t[3]}};Y2MateMain.WaitLoadDom(window.document);
