/*! ramp-pcar 23-01-2015 15:57:54 : v. 5.0.0-6 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/Deferred","esri/request","esri/layers/FeatureLayer","utils/util"],function(a,b,c,d){"use strict";function e(a,b){var d,e,f,g;return e={fields:[]},d=Terraformer.ArcGIS.convert(a),e.drawingInfo=i[j[a.features[0].geometry.type]],g={features:d,geometryType:e.drawingInfo.geometryType},b&&(b.idField&&(e.objectIdField=b.idField),b.renderer&&i.hasOwnProperty(b.renderer)&&(e.drawingInfo={renderer:i[b.renderer].renderer},g.geometryType=i[b.renderer].geometryType)),f=new c({layerDefinition:e,featureSet:g},{mode:c.MODE_SNAPSHOT}),f.ramp={type:"newtype?"},f}function f(c){var f=new a;if(c.file){if(c.url)throw new Error("Either url or file should be specified, not both");return d.readFileAsText(c.file).then(function(a){var b=null;try{csv2geojson.csv2geojson(a,{latfield:"Lat",lonfield:"Long",delimiter:","},function(a,c){return a?void f.reject(a):(b=e(c),void f.resolve(b))})}catch(c){f.reject(c)}}),f.promise}return c.url?(new b({url:c.url,handleAs:"text"}).then(function(a){var b=null;try{csv2geojson.csv2geojson(a,{latfield:"Lat",lonfield:"Long",delimiter:","},function(a,c){return a?void f.reject(a):(b=e(c),void f.resolve(b))})}catch(c){f.reject(c)}},function(a){f.reject(a)}),f.promise):void 0}function g(b){var c=new a;if(b.file){if(b.url)throw new Error("Either url or file must be specified");return d.readFileAsArrayBuffer(b.file).then(function(a){var b=null;try{shp(a).then(function(a){try{b=e(a),c.resolve(b)}catch(d){c.reject(d)}},function(a){c.reject(a)})}catch(d){c.reject(d)}}),c.promise}if(b.url)return shp(b.url).then(function(a){var b=null;try{b=e(a),c.resolve(b)}catch(d){c.reject(d)}},function(a){c.reject(a)}),c.promise;throw new Error("Either url or file must be specified")}function h(c){var f=new a;if(c.file){if(c.url)throw new Error("Either url or file must be specified");return d.readFileAsText(c.file).then(function(a){var b=null;try{b=e(JSON.parse(a)),f.resolve(b)}catch(c){f.reject(c)}}),f.promise}if(c.url)return new b({url:c.url}).then(function(a){var b=null;try{b=e(a),f.resolve(b)}catch(c){f.reject(c)}},function(a){f.reject(a)}),f.promise;throw new Error("Either url or file must be specified")}var i={circlePoint:{geometryType:"esriGeometryPoint",renderer:{type:"simple",symbol:{type:"esriSMS",style:"esriSMSCircle",color:[67,100,255,200],size:7}}},solidLine:{geometryType:"esriGeometryPolyline",renderer:{type:"simple",symbol:{type:"esriSLS",style:"esriSLSSolid",color:[90,90,90,200],width:2}}},outlinedPoly:{geometryType:"esriGeometryPolygon",renderer:{type:"simple",symbol:{type:"esriSFS",style:"esriSFSSolid",color:[76,76,125,200],outline:{type:"esriSLS",style:"esriSLSSolid",color:[110,110,110,255],width:1}}}}},j={Point:"circlePoint",MultiPoint:"circlePoint",LineString:"solidLine",MultiLineString:"solidLine",Polygon:"outlinedPoly",MultiPolygon:"outlinedPoly"};return{makeGeoJsonLayer:e,buildCsv:f,buildShapefile:g,buildGeoJson:h}});