/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("grapesjs"),require("jQuery")):"function"==typeof define&&define.amd?define("grapesjs-components-farmer",["grapesjs","jQuery"],t):"object"==typeof exports?exports["grapesjs-components-farmer"]=t(require("grapesjs"),require("jQuery")):e["grapesjs-components-farmer"]=t(e.grapesjs,e.jQuery)}(self,(function(e,t){return function(){var a={73:function(e,t){"use strict";function a(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.BlockManager,r=t.comps;r.blocks,r.blockCategories;t.resetBlocks&&a.getAll().reset();var o={category:t.categoryLabel};a.add("comp_col1").set(n({label:r.comp_col1.label,attributes:{class:"gjs-fonts gjs-f-b1"},content:{type:"comp_row",components:[{type:"comp_col",classes:r.comp_col1.classes.concat(r.comp_col.classes)}]}},o)),a.add("comp_col2").set(n({label:r.comp_col2.label,attributes:{class:"gjs-fonts gjs-f-b2"},content:{type:"comp_row",components:[{type:"comp_col",classes:r.comp_col2.classes.concat(r.comp_col.classes)},{type:"comp_col",classes:r.comp_col2.classes.concat(r.comp_col.classes)}]}},o)),a.add("comp_col3").set(n({label:r.comp_col3.label,attributes:{class:"gjs-fonts gjs-f-b3"},content:{type:"comp_row",components:[{type:"comp_col",classes:r.comp_col3.classes.concat(r.comp_col.classes)},{type:"comp_col",classes:r.comp_col3.classes.concat(r.comp_col.classes)},{type:"comp_col",classes:r.comp_col3.classes.concat(r.comp_col.classes)}]}},o)),a.add("comp_submit",n({label:'\n      <div style="color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    display: inline-block;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    border: 1px solid transparent;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    margin-top: 12px;\n    margin-bottom: 16px;\n    width: 50px;">&nbsp;</div>\n      <div class="gjs-block-label">'.concat(r.comp_submit.label,"</div>\n    "),content:{type:"comp_submit"}},o)),a.add("comp_input",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(r.comp_input.label,"</div>"),content:{type:"comp_input"}},o)),a.add("comp_textarea",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 8 5 8 5 12 4 12"></polygon>\n      <polygon class="gjs-block-svg-path" points="19 7 20 7 20 17 19 17"></polygon>\n      <polygon class="gjs-block-svg-path" points="20 8 21 8 21 9 20 9"></polygon>\n      <polygon class="gjs-block-svg-path" points="20 15 21 15 21 16 20 16"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(r.comp_textarea.label,"</div>"),content:{type:"comp_textarea"}},o)),a.add("comp_select",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>\n      <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) " points="18.5 11 20 13 17 13"></polygon>\n      <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>\n    </svg>\n    <div class="gjs-block-label">'.concat(r.comp_select.label,"</div>"),content:{type:"comp_select"}},o)),a.add("comp_file",n({label:r.comp_file.label,attributes:{class:"fa fa-file"},content:{type:"comp_file"}},o)),a.add("comp_checkbox",n({label:r.comp_checkbox.label,attributes:{class:"fa fa-check-square"},content:{type:"comp_checkbox"}},o)),a.add("comp_hidden",n({label:'<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(r.comp_hidden.label,"</div>"),content:{type:"comp_hidden"}},o)),a.add("comp_text",n({label:r.comp_text.label,attributes:{class:"gjs-fonts gjs-f-text"},content:{type:"text",content:"Insert your text here",style:{padding:"10px"},activeOnRender:1}},o)),a.add("comp_image",n({label:r.comp_image.label,attributes:{class:"gjs-fonts gjs-f-image"},content:{style:{color:"black"},type:"image",activeOnRender:1}},o)),a.add("comp_map",n({label:r.comp_map.label,attributes:{class:"fa fa-map-o"},content:{type:"map",style:{height:"350px"}}},o)),a.add("comp_recaptcha",n({label:'\n      <image src="https://www.gstatic.com/recaptcha/api2/logo_48.png">\n      <br /><br />\n    <div class="gjs-block-label">'.concat(r.comp_recaptcha.label,"</div>"),content:{type:"comp_recaptcha"}},o)),a.add("comp_stripe",n({label:r.comp_stripe.label,attributes:{class:"fa fa-cc-stripe"},content:{type:"comp_stripe"}},o))}},430:function(e,t,a){"use strict";a.r(t);var n=a(609),r=a.n(n),o=a(816),c=a.n(o),l=a(520),s=a.n(l);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=s().plugins.add("grapesjs-components-farmer",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.Commands,o=(e.Panels,t.comps||{}),l={comp_input:{label:"Input",classes:"form-group",useTag:"div",template:'\n        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>\n        <input <%= it.required_attr ? \'required \' : \'\' %>type="<%=it.type_attr%>" class="form-control" id="<%=it.name_attr%>" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || \'\'%>" <%= it.value_attr ? \'value="\' + it.value_attr + \'"\' : \'\' %>/>\n      '},comp_select:{label:"Select",classes:"form-group",useTag:"div",template:'\n        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>\n        <select <%= it.multiple_attr ? \'multiple \' : \'\' %><%= it.required_attr ? \'required \' : \'\' %>class="form-control" id="<%=it.name_attr%>" name="<%=it.name_attr%>">\n          <option selected>-- Please select an option -- </option>\n          <% (it.option_attr + "").trim().split("\\n").forEach(function(option){ %>\n          <% var msgProps = option.split(\'::\');\n          %> <option value="<%= msgProps[0]%>"><%= msgProps[1] || msgProps[0] %></option>\n          <% }); %>\n        </select>\n      '},comp_file:{label:"File",classes:"custom-file",useTag:"div",template:"\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"file\" class=\"custom-file-input\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.accept_attr ? 'accept=\"' + it.accept_attr + '\"' : '' %> <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        <label for=\"<%=it.name_attr%>\" class=\"custom-file-label\"><%=it.label_attr%></label>\n      "},comp_textarea:{label:"Textarea",classes:"form-group",useTag:"div",template:"\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>class=\"form-control\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n      "},comp_checkbox:{label:"Checkbox",classes:"form-check",useTag:"div",template:'\n        <label for="<%=it.name_attr%>" class="form-check-label">\n          <input <%= it.required_attr ? \'required \' : \'\' %>type="checkbox" id="<%=it.name_attr%>" name="<%=it.name_attr%>" class="form-check-input" <%= it.value_attr ? \'value="\' + it.value_attr + \'"\' : \'\' %>/>\n          <%=it.label_attr%>\n        </label>\n      '},comp_hidden:{label:"Hidden Input",useTag:"div",template:"\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "},comp_submit:{label:"Submit Button",classes:"btn btn-primary btn-block",useTag:"button",template:"<%= it.label_attr %>"},comp_row:{label:"Row",useTag:"div",classes:"row"},comp_col:{label:"Column",useTag:"div",classes:"col"},comp_col1:{label:"1 Column",useTag:"div"},comp_col2:{label:"2 Columns",useTag:"div"},comp_col3:{label:"3 Columns",useTag:"div"},comp_text:{label:"Text"},comp_image:{label:"Image"},comp_map:{label:"Map"},comp_recaptcha:{label:"reCaptcha",classes:"form-group",template:'\n        <script src="https://www.google.com/recaptcha/api.js" async defer><\/script>\n        <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response">\n        <div class="g-recaptcha" data-sitekey="<%= it.sitekey_attr || \'\' %>"></div><br />\n      '},comp_stripe:{label:"Payment",classes:"form-group",template:'\n        <script src="https://js.stripe.com/v3/"><\/script>\n        <div id="stripeElement" data-key="<%= it.publickey_attr || \'\' %>" data-hide-postal="<%= it.hidepostal_attr || \'false\' %>">&nbsp;</div>\n      '}};for(var s in l){var i=l[s],u=o[s];if(u){for(var m in u)u[m]=u[m]||i[m];o[s]=u}else o[s]=i;o[s].classes=(o[s].classes||"").split(" ")}var d=p({formNextId:1,categoryLabel:"Basic",formFieldsPrefix:"field",showStylesOnChange:1,addResource:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"script",n=e.Canvas.getDocument(),r=n.head||n.getElementsByTagName("head")[0],o=document.createElement(a);"script"===a?o.src=t:"link"===a&&(o.rel="stylesheet",o.href=t),r.appendChild(o)}},t);d.comps=d.comps||o;var f=function(){Object.keys(d.comps).forEach((function(e){var t=d.comps[e];t&&"string"==typeof t.template&&(t.template=c()(t.template))}))},b=function(){var t=e.Canvas.getBody(),a=t.ownerWindow;r()(t).click((function(e){var t=e||a.event;if("input"===((t.target||t.srcElement).tagName+"").toLowerCase())return t.preventDefault(),!1}))};n.add("get-usable-html",{run:function(){var t=e.getHtml();for(var a in d.comps){var n=d.comps[a].useTag||"div";t=(t=(t=(t=t.replace(new RegExp("<"+a,"g"),"<"+n)).replace(new RegExp("</"+a+">","g"),"</"+n+">")).replace(new RegExp(' data-gjs-type="'.concat(a,'" '),"g")," ")).replace(new RegExp(' data-highlightable="1" ',"g")," ")}return t}}),a(429).Z(e,d),a(73).Z(e,d),t.panel&&a(801).Z(e,d),e.on("load",(function(){f(),setTimeout((function(){var t=e.Canvas.getDocument(),a=t.head||t.getElementsByTagName("head")[0],n="\n\ncomp_recaptcha,\ncomp_row,\ncomp_col,\ncomp_hidden {\n  min-height: 2rem !important;\n}\n\ncomp_row {\n  display: block;\n  width: 100%;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\ncomp_col {\n  min-width: 100px;\n}\n\ncomp_hidden, comp_recaptcha, comp_stripe {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n",r=t.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=n:r.appendChild(t.createTextNode(n)),a.appendChild(r),b()}),0)}))}))},801:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n="set-device-desktop",r="set-device-tablet",o="set-device-mobile",c="canvas-clear",l=a(609),s=a.n(l),i=function(e,t){var a=e.Commands,l=e.Panels,i=e.getConfig(),p="sw-visibility",u="export-template",m="open-sm",d="open-tm",f="open-layers",b="open-blocks",g="fullscreen",v="preview";i.showDevices=0;var y=t.textCleanCanvas||"Are you sure to clean the canvas?";a.add(n,(function(e){return e.setDevice("Desktop")})),a.add(r,(function(e){return e.setDevice("Tablet")})),a.add(o,(function(e){return e.setDevice("Mobile portrait")})),a.add(c,(function(e){return confirm(y)&&e.runCommand("core:canvas-clear")})),l.getPanels().reset([{id:"commands",buttons:[{}]},{id:"options",buttons:[{id:p,command:p,context:p,active:1,className:"fa fa-square-o",attributes:{title:"Show Borders"}},{id:v,context:v,command:function(e){return e.runCommand(v)},className:"fa fa-eye",attributes:{title:"Preview"}},{id:g,command:g,context:g,className:"fa fa-arrows-alt",attributes:{title:"Fullscreen"}},{id:u,className:"fa fa-code",command:function(e){return e.runCommand(u)},attributes:{title:"Show code"}},{id:"undo",className:"fa fa-undo",command:function(e){return e.runCommand("core:undo")},attributes:{title:"Undo"}},{id:"redo",className:"fa fa-repeat",command:function(e){return e.runCommand("core:redo")},attributes:{title:"Redo"}},{id:c,className:"fa fa-trash",command:function(e){return e.runCommand(c)},attributes:{title:"Clear canvas"}}]},{id:"views",buttons:[{id:m,command:m,className:"fa fa-paint-brush",attributes:{title:"Style Manager"}},{id:d,command:d,className:"fa fa-cog",attributes:{title:"Settings"}},{id:f,command:f,className:"fa fa-bars",attributes:{title:"Layers"}},{id:b,command:b,className:"fa fa-th-large",active:1,attributes:{title:"Blocks"}}]}]),l.addPanel({id:"devices-c"}).get("buttons").add([{id:n,command:n,className:"fa fa-desktop",active:1,attributes:{title:"Desktop"}},{id:r,command:r,className:"fa fa-tablet",attributes:{title:"Tablet"}},{id:o,command:o,className:"fa fa-mobile",attributes:{title:"Mobile"}}]),e.on("load",(function(){var a=e.Panels,n=s()(e.getEl()),r=a.getButton("views","open-tm");r&&r.set("active",1);var o=a.getButton("views","open-sm");o&&o.set("active",1);var c=s()('<div class="gjs-sm-sector no-select">\n<div class="gjs-sm-title"><span class="icon-settings fa fa-cog"></span> Settings</div>\n<div class="gjs-sm-properties"></div></div>'),l=c.find(".gjs-sm-properties");l.append(n.find(".gjs-trt-traits")),n.find(".gjs-pn-views .fa-cog").hide(),n.find(".gjs-sm-sectors").before(c),c.find(".gjs-sm-title").on("click",(function(){var e=l.get(0).style,t="none"===e.display;e.display=t?"block":"none"}));var i=a.getButton("views",b);i&&i.set("active",1),t.showStylesOnChange&&e.on("component:selected",(function(){var t=a.getButton("views",m),n=a.getButton("views",f);n&&n.get("active")||!e.getSelected()||t&&t.set("active",1)}))}))}},429:function(e,t,a){"use strict";var n=a(609),r=a.n(n);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.TraitManager,n=e.DomComponents,o=(e.BlockManager,n.getType("default")),l=(n.getType("select"),o.model),s=o.view,i=(n.getType("text"),l.prototype.defaults.traits.concat([{type:"text",name:"name_attr",label:"Name",placeholder:"Enter a field name.."},{type:"text",name:"label_attr",label:"Label",placeholder:"Enter a field label.."}])),p=i.concat([{type:"text",name:"value_attr",label:"Value",changeProp:1,placeholder:"Enter a default value.."},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"pattern_attr",changeProp:1,label:"Pattern"},{type:"number",name:"min_attr",changeProp:1,label:"Min"},{type:"number",name:"max_attr",changeProp:1,label:"Max"}]),u={type:"select",name:"type_attr",label:"Type",options:[{name:"Text",value:"text"},{name:"Password",value:"password"},{name:"Email",value:"email"},{name:"Number",value:"number"},{name:"URL",value:"url"},{name:"Phone",value:"tel"},{name:"Date",value:"date"},{name:"Date Time",value:"datetime-local"},{name:"Range",value:"range"},{name:"Color Picker",value:"color"}]};a.addType("option_attr",{events:{onchange:"onChange"},getInputEl:function(){if(!this.inputEl){var e=document.createElement("textarea");e.value=this.target.get("option_attr"),this.inputEl=e}return this.inputEl},onValueChange:function(){this.target.set("option_attr",this.model.get("value"))}});var m=l.extend({defaults:c(c({},l.prototype.defaults),{},{draggable:!0,droppable:!0,copyable:!1,label_attr:"Label"}),toHTML:function(){var e=t.comps[this.attributes.tagName],a=this.genHtml();if(e&&e.useTag){if("innerHTML"===e.useTag)return a.html();if("innerText"===e.useTag)return this.genHtml()[0].innerText}return this.genHtml()[0].outerHTML},getTraitValues:function(){var e=c({},this.attributes);return this.get("traits").each((function(t){var a=t.get("name");e[a]=t.get("value")||e[a]})),e},myInitDefaults:function(){var e=c({},this.attributes);this.get("traits").each((function(t){var a=t.get("name");a.indexOf("_attr")>0&&t.set("value",e[a])}))},ensureNameAttr:function(e){var a=this.get("traits").where({name:"name_attr"})[0];if(a){var n=e.name_attr;if(!n)return n="".concat(t.formFieldsPrefix).concat(t.formNextId++),a.set("value",n),this.set("name_attr",n),!0}return!1},genHtml:function(){if(!this.view||!this.view.el){var e=document.createElement(this.attributes.tagName);return this.generateHtml(e,this.attributes.tagName)}return this.generateHtml(this.view.el,this.attributes.tagName)},generateHtml:function(e,a){var n=this,o=r()(e||n.view.el),c=n.getTraitValues(),l=l||n.get("tagName");if(t&&t.comps&&t.comps[l]){var s=t.comps[l].template;"function"==typeof s&&(n.ensureNameAttr(c)||(o.empty(),o.html(s({it:c||{}}))))}return o}}),d=s.extend({onRender:function(){return this.model.genHtml&&this.model.genHtml(),this}});n.addType("comp_input",{model:m.extend({defaults:c(c({},m.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_input",type_attr:"text",traits:p.concat(u),classes:["comp_input"].concat(t.comps.comp_input.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:label_attr",e.genHtml),e.listenTo(e,"change:name_attr",e.genHtml),e.listenTo(e,"change:placeholder_attr",e.genHtml)}}),view:d}),n.addType("comp_select",{model:m.extend({defaults:c(c({},m.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_select",option_attr:"MN::Minnesota\nTX::Texas",label_attr:"Select",traits:[{type:"option_attr"},{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"checkbox",name:"multiple_attr",changeProp:1,label:"Multiple"}].concat(i),classes:["comp_select"].concat(t.comps.comp_select.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:label_attr",e.genHtml),e.listenTo(e,"change:name_attr",e.genHtml),e.listenTo(e,"change:multiple_attr",e.genHtml),e.listenTo(e,"change:option_attr",e.genHtml)}}),view:d}),n.addType("comp_textarea",{model:m.extend({defaults:c(c({},l.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_textarea",label_attr:"Message",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"number",name:"rows_attr",label:"Rows",changeProp:1,placeholder:"Enter field rows/line-height.."},{type:"number",name:"cols_attr",label:"Columns",changeProp:1,placeholder:"Enter field columns/width.."}].concat(i),classes:["comp_textarea"].concat(t.comps.comp_textarea.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:label_attr",e.genHtml),e.listenTo(e,"change:name_attr",e.genHtml),e.listenTo(e,"change:placeholder_attr",e.genHtml),e.listenTo(e,"change:cols_attr",e.genHtml),e.listenTo(e,"change:rows_attr",e.genHtml)}}),view:d}),n.addType("comp_file",{model:m.extend({defaults:c(c({},l.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_file",label_attr:"Choose file...",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"string",name:"accept_attr",label:"Accept",changeProp:1,placeholder:"image/jpeg, image/png, image/gif"}].concat(i),classes:["comp_file"].concat(t.comps.comp_file.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:label_attr",e.genHtml),e.listenTo(e,"change:name_attr",e.genHtml),e.listenTo(e,"change:placeholder_attr",e.genHtml),e.listenTo(e,"change:accept_attr",e.genHtml)}}),view:d}),n.addType("comp_checkbox",{model:m.extend({defaults:c(c({},m.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_checkbox",label_attr:"I accept the terms and use",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"}].concat(i),classes:["comp_checkbox"].concat(t.comps.comp_checkbox.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:label_attr",e.genHtml),e.listenTo(e,"change:name_attr",e.genHtml)}}),view:d}),n.addType("comp_hidden",{model:m.extend({defaults:c(c({},m.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_hidden",traits:[{type:"text",name:"name_attr",label:"Name",changeProp:1,placeholder:"Enter a field name..."}],classes:["comp_hidden"].concat(t.comps.comp_hidden.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:name_attr",e.genHtml)}}),view:d}),n.addType("comp_submit",{model:m.extend({defaults:c(c({},m.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_submit",label_attr:"Send",traits:l.prototype.defaults.traits.concat([{type:"text",name:"label_attr",label:"Label",placeholder:"Enter a field label.."}]),classes:["comp_submit"].concat(t.comps.comp_submit.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:label_attr",e.genHtml)}}),view:d}),n.addType("comp_row",{model:l.extend({defaults:c(c({},l.prototype.defaults),{},{tagName:"comp_row",draggable:!0,copyable:!1,droppable:"comp_col",classes:["comp_row"].concat(t.comps.comp_row.classes)})}),view:s}),n.addType("comp_col",{model:l.extend({defaults:c(c({},l.prototype.defaults),{},{tagName:"comp_col",draggable:"comp_row",droppable:!0,copyable:!1,classes:["comp_col"].concat(t.comps.comp_col.classes)})}),view:s}),n.addType("comp_recaptcha",{model:m.extend({defaults:c(c({},m.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_recaptcha",traits:l.prototype.defaults.traits.concat([{type:"text",name:"sitekey_attr",label:"Site key",placeholder:"V2 checkbox key"}]),classes:["comp_recaptcha"].concat(t.comps.comp_recaptcha.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:sitekey_attr",e.genHtml)}}),view:d}),n.addType("comp_stripe",{model:m.extend({defaults:c(c({},m.prototype.defaults),{},{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_stripe",hidepostal_attr:"false",traits:l.prototype.defaults.traits.concat([{type:"text",name:"publickey_attr",label:"Public key",placeholder:"e.g. stripe public key"},{type:"checkbox",name:"hidepostal_attr",label:"Hide postal"}]),classes:["comp_stripe"].concat(t.comps.comp_recaptcha.classes)}),init:function(){var e=this;e.myInitDefaults(),e.listenTo(e,"change:publickey_attr",e.genHtml)}}),view:d})}},846:function(e){e.exports=/<%=([\s\S]+?)%>/g},816:function(e,t,a){e=a.nmd(e);var n=a(846),r=a(502),o=9007199254740991,c="[object Arguments]",l="[object Error]",s="[object Function]",i="[object Object]",p="[object Symbol]",u=/\b__p \+= '';/g,m=/\b(__p \+=) '' \+/g,d=/(__e\(.*?\)|\b__t\)) \+\n'';/g,f=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,b=/^\[object .+?Constructor\]$/,g=/^(?:0|[1-9]\d*)$/,v=/($^)/,y=/['\n\r\u2028\u2029\\]/g,h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h[c]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h[l]=h[s]=h["[object Map]"]=h["[object Number]"]=h[i]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1;var _={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},j="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,w="object"==typeof self&&self&&self.Object===Object&&self,x=j||w||Function("return this")(),O=t&&!t.nodeType&&t,k=O&&e&&!e.nodeType&&e,T=k&&k.exports===O,P=T&&j.process,C=function(){try{var e=k&&k.require&&k.require("util").types;return e||P&&P.binding&&P.binding("util")}catch(e){}}(),L=C&&C.isTypedArray;function S(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function E(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}function N(e){return"\\"+_[e]}function D(e,t){return function(a){return e(t(a))}}var H,q=Function.prototype,M=Object.prototype,A=x["__core-js_shared__"],R=q.toString,I=M.hasOwnProperty,B=(H=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",F=M.toString,Z=R.call(Object),$=RegExp("^"+R.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),U=T?x.Buffer:void 0,V=x.Symbol,Q=D(Object.getPrototypeOf,Object),z=M.propertyIsEnumerable,W=V?V.toStringTag:void 0,G=function(){try{var e=function(e){return!(!Te(e)||function(e){return!!B&&B in e}(e))&&(Oe(e)?$:b).test(function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}(t=function(e,t){return null==e?void 0:e[t]}(Object,"defineProperty"))?t:void 0;return e({},"",{}),e}catch(e){}var t}(),X=U?U.isBuffer:void 0,J=D(Object.keys,Object),K=Math.max,Y=Date.now,ee=V?V.prototype:void 0,te=ee?ee.toString:void 0;function ae(e,t){var a=_e(e),n=!a&&he(e),r=!a&&!n&&we(e),o=!a&&!n&&!r&&Ce(e),c=a||n||r||o,l=c?function(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}(e.length,String):[],s=l.length;for(var i in e)!t&&!I.call(e,i)||c&&("length"==i||r&&("offset"==i||"parent"==i)||o&&("buffer"==i||"byteLength"==i||"byteOffset"==i)||ue(i,s))||l.push(i);return l}function ne(e,t,a){var n=e[t];I.call(e,t)&&ye(n,a)&&(void 0!==a||t in e)||re(e,t,a)}function re(e,t,a){"__proto__"==t&&G?G(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}function oe(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?function(e){var t=I.call(e,W),a=e[W];try{e[W]=void 0;var n=!0}catch(e){}var r=F.call(e);n&&(t?e[W]=a:delete e[W]);return r}(e):function(e){return F.call(e)}(e)}function ce(e){return Pe(e)&&oe(e)==c}function le(e){if(!Te(e))return function(e){var t=[];if(null!=e)for(var a in Object(e))t.push(a);return t}(e);var t=de(e),a=[];for(var n in e)("constructor"!=n||!t&&I.call(e,n))&&a.push(n);return a}function se(e,t){return ve(function(e,t,a){return t=K(void 0===t?e.length-1:t,0),function(){for(var n=arguments,r=-1,o=K(n.length-t,0),c=Array(o);++r<o;)c[r]=n[t+r];r=-1;for(var l=Array(t+1);++r<t;)l[r]=n[r];return l[t]=a(c),S(e,this,l)}}(e,t,De),e+"")}function ie(e){if("string"==typeof e)return e;if(_e(e))return E(e,ie)+"";if(function(e){return"symbol"==typeof e||Pe(e)&&oe(e)==p}(e))return te?te.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function pe(e,t,a,n){return void 0===e||ye(e,M[a])&&!I.call(n,a)?t:e}function ue(e,t){var a=typeof e;return!!(t=null==t?o:t)&&("number"==a||"symbol"!=a&&g.test(e))&&e>-1&&e%1==0&&e<t}function me(e,t,a){if(!Te(a))return!1;var n=typeof t;return!!("number"==n?je(a)&&ue(t,a.length):"string"==n&&t in a)&&ye(a[t],e)}function de(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||M)}var fe,be,ge,ve=(fe=G?function(e,t){return G(e,"toString",{configurable:!0,enumerable:!1,value:(a=t,function(){return a}),writable:!0});var a}:De,be=0,ge=0,function(){var e=Y(),t=16-(e-ge);if(ge=e,t>0){if(++be>=800)return arguments[0]}else be=0;return fe.apply(void 0,arguments)});function ye(e,t){return e===t||e!=e&&t!=t}var he=ce(function(){return arguments}())?ce:function(e){return Pe(e)&&I.call(e,"callee")&&!z.call(e,"callee")},_e=Array.isArray;function je(e){return null!=e&&ke(e.length)&&!Oe(e)}var we=X||function(){return!1};function xe(e){if(!Pe(e))return!1;var t=oe(e);return t==l||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!function(e){if(!Pe(e)||oe(e)!=i)return!1;var t=Q(e);if(null===t)return!0;var a=I.call(t,"constructor")&&t.constructor;return"function"==typeof a&&a instanceof a&&R.call(a)==Z}(e)}function Oe(e){if(!Te(e))return!1;var t=oe(e);return t==s||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ke(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}function Te(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Pe(e){return null!=e&&"object"==typeof e}var Ce=L?function(e){return function(t){return e(t)}}(L):function(e){return Pe(e)&&ke(e.length)&&!!h[oe(e)]};var Le,Se=(Le=function(e,t,a,n){!function(e,t,a,n){var r=!a;a||(a={});for(var o=-1,c=t.length;++o<c;){var l=t[o],s=n?n(a[l],e[l],l,a,e):void 0;void 0===s&&(s=e[l]),r?re(a,l,s):ne(a,l,s)}}(t,function(e){return je(e)?ae(e,!0):le(e)}(t),e,n)},se((function(e,t){var a=-1,n=t.length,r=n>1?t[n-1]:void 0,o=n>2?t[2]:void 0;for(r=Le.length>3&&"function"==typeof r?(n--,r):void 0,o&&me(t[0],t[1],o)&&(r=n<3?void 0:r,n=1),e=Object(e);++a<n;){var c=t[a];c&&Le(e,c,a,r)}return e})));function Ee(e){return je(e)?ae(e):function(e){if(!de(e))return J(e);var t=[];for(var a in Object(e))I.call(e,a)&&"constructor"!=a&&t.push(a);return t}(e)}var Ne=se((function(e,t){try{return S(e,void 0,t)}catch(e){return xe(e)?e:new Error(e)}}));function De(e){return e}e.exports=function(e,t,a){var o,c=r.imports._.templateSettings||r;a&&me(e,t,a)&&(t=void 0),e=null==(o=e)?"":ie(o),t=Se({},t,c,pe);var l,s,i,p=Se({},t.imports,c.imports,pe),b=Ee(p),g=(l=p,E(b,(function(e){return l[e]}))),h=0,_=t.interpolate||v,j="__p += '",w=RegExp((t.escape||v).source+"|"+_.source+"|"+(_===n?f:v).source+"|"+(t.evaluate||v).source+"|$","g"),x=I.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/[\r\n]/g," ")+"\n":"";e.replace(w,(function(t,a,n,r,o,c){return n||(n=r),j+=e.slice(h,c).replace(y,N),a&&(s=!0,j+="' +\n__e("+a+") +\n'"),o&&(i=!0,j+="';\n"+o+";\n__p += '"),n&&(j+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),h=c+t.length,t})),j+="';\n";var O=I.call(t,"variable")&&t.variable;O||(j="with (obj) {\n"+j+"\n}\n"),j=(i?j.replace(u,""):j).replace(m,"$1").replace(d,"$1;"),j="function("+(O||"obj")+") {\n"+(O?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+j+"return __p\n}";var k=Ne((function(){return Function(b,x+"return "+j).apply(void 0,g)}));if(k.source=j,xe(k))throw k;return k}},502:function(e,t,a){var n=a(846),r="[object Symbol]",o=/[&<>"']/g,c=RegExp(o.source),l="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,s="object"==typeof self&&self&&self.Object===Object&&self,i=l||s||Function("return this")();var p,u=(p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},function(e){return null==p?void 0:p[e]}),m=Object.prototype,d=m.hasOwnProperty,f=m.toString,b=i.Symbol,g=b?b.toStringTag:void 0,v=b?b.prototype:void 0,y=v?v.toString:void 0,h={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:n,variable:"",imports:{_:{escape:function(e){return(e=x(e))&&c.test(e)?e.replace(o,u):e}}}};function _(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?function(e){var t=d.call(e,g),a=e[g];try{e[g]=void 0;var n=!0}catch(e){}var r=f.call(e);n&&(t?e[g]=a:delete e[g]);return r}(e):function(e){return f.call(e)}(e)}function j(e){if("string"==typeof e)return e;if(w(e))return function(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}(e,j)+"";if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&_(e)==r}(e))return y?y.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}var w=Array.isArray;function x(e){return null==e?"":j(e)}e.exports=h},520:function(t){"use strict";t.exports=e},609:function(e){"use strict";e.exports=t}},n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={id:e,loaded:!1,exports:{}};return a[e](t,t.exports,r),t.loaded=!0,t.exports}return r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r(430)}()}));
//# sourceMappingURL=index.js.map