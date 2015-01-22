/*! ramp-pcar 22-01-2015 20:20:55 : v. 5.0.0-5 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/array","utils/util"],function(a,b){"use strict";function c(a,c){var d=$.extend(!0,{},a);return b.mergeRecursive(d,c)}function d(b){var d;return d=c(i,b),d.layers.wms=a.map(d.layers.wms,function(a){return c(f,a)}),d.basemaps=a.map(d.basemaps,function(a){return c(h,a)}),d.layers.feature=a.map(d.layers.feature,function(b){var d=c(e,b);return d.datagrid.gridColumns=a.map(d.datagrid.gridColumns,function(a){return c(g,a)}),d}),d}var e={layerAttributes:"*",minScale:0,maxScale:0,settings:{panelEnabled:!0,opacity:{enabled:!0,"default":1},visible:!0,boundingBoxVisible:!1},datagrid:{rowsPerPage:50},templates:{detail:"default_feature_details",hover:"feature_hover_maptip_template",anchor:"anchored_map_tip",summary:"default_grid_summary_row"}},f={settings:{panelEnabled:!0,opacity:{enabled:!0,"default":1},visible:!0,boundingBoxVisible:!0}},g={orderable:!0,type:"string",alignment:1},h={scaleCssClass:"map-scale-dark",type:"Topographic"},i={initialBasemapIndex:0,extendedDatagridExtentFilterEnabled:!1,rowsPerPage:50,navWidget:{sliderMinVal:3,sliderMaxVal:15,debug:!1,animate:"fast",cssPath:"ramp-theme/navigation",skin:"white"},zoomLevels:{min:1,max:17},templates:{basemap:"default_basemap",globalSelectorToggles:"default_selector_toggles"},layers:{feature:[],wms:[]},divNames:{map:"mainMap",navigation:"map-navigation",filter:"searchMapSectionBody",datagrid:"gridpane"},advancedToolbar:{enabled:!1,tools:[]}};return{init:function(a){var b=d(a);RAMP.config=b,this.layerSelectorGroups=[this.layerType.feature,this.layerType.wms]},layerType:{Basemap:"basemap",wms:"wms_layer",BoundingBox:"bounding_box",feature:"feature_layer",Static:"static_layer",Highlight:"highlight_layer",Hoverlight:"hoverlight_layer",Zoomlight:"zoomlight_layer"},layerSelectorGroups:[]}});