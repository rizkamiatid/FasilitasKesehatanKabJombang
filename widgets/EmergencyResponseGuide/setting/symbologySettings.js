// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/EmergencyResponseGuide/templates/Settings.html":'\x3cdiv\x3e\r\n    \x3c!-- Spill Location DropDown --\x3e\r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.spillLocationButtonLabel}" data-dojo-attach-point\x3d"spillLocationSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.spillLocationLabel}"\x3e${nls.spillLocationLabel}\x3c/div\x3e      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Spill Location Color Pickers --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"spillLocationContainer"\x3e      \r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"spillLocationOutlineColor" data-dojo-attach-point\x3d"spillLocationOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"spillLocationFillColor" data-dojo-attach-point\x3d"spillLocationFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Initial Isolation Zone DropDown --\x3e\r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.IIButtonLabel}" data-dojo-attach-point\x3d"IISettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.IISettingsLabel}"\x3e${nls.IISettingsLabel}\x3c/div\x3e      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Initial Isolation Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"IIZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"IIZoneOutlineColor" data-dojo-attach-point\x3d"IIZoneOutlineColorPicker"\x3e\x3c/div\x3e \r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"IIZoneFillColor" data-dojo-attach-point\x3d"IIZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n    \r\n    \x3c!-- Protective Action Zone DropDown --\x3e    \r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.PAButtonLabel}" data-dojo-attach-point\x3d"PASettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.PASettingsLabel}"\x3e${nls.PASettingsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Protective Action Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"PAZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"PAZoneOutlineColor" data-dojo-attach-point\x3d"PAZoneOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"PAZoneFillColor" data-dojo-attach-point\x3d"PAZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e \r\n    \r\n    \x3c!-- Downwind Zone DropDown --\x3e    \r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.downwindButtonLabel}" data-dojo-attach-point\x3d"downwindSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.downwindSettingsLabel}"\x3e${nls.downwindSettingsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Downwind Action Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"downwindZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"downwindZoneOutlineColor" data-dojo-attach-point\x3d"downwindZoneOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"downwindZoneFillColor" data-dojo-attach-point\x3d"downwindZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Fire Isolation DropDown --\x3e\r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e      \r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.fireButtonLabel}" data-dojo-attach-point\x3d"fireSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.fireSettingsLabel}"\x3e${nls.fireSettingsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Fire Isolation Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"fireZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"fireZoneOutlineColor" data-dojo-attach-point\x3d"fireZoneOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"fireZoneFillColor" data-dojo-attach-point\x3d"fireZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- BLEVE Isolation DropDown --\x3e\r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.bleveButtonLabel}" data-dojo-attach-point\x3d"bleveSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.bleveSettingsLabel}"\x3e${nls.bleveSettingsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- BLEVE Isolation Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"bleveZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"bleveZoneOutlineColor" data-dojo-attach-point\x3d"bleveZoneOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"bleveZoneFillColor" data-dojo-attach-point\x3d"bleveZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/on ./ColorPickerEditor jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!../templates/Settings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/query dijit/registry dijit/form/Select jimu/dijit/SymbolChooser".split(" "),function(l,f,d,c,m,n,p,q,b,r,h,g,e){return l([n,p,r],{baseClass:"jimu-widget-ERG-Settings",templateString:q,selectedSettings:{},colorPickerNodes:[],dropdownNodes:[],constructor:function(a){b.mixin(this,a)},
startup:function(){this.colorPickerNodes=g(".colorPicker",this.domNode);this.dropdownNodes=g(".dropdown",this.domNode);f.forEach(this.colorPickerNodes,b.hitch(this,function(a,b){a=new m({nls:this.nls,type:h.contains(a,"Line")?"line":"fill"},a);a.setValues({color:this.config.erg.symbology[a.id].color,transparency:this.config.erg.symbology[a.id].transparency});a.startup();a.dropdown.set("value",this.config.erg.symbology[a.id].type)}));this.onSettingsChanged()},postCreate:function(){this.inherited(arguments);
h.add(this.domNode,"ERGSettingsContainer ERGFullWidth");this._handleClickEvents()},_handleClickEvents:function(){this.own(c(this.spillLocationSettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.spillLocationSettingsButton,this.spillLocationContainer)})));this.own(c(this.IISettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.IISettingsButton,this.IIZoneContainer)})));this.own(c(this.PASettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.PASettingsButton,
this.PAZoneContainer)})));this.own(c(this.downwindSettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.downwindSettingsButton,this.downwindZoneContainer)})));this.own(c(this.fireSettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.fireSettingsButton,this.fireZoneContainer)})));this.own(c(this.bleveSettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.bleveSettingsButton,this.bleveZoneContainer)})))},_openCloseNodes:function(a,c){var e=g(".container",
this.domNode),t=g(".ERGSettingsButtonIcon",this.domNode),k=!1;a&&h.contains(a,"ERGLabelSettingsRightButton")&&(k=!0);f.forEach(e,b.hitch(this,function(a){d.addClass(a,"controlGroupHidden")}));f.forEach(t,b.hitch(this,function(a){d.removeClass(a,"ERGLabelSettingsDownButton");d.addClass(a,"ERGLabelSettingsRightButton")}));k&&(d.removeClass(c,"controlGroupHidden"),d.removeClass(a,"ERGLabelSettingsRightButton"),d.addClass(a,"ERGLabelSettingsDownButton"))},onClose:function(){this.onSettingsChanged();this._openCloseNodes()},
onSettingsChanged:function(){f.forEach(this.colorPickerNodes,b.hitch(this,function(a,b){b={color:e.byId(a.id).getValues().color,transparency:e.byId(a.id).getValues().transparency,type:e.byId(a.id).dropdown.getValue()};this.selectedSettings[a.id]=b}));this.emit("settingsChanged",this.selectedSettings)}})});