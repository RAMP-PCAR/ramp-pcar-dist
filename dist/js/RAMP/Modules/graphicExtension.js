/*! ramp-pcar 06-02-2015 15:08:48 : v. 5.0.0-9 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["ramp/ramp","utils/array","utils/dictionary","utils/util","utils/tmplHelper","dojo/text!./templates/feature_details_template.json"],function(a,b,c,d,e,f){"use strict";return{getLayerConfig:function(b){return a.getLayerConfig(b.getLayer().url)},getOid:function(a){var b=a.getLayer().objectIdField;return a.attributes[b]},getTextContent:function(b){function c(a){tmpl.cache={},tmpl.templates=JSON.parse(e.stringifyTemplate(f));var b=e.dataBuilder(a,a.getLayer().url),c=tmpl(d,b);return c}var d=a.getLayerConfig(b.getLayer().url).templates.detail;return c(b)},getGraphicTitle:function(a){return a.attributes[this.getLayerConfig(a).nameField]}}});