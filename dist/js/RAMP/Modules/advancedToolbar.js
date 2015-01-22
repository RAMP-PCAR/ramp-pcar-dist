/*! ramp-pcar 22-01-2015 16:25:11 : v. 5.0.0-5 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/Deferred","ramp/eventManager","ramp/map","ramp/globalStorage","utils/util","utils/dictionary","utils/popupManager","utils/tmplHelper","dojo/text!./templates/advanced_toolbar_template.json"],function(a,b,c,d,e,f,g,h,i,j,k,l){"use strict";function m(a){o.forEach(function(b){a&&a.name===b.name||!b.module||b.module.deactivate()})}var n,o=[],p=function(){function b(a,b){var c=r.find(".sub-panel-container");u.clear().fromTo(c,p,{"margin-top":0,paused:!0},{"margin-top":q,ease:"easeOutCirc"},0).seek(t.time()),b?(r.addClass("advanced-toolbar-mode"),t.eventCallback("onComplete",function(){a.resolve()}),t.play()):(t.eventCallback("onReverseComplete",function(){a.resolve(),r.removeClass("advanced-toolbar-mode")}),t.reverse())}var d,g,i,o="button-pressed",p=.4,q=32,r=$(".viewport"),s=r.find("#panel-toggle"),t=new TimelineLite({paused:!0}),u=new TimelineLite;return{init:function(){d=r.find("#advanced-toggle"),g=r.find("#advanced-toolbar"),tmpl.cache={},tmpl.templates=JSON.parse(k.stringifyTemplate(l)),g.append(tmpl("at_main")),i=g.find("#advanced-toolbar-list"),t.set(g,{display:"block"}).fromTo(i,p,{top:-q},{top:0,ease:"easeOutCirc"},0).to(s,p,{top:"+="+q,ease:"easeOutCirc"},0).add(u,0),j.registerPopup(d,"click",function(d){c.publish(e.GUI.TOOLBAR_SECTION_OPEN,{id:"advanced-toolbar"}),h.subscribeOnce(e.GUI.TOOLBAR_SECTION_OPEN,a.hitch(this,function(a){"advanced-toolbar"!==a.id&&this.isOpen()&&this.close()})),b(d,!0)},{activeClass:o,setClassBefore:!0,target:g,closeHandler:function(a){c.publish(e.GUI.TOOLBAR_SECTION_CLOSE,{id:"advanced-toolbar"}),m(),b(a,!1)}}),n=f.getMap()},addTool:function(a){i.append(a.module.node)}}}();return{init:function(){var a;p.init(),o=RAMP.config.advancedToolbar.tools,a=o.filter(function(a){return a.enabled}).map(function(a){return"tools/"+a.name}),require(a,function(){var a,b=[],c=Array.prototype.slice.call(arguments);c.forEach(function(){b.push(new d)}),h.afterAll(b,function(){o.forEach(p.addTool)}),c.forEach(function(c,e){a=new d,a.then(function(a){o[e].module=a,b[e].resolve()}),c.init(o[e].selector,a).on(c.event.ACTIVATE,function(){m(c)})})})}}});