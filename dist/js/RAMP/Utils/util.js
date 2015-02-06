/*! ramp-pcar 06-02-2015 15:08:48 : v. 5.0.0-9 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/array","dojo/_base/lang","dojo/topic","dojo/Deferred","esri/geometry/Extent","esri/graphic"],function(a,b,c,d,e,f){"use strict";function g(a){return function(b){var c=new FileReader,e=new d;c.onloadend=function(a){e.resolve(a.target.result)},c.onerror=function(a){e.reject(a.target.error)};try{c[a](b)}catch(f){e.reject(f)}return e.promise}}return{checkConsole:function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)},escapeHtml:function(a){return a.replaceAll("<","&lt;").replaceAll(">","&gt;")},isNumber:function(a){return isFinite(String(a).trim()||0/0)},parseBool:function(a){return"true"===a.toLowerCase()},afterAll:function(b,c,d){if(0===b.length)return void c();var e=0;a.forEach(b,function(a){a.then(function(){e++,e===b.length&&c.call(d)})})},arrayToQuery:function(a){return a.join("+")},queryToArray:function(a){return a.split("+")},subscribe:function(a,d,e){this.isUndefined(e)?c.subscribe(a,d):c.subscribe(a,b.hitch(e,d))},subscribeOnce:function(a,b){var d=null,e=function(a){d.remove(),b(a)};return d=c.subscribe(a,e)},subscribeOnceAny:function(c,d){function e(b){a.forEach(f,function(a){a.remove()}),d(b)}var f=[];a.forEach(c,b.hitch(this,function(a){f.push(this.subscribeOnce(a,e))}))},subscribeAll:function(b,d){var e=[];a.forEach(b,function(b,f){e.push({fired:!1,args:null}),c.subscribe(b,function(){if(!e[f].fired&&(e[f].fired=!0,e[f].args=Array.prototype.slice.call(arguments),a.every(e,function(a){return a.fired}))){var b=[];a.forEach(e,function(a){b.append(a.args)}),d(b)}})})},createLazyVariable:function(a){var b=null;return{reset:function(){b=null},get:function(){return null==b&&(b=a()),b}}},once:function(a){var b=!1;return function(){b||(a(),b=!0)}},isUndefined:function(a){return"undefined"==typeof a},compareGraphics:function(a,b){var c,d,e,f="0",g="1";return a&&b&&$.isFunction(a.getLayer)&&$.isFunction(b.getLayer)&&(d=a.getLayer(),e=b.getLayer(),c=d.objectIdField,f=d.url+a.attributes[c],g=e.url+b.attributes[c]),f===g},scrollbarWidth:function(){var a,b,c=jQuery('<div style="width: 100%; height:200px;">test</div>'),d=jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append(c),e=c[0],f=d[0];return jQuery("body").append(f),a=e.offsetWidth,d.css("overflow","scroll"),b=f.clientWidth,d.remove(),a-b},adjustWidthForSrollbar:function(b,c){var d=b.innerHeight()<b[0].scrollHeight?this.scrollbarWidth():0;a.map(c,function(a){a.css({right:d})})},executeOnLoad:function(a,b,c){var e,f=new d;f.then(function(){window.clearInterval(e),c()}),e=window.setInterval(function(){$.isFunction(a[b])&&f.resolve(!0)},500)},executeOnDone:function(a,b,c){function e(){c.cancel()}function f(){h--,0===h&&c.resolve(!0)}var g,h=0,i=[];c=c||new d;for(var j in a)a.hasOwnProperty(j)&&i.push(a[j]);h=i.length,i.forEach(function(a){g=new d(e),g.then(f),b(a,g)}),0===h&&c.resolve(!0)},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})},getWhereClause:function(a,b){return this.isNumber(b)?String.format("{0}={1}",a,b):String.format("Upper({0})=Upper('{1}')",a,b)},stripHtml:function(a){var b=document.createElement("DIV");return $(b).text(a),b.textContent||b.innerText||""},pointToExtent:function(a,b,c){var d=a.extent.getWidth()/a.width,f=c*d;return new e(b.x-f,b.y-f,b.x+f,b.y+f,a.spatialReference)},createGraphic:function(a){return new f({geometry:a,symbol:{color:[255,0,0,64],outline:{color:[240,128,128,255],width:1,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"}})},endsWith:function(a,b){return-1!==a.indexOf(b,a.length-b.length)},mergeRecursive:function(){function a(a){if(null===a)return!1;if("object"!=typeof a)return!1;if(!("nodeName"in a))return!1;var b=a.nodeName;try{a.nodeName="is readonly?"}catch(c){return!0}return a.nodeName===b?!0:(a.nodeName=b,!1)}var b,c=function(b,d){if(a(d)||"object"!=typeof d||null===d)return b;for(var e in d)if(d.hasOwnProperty(e)){if($.isArray(d[e])){void 0===b[e]&&(b[e]=[]),$.merge(b[e],d[e]);continue}if(void 0===d[e])continue;"object"!=typeof d[e]||null===d[e]?b[e]=d[e]:"object"!=typeof b[e]||null===b[e]?b[e]=c(d[e].constructor===Array?[]:{},d[e]):c(b[e],d[e])}return b};if(b=arguments[0],"object"!=typeof b||null===b)return b;for(var d=1,e=arguments.length;e>d;d++)c(b,arguments[d]);return b},transformXML:function(a,b,c,e,f){function g(a,b){var c,d;if(window.ActiveXObject||window.hasOwnProperty("ActiveXObject")){var g,h=new ActiveXObject("Msxml2.XSLTemplate"),i=new ActiveXObject("Msxml2.DOMDocument"),j=new ActiveXObject("Msxml2.FreeThreadedDOMDocument");if(i.loadXML(a),j.loadXML(b),h.stylesheet=j,g=h.createProcessor(),g.input=i,f)for(d=0;d<f.length;d++)g.addParameter(f[d].key,f[d].value,"");g.transform(),c=g.output}else{var k=new XSLTProcessor;if(k.importStylesheet(b),f)for(d=0;d<f.length;d++)k.setParameter(null,f[d].key,f[d].value);c=k.transformToFragment(a,document),e||(c=$("body").append(c).children().last().detach())}return c}function h(a,b){a.endsWith(".xsl")?(k=b.responseText,o.resolve()):(j=b.responseText,n.resolve())}function i(a){var b=new XMLHttpRequest;b.open("GET",a);try{b.responseType="msxml-document"}catch(c){}b.onreadystatechange=function(){4===b.readyState&&(200!==b.status&&(m=!0),h(a,b))},b.send("")}var j,k,l,m,n=new d,o=new d,p=[n,o],q=this;q.afterAll(p,function(){m||(l=g(j,k)),c(m,l)}),"withCredentials"in new XMLHttpRequest&&"ActiveXObject"in window?(i(a),i(b)):window.XDomainRequest?($.ajax({type:"GET",url:a,dataType:"text",cache:!1,success:function(a){j=a,n.resolve()},error:function(){m=!0,n.resolve()}}),$.ajax({type:"GET",url:b,dataType:"text",cache:!1,success:function(a){k=a,o.resolve()},error:function(){m=!0,o.resolve()}})):($.ajax({type:"GET",url:a,dataType:"xml",cache:!1,success:function(a){j=a,n.resolve()},error:function(){m=!0,n.resolve()}}),$.ajax({type:"GET",url:b,dataType:"xml",cache:!1,success:function(a){k=a,o.resolve()},error:function(){m=!0,o.resolve()}}))},readFileAsText:g("readAsText"),readFileAsBinary:g("readAsBinary"),readFileAsArrayBuffer:g("readAsArrayBuffer"),keyboardSortable:function(c,d){d=b.mixin({linkLists:!1,onStart:function(){},onUpdate:function(){},onStop:function(){}},d),c.each(function(b,e){function f(a,b,c){a.focus(),b.attr("aria-dropeffect","move"),c.attr("aria-grabbed","true").removeAttr("aria-dropeffect")}var g,h=$(e),i=h.find("> li"),j=!1;h.off("focusout",".sort-handle").off("keyup",".sort-handle"),h.on("focusout",".sort-handle",function(a){var b=$(this).closest("li");b.hasClass("list-item-grabbed")&&!j&&(i.removeAttr("aria-dropeffect"),b.removeClass("list-item-grabbed").attr({"aria-selected":!1,"aria-grabbed":!1}),g=!1,d.onStop.call(null,a,{item:null}))}).on("keyup",".sort-handle",function(e){var k=$(this).closest("li"),l=k[0].id,m=h.sortable("toArray"),n=a.indexOf(m,l);13===e.which||32===e.which?g?(i.removeAttr("aria-dropeffect"),k.attr("aria-grabbed","false").removeClass("list-item-grabbed"),d.onStop.call(null,e,{item:k}),g=!1):(i.attr("aria-dropeffect","move"),k.attr("aria-grabbed","true").removeAttr("aria-dropeffect").addClass("list-item-grabbed"),d.onStart.call(null,e,{item:k}),g=!0):38===e.which?g?n>0&&(j=!0,k.prev().before(k),f($(this),i,k),g=!0,n-=1,d.onUpdate.call(null,e,{item:k}),j=!1):(k=d.linkLists&&0===n&&0!==b?$(c[b-1]).find("> li:last"):k.prev(),k.find(":tabbable:first").focus()):40===e.which&&(g?n<i.length-1&&(j=!0,k.next().after(k),f($(this),i,k),g=!0,n+=1,d.onUpdate.call(null,e,{item:k}),j=!1):(k=d.linkLists&&n===i.length-1&&b<c.length-1?$(c[b+1]).find("> li:first"):k.next(),k.find(":tabbable:first").focus()))})})},resetTimelines:function(a,b){var c;a.forEach(function(a){c=a.timeLine.time(),a.timeLine.seek(0).clear(),a.generator.call(),b&&a.timeLine.seek(c)})},isSpatialRefEqual:function(a,b){return a.wkid&&b.wkid?a.wkid===b.wkid:a.wkt&&b.wkt?a.wkt===b.wkt:!1},containsInDom:function(a){return $.contains(document.documentElement,a)}}});