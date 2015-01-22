/*! ramp-pcar 22-01-2015 15:52:31 : v. 5.0.0-5 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/declare","dojo/_base/array","dojo/dom","dojo/dom-construct","dojo/number","dojo/query","dojo/topic","dojo/on","esri/map","esri/layers/FeatureLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/ArcGISDynamicMapServiceLayer","esri/SpatialReference","esri/dijit/Scalebar","esri/geometry/Extent","esri/layers/WMSLayer","esri/tasks/GeometryService","esri/tasks/ProjectParameters","ramp/globalStorage","ramp/ramp","ramp/featureClickHandler","ramp/mapClickHandler","ramp/navigation","ramp/eventManager","ramp/dataLoader","utils/util","utils/array","utils/dictionary"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){"use strict";function C(){$("#map-load-indicator").removeClass("hidden")}function D(){$("#map-load-indicator").addClass("hidden")}function E(a){if(a.levelChange){var b=e.format(a.lod.scale),c="1 : "+b;d.empty("scaleLabel"),$("#scaleLabel").text(c)}}function F(a){var b,c,h=a.map,i=d.create("div",{id:"scaleDiv","class":"esriScalebarLabel"});$(i).html("<span>"+i18n.t("map.scale")+"</span><br><span id='scaleLabel'><span/>"),b=e.format(h.getScale()),c="1 : "+b,d.place(i,f(".esriScalebarRuler")[0],"before"),d.empty("scaleLabel"),$("#scaleLabel").text(c),g.subscribe(x.BasemapSelector.BASEMAP_CHANGED,function(a){$(".esriScalebar > div").removeClass().addClass(a.cssStyle)})}function G(a){function b(b){a.on(b,function(a){g.publish(c+"/"+b,a)})}var c="map";b("update-end"),b("extent-change"),b("zoom-start"),b("zoom-end"),b("pan-start"),b("pan-end")}function H(a){g.subscribe(x.Map.CENTER_AT,function(b){a.centerAt(b.point)}),g.subscribe(x.Map.CENTER_AND_ZOOM,function(b){var c=new esri.geometry.Point(b.graphic.geometry.x,b.graphic.geometry.y,a.spatialReference),d=a.centerAndZoom(c,b.level);b.callback&&d.then(b.callback)}),g.subscribe(x.Map.SET_EXTENT,function(b){b.extent.spatialReference=a.spatialReference;var c=a.setExtent(b.extent);b.callback&&c.then(b.callback)}),g.subscribe(x.Navigation.PAN,function(b){a[b.direction]()}),g.subscribe(x.Navigation.ZOOM_STEP,function(b){a.setLevel(a.getLevel()+b.level)}),g.subscribe(x.Navigation.ZOOM,function(b){a.setLevel(b.level)}),g.subscribe(x.Navigation.FULL_EXTENT,function(){a.setExtent(U)}),g.subscribe(x.GUI.LAYOUT_CHANGE,function(){a.resize(!0)}),g.subscribe(x.GUI.SUBPANEL_CHANGE,function(a){!a.visible&&a.isComplete&&"rampPopup"===a.origin&&g.publish(x.FeatureHighlighter.HIGHLIGHT_HIDE,{})}),g.subscribe(x.FilterManager.LAYER_VISIBILITY_TOGGLED,function(c){var d=c.state,e=c.id,f=a.getLayer(e);f.setVisibility(d);try{b.forEach(s.LayerMap[e],function(b){var c=a.getLayer(b);c.setVisibility(d)})}catch(g){}}),g.subscribe(x.FilterManager.LAYER_TRANSPARENCY_CHANGED,function(c){var d=a.getLayer(c.layerId);if(void 0!==d){d.setOpacity(c.value);try{b.forEach(s.LayerMap[c.layerId],function(b){var d=a.getLayer(b);d.setOpacity(c.value)})}catch(e){}}}),g.subscribe(x.FilterManager.BOX_VISIBILITY_TOGGLED,function(a){O(a.id,a.state)}),g.subscribe(x.FilterManager.SELECTION_CHANGED,function(c){var d,e=c.index;a.layerIds.contains(c.id)?(d=b.map(a.graphicsLayerIds,function(b){return"Feature Layer"===a.getLayer(b).type?1:0}).sum(),e+=1-d):(S||(S=A.indexOf(a.graphicsLayerIds,function(b){var c=a.getLayer(b);return c.type&&"Feature Layer"===c.type})),e+=S),a.reorderLayer(a.getLayer(c.id),e),g.publish(x.Map.REORDER_END)}),g.subscribe(x.Map.ADD_LAYER,function(){var a=c.byId("addLayer-select-type").value,b=c.byId("addLayer-URL-input").value,d=c.byId("addLayer-Opacity").value;N(a,b,d)}),g.subscribe(x.Map.ADD_LAYER_READY,function(b){a.addLayer(b)})}function I(a){a.on("load",F),a.on("extent-change",function(b){E(b),h.once(a,"update-end",function(){g.publish(x.Datagrid.APPLY_EXTENT_FILTER)})}),a.on("click",function(a){u.onFeatureDeselect(a),g.publish(x.Map.CLICK,a)}),a.on("update-start",C),a.on("update-end",D)}function J(a,b,c){var d,e,f;f=new o(a),z.isSpatialRefEqual(f.spatialReference,b)?c([f]):(d=new q(RAMP.config.geometryServiceUrl),e=new r,e.geometries=[f],e.outSR=b,d.project(e,function(a){c(a)}))}function K(a){RAMP.config.extents.defaultExtent=a[0],J(RAMP.config.extents.fullExtent,a[0].spatialReference,L)}function L(a){RAMP.config.extents.fullExtent=a[0],J(RAMP.config.extents.maximumExtent,a[0].spatialReference,M)}function M(a){RAMP.config.extents.maximumExtent=a[0],g.publish(x.Map.EXTENTS_REPROJECTED)}function N(a,b,c){c/=100;var d;switch(a){case"feature":d=new j(b,{opacity:c,mode:j.MODE_SNAPSHOT});break;case"tile":d=new k(b,{opacity:c});break;case"dynamic":d=new l(b,{opacity:c})}g.publish(x.Map.ADD_LAYER_READY,d),g.publish(x.GUI.ADD_LAYER_PANEL_CHANGE,{visible:!1})}function O(a,b){var c=Y[a];c.setVisibility(b)}function P(a){return a["default"]||1}function Q(a,b,c){a.ramp={config:b,user:z.isUndefined(c)?!1:c,load:{state:"loading",inLS:!1}},a.on("load",function(a){g.publish(x.LayerLoader.LAYER_LOADED,{layer:a.layer})}),a.on("error",function(a){a.target.ramp.loadOk=!1,g.publish(x.LayerLoader.LAYER_ERROR,{layer:a.target,error:a.error})}),a.ramp.load.onUpdateStart=function(){g.publish(x.LayerLoader.LAYER_UPDATING,{layer:this})},a.on("update-start",a.ramp.load.onUpdateStart),a.on("update-end",function(a){g.publish(x.LayerLoader.LAYER_UPDATED,{layer:a.target})})}var R,S,T,U,V,W,X=[],Y={};return{zoomToLayerScale:function(a){var b,c,d,e,f=T.getLayer(a),g=T._params.lods,h=T.getLevel();for(e=0;e<g.length;e+=1)d=g[e],!b&&d.scale<=f.minScale&&(b=d),!c&&d.scale<=f.maxScale&&(c=g[Math.max(0,e-1)]);T.setZoom(Math.abs(b.level-h)<=Math.abs(c.level-h)?b.level:c.level)},getMaxExtent:function(){return V},getMap:function(){return z.isUndefined(T),T},getVisibleFeatureLayers:function(){return b.filter(T.getLayersVisibleAtScale(),function(a){return a.type&&"Feature Layer"===a.type&&a.visible})},getVisibleLayers:function(){return T.getLayersVisibleAtScale()},getInvisibleLayers:function(){var a,b,c;return a=this.getVisibleLayers(),b=T._layers,c=[],B.forEachEntry(b,function(b,d){var e=A.indexOf(a,function(a){return b===a.id});-1===e&&c.push(d)}),c},getBoundingBoxMapping:function(){return Y},getFeatureLayer:function(a){return A.find(R,function(b){return b.url===a})},applyExtentDefaulting:function(){RAMP.config.extents.fullExtent||(RAMP.config.extents.fullExtent=JSON.parse(JSON.stringify(RAMP.config.extents.defaultExtent))),RAMP.config.extents.maximumExtent||(RAMP.config.extents.maximumExtent=JSON.parse(JSON.stringify(RAMP.config.extents.fullExtent)))},projectConfigExtents:function(){var a=new m(RAMP.config.basemaps[RAMP.config.initialBasemapIndex].spatialReference);J(RAMP.config.extents.defaultExtent,a,K)},checkBoundary:function(a,b){var c,d,e=a,f=e.width(),g=e.height(),h=e.centerX(),i=e.centerY();d=e.clone();var j=b.height();g>j&&(g=j),i>b.ymax?(d.ymax=b.ymax,d.ymin=b.ymax-g,c=!0):i<b.ymin&&(d.ymin=b.ymin,d.ymax=b.ymin+g,c=!0);var k=b.width();return f>k&&(f=k),h>b.xmax?(d.xmax=b.xmax,d.xmin=b.xmax-f,c=!0):h<b.xmin&&(d.xmin=b.xmin,d.xmax=b.xmin+f,c=!0),c?d:void 0},makeFeatureLayer:function(a,b){var c=new j(a.url,{id:a.id,mode:j.MODE_SNAPSHOT,outFields:[a.layerAttributes],visible:a.settings.visible,opacity:P(a.settings.opacity)});return Q(c,a,b),c.ramp.type=s.layerType.feature,c},makeWmsLayer:function(a,b){var c=new p(a.url,{id:a.id,format:a.format,opacity:P(a.settings.opacity),visibleLayers:[a.layerName]});return Q(c,a,b),c.ramp.type=s.layerType.wms,c.setVisibility(a.settings.visible),c},makeStaticLayer:function(a,b){var c,d=a.layerType||"feature";switch(d){case"feature":c=new j(a.url,{opacity:P(a.settings.opacity),mode:j.MODE_SNAPSHOT,visible:a.settings.visible,id:a.id}),Q(c,a,b),c.ramp.type=s.layerType.Static}return c},init:function(){var a=this,c=RAMP.config.basemaps[RAMP.config.initialBasemapIndex],d=c.layers[0].url,e=new k(d,{id:"basemapLayer"}),f=e.on("update-end",function(){f.remove(),g.publish(x.Map.INITIAL_BASEMAP_LOADED)});e.on("error",function(a){window.location.href="./error-en.html"}),W=new o(RAMP.config.extents.defaultExtent),U=new o(RAMP.config.extents.fullExtent),V=new o(RAMP.config.extents.maximumExtent),X=b.map(RAMP.config.layers.wms,function(b){return a.makeWmsLayer(b)}),R=b.map(RAMP.config.layers.feature,function(b){var c;return c=b.isStatic?a.makeStaticLayer(b):a.makeFeatureLayer(b)}),T=new i(RAMP.config.divNames.map,{extent:W,logo:!1,minZoom:RAMP.config.zoomLevels.min,maxZoom:RAMP.config.zoomLevels.max,slider:!1}),RAMP.map=T,v.init(T);var h=[],j=[],l=[];b.forEach(RAMP.config.layers.feature,function(c){j=[],b.forEach(c.staticLayers,function(b,c){var d=a.makeStaticLayer(b);h.push(d),j[c]=b.id}),l[c.id]=j}),RAMP.staticLayerMap=l,e.ramp={type:s.layerType.Basemap},RAMP.startupLayers=X.concat(h,R),T.addLayer(e);var m=new n({map:T,attachTo:"bottom-left",scalebarUnit:"metric"});m.show(),G(T),H(T),I(T)}}});