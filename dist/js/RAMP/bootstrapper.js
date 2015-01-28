/*! ramp-pcar 28-01-2015 17:38:22 : v. 5.0.0-6 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
require(["dojo/parser","dojo/on","dojo/topic","dojo/request/script","dojo/request/xhr","dojo/_base/array","esri/config","ramp/map","ramp/basemapSelector","ramp/maptips","ramp/datagrid","ramp/navigation","ramp/filterManager","ramp/bookmarkLink","utils/url","ramp/featureHighlighter","ramp/ramp","ramp/GlobalStorage","ramp/gui","ramp/eventManager","ramp/advancedToolbar","ramp/theme","ramp/layerLoader","utils/util","utils/prototype!","utils/functionMangler!"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){"use strict";function y(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src=dojoConfig.fullPluginPath+a,b.appendChild(c)}function z(){c.subscribe(t.Map.INITIAL_BASEMAP_LOADED,function(){x.subscribeAll([t.BasemapSelector.UI_COMPLETE,t.FilterManager.UI_COMPLETE],function(){n.subscribeAndUpdate()});var a=h.getMap().__LOD.level?h.getMap().__LOD.level:0;l.init(a),p.init(),j.init(),i.init(),m.init(),RAMP.config.advancedToolbar.enabled&&u.init(),k.init(),v.tooltipster(),f.forEach(RAMP.startupLayers,function(a){w.loadLayer(a)})}),h.init(),l.construct(),v.tooltipster()}function A(a){var b,d=$("li.map-toolbar-item #advanced-toggle").parent();r.init(a),g.defaults.io.proxyUrl=RAMP.config.proxyUrl,g.defaults.io.corsDetection=!0,RAMP.config.advancedToolbar.enabled?d.removeClass("wb-invisible"):d.remove(),b=RAMP.config.plugins,b&&f.map(b,function(a){y(a)}),h.applyExtentDefaulting(),n.updateConfig(window.location.pathname.split("/").last()),c.subscribe(t.Map.EXTENTS_REPROJECTED,function(){c.subscribe(t.GUI.UPDATE_COMPLETE,function(){w.init(),z()}),s.load(null,null,function(){}),n.createUI(),q.loadStrings()}),h.projectConfigExtents()}x.checkConsole(),a.parse();var B,C,D=$("html").attr("lang");"en"!==D&&"fr"!==D&&(D="en"),RAMP.locale=D,i18n.init({lng:D+"-CA",load:"current",fallbackLng:!1}),B="fr"===D?"config.fr.json":"config.en.json",C=e(B,{handleAs:"json"}),C.then(function(a){if(RAMP.configServiceURL){var b=new o(require.toUrl(document.location)),c=b.queryObject.keys;if(c&&""!==c){var e=RAMP.configServiceURL+"docs/"+$("html").attr("lang")+"/"+c,g=d.get(e,{jsonp:"callback",timeout:2e3});g.then(function(b){f.forEach(b,function(b){x.mergeRecursive(a,b)}),A(a)},function(a){})}else A(a)}else A(a)},function(a){})});