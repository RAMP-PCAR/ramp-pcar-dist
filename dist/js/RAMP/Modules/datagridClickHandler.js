/*! ramp-pcar 22-01-2015 15:52:31 : v. 5.0.0-5 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["ramp/graphicExtension","ramp/eventManager","dojo/topic","dojo/dom-construct","utils/util"],function(a,b,c,d,e){"use strict";function f(){c.publish(b.FeatureHighlighter.ZOOMLIGHT_HIDE),c.publish("datagrid/zoomlightrow-hide")}var g;return{onDetailSelect:function(d,f,g){var h=d.data("guid")||d.data("guid",e.guid()).data("guid"),i=a.getTextContent(f),j=a.getGraphicTitle(f),k=d.parents(".record-row").parent();"summary"===g?c.publish(b.GUI.SUBPANEL_OPEN,{panelName:i18n.t("datagrid.details"),title:j,content:i,target:k.find(".record-controls"),origin:"datagrid",consumeOrigin:"rampPopup",guid:h,doOnOpen:function(){e.subscribeOnce(b.Maptips.EXTENT_CHANGE,function(a){var d=a.scroll;c.publish(b.Datagrid.HIGHLIGHTROW_SHOW,{graphic:f,scroll:d})}),c.publish(b.FeatureHighlighter.HIGHLIGHT_SHOW,{graphic:f})},doOnHide:function(){c.publish(b.Datagrid.HIGHLIGHTROW_HIDE)},doOnDestroy:function(){f=null,c.publish(b.FeatureHighlighter.HIGHLIGHT_HIDE)}}):(k=d,c.publish(b.GUI.SUBPANEL_OPEN,{panelName:i18n.t("datagrid.details"),title:j,content:i,target:k,origin:"ex-datagrid",templateKey:"full_sub_panel_container",guid:h,doAfterUpdate:function(){c.publish(b.Datagrid.HIGHLIGHTROW_SHOW,{graphic:f,scroll:!0})},doOnHide:function(){c.publish(b.Datagrid.HIGHLIGHTROW_HIDE)},doOnDestroy:function(){f=null,c.publish(b.FeatureHighlighter.HIGHLIGHT_HIDE)}}))},onDetailDeselect:function(a){"summary"===a?c.publish(b.GUI.SUBPANEL_CLOSE,{origin:"rampPopup,datagrid"}):c.publish(b.GUI.SUBPANEL_CLOSE,{origin:"ex-datagrid"})},onZoomTo:function(a,d){function h(){c.publish(b.FeatureHighlighter.ZOOMLIGHT_SHOW,{graphic:d}),e.subscribeOnceAny(["map/pan-start","map/zoom-start"],f)}switch(g=a,d.geometry.type){case"point":c.publish(b.Map.CENTER_AND_ZOOM,{graphic:d,level:9,callback:h});break;case"polygon":c.publish(b.Map.SET_EXTENT,{extent:d._extent.expand(1.5),callback:h});break;default:c.publish(b.Map.SET_EXTENT,{extent:d._extent.expand(1.5),callback:h})}c.publish(b.Datagrid.ZOOMLIGHTROW_SHOW,{graphic:d})},onZoomBack:function(){c.publish(b.Map.SET_EXTENT,{extent:g}),c.publish(b.FeatureHighlighter.ZOOMLIGHT_HIDE),c.publish(b.Datagrid.ZOOMLIGHTROW_HIDE)},onZoomCancel:function(){f()}}});