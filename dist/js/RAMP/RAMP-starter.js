/*! ramp-pcar 22-01-2015 16:20:57 : v. 5.0.0-5 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
var RAMP,jsFolderPath="js/",pathname=location.pathname.replace(/\/[^/]+$/,"")+"/",htmlNode=$("html"),dojoConfig;RAMP={configServiceURL:"http://localhost:5000/",config:{},plugins:{featureInfoParser:{}},state:{ui:{sidePanelOpened:!0,fullscreen:!1}}},dojoConfig={parseOnLoad:!1,locale:htmlNode.attr("lang"),async:!0,packages:[{name:"ramp",location:pathname+jsFolderPath+"RAMP/Modules"},{name:"utils",location:pathname+jsFolderPath+"RAMP/Utils"},{name:"tools",location:pathname+jsFolderPath+"RAMP/Tools/"}],fullPluginPath:pathname+jsFolderPath+"plugins/"},$(document).ready(function(){"use strict";var a=document.getElementsByTagName("head")[0],b=document.createElement("script");b.type="text/javascript",b.src=pathname+jsFolderPath+"RAMP/bootstrapper.js",a.appendChild(b)});
console.log("\n           WWWWWW||WWWWWW\n            W W W||W W W\n                 ||\n               ( OO )__________\n                /  |           \\\n _____ _ _     /o o|W           \\\n|  ___| | |    \\___/||_||__||_|| *\n| |__ | | | __      || ||  || ||\n|  __|| | |/ /     _||_|| _||_||\n| |___| |   <     (__|__|(__|__|    Bernhard Schwarz\n\\____/|_|_|\\_\\       ._ v5 _.\n\n");