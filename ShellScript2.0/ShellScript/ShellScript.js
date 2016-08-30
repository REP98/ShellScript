/**
 * ShellScript
 * 
 * @author: Robert Pérez
 * 
 * @version:2.0
 * 
 * Esta libreria es de libre uso puede ser modificado, mejorado a execión de este comentario
 * el cual debera permanecer tal como esta, si usted modifica este código agrege a este su licencia
 * no lo modifique bajo ningún concepto.
 * Este framework es gratuito sin derecho comercial.
 * Cualquier modificacion u aptualización que haga y desee compartir. 
 * puede enviarlo a delfinmundo@gmail.com con sus nombre, apellido y direccion de contacto para ser
 * incluidad en esta libreria
 * 
 * Copyright 2015 ShellRumm.fp
 * Licencia https://creativecommons.org/licenses/by-nc-sa/4.0/
**/
(function(window, document, undefined) {
console.log(
	" _______   _______    _________\n"+
	"|  _____| |  _____|  |_______  |\n"+
	"| (_____  | (_____    _______| |\n"+
	"\\____   \\ \\____   \\  |  _______| \n"+
	"_____)  | _____)  |  | |_______    \n"+
	"\\_______| \\_______|  |_________| \n"
	
	);
/*
 * funciones
 */
	function sies(obj,type){
		return obj !== undefined && obj !== null && typeof obj === type;
	}
	function testHtmlCss(){
		var soport = {};
		var ns = {'svg': 'http://www.w3.org/2000/svg'};
		var testHtmlCss = {
			HTML5 : {
				input:[
				'date','email','tel','url','color','search','number','range',
				'week','month','time','datetime','datetime-local'
				]
			},
			version: "1.0",
			validadorHtml5: function (){
				var input = document.createElement("input");
				var	html5 = testHtmlCss.HTML5.input;
					soport.html = {};
				for(var i = 0; i <= html5.length - 1; i++){
					input.type = html5[i];
					if(!!(input.type === html5[i])){
						soport.html[html5[i]] = true;
					}
					else{
						soport.html[html5[i]] = false;
					}
				}
				var canvas = document.createElement('canvas');
					if(!!(canvas.getContext && canvas.getContext('2d'))){
						soport.html.Canvas = true;
					}else{
						soport.html.Canvas = false;
					}
				var video = document.createElement('video');
					if(!!(video.play)){
						soport.html.Video = {};
						if(video.canPlayType('video/ogg; codecs="theora"') !== null){
							soport.html.Video.OGG = true;
						}else{
							soport.html.Video.OGG = false;
						}
						if(video.canPlayType('video/mp4; codecs="avc1.42E01E"') !== null){
							soport.html.Video.Mp4 = true;
						}else{
							soport.html.Video.Mp4  = false;
						}
						if(video.canPlayType('video/webm; codecs="vp8, vorbis"') !== null){
							soport.html.Video.Webm = true;
						}else{
							soport.html.Video.Webm = false;
						}
					}else{
						soport.html.Video = false;
					}
				var audio = document.createElement('audio');
					if(!!(audio.play)){
						soport.html.Audio = {};
						if(audio.canPlayType('audio/ogg; codecs="vorbis"') !== null){
							soport.html.Audio.OGG = true;
						}else{
							soport.html.Audio.OGG = false;
						}
						if(audio.canPlayType('audio/mpeg;') !== null){
							soport.html.Audio.Mp3 = true;
						}else{
							soport.html.Audio.Mp3 = false;
						}
						if(audio.canPlayType('audio/wav; codecs="1"') !== null){
							soport.html.Audio.Wav = true;
						}else{
							soport.html.Audio.Wav = false;
						}
						if(audio.canPlayType('audio/x-m4a;') || audio.canPlayType('audio/aac;')){
							soport.html.Audio.m4a = true;
						}else{
							soport.html.Audio.m4a = false;
						}
					}else{
						soport.html.Audio = false;
					}
				var datalist = document.createElement('datalist');
					if(!!(document.createElement('datalist') && window.HTMLDataListElement)){
						soport.html.datalist = true;
					}else{
						soport.html.datalist = false;
					}
				if(!!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect){
					soport.html.svg = true;
				}
				else{
					soport.html.svg = false;
				}
			},
			validadorJS:function (){
				var body = document.body || document.createElement("body");
				soport.js = {};
				if(document.querySelector && typeof document.querySelector === "function"){
					soport.js.querySelector = true;
				}else{
					soport.js.querySelector = false;
				}
				if(document.querySelectorAll && typeof document.querySelectorAll === "function"){
					soport.js.querySelectorAll = true;
				}else{
					soport.js.querySelectorAll = false;
				}
				
				if(document.getElementsByClassName && typeof document.getElementsByClassName === "function"){
					soport.js.getElementsByClassName = true;
				}else{
					soport.js.getElementsByClassName = false;
				}
				
				if(window.navigator.geolocation && typeof window.navigator.geolocation === "object"){
					soport.js.geolocation = true;
				}else{
					soport.js.geolocation = false;
				}
				if('sessionStorage' in window && window['sessionStorage'] !== null){
					soport.js.sessionStorage = true;
				}else{
					soport.js.sessionStorage = false;
				}
				
				if('localStorage' in window && window['localStorage'] !== null){
					soport.js.localStorage = true;
				}else{
					soport.js.localStorage = false;
				}
				if(window.addEventListener && document.addEventListener){
					soport.js.addEventListener = true;
				}else{
					soport.js.addEventListener = false;
				}
				if(window.openDatabase){
					soport.js.openDatabase = true;
				}else{
					soport.js.openDatabase = false;
				}
				if( window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB){
					soport.js.indexedDB = true;
				}else{
					soport.js.indexedDB = false;
				}
				if( body.contentEditable !== null && typeof body.contentEditable  !== undefined){
					soport.js.contentEditable = true;
				}else{
					soport.js.contentEditable = false;
				}
				if( window.document.designMode !== null && typeof window.document.designMode  !== undefined){
					soport.js.designMode = true;
				}else{
					soport.js.designMode = false;
				}
				if( body.spellcheck){
					soport.js.spellcheck = true;
				}else{
					soport.js.spellcheck = false;
				}
				if(window.applicationCache){
					soport.js.applicationCache = true;
				}else{
					soport.js.applicationCache = false;
				}
				var span =document.createElement('div');
				if(("draggable" in span) || ("ondragstart" in span && "ondrop" in span)){
					soport.js.DragandDrop = true;
				}else{
					soport.js.DragandDrop = false;
				}
				soport.js.File = {};
				if(window.File){
					soport.js.File.File = true;
				}else{
					soport.js.File.File = false;
				}
				if(window.FileReader){
					soport.js.File.FileReader = true;
				}else{
					soport.js.File.FileReader = false;
				}
				if(window.FileList){
					soport.js.File.FileList = true;
				}else{
					soport.js.File.FileList = false;
				}
				if(window.Blob){
					soport.js.File.Blob = true;
				}else{
					soport.js.File.Blob = false;
				}
				if(typeof window.postMessage === 'function'){
					soport.js.WebMessaging = true;
				}else{
					soport.js.WebMessaging = false;
				}
				if(typeof(Worker) !== undefined){
					soport.js.Worker = true;
				}else{
					soport.js.Worker = false;
				}
				if( 'WebSocket' in window || 'MozWebSocket' in window){
					soport.js.WebSocket = true;
				}else{
					soport.js.WebSocket = false;
				}
				if( ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					soport.js.Touch = true;
				}else{
					soport.js.Touch = false;
				}
				if(window.webkitRequestFileSystem){
					soport.js.webkitRequestFileSystem = true;
				}else{
					soport.js.webkitRequestFileSystem = false;
				}
			},
			validadorCss: function(){
				var body = document.body || document.createElement("body");
				var	bodyStyle = body.style;
					soport.css = {};
				var ext = ["webkit","Moz","o","ms",""];
				var cssrules = [
					"Animation","transform","Appearance",'backgroundClip',
					"backgroundOrigin","backgroundSize","borderRadius",
					"borderImage","boxShadow","columnCount","boxReflect","boxSizing",
					"filter","perspective","transition","UserSelect","textShadow","zoom"
				];
				for(var i = 0; i<=ext.length -1; i++){
					for(var j = 0; j<= cssrules.length -1; j++){
						if(ext[i]+cssrules[j] in bodyStyle){
							soport.css[ext[i]+cssrules[j]] = true;
						}
						else{
							soport.css[ext[i]+cssrules[j]] = false;
						}
					}
				} 
				function valueCss(prop,type){
					return !!~('' + prop).indexOf(type);
				}
				if(window.matchMedia || window.msMatchMedia){
					soport.css.matchMedia = true;
				}
				else{
					soport.css.matchMedia = false;
				}
			},
			validador: function(){
				testHtmlCss.validadorHtml5();
				testHtmlCss.validadorJS();
				testHtmlCss.validadorCss();
			}
		}
		testHtmlCss.validador();
		return soport;
	};
	var xhrStatus = {
		NO:0,
		CARGANDO	:1,
		CARGADO		:2,
		INTERACTIVO	:3,
		COMPLETO	:4
	}
	
	function XHR(){
		if(window.XMLHttpRequest){
			return new window.XMLHttpRequest(); 
		}
		else if(window.ActiveXObject){	
			var versionesObj = [
				'Msxml2.XMLHTTP.5.0',
				'Msxml2.XMLHTTP.4.0',
				'Msxml2.XMLHTTP.3.0',
				'Msxml2.XMLHTTP',
				'Microsoft.XMLHTTP'];
			var h=versionesObj.length;
			for (var i = 0; i < h; i++){
				try{
					return new ActiveXObject(versionesObj[i]);
				}
				catch (e){}
			}
		}
	}
	function readXhr(x,c,m,e){
		var status, ready, respuesta;
		if(x){
			ready=x.readyState;
			if(ready === xhrStatus.COMPLETO){
				status = x.status;
				if(status == 200 || status == 0){
					respuesta = x.responseText || x.responseXML;
					if(respuesta !== null){
						respuesta = S.getScript(respuesta);
						t = S.getJson(respuesta);
						if(S.esObj(t) || S.esArray(t)){
							c.call(x,t.text,t.json);
						}
						else{
							c.call(x,respuesta);
						}
					}
				}
				else if(status == 404){
					e.call(x);
					S.error('ERROR 404: la Pagina '+ x.responseURL+' no fue encontrada, verifique que la ruta sea correcta');
				}
				else if(status == 500){
					e.call(x);
					S.error('ERROR 500: El Servidor no Responde a su solicitud');
				}
				else{
					e.call(x);
				}
				return true;
			}
			else if(ready == xhrStatus.CARGANDO
					|| ready == xhrStatus.CARGADO
					|| ready == xhrStatus.INTERACTIVO
					)
			{
				m.call(this);
				return true;
			}
		}
		return null;
	}
	
	function writeXHR(valore){
		var data = [],m = [], td = [];
		var d = function(k,v){
			v = (v == null)?"":v;
			data[data.length] = encodeURIComponent(k) + "=" +  encodeURIComponent(v);
		}
		var objk = function(l,v){
			var ts = [];
			if(S.esArray(v) || S.esObj(v)){
				S.forEach(v,function(k, f){
					if(S.esArray(f) || S.esObj(f)){
						var r = [];
						S.forEach(f,function(h,p){
							r [r.length] = l + "["+encodeURIComponent(k)+"]" + "["+encodeURIComponent(h)+"] =" + encodeURIComponent(p);
						})
						ts [ts.length] =  r.join('&').replace(/%20/g,'+');
					}
					else{
						ts [ts.length] = l + "["+encodeURIComponent(k)+"]"+ "=" +  encodeURIComponent(f);
					}
				})
			}
			return ts.join('&').replace(/%20/g,'+');;
		}
		if(S.esArray(valore) || S.esObj(valore)){
			S.forEach(valore,function(k, v){
				if(S.esArray(v) || S.esObj(v)){
					S.forEach(v,function(i,n){
						if(S.esArray(n) || S.esObj(n)){
							m [m.length] =   objk(encodeURIComponent(k)+ "["+encodeURIComponent(i)+"]",n);
						}
						else{
							m [m.length]= encodeURIComponent(k)+ "["+encodeURIComponent(i)+"]"+ "=" +  encodeURIComponent(n);
						}
					})
					data[data.length] = m.join('&').replace(/%20/g,'+');
				}
				else{
					d(k,v);
				}
			})
			data = data.join('&').replace(/%20/g,'+');
		}
		else{
			data = valore;
		}
		return data;
	};
	var xhrDefault={
		url:'',
		metodo:'POST',
		datos:null,
		completo:'',
		mientras:'',
		error:'',
		user:null,
		pas:null,
		heads:'x-www',
		getHead:null,
		file:false
	};
	
	var xhrhead = {
		'x-www':'application/x-www-form-urlencoded',
		text: "text/plain",
		html: "text/html",
		xml: "application/xml, text/xml",
		json: "application/json, text/javascript",
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
		file:'multipart/form-data'
	};
	var includeExten = ['js','json'];
	function includeExis (src){
		var elem = S('.ShellScript');
		if(elem.length > 1){
			S.forEach(elem,function(i, v){
				if(v.src == S.url_active().url+src){
					S(v).remover();
				}
			})
		}
		else if(elem.length == 1){
			elem.remover();
		}
	}
	/*
	 *Creacion del Objeto Shell 
	*/
	
	var Shell = window.Shell;
	var checkLink = 0;
	var classide = {};
	var	Shell_toString	= classide.toString || Object.prototype.toString;
	
	
	Shell = function(Selector, Opciones){
		return new Shell.sr.init(Selector, Opciones);
	};
	Shell.sr = Shell.prototype = {
		version: "2.0",
		constructor: Shell,
		name: 'ShellScript',
		length: 0,
		sort: [].sort,
		splice: [].splice,
		init:function(Selector, Opciones){
			var element,elem,Nelem;
			if(!Selector){
				return this;
			}
			if(checkLink == 0){
				var dlink = document.querySelectorAll('link');
				var no = false;
				function obtRuta (){
					var s, d = document.scripts;
					for(var k in d){
						if(d.hasOwnProperty(k)){
							v = d[k];
							if(v.src !== "" && v.src !== undefined){
								if(v.src.indexOf('ShellScript/ShellScript.js') != -1){
									var f = v.src;
									s = f.replace('ShellScript/ShellScript.js',"");
								}
							}
						}
					}
					return s;
				}
				var themes = "Shell";
				if(document.documentElement.dataset.themen != undefined){
					themes = document.documentElement.dataset.themen;
				}
				var rutacss = obtRuta()+"ShellScript/css3/"+themes+"/ShellScript.css";
				function Addlink(){
					var link = document.createElement('link');
					link.href = rutacss;
					link.rel = "stylesheet";
					link.themes = themes;
					document.head.appendChild(link);
				}
				if(dlink.length >= 1){
					Shell.forEach(dlink,function(i,c){
						if(i != "length"){
							if(c.href.indexOf('ShellScript.css') == -1){
								no = true;
							}
							else{
								no = false;
							}	
						}
					})
				}
				else{
					no = true;
				}
				if(no){
					Addlink();
					checkLink = 1;
				}
			}
			if((document.querySelector && typeof document.querySelector === "function") && 
				(document.querySelectorAll && typeof document.querySelectorAll === "function")
			){
				if(sies(Selector,'string')){
					if(sies(Opciones,'object')){
						Nelem = 0;
						elem = document.createElement(Selector);
						for(var k in Opciones){
							if(Shell.sr.hasOwnProperty(k) && k != 'length'){
								S(elem)[k](Opciones[k]);
							}else{
								elem[k]=Opciones[k];
							}
						}
						elem._generador='SS';
						elem._version='2.0';
						this.thisElement = elem;
						this.length = 1;
						this.selector = Selector;
						this.padre=null;
						return this;
					}
					else if(sies(Opciones,'string') && contexto != undefined){
						Nelem = 0;
						elem = document.createElement(Selector);
						elem._generador='SS';
						elem._version='2.0';
						if(Shell.sr.hasOwnProperty(Opciones)){
								S(elem)[Opciones](contexto);
							}else{
								elem[Opciones]=contexto;
							}
						this.thisElement = elem;
						this.length = 1;
						this.selector = Selector;
						this.padre=null;
						return this;
					}
					else{
						Nelem = document.querySelectorAll(Selector).length;
					}
					
					if(Nelem == 1){
						elem = document.querySelector(Selector);
						elem._generador='SS';
						elem._version='2.0';
						this.length = 1;
						this.thisElement = elem;
						this.selector = Selector;
						this.padre=elem.parentNode;
						return this;
					}
					else if(Nelem >= 2){
						var elementos=[];
						var padre=[];
						var elem = document.querySelectorAll(Selector);
						var	l = elem.length;
							for(var v in elem){
								if(elem.hasOwnProperty(v)){
									if(elem[v] && elem[v].nodeName){
										var y = elem[v];
										y._generador='SS';
										y._version='2.0';
										elementos.push(y);
										padre.push(y.parentNode);
									}
								}
							}
						this.thisElement=elementos;
						this.length=elementos.length;
						this.selector = Selector;
						this.padre=padre;
						return this;
					}
					else{
						this.selector = Selector
						this.length = 0;
						return this;
					}
				}
				else if(Selector.nodeType || Selector == Selector.window)
				{
					Selector._generador='SS';
					Selector._version='2.0';
					this.thisElement = Selector;
					this.length = 1;
					this.padre= (Selector.parentNode != undefined)?Selector.parentNode:Selector;
					return this;
				}
				else if(sies(Selector,'function')){
					document.addEventListener( "DOMContentLoaded", Selector, false );
					return this;
				}
				else{
					throw new Error( "Selector: "+Selector+" ("+typeof Selector+") no es soportado" );
				}
				
				if ( Selector.Selector !== undefined ) 
				{
					this.Selector = Selector.Selector;
				}
			}
			else{
				throw new Error( "ShellScript no es soportado por este navegador" );
			}
			return this;
		}
	}
	Shell.sr.init.prototype = Shell.sr;
	
	Shell.Nodo = (typeof Node !== undefined)? Node: {
		ELEMENT_NODE: 1,
		ATTRIBUTE_NODE: 2,
		TEXT_NODE: 3,
		CDATA_SECTION_NODE: 4,
		ENTITY_REFERENCE_NODE: 5,
		ENTITY_NODE: 6,
		PROCESSING_INSTRUCTION_NODE: 7,
		COMMENT_NODE: 8,
		DOCUMENT_NODE: 9,
		DOCUMENT_TYPE_NODE: 10,
		DOCUMENT_FRAGMENT_NODE: 11,
		NOTATION_NODE: 12
	};
	Shell.forEach = function(obj, fn, context, infi ){
		var e = 0;
		var fn = (sies(fn,'function'))?fn:function(i,v){ 
												obj[e] = {
														'key':i,
														'value':v
														} 
													e++;
											};
		var context = (sies(context,'object'))?context:null;
		var infi = (sies(infi,'object'))?infi:null;
		if(sies(obj,'function')){
			for(var i in obj){
				if(i != 'prototype' && i !== 'length' && i != 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(i))){
					if(fn != null && fn !== undefined){
						fn.call(obj, i, obj[i]);
					}
					else{
						obj.call(obj, i, obj[i]);
					}
				}
			}
		}
		else if(sies(obj,'object') && sies(fn,'function') && context !== null && infi !== null){
			for(var i = infi[0]; i <= infi[1]; i++){
				context[context.length] = obj[i];
				fn.call(obj, i, obj[i]);
			}
			obj = context;
		}
		else if(sies(obj,'object') && sies(fn,'function') && context !== null){
			if(obj.length == undefined){
				for(var i in obj){
					if(obj.hasOwnProperty(i)){
						context[i] = obj[i];
						fn.call(obj, i, obj[i]);
					}
				}
				obj = context;
			}
			else{
				for(var i = 0; i< obj.length; i++){
					context[i] = obj[i];
					fn.call(obj, i, obj[i]);
				}
				obj = context;
			}
		}
		else{
			for(var key in obj){
				if(obj.hasOwnProperty(key)){
					fn.call(obj, key, obj[key]);
				}
			}
		}
		return obj;
	};
	Shell.sr.forEach  = function(fn, context, infi){
		var elem = this.thisElement;
		var elems = (S.esArray(elem))?elem:[elem];
		return Shell.forEach(elems,fn,context, infi);
	};
	
	Shell.ampliar = Shell.sr.ampliar = function(){
		var args = arguments;
		var l = args.length;
		var target = args[0];
		if ( typeof target !== "object" && typeof target !== 'function') 
		{
			target = {};
		}
		if(l === 1){
			target = this;
		}
		Shell.forEach(arguments,function(i,v){
			if(v !== target){
				Shell.forEach(v,function(k,f){
					target[k] = f;
				})
			}
		})
		return target;
	}
	Shell.eventos = function(element,e,type){
		var html = document.documentElement;
		var body = document.body;
		this.original = e;
		this.elem = element;
		this.type = type || e.type;
		if (!e.target){
			this.target = e.srcElement || document;
		}
		if(e.type == 'keydown' || e.type == "keypress" || e.type == "keyup"){
			this.location = e.location;
		}
		if(S.esUndefined(e.defaultPrevented)){
			var prevent = e.preventDefault;
				this.preventDefault = function() {
				e.defaultPrevented = true;
				prevent.call(e);
			};
			this.defaultPrevented = false;
		}
		this.isDefaultPrevented = function() {
			return e.defaultPrevented || e.returnValue === false;
		};
		this.charCode = (e.type == "keypress") ? e.keyCode : 0;
		if(e.pageX == null){
			this.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html && html.clientLeft || 0);
			this.pageY = e.clientY + (html && html.scrollTop ||body && body.scrollTop || 0) - (html && html.clientTop || 0);
		}
		
		this.timeStamp = e.timeStamp || (new Date).getTime();
		var SE = this;
		for(var k in e){
			if(!SE.hasOwnProperty(k)){
				if(k == 'webkitMovementX'){
					k = 'movementX';
				}
				if(k == 'webkitMovementY'){
					k = 'movementY';
				}
				SE[k] = e[k];
			}
		}
		this.cancelEv = function ()
		{ 
			var e = SE.original || window.event; 
			if(!e){return;}
			if(e.preventDefault) 
			{
				e.preventDefault(); 
			}
			else 
			{
				e.returnValue=false; 
			}
		};
		this.stopEv = function (){ 
			var e= SE.original || window.event; 
			if(e.stopPropagation) 
			{
				e.stopPropagation();
			} 
			else 
			{
				e.cancelBubble=true; 
			} 
		};
		return this;
	};
	var fns = function(fn,elem){
		return function(e){
			var d = new Shell.eventos(elem,e);
			fn.call(this,d);
		};
	}
	Shell.event = {
		Add:function(elem, event, fn){
			S.asigFun(elem, function(v){
				var fun = fns(fn,v);
				if(v.addEventListener) { 
					v.addEventListener(event,fun, false);
				}
				else if(v.attachEvent) { 
					v.attachEvent("on"+event, fun);
				}
				if(S.esUndefined(elem.FunAsig)){
					elem.FunAsig = {};
				}
				elem.FunAsig[event] = fun;
			})
		},
		Remove:function(elem, event){
			if(!S.esElem(elem)){
				return;
			}
			S.asigFun(elem, function(v){
				var remover = function(elements,events,fun){
					if(elements.removeEventListener){
						elements.removeEventListener(events,fun, false);
					}
					else if(elements.detachEvent) { 
						elements.detachEvent("on"+event, fun);
					}
				}
				if(S.esObj(v.FunAsig)){
					S.forEach(v.FunAsig,function(i,o){
						if(S.esUndefined(event)){
							remover(v, i, o);
						}
						else if(i == event){
							remover(v, event, o);
						}
					})
				}
			})
		},
		Get:function(){
			return new Shell.eventos(arguments[0],arguments[1]);
		},
		simula:function(element,event,type){
			var elem = element.thisElement;
			if(document.createEvent){
			 var evObj = document.createEvent(type);
				evObj.initEvent( event, true, false );
				elem.dispatchEvent( evObj );
			}
		}
	};
	
	Shell.ampliar({
		SilenciaError: function(){
			Shell.event.Add(window,'error',function(e){
				e.cancelEv();
				e.stopEv();
				return false;
			});
		},
		Simula: function(element,event){
			//var eventss=(" dragenter dragover dragleave dragstart dragend touchstart touchend touchmove").split(" ");
			var mouse = ("click dblclick mouseout mouseover mousemove mousedown mouseup").split(" ");
			var events = ("change").split(" ");
			var FocusEvent = ("blur focus").split(" ");
			var Keys = ("keydown keyup keypress").split(" ");
			var type = "";
			if(S.enArray(event,mouse) != -1){
				type = "MouseEvents";
			}
			if(S.enArray(event,events) != -1){
				type = "Event";
			}
			if(S.enArray(event,FocusEvent) != -1){
				type = "FocusEvent";
			}
			if(S.enArray(event,Keys) != -1){
				type = "KeyboardEvent";
			}
			return S.event.simula(element,event,type);
		},
		errors: function() {
			var er = "===ShellError==\n";
			var msg = '';
			var msm = (S.key_existe(0,arguments))?arguments[0]:'';
			var url = (S.key_existe(1,arguments))?arguments[1]:'';
			var linea = (S.key_existe(2,arguments))?arguments[2]:'';
			var Columna = (S.key_existe(3,arguments))?arguments[3]:'';
				if(arguments.length > 0){
					er += "la pagina "+url+" ha devuelto un error en la linea "+linea 
						+" Columna "+Columna + "\nmensaje: "+msm;
				}
			throw new Error( er );
		},
		Soporte: function(addclass){
			var soport = testHtmlCss();
				addclass = (S.esUndefined(addclass))?false:addclass;
			if(!addclass){
				return soport;
			}
			else{
				S.forEach(soport,function(i, v){
					if(S.esObj(v)){
						S.forEach(v,function(m,n){
							if(S.esObj(n)){
								S.forEach(n,function(h,t){
									if(t){
										S('html').AddClass(m+h);
									}
								})
							}
							else{
								if(n){
									S('html').AddClass(m);
								}
							}
							
						})
					}
				})
				return true;
			}
		},
		getSoporte:function( propety ){
			var p;
			var soport = testHtmlCss();
			if(soport.hasOwnProperty(propety)){
				return soport[propety];
			}
			else{
				S.forEach(soport,function(i,v){
					if(S.esArray(v) || S.esObj(v)){
						if(v.hasOwnProperty(propety)){
							p =  v[propety];
						}
					}
				})
				return p;
			}
			return false;
		},
		asigFun: function(elem, fn){
			if(S.esElem(elem) || S.esWindow(elem)){
				elem = [elem];
			}
			S.forEach(elem,function(i,v){
				if(S.esElem(v)){
					fn.call(elem,v);
				}
			})
			return elem;
		},
		enArray: function ( obj, array ) 
		{
			if (array.indexOf)
			{
				return array.indexOf(obj);
			}
			else if(S.esArray(array)){
				for (var i = 0; i < array.length; i++) 
				{
					if (obj === array[i]) return i;
				}
			}
			else if(S.esObj(array)){
				for(i in array){
					if (obj === array[i]) return i;
				}
			}
			return -1;
		},
		esArray : function(obj){
			return obj && obj.length != undefined && Shell_toString.call(obj) === "[object Array]";
		},
		esElem: function( node ){
			return !!(node && (node.nodeName  
			|| (node.prop && node.attr && node.find)));
		},
		esFecha:function ( value ) {
			return Shell_toString.call(value) === '[object Date]';
		},
		esNumero: function( obj ) {
			return !isNaN( parseFloat(obj) ) && isFinite( obj );
		},
		esRegExp: function ( value ) {
			return Shell_toString.call(value) === '[object RegExp]';
		},
		esWindow: function( obj ) {
			return obj != null && obj == obj.window;
		},
		esUndefined:function(obj){
			return (obj === undefined)?true:typeof obj === undefined;
		},
		esVisible:function(obj){
			if(!obj.hidden){
				return true;
			}
			else if(obj.style){
				if(obj.style.display != 'none' && obj.style.display != 'hide' && obj.style.display != ""){
					return true;
				}
				else if(obj.style.opacity != 0){
					return true;
				}
				else if(obj.style.visibility == 'visible'){
					return true;
				}
				return false;
			}
			return false;
		},
		ObjLength:function( obj ){
			if(obj.length != undefined)
			{
				return obj.length;
			}
			else
			{
				var e=0;
				Shell.forEach(obj, function(i, v){
					e++;
				})
				return e;
			}
			return 0;
		},
		key_existe: function(k,arr){
			if(Shell.esArray(arr) || S.esObj(arr)){
				if(arr.hasOwnProperty(k)){
					return arr[k];
				}
				else{
					return false;
				}
			}
			else{
				return false;
			}
		},
		existe:function(id)
		{
			if(Shell(id).length != 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		},
		Classexiste: function(elem,nclass){
			var elem = S.Element(elem);
			if(elem){
				return elem.thisElement.classList.contains(nclass);
			}
			return false;
		},
		url_active:function()
		{
			var url=location.href;
			var barra=url.lastIndexOf('/');
				direccion='';
				file='';
			for(var i=0; i<=barra; i++)
			{
				direccion+=url[i];
			}
			for(var i=barra+1; i<=url.length-1; i++)
			{
				file+=url[i];
			}
			var ruta={
					origen:location.origin,
					path:location.pathname,
					protocolo:location.protocol,
					hostname:location.hostname,
					url:direccion,
					file:file
				};
			return ruta;
		},
		Element:function(Selector){
			var elem;
			if(Selector != null){
				if(S.esString(Selector)){
					elem = S(Selector);
				}
				else if(Selector && Selector.nodeType && S.esElem(Selector)){
					elem = S(Selector);
				}
				else if(Selector.hasOwnProperty("thisElement"))
				{
					elem = Selector;
				}
			}
			return elem;
		},
		navegador: function()
		{
			var nav=window.navigator;
			var navegadorinfor={
				appCodeName:nav.appCodeName,
				getUserMedia: nav.getUserMedia,
				appName:nav.appName,
				userAgent: nav.userAgent,
				cookie: nav.cookieEnabled,
				leng:nav.language || nav.userLanguage,
				java:nav.javaEnabled,
				SO: nav.platform,
				vendor: nav.vendor,
				plugins:nav.plugins,
				version: nav.appVersion
			}
			if(S.getSoporte('geolocation')){
				navegadorinfor.geolocation=nav.geolocation;
			}
			return navegadorinfor;
		},
		pantalla: function()
		{
			var dap=window.screen;
			var pantalla={
				alto:dap.availHeight,
				ancho:dap.availWidth,
				color:dap.colorDepth,
				altoT:dap.height,
				anchoT:dap.width
			}
			return pantalla;
		},
		resize:function(fn){
			if(S.esFuncion(fn)){
				window.onresize = fn;
			}
			return this;
		},
		scroll:function(fn){
			if(S.esFuncion(fn)){
				window.onscroll = fn;
			}
			return this;
		},
		load:function(fn){
			if(S.esFuncion(fn)){
				window.onload = fn;
			}
			return this;
		},
		contextMenu: function( action )
		{
			S(document).sp("contextmenu",function(e){
				e.cancelEv();
				e.stopEv();
				var fun=Shell.esFuncion(action);
				if(fun)
				{
					action.call(this,e);
				}
				return false;
			})
			
			return this;
		},
		HexDec:function(h){
			return parseHex(h);
		},
		DecHex:function(n){
			n = parseInt(n,10);
			if (!S.esNumero(n))
			{
				return "00";
			}
			n = Math.max(0,Math.min(n,255));

			return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
		},
		radDeg: function(deg){
			return deg * Math.PI / 180;
		},
		Num_Por:function(n){
			return (n*100);
		},
		porcentaje:function(n,p){
			var m, por, resul, tantoPosiento = false;
			if(!S.esNumero(n) && n.indexOf('%') != -1){
				m = parseInt(n);
				tantoPosiento = true;
			}
			else{
				m = n; tantoPosiento = false;
			}
			if(tantoPosiento){
				resul = (m / 100) * p;
			}else{
				resul = (n / p) * 100;
			}
			return resul;
		},
		Hex_Rgb:function (hex)
		{
			var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			hex = hex.replace(shorthandRegex, function(m, r, g, b) {
					return r + r + g + g + b + b;
			});
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
				return result ? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16)
				} : null;
		},
		Rgb_Hex:function(r,g,b)
		{
			hex='';
			hex+=(!S.esUndefined(r))?S.DecHex(r):'';
			hex+=(!S.esUndefined(g))?S.DecHex(g):'';
			hex+=(!S.esUndefined(b))?S.DecHex(b):'';
			
			return hex;
		},
		Rgb_Hsl:function(r,g,b){
				r /= 255;
				g /= 255;
				b /= 255;
			var max = Math.max(r, g, b);
			var min = Math.min(r, g, b);
			var h, s, l = (max + min) / 2;
			if(max == min){
				h = 0;
				s = h;
			}else{
				var d = max - min;
					s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch(max){
					case r: 
						h = (g - b) / d + (g < b ? 6 : 0); 
					break;
					case g: 
						h = (b - r) / d + 2; 
					break;
					case b:
						h = (r - g) / d + 4; 
					break;
				}
				
				h /= 6;
			}
			return {
				h:Math.round(h * 360),
				s:Math.round(S.Num_Por(s))+"%",
				l:Math.round(S.Num_Por(l))+"%"
				};
		},
		Rgba_Hsla:function(r,g,b, a){
			var hsl = S.Rgb_Hsl(r,g,b);
			return {
				h:hsl.h,
				s:hsl.s,
				l:hsl.l,
				a:a
			};
		},
		Hsl_Rgb:function(h,s,l){
			h = h / 360;
			s = s / 100;
			l = l / 100;
			var r, g, b;
			if(s == 0){
				r = g = b = l;
			}else{
				function hue2rgb(p, q, t){
					if(t < 0) t += 1;
					if(t > 1) t -= 1;
					if(t < 1/6) return p + (q - p) * 6 * t;
					if(t < 1/2) return q;
					if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
					return p;
				}

				var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
				var p = 2 * l - q;
				r = hue2rgb(p, q, h + 1/3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1/3);
			}
			return {
				r:Math.round(r*255),
				g:Math.round(g*255),
				b:Math.round(b*255)
			}
		},
		Hsla_Rgba:function(h,s,l,a){
			var f = S.Hsl_Rgb(h,s,l);
			return {
				r:f.r,
				g:f.g,
				b:f.b,
				a:a
			}
		},
		htmlentities: function ( html )
		{
			var nh = "";
			var n = false;
			var code = {
				'!':"&#33;", '"': "&#34;",'#':'&#35;','$': "&#36;","%":"&#37;",
				"&":"&amp;", "'":"&#39;","(":"&#40;",")":"&#41;","*":"&#42;",
				"+":"&#43;", ",":"&#44;","-":"&#45;",".":"&#46;","/":"&#47;",
				":":"&#58;", ";":"&#59;","<":"&lt;","=":"&#61;",">":"&gt;",
				"?":"&#63;", "@":"&#64;","[":"&#91;","\\":"&#92;","]":"&#93;",
				"^":"&#94;", "_":"&#95;","`":"&#96;","{":"&#123;","|":"&#124;",
				"}":"&#125;","~":"&#126;","¡":"&#161;","¢":"&#162;","£":"&#163;",
				"¥":"&#165;","¦":"&#166;","§":"&#167;","¨":"&#168;","©":"&copy;",
				"ª":"&#170;","«":"&#171;","¬":"&#172;","®":"&reg;","¯":"&#175;",
				"°":"&deg;", "±":"&#177;","²":"&#178;","³":"&#179;","´":"&#180;",
				"µ":"&#181;","¶":"&#182;","·":"&#183;","¸":"&#184;","¹":"&#185;",
				"º":"&#186;","»":"&#187;","¼":"&#188;","½":"&#189;","¾":"&#190;",
				"¿":"&#191;","À":"&#192;","Á":"&Aacute;","Â":"&#194;","Ã":"&#195;",
				"Ä":"&#196;","Å":"&#197;","Æ":"&#198;","Ç":"&#199;","È":"&#200;",
				"É":"&Eacute;","Ê":"&#202;","Ë":"&#203;","Ì":"&#204;","Í":"&#205;",
				"Î":"&#206;","Ï":"&#207;","Ð":"&#208;","Ñ":"&#209;","Ò":"&#210;",
				"Ó":"&#211;","Ô":"&#212;","Õ":"&#213;","Ö":"&#214;","×":"&#215;",
				"Ø":"&#216;","Ù":"&#217;","Ú":"&#218;","Û":"&#219;","Ü":"&#220;",
				"Ý":"&#221;","Þ":"&#222;","ß":"&#223;","à":"&#224;","á":"&#225;",
				"â":"&#226;","ã":"&#227;","ä":"&#228;","å":"&#229;","æ":"&#230;",
				"ç":"&#231;","è":"&#232;","é":"&#233;","ê":"&#234;","ë":"&#235;",
				"ì":"&#236;","í":"&#237;","î":"&#238;","ï":"&#239;","ð":"&#240;",
				"ñ":"&#241;","ò":"&#242;","ó":"&#243;","ô":"&#244;","õ":"&#245;",
				"ö":"&#246;","÷":"&#247;","ø":"&#248;","ù":"&#249;","ú":"&#250;",
				"û":"&#251;","ü":"&#252;","ý":"&#253;","þ":"&#254;","ÿ":"&#255;",
				"Œ":"&#338;","œ":"&#339;","Š":"&#352;","š":"&#353;","Ÿ":"&#376;",
				"ƒ":"&#402;","—":"&#8212;"
			};
			var ah = html.split("");
			S.forEach(ah,function(i,v){
				n = S.key_existe(v,code);
				if(n){
					nh += n;
				}
				else{
					nh += v;
				}
			})
			return nh;
		},
		html_entity_decode: function ( html )
		{
			return decodeURIComponent( html );
		},
		RemoveScript: function( html ) 
		{ 
            return html.replace(new RegExp('(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)', 'img'), ''); 
		},
		getScript: function(cad){
			var k = [];
			var c = [];
			var exe = function(arr){
				if(S.esArray(arr) || S.esObj(arr)){
					S.forEach(arr,function(i, v){
						var t = "";
						if(v.indexOf(S.url_active().url) != -1){
							 t = v.replace(S.url_active().url,"");
						}
						else
						{
							 t = v;
						}
						S.include(t);
					})
				}
			}
			var srcscripts = new RegExp('(?:<script src.*?>)(?:<\/script>)', 'img');
			var scripts = new RegExp('(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)', 'img');
			var d = cad.match(scripts);
			if(d != null){
				S.forEach(d,function(i, v){
					var t = v.match(srcscripts);
					if(t != null){
						S.forEach(t,function(l,g){
							var a = (g.indexOf('"') != -1)?g.indexOf('"'):((g.indexOf("'") != -1)?g.indexOf("'"):0);
							var b = (g.lastIndexOf('"') != -1)?g.lastIndexOf('"'):((g.lastIndexOf("'") != -1)?g.lastIndexOf("'"):0);
							var ruta = g.slice(a+1,b);
							k.push(ruta);
						})
					}
					else{
						l = v.replace(/<script.*?>/img,"");
						l = l.replace(/<\/script>/img,"");
						c.push(l);
					}
				})
				if(k.length > 0){ exe(k); }
				if(c.length > 0){ exe(c); }
			}
			cad = S.RemoveScript(cad);
			return cad;
		},
		getJson:function(json){
			var k = '';
			var i = (json.indexOf("{\"") != -1)?json.indexOf("{\""):0;
			var f = (json.lastIndexOf("\"}") != -1)?json.lastIndexOf("\"}"):0;
			if(i  == 0 && f == 0){
				return json;
			}
			else{
				yoson = json.slice(i,f+2);
				k = S.include(yoson,'json');
				return {
					text : json.replace(yoson,""),
					json : k
				};
			}
		},
		Atras:function()
		{
			window.history.back();
			return this;
		},
		Siguiente:function()
		{
			window.history.forward();
			return this;
		},
		getWindowDataWH:function (){
			var WV,HV,
				XS,YS,
				WT,HT,
				html = S('html').thisElement, 
				body = S('body').thisElement;
			if (typeof window.innerWidth != 'undefined'){
				WV= window.innerWidth; HV = window.innerHeight;
			}else if(typeof html != 'undefined' && typeof html.clientWidth !='undefined' && html.clientWidth != 0){
				WV=html.clientWidth; HV=html.clientHeight;
			}else{
				HV= body.clientWidth; HV=body.clientHeight;
			}
			XS = self.pageXOffset || (html.scrollLeft+body.scrollLeft);
			YS = self.pageYOffset || (html.scrollTop+body.scrollTop);
			WT = Math.max(html.scrollWidth, body.scrollWidth, WV);
			HT = Math.max(html.scrollHeight, body.scrollHeight, HV);
			return {
				WV:WV,
				HV:HV,
				XS:XS,
				YS:YS,
				WT:WT,
				HT:HT
			}
		},
		evitCP: function(){	
			S(document).sp('copy',function(e){
				e.cancelEv();
				e.stopEv();
			})
		},
		Copyright:function()
		{
			S(document).sp('copy',function(e){
				var body_element = S('body').thisElement;
				var selection;
					selection = window.getSelection();
				var pagelink = "<br/><br/>M&aacute;s informaci&oacute;n: <a href='"+document.location.href+"'>"+document.location.href+"</a><br/>Copyright © <b>ShellRumm</b>";
				var copytext = selection + pagelink;
				var newdiv = S('div',{
						posicion:{
							position:'absolute',
							left:'-99999px'
						},
						html:copytext
					}).agregar(body_element);
				selection.selectAllChildren(newdiv.thisElement);
				window.setTimeout(function() {
					newdiv.remover();
				},0);
			})
			return this;
		},
		Ajax:function(opt){
			var opt = S.ampliar({},xhrDefault,opt);
			var xhr = XHR();
			var metodo=opt.metodo.toUpperCase();
			var header, i, data;
			completo = (S.esFuncion(opt.completo))?opt.completo:function(){};
			mientras = (S.esFuncion(opt.mientras))?opt.mientras:function(){};
			error = (S.esFuncion(opt.error))?opt.error:function(){
				var msg="SHELLSCRIPT ERROR:\nSe ha producido un error al obtener los datos"
					+ "\n\nUrl:" + xhr.responseURL
					+ "\nReadyState:" + xhr.readyState
					+ "\nStatus: " + xhr.status + " "+xhr.statusText 
					+ "\nHeaders: " + xhr.getAllResponseHeaders();
					+ "\nTiempo: " + xhr.timeout
					+"\nMensage: "+xhr
					;
					console.error(msg);
			};
			try{
				xhr.onreadystatechange = function(){
					readXhr(xhr,completo,mientras,error);
				}
				if(opt.user != null && opt.pas != null)
				{
					xhr.open(metodo, opt.url, true, opt.user, opt.pas);
				}
				else
				{
					xhr.open(metodo, opt.url, true);
				}
				
				if(xhrhead.hasOwnProperty(opt.heads)){
					header = {
						'X-Requested-With':"XMLHttpRequest",
						'Content-Type':xhrhead[opt.heads]+"; charset=UTF-8"
					};
				}
				else{
					header = {
						'X-Requested-With':"XMLHttpRequest",
						'Content-Type':opt.heads+"; charset=UTF-8"
					}
				}
				for (i in header)
				{	
					if(i != "join"){
						xhr.setRequestHeader(i,header[i]);
					}
				}
				if(metodo == "GET"){
					xhr.send(null);
				}
				else{
					if(opt.file){
						data = opt.datos;
					}
					else if(S.esString(opt.datos)){
						data = opt.datos;
					}
					else if(S.esObj(opt.datos) || S.esArray(opt.datos)){
						data = writeXHR(opt.datos);
					}
					if(data){
						xhr.send(data);
					}
				}
			}catch(e){
				error.call(xhr,e);
			}
			
		},
		include: function(src,type){
			if(S.esFuncion(src)){
				src();
				return true;
			}
			else if(S.esString(src)){
				j = src.split(".");
				if(S.enArray(j[1],includeExten) !== -1){
					includeExis(src);
					S('script',{
						AddClass:'ShellScript',
						atrib:{
							src:S.url_active().url + src,
						}
					}).agregar('head');
					if(S.esFuncion(type)){
						type();
					}
					return true;
				}
				else{
					type = (type == undefined)?'script':type;
					if(type == 'script'){
						setTimeout(function(){
							eval(src);
						},100);
					}
					else{
						return eval('('+src+')');
					}
				}
			}
		},
		join: function(obj){
			var unir = function(sep,uni){
				var obj = this;
				var sep = (sep == undefined)?", ":sep;
				var uni = (uni == undefined)?"=":uni;
				var t = '';
				var l=S.ObjLength(obj);
				var f=1;
				S.forEach(obj,function(k,v){
					if(f == l){sep = "";}
					else{f++;}
					if(S.esArray(obj)){
						t +=  v + sep;
					}
					else if(S.esObj(obj)){
						t += k + uni + v + sep;
					}
				})
				return t;
			}
			
			return (obj.join)?obj.join:unir;
		}
	});
	var validadores = {
		esBooleno: 'boolean',
		esFuncion: 'function',
		esObj:	'object',
		esString: 'string'
	};
	Shell.forEach(validadores,function(fn, val){
		Shell[ fn ] = function( value ){
			return value !== undefined && typeof value === val;
		}
	})
	Object.prototype.join = Shell.join(Object);
	Shell.sr.ampliar({
		Classexiste: function(nclass){
			var elem = this.thisElement;
			var siexiste = false;
			S.asigFun(elem,function(v){
				siexiste = S.Classexiste(v,nclass);
			})
			return siexiste;
		},
		Simula:function(type){
			var e = this;
			S.Simula(e,type);
			return this;
		},
		sp:function( even, fn, capture )
		{
			var elem=this.thisElement;
			var typo = (even.indexOf(" ") == -1)?[even]:even.split(" ");
			var fn = (S.esFuncion(fn))?fn:function(){};
			S.forEach(typo,function(i,name){
				Shell.event.Add(elem, name, fn );
			})
			return this;
		},
		AsigEven:function(tipe){
			var elem=this.thisElement;
			if(tipe == 'focus'){
				elem.focus();
			}
			else if(tipe = 'blur'){
				elem.blur();
			}
			return this;
		},
		abuelo: function(){
			var elem = this.thisElement,
				p=elem.parentNode;
				p= p.parentNode;
			return p && p.nodeType != S.Nodo.DOCUMENT_FRAGMENT_NODE? p: null; 
		},
		hijo: function(){
			var ninos = [];
			var elem= this.thisElement;
			S.asigFun(elem,function(e){
				if(e.children.length != 0){
					ninos[ninos.length] = e.children;
				}
			});
			return (ninos.length != 0)?((ninos.length == 1)?ninos[0]:ninos):null;
		},
		
		antes:function( obj )
		{
			if(obj)
			{
				var elem=this.thisElement;
				var el= S.Element(obj);
				var elm=el.padre.insertBefore(elem,el.thisElement);
				return S(elm);
			}
			return this;
		},
		
		despues:function( obj )
		{
			if(obj)
			{
				var elem=this.thisElement;
				var el= S.Element(obj);
				var elm=el.padre.insertBefore(elem,el.thisElement.nextSibling);
				return S(elm);
			}
			return this;
		},
		
		agregar:function( obj )
		{
			if(obj)
			{
				var elem=this.thisElement;
					var el= S.Element(obj);
					var elm=el.thisElement.appendChild(elem);
					elm.parentNode = el.thisElement;
					return S(elm);
			}
			return this;
		},
		
		prefijar: function( obj )
		{
			if(obj)
			{
				var elem=this.thisElement;
				var el= S.Element(obj);
				var yo=el.prihijo();
				var elm=el.thisElement.insertBefore(elem,yo);
				elm.parentNode = el.thisElement;
				return S(elm);
			}
			return this;
		},
		
		remplazar: function( obj )
		{
			if(obj)
			{
				var elem=this.thisElement;
				var el= S.Element(obj);
				var elm=el.padre.replaceChild(elem,el[0]);
				return S(elm);
			}
			return this;
		},
		
		remover: function()
		{
			var elem=this.thisElement,
				elem= S.Element(elem);
				parent = elem.padre || document.body;
				if(parent && elem.thisElement.nodeType === S.Nodo.ELEMENT_NODE && parent != elem.thisElement){
					parent.removeChild(elem.thisElement);
				}
			return this;
		},
		
		clon:function(bool)
		{
			var elem=this.thisElement;
				j = (Shell.esBooleno(bool))?bool:true;
				o = null;
				if(elem.cloneNode){
					o = elem.cloneNode(j);
				}
			return o;
		},
		moverElem: function(elemRef){
			var elem=this.thisElement;
			var refencia = S.Element(elemRef);
			var newElems = S(elem).clon();
			S(elem).remover();
			S(newElems).despues(refencia);
			return S(newElems);
		},
		OuterElem: function(elems,para){
			var elem=this.thisElement;
			var herma = S(elem).Prevher();
			var fun = "despues";
			if(herma == null){
				var sh = S(elem).Sigher();
				if(sh != null){
					fun = "antes";
					herma = sh;
				}
				else{
					herma = S(elem).padre;
					fun = "agregar";
				}
			}
			var opt = (S.esObj(para))?para:{};
			var o = S(elems,opt)[fun](herma);
			var t = elem;
			S(elem).remover();
			S(t).agregar(o.thisElement);
			return o;
		},
		atrib:function(att, valor){
			var markarray, attrs = this;
			var	elem = this.thisElement;
			S.asigFun(elem,function(e){
				if(e.nodeName !== undefined){
					if(S.esObj(att)){
						S.forEach(att,function(k,v){
							e.setAttribute(k,v);
						});
					}
					else{
						if((valor == undefined || valor == "") && att !== undefined){
							markarray = e.getAttribute(att);
						}
						else if(valor !== undefined && att !== undefined)
						{
							markarray = e.setAttribute(att, valor);
						}
						attrs =  markarray;
					}
				}
			})	
			return attrs;
		},
		data:function(key,valor)
		{
			var elem=this.thisElement;
			if(S.esObj(key)){
				S.forEach(key,function(k,v){
					S(elem).atrib("data-"+k,v);
				})
			}
			else if(S.esString(key) && key != "" && valor != "" && !S.esUndefined(valor)){
				var keys = (key.indexOf('data') ==  -1)?"data-"+key:key;
				S(elem).atrib(keys,valor);
			}
			else if((S.esUndefined(key) || key == '') && (S.esUndefined(valor) || valor == '')){
				return S(elem).atrib('data');
			}
			else if(S.esString(key) && key != "" && (valor == "" || S.esUndefined(valor))){
				var keys, data,d;
				if((key.indexOf('data') ==  -1)){
					keys = "data-"+key;
					data = 'dataset';
				}
				else if((key.indexOf('-') !=  -1)){
					keys = key;
					data = 'dataset';
				}
				else{
					keys = key;
					data = 'attributes';
				}
				d = S.enArray(keys,elem[data]);
				if(d != -1){
					return elem[data][d].value;
				}
				else{
					return S(elem).atrib(keys);
				}
			}
			return this;
		},
		removeData : function(keys){
			var elem=this.thisElement;
			var key;
			if(S.esArray(keys)){
				key = [];
				S.forEach(keys,function(i,v){
					if((v.indexOf('data') ==  -1)){
						key[key.length] = 'data-'+v;
					}
					else if((v.indexOf('-') !=  -1)){
						key[key.length] = v;
					}
					else{
						key[key.length] = v;
					}
				})
			}
			else{
				if((keys.indexOf('data') ==  -1)){
					key = 'data-'+keys;
				}
				else if((key.indexOf('-') !=  -1)){
					key = keys;
				}
				else{
					key = keys;
				}
			}
			S(elem).removeAtrib(key);
		},
		removeAtrib: function( att )
		{
			var 
			elem= this.thisElement,
			art	= false;
			S.asigFun(elem,function(e){
				if(S.esArray(att) || S.esObj(att)){
					S.forEach(att,function(i,v){
						e.removeAttribute(v);
					})
					}
					else{
						e.removeAttribute(att)
					}
			})
			return this;
		},
		stylo: function(propety, value){
			var elem=this.thisElement,
			styles = this;
			S.asigFun(elem,function(e){
				if(!e.style || e.nodeType === S.Nodo.TEXT_NODE || e.nodeType === S.Nodo.COMMENT_NODE){
					return;
				}
				if(S.esObj(propety)){
					S.forEach(propety,function(name,values){
						if(e.style.hasOwnProperty(name)){
							e.style[ name ] = values;
						}
						else{
							e.style.setProperty(name, values,'');
						}
					});
				}
				else if(S.esString(propety))
				{
					if(value !==  undefined){
						if(e.style.hasOwnProperty(propety)){
							e.style[ propety ] = value;
						}
						else{
							e.style.setProperty(propety,value,'');
						}
					}
					else{
						var valor_propety;
						if(e.style.hasOwnProperty(propety)){
							if(e.style[ propety ] !== null || elem.style[ propety ] != "")
							{
								valor_propety = elem.style[ propety ];
							}
							else if (e.style.getPropertyValue(propety) != null || e.style.getPropertyValue(propety)){
								valor_propety = e.style.getPropertyValue(propety);
							}
						}
						else{
							valor_propety = e.style.getPropertyValue(propety);
						}
						styles =  valor_propety;
					}
				}
				else
				{
					var cssRoles = {};
					var cssRuless = document.defaultView.getComputedStyle(e,null);
					S.forEach(cssRuless,function(v,a){
						propiedad = a;
						if(S.esNumero(a)){
							propiedad = v[a];
						}
						var valor = cssRuless[propiedad];
						if(valor != "" && valor != null && valor != undefined){
							cssRoles[ propiedad ] = valor;
						}
					});
					styles =  cssRoles;
				}
			})
			return styles;
		},
		removeStylo: function(propety){
			var elem=this.thisElement;
			S.asigFun(elem,function(ele){
				if(S.esArray(propety)){
					S.forEach(propety,function(i,v){
						ele.style.removeProperty(v);
					})
				}
				else if(S.esString(propety)){
					ele.style.removeProperty(propety);
				}	
			})
			return this;
		},
		ancho: function(valor)
		{
			var elem=this.thisElement;
			var ancho = 0;
			S.asigFun(elem,function(ele){
				if(valor !== undefined)
				{
					if(S.esNumero(valor)){
						ele.style.width=valor+"px";
					}else{
						ele.style.width=valor;
					}
				}
				else
				{
					if(ele.clientWidth)
					{
						ancho = ele.clientWidth;
					}
					if(ele.offsetWidth)
					{
						ancho = ele.offsetWidth;
					}
					else if(ele.outerWidth)
					{
						ancho = ele.outerWidth;
					}
					else if(ele.style.width)
					{
						ancho = ele.style.width;
					}			
				}
			})
			return ancho;			
		},
		alto: function(valor)
		{
			var elem=this.thisElement;
			var alto = this;
			S.asigFun(elem,function(ele){
				
				if(valor !== undefined)
				{
					if(S.esNumero(valor)){
						ele.style.height=valor+"px";
					}
					else{
						ele.style.height=valor;
					}
				}
				else
				{
					if(ele.clientHeight)
					{
						alto = ele.clientHeight;
					}
					if(ele.offsetHeight)
					{
						alto = ele.offsetHeight;
					}
					else if(ele.outerHeight)
					{
						alto = ele.outerHeight;
					}
					else if(ele.style.height)
					{
						alto = ele.style.height;
					}
				}
			})
			return alto;	
		},

		posicion: function(type,x,y){
			var elem=this.thisElement;
			if(x == undefined && y == undefined && type == undefined){
				var p = {
					position:'',
					top:0,
					left:0
				}
				if(S(elem).stylo('position') == 'fixed'){
					var gbcr = elem.getBoundingClientRect(); 
					p.position = 'fixed';
					p.top = gbcr.top;
					p.left = gbcr.left;
				}
				else{
					var st = S(elem).stylo();
					var position = st.position;
					p.position = position;
					p.top = elem.offsetTop;
					p.left = elem.offsetLeft;
				}
				return p;
			}
			else if(type != undefined){
				var mie = (S.navegador().appName.indexOf("Microsoft")>=0);
				var p = {
					position:(mie)?'absolute':'fixed',
					top:0,
					left:0
				}
				if(S.esNumero(parseInt(type))){
					p.top = x;
					p.left = type;
				}
				else if(S.esObj(type)){
					p = S.ampliar({},p,type);
				}
				else{
					p.position = type;
					p.top = y;
					p.left = x;
				}
				if(S(elem).stylo('position') != ""){
					S(elem).stylo({
						top:(S.esNumero(p.top))?p.top+ "px":p.top,
						left:(S.esNumero(p.left))?p.left+ "px":p.left
					})
				}
				else
				{
					S(elem).stylo({
						position:p.position,
						top:(S.esNumero(p.top))?p.top+ "px":p.top,
						left:(S.esNumero(p.left))?p.left+ "px":p.left
					})
				}
			}
			return this;
		},
		centrar:function(){
			var elem=this.thisElement;
				var centrar=function(){
					var data=S.getWindowDataWH();
					var	w = S(elem).ancho();
					var	h = S(elem).alto();
					var	l = (((data.WV/2)) - parseInt(w)/2)+'px';
					var	t = (((data.HV/2)) - parseInt(h)/2)+'px';
					S(elem).posicion(t,l);
				};
				centrar();
				S.resize(centrar);
				S.load(centrar);
				S.scroll(centrar);
			return this;	
		},
		hover:function(callback1,callback2,callback3)
		{
			var elems=this.thisElement,
				fun1=Shell.esFuncion(callback1),
				fun2=Shell.esFuncion(callback2);
				fun3=Shell.esFuncion(callback3);
			S.asigFun(elems,function(elem){
				if(fun1 && fun2 && fun3){
					S(elem).mouseover(callback1);
					S(elem).mouseout(callback2);
					S(elem).mousemove(callback3);
				}
				else if(fun1 && fun2)
				{
					S(elem).mouseover(callback1);
					S(elem).mouseout(callback2);
				}
				else if(fun1)
				{
					S(elem).mouseover(callback1);
				}
			})
			return this;
		},
		checked:function(){
			var elem=this.thisElement;
				valor = this;
				$this = this;
			S.asigFun(elem,function(elems){
				if(elems.type == 'radio')
				{
					for (var i=0;i<elem.length;i++){
						if (elem[i].checked)
						{
							valor = elem[i].value;
						}
					}
				}
				else
				{
					if(elems.checked){
						if(valor == $this){
							valor = {};
							valor[(elems.name)?elems.name:elems.id] = elems.value;
						}
						else{
							valor[(elems.name)?elems.name:elems.id] = elems.value;
						}
						
					}
					
				}	
			})
			return valor;
		},
		resize:function(fn){
			var elem = this.thisElement;
			if(S.esFuncion(fn) && !Shell.esUndefined(elem)){
				Shell.event.Add(elem, 'resize', fn);
			}
		},
		reset: function(form){
			var elem = this.thisElement;
			var form = (S.esUndefined(form))?this.padre:form;
			if(elem.nodeName != "FORM")
			{
				S(elem).sp('input click',function(e){
					e.cancelEv();
					if(form && form.nodeName === "FORM" && form.nodeType === S.Nodo.ELEMENT_NODE){
						form.reset();
					}
				})
			}
			else if(elem && elem.nodeName === "FORM" && elem.nodeType === S.Nodo.ELEMENT_NODE){
				elem.reset();
			}
			return this;
		},
		FormValue: function(){
			var elem = this.thisElement;
			if(elem && elem.nodeName === "FORM" && elem.nodeType === S.Nodo.ELEMENT_NODE){
				var h = {};
				S.forEach(elem.elements, function(i,v){
					if(v && v.nodeType === S.Nodo.ELEMENT_NODE){
						if(v.name){
							h [ v.name ] = v.value;
						}
					}
				});
				return h;
			}
			return this;	
		},
		ValueValido: function(valores){
			var el = this.thisElement;
			var y = {
				text:/^[\w\sÑÁÉÍÓÚñáéíóú`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]+$/,
				url:/^[\w`!@#$%^&*()_°|+\-=?;:'",.<>\{\}\[\]\\\/]+$/,
				tel:/^[\d()+-,]$/,
				number:/^[\d\.]$/,
				email:/^[\w-\.!#$%&'*+-\/=?`{}|~@]$/ 
			}
			y.search = y.text;
			S.asigFun(el,function(elem){
				if(elem.nodeName == "INPUT" || elem.nodeName == "TEXTAREA"){
					if(S.navegador().appName.indexOf("Mozilla") != -1 || 
						S.navegador().appName.indexOf("firefox") != -1
						){
						if(elem.hasOwnProperty("x-moz-errormessage")){
							elem['x-moz-errormessage'] = false;
						}
					}
					S(elem).keydown(function(e){
						if(e.ctrlKey || e.altKey){
							e.cancelEv();
							e.stopEv();
						}
					})
					S(elem).keypress(function(e){
						var v,t,u;
						if(this.nodeName == "TEXTAREA" && (valores == "" || S.esUndefined(valores))){
							t = "text";
							v = y[t];
						}
						else if(valores == "" || S.esUndefined(valores)){
							t = this.type;
							v = y[t];
						}
						else if(valores != "" || !S.esUndefined(valores)){
							v = new RegExp("^["+valores+"]$");
						}
						else{
							if(this.type != t){
								t = this.type;
								u = y[t];
							}
							v = u  || valores;
						}
						var sChar = e.key || String.fromCharCode(e.charCode);
						var bIsValidChar = v.test(sChar);
						if(!bIsValidChar){
							e.cancelEv();
						}
						return bIsValidChar;
					})
				}
				else
				{
					console.error("El elemento "+elem.nodeName+((elem.id)?"#"+elem.id:((elem.name)?":"+elem.name:""))+" no es un elemento valido");
				}
			})
			return this;
		},
		Edit:function(on)
		{
			var elem=this.thisElement;
			S.asigFun(elem,function(elem){
				if(on)
				{
					S(elem).atrib('contentEditable',true);
					S(elem).atrib('spellcheck',true);
					S(elem).focus();
				}
				else if(!on)
				{	
					S(elem).removeAtrib('contentEditable');
					S(elem).removeAtrib('spellcheck');
				}
			})
		},
		FullScreen:function()
		{
			var element=this.thisElement;
			var vl=(element.FullScreen == undefined)?true:element.FullScreen;
			if(vl)
			{
				if(element.requestFullscreen) {
					element.requestFullscreen();
				} else if(element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if(element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if(element.msRequestFullscreen) {
					element.msRequestFullscreen();
				}
				element.FullScreen = false;
			}
			else
			{
				if(document.exitFullscreen) {
					document.exitFullscreen();
				} else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if(document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				}
				element.FullScreen = true;
			}
			return this;
		},
		key_segure:function(){
			var elem = this.thisElement;
			var segure,muestra,valore;
			var niveles = {
				numero 	: "0123456789",
				Lmin 	: "abcdefghyjklmnñopqrstuvwxyz",
				sig		: "`~!@#$%^&*()_-+={}[]\|:;\"'<>,.?/"
			}
			var validador = function(txt,type){
				tipo = niveles[type];
				if(type == 'letras'){
					txt = txt.toLowerCase();
					tipo = niveles.Lmin;
				}
				else if(type == 'Lmay'){
					tipo = niveles.Lmin.toUpperCase();
				}
				for(i=0; i<txt.length; i++){
					if (tipo.indexOf(txt.charAt(i),0) !=-1){
						return 1;
					}
				}
				return 0;
			};
			var create = function(elem){
				var p = S(elem).posicion();
					segure = S('div',{
						AddClass:"Shell_seguridad_de_clave",
						posicion:{
							position: 'relative'
						},
						stylo:{
							width:S(elem).ancho()+"px"
						},
					})
					muestraa = S('div',{
						posicion:{
							position: 'absolute',
							top:0,
							left:0
						},
						stylo:{
							width:"0px"
						},
						data:{
							value:0
						}
					}).agregar(segure);
					valore = S('span',{
						html:"0%"
					}).agregar(segure);
					segure.despues(elem);
			}
			var seguriti = function(elem){
				var clave = S(elem).valor();
				var seguridad = 0;
				if (clave.length !=0)
				{
					if(clave.length <= 4){
						seguridad += 10;
					}
					if(validador(clave,'numero') && validador(clave,'letras')){
						seguridad += 30;
					}
					if (validador(clave,'Lmin') && validador(clave,'Lmay'))
					{
						seguridad += 20;
					}
					if (validador(clave,'sig'))
					{
						seguridad += 20;
					}
					if (clave.length >= 4 && clave.length <= 5)
					{
						seguridad += 10;
					}
					else
					{
						if (clave.length >= 6 && clave.length <= 8)
						{
							seguridad += 30;
						}
						else
						{
							if (clave.length > 8)
							{
								seguridad += 40;
							}
						}
					}
					if(seguridad > 100){
						seguridad = 100;
					}
				}
				else{
					seguridad = 0;
				}
				
				var tam = Math.abs((S(elem).ancho()/100)*seguridad);
				
				var meter = segure || S(S(elem).Sigher());
				var h = meter.hijo();
				var valore = S(h[1]);
				var medidor = S(h[0]);
				valore.html(seguridad+"%");
				medidor.RemoveClass('low medio optimo');
				var classs = 'low';
				if(seguridad >= 30 && seguridad <= 60){
					classs = 'medio';
				}
				else if(seguridad >= 60){
					classs = 'optimo';
				}
				medidor.AddClass(classs).stylo("width",tam+"px");
			}
			create(elem);
			S(elem).sp('input keypress',function(){
				seguriti(this);
			})
			return this;
		}
	})
	var validarDefaults = {
		formulario:undefined,
		online:true,
		requerido:undefined,//@param {S(elem) || 'elem'}
		fn:undefined,//@param {function(){(if(padre == form))var FormValue = this; //hacer}}
		evento:"input click", //@param tipo de evento javascript que ejecuta la validacion
		invalid:undefined,//@param {function(){//hacer}}
		msm:false//true para mostrar msm por defector de Shell {Object} 
		//msm:{css:{propety:value}} para mostrar mensaje personalizados 
	}
	var submitDelfaults = {
		url:'',
		mientras:'',
		completo:'',
		requerido:undefined
	}
	Shell.sr.ampliar({
		pageLoad: function(url,fn){
			var elem = this.thisElement;
			S.Ajax({
				url:url,
				metodo:"GET",
				completo:function(d){
					S(elem).html(d);
					if(S.esFuncion(fn)){
						fn.call(this,elem);
					}
				}
			})
			return this;
		},
		submit:function(obk){
			var elem = this.thisElement;
			var opt = S.ampliar({},submitDelfaults,obk);
			var classe="";
			var getHijo = function (){
				var h = S(S(elem).padre).hijo();
				var id = (S(S(elem).padre).atrib('id') != null)?S(S(elem).padre).atrib('id'):"shellForm"
				var g = [];
				S.forEach(h,function(i,v){
					if(v != elem && 
						v.nodeName != "BUTTON" && 
						v.type != "submit" && 
						i != "length"){
							classe = id+"req";
							if(!S(v).Classexiste(classe)){
								S(v).AddClass(id+"req");
							}
						}
					})
				return S("."+classe);
			};
			var requerido = (!S.esUndefined(opt.requerido))?opt.requerido:getHijo();
			S(elem).validar({
				requerido:requerido,
				msm:true,
				fn:function(d){
					S.Ajax({
						url:opt.url,
						metodo:'POST',
						datos:{ShellSubmit:d},
						completo:opt.completo,
						mientras:opt.mientras,
						error:function(){
							console.error(this);
						}
					})
				}
			})
		},
		validar: function(obj){
			var opt = S.ampliar({},validarDefaults,obj);
			var elem = this.thisElement;
			var deForm = function(f){
				var p = S(f).padre;
				if(p.nodeName == "FORM"){
					return S(p);
				}
				else{
					if(S(p).padre.nodeName == "FORM"){
						return S(S(p).padre);
					}
					else if(S(p).abuelo().nodeName == "FORM"){
						return S(S(p).abuelo());
					}else{
						console.error("El elemento "+f.nodeName+" no esta dentro de un formulario\n de introducirlo dentro de uno o indicar el parametro formulario");
						return null;
					}
				}
			};
			var form = (!S.esUndefined(opt.formulario))?S.Element(opt.formulario):((deForm(elem) != null)?deForm(elem):"");
			var requerido = (!S.esUndefined(opt.requerido))?S.Element(opt.requerido):form.thisElement.elements;
			var noValidables = ['BUTTON','IMG'];
			var typeNoValido = ['submit','button','image','reset'];
			S.asigFun(requerido,function(obligados){
				if(S.enArray(obligados.nodeName,noValidables) == -1 || (obligados.type && S.enArray(obligados.type,typeNoValido) == -1)){
					if(S.navegador().appName.indexOf("Mozilla") != -1 || 
						S.navegador().appName.indexOf("firefox") != -1
						){
						if(elem.hasOwnProperty("x-moz-errormessage")){
							elem['x-moz-errormessage'] = false;
						}
					}
					obligados.required = true;
					var msj = "";
					if(opt.msm && S(obligados).data('invalid') != null){
						msj = S(obligados).data('invalid');
					}
					else if(obligados.title)
					{
						msj = obligados.title;
					}
					else{
						msj = obligados.validationMessage;
					}
					obligados.setCustomValidity(msj);
					if(opt.online){
						if(obligados.nodeName == "INPUT" || obligados.nodeName == "TEXTAREA"){
							S(obligados).ValueValido();
						}
					}
				}
			})
			var validarElems = function(elem){
				var basic="search text pasword date month week time datetime datetime-local";
				var expr = {
					text:/^[\w\sÑÁÉÍÓÚñáéíóú`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]+$/
				};
				var especiales = {
					email:/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,
					url:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/,
					tel:/^[\d\.\()\+-,]{7,20}$/,
					number:/^[\d\.]+$/,
					color:/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
				};
				var v = elem.validity;
				if(S(elem).valor() == ""){
					return true;
				}
				else if(S(elem).atrib('pattern') != null){
					return v.patternMismatch;
				}
				else if(S(elem).atrib('max') != null){
					return v.rangeOverflow;
				}
				else if(S(elem).atrib('min') != null){
					return v.rangeUnderflow;
				}
				else if(S(elem).atrib('maxlength') != null){
					return v.tooLong;
				}
				else if(v.valueMissing){
					return true;
				}
				else if(S(elem).valor() != ""){
					var novalido = false;
					var type=elem.type;
					S.forEach(basic.split(" "),function(i,v){
						if(!expr.text.test(S(elem).valor()) ||
						  v.typeMismatch
						  ){
							novalido = true;
						}
					})
					if(S.key_existe(type,especiales)){
						if(!especiales[type].test(S(elem).valor()) ||
							v.typeMismatch
						  ){
							novalido = true;
						}
					}
					return novalido;
				}
				else if(!v.valid){
					return true;
				}
				return false;
			};
			var msm = function(){
				var v=this;
				var msj=v.validationMessage;
				var error;
				if(!S.Classexiste(S(v).Sigher(),"ShellMsjError")){
					var cont = S('div',{
						AddClass:"ShellMsjError"
					}).despues(v);
					error = Shell.error(msj,cont);
				}
				error = error || (S(v).Sigher().nodeName == "DIV")?S(S(v).Sigher()).hijo()[0]:"";
				if(S.esObj(opt.msm)){
					error.stylo(opt.msm);
				}
				S(v).focus();
				S(v).sp('input keydown change',function(){
					var t = S(this).Sigher();
					console.dir(t);
					if(t.nodeName == "DIV"){
						var s = S(t).hijo()[0];
						if(S(s).Classexiste('ShellMsj'))
						{
							S(t).remover();
						}
					}
				})
			};
			var validacion = function(e){
				e.cancelEv();
				e.stopEv();
				var validado = false,i = 0;
				var o = S.ObjLength(requerido) -1;
				do{
					var v = requerido[i];
					
					if(v.required)
					{
						if(validarElems(v))
						{
							if(S.esFuncion(opt.invalid))
							{
								opt.invalid.call(v,v.validationMessage);
							}
							if(opt.msm){
								msm.call(v);
							}
							validado = false;
							return false;
						}
						else
						{
							validado=true;
						}
					}
					else
					{
						validado=true;
					}
					i++;
				}while(i <=o);
				if(validado){
					if(opt.fn && S.esFuncion(opt.fn))
					{
						forms = form.FormValue();
						opt.fn.call(this,forms);
					}
				}
			}
			S(elem).sp(opt.evento,validacion);
			return this;	
		}
	})
	
	var selected=
	{
		seleccion:function(elem){
			console.dir(elem);
			var elem = (!S.esElem(elem))?elem.thisElement:elem;
			var item = elem.options.selectedIndex;
			return this.Get(S(elem),item);
		},
		Add:function(elem,name,value){
			if(S.esObj(name)){
				S.forEach(name,function(i,v){
					var opt = S('option',{
						html:i,
						value:v
					})
					opt.agregar(elem);
				});
			}
			else{
				S('option',{
						html:name,
						value:value
				}).agregar(elem);
			}
		},
		Remove:function(elem,item){
			var elem = (!S.esElem(elem))?elem.thisElement:elem;
			if(item === undefined){
				var opt = elem.options;
				S.forEach(opt,function(i,v){
					elem.remove(i);
				})
			}
			else{
				elem.remove(item);
			}
		},
		Get:function(elem,item){
			var elem = (!S.esElem(elem))?elem.thisElement:elem;
			var opt = elem.item(item);
			if(opt){
				return {
					texto:opt.text,
					value:opt.value
				}
			}
			return false;
		},
		Move:function(elem,newparent,item){
			this.Copy(elem,newparent,item);
			this.Remove(elem,item);
		},
		Copy: function (elem,newparent,item){
			var opt =this.Get(elem,item);
			return this.Add(newparent,opt.texto, opt.value);			
		},
		GetOptions: function(elem){
			return (elem.options.length != 0)?elem.options:null;
		}
	};
	Shell.sr.selected = function(obj){
		var elem = this.thisElement;
		if(elem.nodeName != "SELECT"){
			return;
		}
		if(S.esString(obj)){
			if(selected.hasOwnProperty(obj)){
				return selected[obj](elem);
			}
			else{
				S.error("S.selected\nel string introducido no es un metodo valido");
			}
		}
		else if(S.esObj(obj)){
			var metodo = ['Add','Remove','Get','Move','Copy'];
			var result = this;
			S.forEach(obj,function(i,v){
				if(selected.hasOwnProperty(i)){
					switch(i){
						case 'Remove':
						case 'Get':
							var opt = true;
							if(S.esArray(v)){
								opt = [];
								S.forEach(v,function(k,n){
									if(i === "Get"){
										opt[opt.length] = selected[i](elem,n);
									}
									else{
										selected[i](elem,n);
									}
								})
							}
							else{
								if(i === "Get"){
									opt = selected[i](elem,v);
								}
								else{
									selected[i](elem,v);
								}
							}
							result = opt;
						break;
						case 'Add':
							if(S.esObj(v)){
								S.forEach(v,function(t,e){
									selected[i](elem,t,e);
								});
							}
							else{
								result = null;
								S.error("S.selected\nel valor introducido no es un parametro valido debe ser un objeto");
							}
						break;
						case 'Move':
						case 'Copy':
							var opc = {
								elem:null,
								item:-1
							}
							if(S.esObj(v)){
								var opd = S.ampliar({},opc,v);
								console.dir(opd);
								var newparent = S.Element(opd.elem);
								if(S.esArray(opd.item)){
									S.forEach(opd.item,function(t,e){
										selected[i](elem,newparent,e);
									});
								}
								else if(opd.item != -1){
									selected[i](elem,newparent,opd.item);
								}
							}
							else{
								result = null;
								S.error("S.selected\nel valor introducido no es un parametro valido debe ser un objeto");
							}
						break;
					}
				}
				else{
					result = undefined;
				}
			})
		}
		return result;
	}
	var events=("click dblclick focus blur change keydown keyup keypress"+
		" mouseout mouseover mousemove mousedown mouseup scroll drop drag"
		+" dragenter dragover dragleave dragstart dragend touchstart touchend touchmove").split(" ");
	Shell.forEach(events,function(name,i){
		Shell.sr[ i ] = function( fn )
		{
			return (arguments.length > 0)?this.sp(i,fn):this.AsigEven(i);
		}
	})
	var eventClass = {
			AddClass:'add',
			RemoveClass:'remove',
			toggleClass:'toggle'
		};
	Shell.forEach(eventClass,function(fn, name){
		Shell.sr[ fn ] = function ( nclass ){
			var elem  = this.thisElement;
			Shell.asigFun(elem,function(c){
					var ncl = (nclass.indexOf(" "))?nclass.split(" "):[nclass];
					S.forEach(ncl,function(s,v){
						if(s != 'length'){
							c.classList[name](v);
						}
					})
				})
			return this;
		}
	})
	var getElements = {
			prihijo:'firstElementChild',
			ulhijo : 'lastElementChild',
			Sigher : 'nextElementSibling',
			Prevher: 'previousElementSibling'
		}
	Shell.forEach(getElements,function(i,name){
		Shell.sr[ i ] = function(){
			var t = this.thisElement;
			S.asigFun(t,function(c){
				t = c[name];
			})
			return t;
		}
	})	
	var Ohtml={
		'valor':'value',
		'html':'innerHTML',
		'texto':'textContent'
	}
	Shell.forEach(Ohtml,function(k,v){
		Shell.sr[ k ]= function( vale ){
			var val,
			elem = this.thisElement;
			if(vale === undefined)
			{
				val= (elem[ v ])?elem[ v ]:"";
				return val;
			}
			else if(vale == "")
			{
				elem[ v ]=vale;
			}
			else
			{
				elem[ v ]=vale;
			}
			return this;	
		}
	})
	var ShellDraggable ={
			orientacion:'all',
			stopElem:null,
			StyleDragStart:{
				opacity : '0.4'
				},
			cursor:'move',
			handle:null,
			StyleDragStop: {
				opacity : 1
			},
			posicion:'fixed',
			zIndex:99999,
			//Funciones
			Start:null,
			Stop:null,
			Drag:null
		}
	//DRAGANDRO
	Shell.sr.draggable = function(opt){
		var opt = S.ampliar({},ShellDraggable,opt);
		var elem = this.thisElement;
		S.asigFun(elem,function(elemento){
			var currentElement;
			if(opt.handle != null){
				handle = S.Element(opt.handle).thisElement;
			}else{
				handle = elemento;
			}
			if(opt.orientacion == "all" || opt.orientacion == "*")
			{
				opt.StyleDragStart.cursor = 'move';
			}
			else if(opt.orientacion == "x" || opt.orientacion == "left"){
				opt.StyleDragStart.cursor = 'ew-resize';
			}
			else if(opt.orientacion == "y" || opt.orientacion == "top"){
				opt.StyleDragStart.cursor = 'ns-resize';
			}
			function triggerEvent(type,args){
				var result=true;
				var listeners=currentElement.draggableListeners[type];
				for(var i=listeners.length-1;i>=0;i--)
				{
					if(listeners[i](args)===false)
					result=false
				}
				return result
			}
			function addListener(element,type){
				return function(listener){
					element.draggableListeners[type].push(listener)
				}
			}
			var dragstart = function(elem,handle){
				if(!S.esUndefined(opt.cursor)){
					S(handle).stylo('cursor',opt.cursor);
				}
				var posi = "fixed";
				if(!S.esUndefined(opt.posicion) && S.esString(opt.posicion)){
					posi = opt.posicion;
				}
				S(elem).posicion(posi);
				elem.draggableListeners={
					start:[],
					drag:[],
					stop:[]
				};
				elem.DragStarts = addListener(this,'start');
				elem.Dragging   = addListener(this,'drag');
				elem.DragStops  = addListener(this,'stop');
				S(handle).mousedown(drag);
			};
			var cancelSelectStart = function(e){
				e.cancelEv();
				e.stopEv();
				e.returnValue=false;
				return false;
			};
			var removeEvents = function(e){
				if(S.esObj(opt.StyleDragStop)){
					S(handle).stylo(opt.StyleDragStop);
				}
				Shell.event.Remove(document,"selectstart");
				Shell.event.Remove(document,"mousemove");
				Shell.event.Remove(document,"mouseup");
				var u = S(currentElement).posicion();
				if(S.esFuncion(opt.Stop)){
					opt.Stop.call(currentElement,e);
				}
				triggerEvent("stop",{
					x:u.left,
					y:u.top,
					mouseEvent:e
				})
			};
			var Documents = function(){
				S(document).sp("selectstart",cancelSelectStart);
				S(document).sp("mousemove",mover);
				S(document).sp("mouseup",removeEvents);
			}
			var mover = function(e){
				var xActual,yActual;
				e.cancelEv();
				e.stopEv();
				e.returnValue =false;
				var syt = S(currentElement).posicion();
				var XPosition = syt.left;
				var YPosition = syt.top;
				if(opt.orientacion == "all" || opt.orientacion == "*")
				{
					xActual = XPosition + (e.pageX - currentElement.LastXp);
					yActual = YPosition + (e.pageY - currentElement.LastYp);
				}
				else if(opt.orientacion == "x" || opt.orientacion == "left"){
					xActual = XPosition + (e.pageX - currentElement.LastXp);
					yActual = 0;
				}
				else if(opt.orientacion == "y" || opt.orientacion == "top"){
					xActual = 0; 
					yActual =  YPosition + (e.pageY - currentElement.LastYp);
				}
				S(currentElement).posicion({
					top:(yActual != 0)?yActual:YPosition+'px',
					left:(xActual != 0)?xActual:XPosition+'px'
				})
				currentElement.LastXp = e.pageX;
				currentElement.LastYp = e.pageY;
				if(S.esFuncion(opt.Drag)){
					opt.Drag.call(currentElement,e);
				}
				triggerEvent("drag",{
					x:xActual,
					y:yActual,
					mouseEvent:e
				})
			};
			var drag = function(d){
				if(S.esObj(opt.StyleDragStart)){
					S(handle).stylo(opt.StyleDragStart);
				}
				d.cancelEv();
				d.stopEv();
				currentElement = S(elem).stylo({
					'z-index':opt.zIndex,
					zIndex:opt.zIndex
				});
				currentElement = currentElement.thisElement;
				var Ip = S(currentElement).posicion();
				S(currentElement).posicion({
					top:Ip.top+"px",
					left:Ip.left+"px"
				})
				currentElement.InitialPosicion = Ip;
				currentElement.LastXp = d.pageX;
				currentElement.LastYp = d.pageY;
				if(S.esFuncion(opt.Start)){
					opt.Start.call(currentElement,d);
				}
				var okToGoOn=triggerEvent("start",{
					x:Ip.left,
					y:Ip.top,
					mouseEvent:d
				});
				if(!okToGoOn)
				return;Documents()
			};
			dragstart(elemento,handle);
		})
		return this;
	}
	
	$animaoptions={
		duracion: 1000,
		delta: 	null,
		step: 	null,
		delay:	10
	}
	Shell.anima = function(obj,action)
	{
		if(S.esObj(obj))
		{
			var opt = S.ampliar({}, $animaoptions, obj);
			var start = new Date; 
			var id = setInterval(function() 
			{
				var timePassed = new Date - start;
				var progress = timePassed / opt.duracion;
				if (progress > 1){progress = 1;}
				if(S.esFuncion(opt.delta) && 
				S.esFuncion(opt.step))
				{
					var delta = opt.delta(progress);
					opt.step(delta);
				}
				if (progress == 1) {
					clearInterval(id);
					if(S.esFuncion(action))
					{
						action.call(this,opt.element);
					}
				}
			}, opt.delay);
		}
		else
		{	
			brf=typeof obj;
			S.errors('Un '+brf+'no es un Objeto \n parametro Invalido');
			return;
		}
		return this;
	};
	$animateoptions={
		duracion: 	1000,
		distancia: 800,
		delay:		10,
		element:null,
		Animate:'lineal',
		step:	null
	};
	Shell.animate=function(obj,callback){
		var opt = S.ampliar({}, $animateoptions, obj);
			elemenet=S.Element(opt.element);
			Nanim=opt.Animate.toLowerCase();
			to=opt.distancia;
		var delta='';
		function bounce(progress) {
			for(var a = 0, b = 1, result; 1; a += b, b /= 2) {
				if (progress >= (7 - 4 * a) / 11) {
					return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
				}
			}	
		}

		function makeEaseInOut(delta) {  
			return function(progress) {
			if (progress < .5)
				return delta(2*progress) / 2
			else
				return (2 - delta(2*(1-progress))) / 2
			}
		}

		function makeEaseOut(delta) {  
			return function(progress) {
				return 1 - delta(1 - progress)
			}
		}
		switch(Nanim)
		{
			case 'lineal':
				delta=function(progress) {
					return progress
				};
			break;
			case 'elastico':
				delta=function(progress) {
					return Math.pow(2, 10 * (progress-1)) * Math.cos(20*Math.PI*1.5/3*progress)
				}
			break;
			case 'peso':
				delta=function (progress) {
					return Math.pow(progress, 2)
				}
			break;
			case 'lin5':
				delta=function(progress) {
					return Math.pow(progress, 5)
				}
			break;
			case 'circulo':
				delta=function(progress) {
					 return 1 - Math.sin(Math.acos(progress))
				}
			break;
			case 'retro':
				delta=function(progress) {
					return Math.pow(progress, 2) * ((1.5 + 1) * progress - 1.5)
				}
			break;
			case 'fantacioso':
				delta=bounce;
			break;
			case 'rebote':
				delta=makeEaseInOut(bounce);
			break;
			case 'reboteout':
				delta=makeEaseOut(bounce);
			break;
		}
		var step=''
		if(S.esString(opt.step)){
			spt = opt.step.toLowerCase();
			switch(spt)
			{
				case 'caja':
				step=function(delta) {
					elemenet.stylo({
						left : to*delta + "px"
					})  
				}
				break;
				case 'fparpadear':
				var from = [255,0,0], to = [255,255,255];
				step=function(delta) {
				elemenet.stylo({
				'background-color' : 'rgb(' +
					Math.max(Math.min(parseInt((delta * (to[0]-from[0])) + from[0], 10), 255), 0) + ',' +
					Math.max(Math.min(parseInt((delta * (to[1]-from[1])) + from[1], 10), 255), 0) + ',' +
					Math.max(Math.min(parseInt((delta * (to[2]-from[2])) + from[2], 10), 255), 0) + ')'
				})
				}
				break;
				case  'texto':
					var text = elemenet.valor() || elemenet.texto();
					var to = text.length, from = 0;
					opt.duracion=5000;
					step= function(delta) {
						var result = (to-from) * delta + from;
						if(!S.esUndefined(elemenet.thisElement.value))
						{
							elemenet.valor(text.substr(0, Math.ceil(result)));
						}
						else
						{
							elemenet.texto(text.substr(0, Math.ceil(result)));
						}
					}
				break;
				case 'expandir':
				step= function(delta)
				{ 
					elemenet.stylo({
						width:to*delta+'px',
						'opacity':delta
					})
				}
				break;
				case 'encojer':
				opt.duracion=3000;
				step= function(delta)
				{
					elemenet.stylo({
						width:2/delta+'px',
						'opacity':0.01/delta
					})
				}
				break;
				case 'zoommas':
				step= function(delta)
				{	var h=elemenet.alto();
					var w=elemenet.ancho();
					var t=to*delta;
					var b=t/2;
					if(b >= w){
						elemenet.stylo({
							width:b+'px'
						})
					}
					if(b >= h)
					{
						elemenet.stylo({
							height:b+'px'
						})
					}
				}
				break;
				case 'zoommenos':
				step= function(delta)
				{	var h=elemenet.alto();
					var w=elemenet.ancho();
					var t=2/delta;
					var b=t/2;
					elemenet.stylo({
							overflow:"hidden"
						})
					if(b <= w){
						elemenet.stylo({
							width:b+'px'
						})
					}
					if(b <= h)
					{
						elemenet.stylo({
							height:b+'px'
						})
					}
				}
				break;
			}
		}
		else if(S.esFuncion(opt.step)){
			step = opt.step
		}
		Shell.anima({
			duracion:opt.duracion,
			delta:delta,
			step: step
		},(S.esFuncion(callback)?callback():''))
		return this;
	};
	
	
	
	//Convertido de funciones nativas
	var pop_upDefaults = {
		toolbar:'no',
		location:'no',
		directories:'no',
		status:'no',
		menubar:'no',
		scrollbars:'yes',
		resizable:'no',
		width:window.screen.width,
		height:window.screen.height
	}
	Shell.pop_up = {
		open: function(ruta,title,obj){
			var opt = Shell.ampliar({},pop_upDefaults,obj);
			this.vtn = open(ruta,title,'"'+opt.join(", ")+'"');
			return this.vtn;
		},
		close : function(){
			this.vtn.close();
			return this.vtn;
		}
	};
	
	Shell.Alert = {
		verticalOffset: -75, 
		horizontalOffset: 0, 
		repositionOnResize: true,
		overlayOpacity: .01,
		overlayColor: '#FFF',
		draggable: true,
		okButton: 'OK', 
		cancelButton: 'Cancelar',
		dialogClass: null,
		existo: 0,
		
		alert: function(message, title, callback){
			title = (title == undefined)?"ShellAlert":title;
			Shell.Alert._show(title, message, null, 'alert', function(result) {
				if( callback ) callback(result);
			});
		},
		confirm : function(message, title, callback){
			title = (title == undefined)?"ShellConfirm":title;
			Shell.Alert._show(title, message, null, 'confirm', function(result) {
				if( callback ) callback(result);
			});
		},
		prompt: function(message, value, title, callback){
			title = (title == undefined)?"ShellPrompt":title;
			Shell.Alert._show(title, message, value, 'prompt', function(result) {
				if( callback ) callback(result);
			});
		},
		_create: function(){
			var classparen = 'ShellAlerts';
			if(this.dialogClass != null){
				classparen	+= " "+this.dialogClass;
			}
			this.parent = S('div',{
					AddClass:classparen,
					id:'ShellAlerts'
				}).agregar(S('body'));
			this.title = S('h1',{
					AddClass:'title',
					id: 'ShellAlertsTitle'
				}).agregar(this.parent);
			this.content = S('div',{
					AddClass: 'content',
					id: 'ShellAlertsContent'
				}).agregar(this.parent);
			this.message = S('div',{
					AddClass: 'message',
					id: 'ShellAlertsMsm'
				}).agregar(this.content);
		},
		_show: function(title, msg, value, type, callback) {
			this._create();
			this._hide();
			this._overlay('show');
			
			this.title.html(title);
			this.content.AddClass(type);
			this.message.html(msg);
			
			this._reposition();
			this._maintainPosition(true);
			callback = (S.esFuncion(callback))?callback:function(v){return v;};
			switch( type ) {
				case 'alert':
					this.panel = S('div',{
						AddClass: 'panel'
					})
					.agregar(this.message);
					this.Ok = S('button',{
						AddClass:'btn Ok',
						html: this.okButton
					})
					.click(function(){
						Shell.Alert._hide();
						callback(true);
					})
					.keypress(function(e){
						if( e.keyCode == 13 || e.keyCode == 27 ){
							Shell.Alert._hide();
							callback(true);
						}
					})
					.agregar(this.panel);
					this.existo = 1;
				break;
				case 'confirm':
					this.existo = 1;
					this.panel = S('div',{
						AddClass: 'panel'
					})
					.agregar(this.message);
					this.Ok = S('button',{
						AddClass:'Ok',
						html: "Aceptar"
					})
					.click(function(){
						Shell.Alert._hide();
						callback(true);
					})
					.keypress(function(e){
						if( e.keyCode == 13){
							Shell.Alert._hide();
							callback(true);
						}
					})
					.agregar(this.panel);
					this.Cancel = S('button',{
						AddClass:'Clear',
						html: this.cancelButton
					})
					.click(function(){
						Shell.Alert._hide();
						callback(false);
					})
					.keypress(function(e){
						if( e.keyCode == 27 ){
							Shell.Alert._hide();
							callback(false);
						}
					}).agregar(this.panel);
				break;
				case 'prompt':
					this.existo = 1;
					this.val = S('input',{
						atrib:{
							type:'text',
							size:'30',
							value:''
						}
					}).agregar(this.message).focus();
					this.panel = S('div',{
						AddClass: 'panel'
					})
					.agregar(this.message);
					this.Ok = S('button',{
						AddClass:'Ok',
						html: this.okButton
					})
					.click(function(){
						var v = Shell.Alert.val.valor();
						Shell.Alert._hide();
						callback(v);
					})
					.keypress(function(e){
						if( e.keyCode == 13){
							var v = Shell.Alert.val.valor();
							Shell.Alert._hide();
							callback(v);
						}
					})
					.agregar(this.panel);
					this.Cancel = S('button',{
						AddClass:'Clear',
						html: this.cancelButton
					})
					.click(function(){
						Shell.Alert._hide();
						callback(null);
					})
					.keypress(function(e){
						if( e.keyCode == 27 ){
							Shell.Alert._hide();
							callback(null);
						}
					}).agregar(this.panel);
					this.val.thisElement.select();
				break;
			}
			if(this.draggable){
				S("#ShellAlerts").draggable({
					handle:S("#ShellAlertsTitle"),
					StyleDragStart:{
						opacity : 1,
						background:"#507A03",
						color: '#fff'
					},
					StyleDragStop:{
						opacity : 1,
						background:"#fff",
						color: '#507A03'
					}
				});
			}
		},
		_hide: function() {
			if(this.existo == 1){
				if(S.existe('#ShellAlerts')){
					S('#ShellAlerts').remover();
				}
				this._overlay('hide');
			}
			this._maintainPosition(false);
			this.existo = 0;
		},
		_overlay: function(status) {
			switch( status ) {
				case 'show':
					this._overlay('hide');
					this.modal = S('div',{
						AddClass:'modal',
						id:'ShellAlertsModal'
					})
					.agregar('body')
					.stylo({
						height:S('body').alto()+"px",
						background:this.overlayColor,
						opacity:this.overlayOpacity
					})
					.click(function(){
						Shell.Alert._focus();
					});
				break;
				case 'hide':
					if(S.existe('#ShellAlertsModal')){
						S('#ShellAlertsModal').remover();
					}
				break;
			}
		},
		_reposition: function() {
			if(S.existe('#ShellAlerts')){
				var top = ((S(window).alto() /2) - (S('#ShellAlerts').alto() /2))+Shell.Alert.verticalOffset;
				var left = ((S(window).ancho() /2) - (S('#ShellAlerts').ancho() /2))+Shell.Alert.horizontalOffset;
				if( top < 0 ) top = 0;
				if( left < 0 ) left = 0;
				//S('#ShellAlerts').posicion(left,top);
				S('#ShellAlerts').centrar();
				S('#ShellAlertsModal').stylo('height',S('body').alto()+"px");
			}
		},
		_maintainPosition: function(status) {
			if(this.repositionOnResize){
				if(status){
					S.resize(Shell.Alert._reposition);
					S.load(Shell.Alert._reposition);
					S.scroll(Shell.Alert._reposition);
				}
				else{
					S.event.Remove(window,'resize',Shell.Alert._reposition);
				}
			}
		},
		_focus: function(){
			S("#ShellAlerts").Efecto("dance");
		}
	};
	window.alert = function(message, title, callback){
		Shell.Alert.alert(message, title, callback);
	};
	window.confirm = function(message, title, callback) {
		Shell.Alert.confirm(message, title, callback);
	};
		
	window.prompt = function(message, value, title, callback) {
		Shell.Alert.prompt(message, value, title, callback);
	};
	
	//Plugins
	Shell.Tabla = function(e){
		if(S.esUndefined(e)){
			var elem = S('.tabla').thisElement;
		}
		else{
			var elem = S.Element(e);
		}
		S.asigFun(elem,function(tabla){
			var cellXrow = 1,pantalla;
			var numCell = function(){
				var hi = tabla.children;
				S.forEach(hi,function(i,te){
					if(S(te).Classexiste("tr")){
						var wtr= S(te).ancho();
						S.forEach(te.children,function(i,th){
							var calc = wtr;
							if(S(th).data('cols')){
								if(cellXrow == 1){
									calc = wtr;
								}else{
									calc = Math.round(wtr/parseInt(cellXrow));
									calc = Math.round(calc*parseInt(S(th).data('cols')));
								}
								cellXrow = te.children.length;
							}
							else{
								cellXrow = te.children.length;
								calc = Math.round(wtr/parseInt(cellXrow));
							}
							
							S(th).stylo({
									width: calc+"px"
								});
						})
					}
				})
			}
			pantalla =  {
					w:S(window).ancho(),
					h:S(window).alto()
				}
			S.resize(function(){
				var p =  {
					w:S(this).ancho(),
					h:S(this).alto()
				}
				if(p.w < pantalla.w){
					console.log(p.w,p.w <= 640);
					if(p.w <= 640){
						S('.tabla .th').stylo({
							display: 'block',
							width: '100%'
						})
					}
				}
				else if(p.w == pantalla.w){
					numCell();
				}
			})
			numCell();
		})
		return this;
	}
	var ShellEfectos = {
			Mantener:{
				basigOut:1500,
				basigIn:1500,
				boom:1000,
				rotate:1000,
				PersRight:2000,
				PersLeft:2000,
				PersUp:2000,
				PersDown:2000,
				SliderUP: 1500,
				SliderDown: 1500,
				SliderRight: 1500,
				SliderLeft: 1500,
				floating:1000
			},
			Especiales :{
				dance:1500,
				jamp:1500,
				fourRock:1500,
				Parpadear:1500,
				zoomIn:1000,
				slideExpandUp:1000,
				tossing:1000
			},
			Slider:{
				SliderDownR:1500,
				SliderLR:1500,
			},
			Perspective:{
				PersAll:4000
			}
		};
	Shell.getEfecto=function (name){
		var ms = null;
		Shell.forEach(ShellEfectos,function(i, v){
			if(ShellEfectos[i].hasOwnProperty(name)){
				ms = ShellEfectos[ i ][ name ];
			}
		})
		return ms;
	};
	var EfectoDefaul = {
			duracion:1000,
			curva:'lineal',
			efecto:null
		};
	var efecto = "";
	Shell.sr.Efecto = function(name,fn){
			var elem = this.thisElement;
			if(S.esString(name)){
				S.asigFun(elem,function(elem){
					var intervalo;
					var asig = function(el,nclass){
						var ms = S.getEfecto(name);
						clearInterval(intervalo);
						if(el.classList.contains(nclass)){
							if(!S.key_existe(nclass,ShellEfectos.Mantener)){
								S(el).RemoveClass(nclass);
							}
						}
						if(efecto != ""){
							S(el).RemoveClass(efecto).AddClass(nclass);
							
						}else{
							S(el).AddClass(nclass);
						}
						efecto = nclass;
						intervalo = setTimeout(function(){
							if(!S.key_existe(nclass,ShellEfectos.Mantener)){
								S(el).RemoveClass(nclass);
							}
							if(S.esFuncion(fn)){
									fn.call(el);
							}
						},ms);
					}
					asig(elem,name);
				})
			}
			else if(S.esObj(name)){
				var opt = S.ampliar({}, EfectoDefaul, name);
				Shell.animate({
					duracion:opt.duracion,
					Animate:opt.curva,
					step:opt.efecto,
					element:elem
				})
			}
			return this;
		}
	var tooltipDefaul = {
		elementos 	: (Shell.existe('[title]'))?Shell('[title]'):(Shell.existe('[alt]'))?Shell('[alt]'):null,
		tooltipClass: 'Shel_tooltip',
		contenido	: undefined,
		efectoIn	: 'basigIn',
		efectoOut	: 'basigOut',
		arrow		: 'top',
		mouse		: false
	}
	var contenidoDefaults = {
		elem		: null,
		title		: ""
	}
	function getElement(){
		elem = [];
		if(S.existe('[title]')){
			var title = (S.esArray(S('[title]').thisElement))?S('[title]').thisElement:[S('[title]').thisElement];
			S.forEach(title,function(i,v){
				elem.push(v);
			})
		}
		if(S.existe('[alt]')){
			var alt = (S.esArray(S('[alt]').thisElement))?S('[alt]').thisElement:[S('[alt]').thisElement];
			S.forEach(alt,function(i,v){
				elem.push(v);
			})
		}
		return elem;
	}
	function getPosicion(elem,pos){
		if(elem && S.esElem(elem)){
			var ps = {
				top:0,
				left:0
			};
			if(pos == 'top'){
				var w = S(elem).alto();
				var p = S(elem).posicion();
				ps.top = parseInt(p.top + w + 10);
				ps.left = parseInt(p.left + 10);
			}
			else if(pos == "bottom"){
				var w = S(elem).alto();
				var p = S(elem).posicion();
				ps.top = parseInt(p.top - w - 65);
				ps.left = parseInt(p.left + 10);
			}
			else if(pos == "left"){
				var w = S(elem).ancho();
				var p = S(elem).posicion();
				ps.top = parseInt(p.top - 15);
				ps.left = parseInt(p.left + w + 5);
			}
			else if(pos == "right"){
				var w = S(elem).ancho();
				var p = S(elem).posicion();
				ps.top = parseInt(p.top - 15);
				ps.left = parseInt(p.left - w - 65);
			}
			else if(pos == "auto"){
				var w = S(elem).ancho();
				var p = S(elem).posicion();
				var tt = S(elem).Sigher();
				var th = S(tt).alto();
				var tw = S(tt).ancho();
				if(p.top > th){
					ps.top = parseInt(p.top - w - 65);
					ps.left = parseInt(p.left + 10);
					ps.arrow = "bottom";
				}
				else if(p.top < th){
					ps.top = parseInt(p.top + w + 10);
					ps.left = parseInt(p.left + 10);
					ps.arrow = "top";
				}
				else if(p.left > tw){
					ps.top = parseInt(p.top - 15);
					ps.left = parseInt(p.left - w - 65);
					ps.arrow = "right";
				}
				else if(p.left < tw){
					ps.top = parseInt(p.top - 15);
					ps.left = parseInt(p.left + w + 5);
					ps.arrow = "left";
				}
			}
			return ps;
		}
	}
	function getPosicionMouse(elem,event){
		if(elem && S.esElem(elem)){
			var w = S(elem).alto();
			var top = event.pageY;
			var left = event.pageX;
			return {
				top:top-30,
				left: left+20
			}
		}
	}
	function AddTitle(e,t){
		if(e.title){
			S(e).atrib('title',t);
		}
		else if(e.alt){
			S(e).atrib('alt',t);
		}
	}
	function RemoveTitle(e){
		if(e.title){
			S(e).removeAtrib('title');
		}
		else if(e.alt){
			S(e).removeAtrib('alt');
		}
	}
	Shell.tooltip =function(opt){
		var TT = this.tooltip;
		var parent,titloConten;
		var opt = S.ampliar({},tooltipDefaul,opt);
		var elem = (opt.elementos != null)?opt.elementos:getElement();
		var conten = [];
		if(!S.esUndefined(opt.contenido) && S.esObj(opt.contenido)){
			if(opt.contenido && opt.contenido[0].hasOwnProperty('elem')){
				S.forEach(opt.contenido,function(i,v){
					conten[i] =	S.ampliar({},contenidoDefaults,v);
					conten[i].elem = S.Element(conten[i].elem)[0];
				})
			}
		}
		else{
			S.forEach(elem,function(i,v){
				if(S.esVisible(v)){
					conten[conten.length] = {
						elem : v,
						title: (v.title)?v.title:v.alt
					}
				}
			})
		}
		var crear = function(){
			parent = S('div',{
				AddClass:opt.tooltipClass
			});
			if(opt.mouse){
				parent.stylo('cursor','help');
				parent.AddClass("left");
			}else{
				var t = false;
				if(opt.arrow != "" && opt.arrow != "bottom" && opt.arrow != "auto"){
					t = opt.arrow;
				}
				if(t){
					parent.AddClass(t);
				}
			}
		}
		var titulo = function (){
			S.forEach(conten,function(i,v){
				crear();
				if(S.esObj(v)){
					e = v.elem;
					t = v.title;
					parent.html(t);
					parent.despues(e)
						  .stylo({
								display:'none'
							});
					RemoveTitle(e);
					S(e).hover(function(e){
						var p;
						var pa = S(this).Sigher();
						if(pa.nodeName == 'DIV' && pa.classList.contains(opt.tooltipClass)){
							if(opt.mouse){
								p = getPosicionMouse(this,e);
							}
							else
							{
								p = getPosicion(this,opt.arrow);
								if(S.key_existe('arrow',p)){
									parent.AddClass(p.arrow);
								}
							}
							S(pa).stylo({
								'display':'block'
							})
							S(pa).Efecto(opt.efectoIn);
							S(pa).stylo({
								top:p.top +"px",
								left:p.left + "px"
							})
						}
					},function(){
						var pa = S(this).Sigher();
						if(pa.nodeName == 'DIV' && pa.classList.contains(opt.tooltipClass)){
							S(pa).Efecto(opt.efectoOut);
							ms=S.getEfecto(opt.efectoOut);
							setTimeout(function(){
								S(pa).stylo('display','none');
								AddTitle(e,t);
							},ms)
						}
					},function(e){
						var pa = S(this).Sigher();
						if(opt.mouse){
							if(S.esVisible(pa)){
								if(pa.nodeName == 'DIV' && pa.classList.contains(opt.tooltipClass)){
									p = getPosicionMouse(this,e);
									S(pa).stylo({
										top:p.top +"px",
										left:p.left + "px"
									})
								}
							}
						}
					})
				}
			})
		}
		TT.open = function(){
			S.forEach(conten,function(i,v){
				crear();
				if(S.esObj(v)){
					e = v.elem;
					t = v.title;
					parent.html(t);
					parent.despues(e)
						  .stylo({
								display:'none'
							});
					var pa = S(e).Sigher();
					if(pa.nodeName == 'DIV' && pa.classList.contains(opt.tooltipClass)){
						var p = getPosicion(e);
						S(pa).stylo({
							'display':'block'
						})
						S(pa).Efecto(opt.efectoIn);
						S(pa).stylo({
							top:p.top +"px",
							left:p.left + "px"
						})
						parent.mouseout(function(){
							var pa = this;
							S(pa).Efecto(opt.efectoOut);
							ms=S.getEfecto(opt.efectoOut);
							setTimeout(function(){
								S(pa).stylo('display','none');
							},ms);
						})
					}
				}
			})
			return TT;
		}
		TT.close = function(){
			var pa = parent;
			S(pa).Efecto(opt.efectoOut);
			ms=S.getEfecto(opt.efectoOut);
			setTimeout(function(){
				S(pa).stylo('display','none');
			},ms);
			return TT;
		}
		titulo();
		return this.tooltip;
	};
	Shell.sr.tooltip = function(opt){
		var opt = S.ampliar({},tooltipDefaul,opt);
		var SS = this.thisElement;
			SS = (S.esElem(SS))?[SS]:SS;
			opt.contenido = [];
		S.forEach(SS,function(i,e){
			if(S.esVisible(e)){
				opt.contenido[opt.contenido.length] ={
						elem		: e,
						title		: (e.title)?e.title:e.alt
				}
			}
		})
		S.tooltip(opt);
		return this;
	};
	var DialogDefault = {
		Escape: 	true,
		Arrastrable:true,
		rezise:		true,
		Alto: 		"auto",
		Ancho: 		"400px",
		Modal: 		true,
		Fondo:		"#FFF",
		Stylo:		{},
		efectoIn:	'basigIn',
		efectoOut:	'basigOut',
		autoOpen:	false
	};
	Shell.dialogo = function(opt){
		if(S.existe('dialog')){
			var dialog = S('dialog').thisElement;
			var titles = null;
			S.asigFun(dialog,function(d){
				if(d && d.nodeName === 'DIALOG' && d.nodeType === S.Nodo.ELEMENT_NODE){
					var parametros = S.ampliar({},DialogDefault,opt);
					S(d).AddClass('ShellDialog');
					var h = S(d).prihijo();
					if(h.nodeName.indexOf("H") != -1){
						titles = h;
						var closess = S('button',{
							AddClass:"close",
							html:"<span class='Shellicon-cancel'></span>"
						}).click(function(){
							d.close();
						})
						.agregar(S(titles));
						S(titles).AddClass("titles");
					}
					var getAttr = function(){
						var attr = {};
							param = S(d).data('parametros');
							param = param.replace("\"","");
							param = param.replace(/\s/g,"");
							param = param.split(";");
						S.forEach(param,function(p,v){
							v = v.split(":");
							name = v[0];
							valor = v[1];
							if(name != "" && valor != undefined){
								attr[ name ] = valor;
							}
						});
						return S.ampliar({},DialogDefault,attr);
					}
					var opt;
					if(S.esUndefined(S(d).data("parametros")) || S(d).data("parametros") == null){
						opt = parametros;
					}
					else{
						opt = getAttr();
					}
					d.style.display = 'none';
					var Escape 		= eval(opt.Escape),
						Arrastrable	= eval(opt.Arrastrable),
						rezise		= eval(opt.rezise),
						Modal		= eval(opt.Modal),
						autoOpen	= eval(opt.autoOpen);
					d.show = function(){
						d.style.display = 'block';
						S(d).Efecto(opt.efectoIn);
						S(d).centrar();
						if(Modal){
							S('#ShellModal').stylo('display','block');
						}
					}
					d.close = function(){
						S(d).Efecto(opt.efectoOut);
						if(Modal){
							S('#ShellModal').stylo('display','none');
						}
						ms=S.getEfecto(opt.efectoOut);
						setTimeout(function(){
							d.style.display = 'none';
							},ms)
					}
					if(Modal){
						if(!S.existe('#ShellModal')){
							var p= S.pantalla();
							var w = p.ancho;
							var h = p.alto;
							var model = S('div',{
							id:'ShellModal',
							stylo:{
								width:w+"px",
								height:h+"px",
								display:'none'
							},
							posicion:{
								top:'0px',
								left:'0px'
							}
							}).agregar('body');	
						}
					}
					if(Escape){
						S(document).keydown(function(e){
							if(e.keyCode == 27){
								d.style.display = 'none';
							}
						})
					}
					if(rezise)
					{
						S(d).stylo({
							resize:'both'
						})
					}
					if(Arrastrable){
						var objarr = {
							StyleDragStart:{
								opacity : 1,
								cursor:'move'
							},
							StyleDragStop: {
								opacity : 1,
								cursor:'dafault'
							},
							cursor:'dafault',
							handle:null
						};
						if(titles != null){
							objarr.handle = S(titles);
						}
						S(d).draggable(objarr);
					}
					S(d).stylo({
						background:opt.Fondo,
						height:opt.Alto,
						width:opt.Ancho,
						"z-index": 99999
					});
					if(opt.Stylo && S.esObj(opt.Stylo)){
						S(d).stylo(opt.Stylo);
					}
					if(autoOpen){
						d.show();
					}
					S("footer, .footer").AddClass("titles");
					if(S.existe("footer>button, footer>input, .footer>button, .footer>input")){
						var fot = S("footer>button, footer>input, .footer>button, .footer>input");
						S.asigFun(fot.thisElement,function(boton){
									if(boton.nodeName == "BUTTON" || boton.nodeName === "INPUT"){
										if(S(boton).data('role') == "ok"){
											S(boton).AddClass("Ok");
										}
									}
									
								})
					}
					var button;
					var hd = S('button[data-role="close"]');
					var bd = S('input[data-role="close"]');
					if(hd && hd.length != 0)
					{
						button = hd;
					}
					else if(bd && bd.length != 0){
						button = bd;
					}
					if(button){
						button
						.AddClass("Clear")
						.click(function(){
							d.close();
						})
					}
				}
				titles = null;
			})
		}
		else{
			console.info("No existen dialogos en la pagina");
		}
	};
	Shell.sr.ampliar({
			show:function(){
				var d = this.thisElement;
				if(d.nodeName === 'DIALOG'){
					d.show();
				}
				return this;
			},
			close:function(){
				var d = this.thisElement;
				if(d.nodeName === 'DIALOG'){
					d.close();
				}
				return this;
			} 
	});
	var CalendarioDefaults = {
		DefaultZone	:-4.5,
		dateFormat	:'dd/mm/yy',
		mes			: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
					  'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		AbrMes		: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
		dias		: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
		AbrDias		: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		rango		: [10,10],
		efectoIn	: 'basigIn',
		efectoOut	: 'basigOut',
		evento		: 'click focus',
		elemts		: 'body',
		//fn
		select		: null
	}
	Shell.Calendario = function(opt){
			var ss;
			var opt = S.ampliar({},CalendarioDefaults,opt);
			if(S.existe('input[type="date"]')){
				ss = S('input[type="date"]');
			}
			else if(S.existe('input[type="date-time"]')){
				ss = S('input[type="date-time"]');
			}
			else
			{
				opt.evento = null;
				ss = S(opt.elemts);
			}
			ss.Calendario(opt);
			return this;
		};
	Shell.sr.Calendario = function(opt){
		var opt = S.ampliar({},CalendarioDefaults,opt);
		var SS = this.thisElement;
		S.asigFun(SS,function(v){
			S(v).data("se",'Calendario');
			var parent,Chead,Cbody,Cfooter,close,msa,gmesanos,g;
			var miliZone = function(){
				var ZH  = opt.DefaultZone;
				var seg = (ZH*60*60)*1000;
				return seg;
			}
			var getDia = function(){
				var dt;
					dt = new Date();
				if(opt.DefaultZone){
					var dateNow=new Date();
					dt = new Date(dateNow.getUTCFullYear(), dateNow.getUTCMonth(), dateNow.getUTCDate(), dateNow.getUTCHours(), dateNow.getUTCMinutes(), dateNow.getUTCSeconds())
					dt.setTime(dt.getTime()+miliZone());
				}
				return dt;
			}
			var ano = getDia().getFullYear();
			var mes = getDia().getMonth();
			var dia = getDia().getDate();
			var sm	= getDia().getDay();
			var pn = function(){
				premes = S('div',{
						AddClass:'prev'
					}).click(function(){
						ms = msa.atrib('data-mes');
						alo = msa.atrib('data-ano');
						if(ms == 0){
							ms = 11;
							alo = parseInt(alo)-1;
						}
						else
						{ms = parseInt(ms)-1;}
						Cbody.html("");
						gmesano(ms,alo).agregar(Cbody);
					}).agregar(Cbody);
				sigmes = S('div',{
						AddClass:'next'
					}).click(function(){
						ms = msa.atrib('data-mes');
						alo = msa.atrib('data-ano');
						if(ms == 11){
							ms = 0;
							alo = parseInt(alo)+1;
						}
						else
						{ms = parseInt(ms)+1;}
						Cbody.html("");
						gmesano(ms,alo).agregar(Cbody);
				}).agregar(Cbody);
			}
			var getmes = function(m,a){
				var a = parseInt(a);
				var m = parseInt(m);
				var mest = S('table',{});
				var tr = [
					S('tr',{}).agregar(mest),
					S('tr',{}).agregar(mest),
					S('tr',{}).agregar(mest),
					S('tr',{}).agregar(mest),
					S('tr',{}).agregar(mest)];
				var thano = S('th',{
						atrib:{
							colspan:4
						}
						}).agregar(tr[0].thisElement);
				var sss = S('div',{
						AddClass:'select'
					}).agregar(thano.thisElement)
				var sano = S('select',{}).agregar(sss)
					.change(function(){
					var ta = S(this).valor();
					msa.atrib('data-ano',ta);
				});
				var iniano = parseInt (a - opt.rango[0]);
				var finano = parseInt (a + opt.rango[1]);
				for(var e = iniano; e <=finano; e++){
					var option = S('option',{
						atrib:{
							value:e
						},
						html:"<span>"+e+"</span>"
					}).agregar(sano.thisElement);
					if(e == a){
						option.AddClass('anoactual');
						option.atrib('selected','selected');
					}
				}
				var a = 0;
				var t = 1;
				S.forEach(opt.AbrMes,function(i,v){
					var tdmes = S('td',{
							html:v,
						}).click(function(){
							amm =msa.atrib('data-ano');
							Cbody.html("");
							gmesano(i,amm).agregar(Cbody);
						});
					if(a == 3){
						a = 0;
						tdmes.agregar(tr[t].thisElement);
						t++;
					}
					else{
						tdmes.agregar(tr[t].thisElement);
						a++;
					}
					if(i == m){
						tdmes.AddClass('mesactual');
					}
				})
				return mest;
			}
			var format = {
				'dd/mm/yy':'{d}/{m}/{a}',
				'yy-mm-dd':'{a}-{m}-{d}',
				'mm-dd-yy':'{m}-{d}-{a}'
				};
			var getforma = function(elem,date){
				var m = date.m+1;
				var d = (date.d <= 9)?("0"+date.d):date.d;
				var m = (m <= 9)?("0"+m):m;
				fecha = format[opt.dateFormat];
				fecha = fecha.replace('{d}',d);
				fecha = fecha.replace('{m}',m);
				fecha = fecha.replace('{a}',date.a);
				if(v.nodeName == 'INPUT'){
					S(v).valor(fecha);
				}
				else{
					if(S.esFuncion(opt.select)){
						opt.select.call(v,fecha);
					}
				}
				close_cal();
			}
			var ultimo = function(m,a){
				var ud = 28;
				var treitayuno = [0,2,4,6,7,9,11];
				var treinta = [3,5,8,10];
				if(S.enArray(m,treitayuno) != -1){
					ud = 31;
				}
				else if(S.enArray(m,treinta) != -1){
					ud = 30;
				}
				else if((new Date(a,m,29).getDate()) == 29){
					ud = 29;
				}
				return ud;
			}
			var gmesano = function(m,a){
				var a = parseInt(a);
				var m = parseInt(m);
				gmesanos = S('table',{
						AddClass:'meses'
					});
				var trd = S('tr',{}).agregar(gmesanos);
				S.forEach(opt.AbrDias,function(i,v){
					S('th',{
					AddClass:'noselec',
					html:"<span>"+v+"</span>"
						}).agregar(trd.thisElement);
						
				})
				var trpri = S('tr',{}).agregar(gmesanos);
				var cD = 1;
				var pd = new Date(a, m, 1).getDay();
				var ud = ultimo(m,a);
				for(var i = 0; i<7; i++){
					var td = S('td',{
						AddClass:'diass'
						}).agregar(trpri.thisElement)
						.click(function(){
							var h = S(this).texto();
							if(h != ""){
								var date = {
									d:h,
									m:m,
									a:a
								}
							getforma(g,date);
							}
						});
					if(i < pd){
						var cds = S('span',{
						AddClass:'pasado'
						}).agregar(td.thisElement);
						if(i == 0){
							cds.AddClass('don');
						}
					}
					else{
						var cds = S('span',{}).agregar(td.thisElement);
						if(i == 0){
							cds.AddClass('don');
						}
						else if(i == 6){
							cds.AddClass('sab');
						}
						if(cD == dia && m == mes){
							cds.AddClass('diaactual');
						}
						cds.html(cD);
						cD++;
					}
				}
				var restr = S('tr',{}).agregar(gmesanos);
				var das = 0;
				while(cD <= ud){
					var td = S('td',{
						AddClass:'diass'
						}).agregar(restr.thisElement)
						.click(function(){
							var h = S(this).hijo();
								h = S(h[0]).html();
							if(h != ""){
								var date = {
									d:h,
									m:m,
									a:a
								}
								getforma(g,date);
							}
						});
				var cds = S('span',{}).agregar(td.thisElement);
				if(das == 0){
					cds.AddClass('don');
				}
				else if(das == 6){
					cds.AddClass('sab');
				}
				if(cD == dia && m == mes){
					cds.AddClass('diaactual');
				}
				cds.html(cD);
				cD++;
				if(das == 6){
					das = 0;
					restr = S('tr',{}).agregar(gmesanos);
				}else{das++;}
				}
				das--;
				if(das != 0){
					for(var r = (das+1); r <7; r++){
						var td = S('td',{
						AddClass:'diass'
						}).agregar(restr.thisElement);
						
						var cds = S('span',{
							AddClass:'pasado'
							}).agregar(td.thisElement);
						if(i == 6){
							cds.AddClass('sab');
						}
					}
				}
				msa.atrib('data-mes',m);
				msa.atrib('data-ano',a);
				msa.html(opt.mes[m]+" de "+a);
				pn();
				return gmesanos;
			}
			var close_cal = function(){
				if(v.nodeName == "INPUT"){
					parent.Efecto(opt.efectoOut);
				}
			}
			var getInputRespon = function(){
				var pt = S.pantalla().anchoT;
				var a = '10%';
				if(parseInt(pt) <= 700){
					a = '14%';
				}
				if(parseInt(pt) <= 480){
					a = '17%';
				}
				return a;
			};
				if(v.nodeName == "INPUT"){
					S(v).atrib({
						'type':'text',
						'readOnly':true
					}).stylo({
						cursor:'pointer',
						width: getInputRespon()
					});
				}
				g = v;
				S(g).valor(opt.dateFormat);
				parent = S('div',{
					AddClass:'ShellCalendario'
				})
				if(v.nodeName == "INPUT"){
					parent.stylo("position","absolute");
				}
				Chead = S('div',{
					AddClass:'head'
				})
				Cbody = S('div',{
					AddClass:'body'
				})
				Cfooter = S('div',{
					AddClass:"footer",
				})
				close = S('button',{
					AddClass:'close',
					html:"<span class='Shellicon-cancel'></span>"
				}).click(close_cal);
				msa = S('span',{
					AddClass:'select',
					html:dia+" de "+opt.mes[mes]+" de "+ano,
					atrib:{
						'data-mes':mes,
						'data-ano':ano
					}
					})
					.click(function(){
						var mese = S(this).atrib('data-mes');
						var aa = S(this).atrib('data-ano');
						var table = getmes(mese,aa);
						Cbody.html("");
						table.agregar(Cbody);
					})
					.agregar(Chead);
				close.agregar(Chead);
				Chead.agregar(parent);
				Cbody.agregar(parent);
				gmesano(mes,ano).agregar(Cbody);
				if(v.nodeName == "INPUT"){
					parent.despues(v);
					S(v).sp(opt.evento,function(e){
						e.cancelEv();
						var h = S(this).alto();
						var p=S(this).posicion();
							cals = S(this).Sigher();
					cals = S(cals);
					cals.stylo({
						top : parseInt(p.top + h) +"px",
						left: p.left + 'px'
					})
					cals.Efecto(opt.efectoIn);
				})	
				}
				else{
					parent.agregar(v).Efecto(opt.efectoIn);
				}
		})
		return this;
	};
	var TimeDefault ={
			timeFormat	:'hh:mm:ss',
			DefaultZone	:-4.5,
			efectoIn	: 'basigIn',
			efectoOut	: 'basigOut'
		};
	var numero= /^[0-9]+$/;
	Shell.Time = function(formato){
		var ss  = S('input[type="time"]');
		if(ss.length != 0){
			ss.Time(formato);
		}
		return this;
	}
	Shell.sr.Time = function(opt){
		var opt = S.ampliar({},TimeDefault,opt);
		var SS = this.thisElement;
		S.asigFun(SS,function(v){
			S(v).data("se",'Time');
			var parent,hora,minuto,segundo;
			var format = 24;
			var formatos = function (v,p){
				if(format == 24){
					if(p == 1){
						if(v > (format-1)){
							v = 0;
						}
					}
					else{
						if(v < 0){
							v = (format-1);
						}
					}
				}
				return v;
			}
			var miliZone = function(){
				var ZH  = opt.DefaultZone;
				var seg = (ZH*60*60)*1000;
				return seg;
			}
			var getDia = function(){
				var dt;
					dt = new Date();
				if(opt.DefaultZone){
					var dateNow=new Date();
					dt = new Date(dateNow.getUTCFullYear(), dateNow.getUTCMonth(), dateNow.getUTCDate(), dateNow.getUTCHours(), dateNow.getUTCMinutes(), dateNow.getUTCSeconds())
					dt.setTime(dt.getTime()+miliZone());
				}
				return dt;
			}
			var tiempo = {
				h:getDia().getHours(),
				m:getDia().getMinutes(),
				s:getDia().getSeconds()
			}
			var formatosH = {
				'hh:mm:ss':'{h}:{m}:{s}',
				'hh:mm':'{h}:{m}',
				'mm:ss':'{m}:{s}',
				'ss':'{s}',
				'hh':'{h}',
				'mm':'{m}'
			}
			var close_time = function(){
				parent.Efecto(opt.efectoOut);
				ms=S.getEfecto(opt.efectoOut);
				setTimeout(function(){
					parent.remover();
					},ms)
			}
			var cam = function(data){
				var valor = 00;
				hh = S('div',{
					AddClass:'numero',
					atrib:{
						data:data
					}
				})
				if(data == 'hora'){valor=(tiempo.h <= 9)?"0"+tiempo.h:tiempo.h;}
				if(data == 'minuto'){valor=(tiempo.m <= 9)?"0"+tiempo.m:tiempo.m;}
				if(data == 'segundo'){valor=(tiempo.s <= 9)?"0"+tiempo.s:tiempo.s;}
				inp = S('input',{
					atrib:{
						type:'text',
						maxlength:2,
						size:2,
						value:valor
					}
					}).agregar(hh)
					.blur(function(){
						var n = S(this).valor();
						if(data == "hora"){
							if(parseInt(n) > format){
								S(this).valor(format-1);
							}
							else if(parseInt(n) < 0){
								S(this).valor(0);
							}
						}
						else if(data == "minuto"){
							if(parseInt(n) > 59){
								S(this).valor(59);
							}
							else if(parseInt(n) < 0){
								S(this).valor(0);
							}
						}
						else if(data == "segundo"){
							if(parseInt(n) > 59){
								S(this).valor(59);
							}
							else if(parseInt(n) < 0){
								S(this).valor(0);
							}
						}
					})
					.keydown(function(e){
						var n = S(this).valor();
						if(e.keyCode == 38){
							c = formatos((parseInt(n)+1),1);
							c = (c <= 9)?"0"+c:c;
							S(this).valor(c);
						}
						else if(e.keyCode == 40){
							c = formatos((parseInt(n)-1),2);
							c = (c <= 9)?"0"+c:c;
							S(this).valor(c);
						}
					})
					.keypress(function(e){
						var c= parseInt(e.key) || String.fromCharCode(e.keyCode);
						if(S.esNumero(c)){
							var n = S(this).valor();
							if(n == ""){
								n = c;
							}
							else if(n.length >= 2){
								var a = n.charAt(0);
								n = c+a;
							}
							else{
								n = n+c;
							}
							e.cancelEv();
							S(this).valor(n);
						}
						else{
							e.cancelEv();
						}
					});
				return hh;
			}
			var create = function(v){
				var getFormatHora = function(){
					var sFormato = formatosH[opt.timeFormat];
					var h = (S.existe('div[data="hora"]'))?S('div[data="hora"] input').valor():0;
					var m = (S.existe('div[data="minuto"]'))?S('div[data="minuto"] input').valor():0;
					var s = (S.existe('div[data="segundo"]'))?S('div[data="segundo"] input').valor():0;
					var t = sFormato.replace('{h}',h);
					t = t.replace('{m}',m);
					t = t.replace('{s}',s);	
					return t;
				}
				parent = S('div',{
					AddClass:'ShellTime'
				})
				var getInputRespon = function(t){
					var pt = S.pantalla().anchoT;
					var a = t;
					if(parseInt(pt) <= 700){
						a = t+5;
					}
					if(parseInt(pt) <= 480){
						a = t*2;
					}
					return a;
				};
				if(opt.timeFormat.length == 2){
					parent.ancho(getInputRespon(7)+'%');
				}
				else if (opt.timeFormat.length == 5){
					parent.ancho(getInputRespon(11)+'%');
				}
				else
				{
					parent.ancho(getInputRespon(15)+'%');
				}
				if(opt.timeFormat.indexOf('hh') != -1){
					
					cam('hora').agregar(parent);
					if(opt.timeFormat.length >= 5){
						S('span',{
							html:":"
						}).agregar(parent);
					}
				}
				if(opt.timeFormat.indexOf('mm') != -1){
					
					cam('minuto').agregar(parent);
					if(opt.timeFormat.length == 8){
						S('span',{
							html:":"
						}).agregar(parent);
					}else if(opt.timeFormat.length >= 5 && opt.timeFormat.indexOf('hh') == -1)
					{
						S('span',{
							html:":"
						}).agregar(parent);
					}
				}
				if(opt.timeFormat.indexOf('ss') != -1){
					
					cam('segundo').agregar(parent);
				}
				S('div',{
					AddClass:'listo'
					}).agregar(parent)
					.click(function(){
						var hora = getFormatHora();
						S(v).valor(hora);
						close_time();
					})
				
			}
			create(v);
			var getInputwidth = function(){
					var pt = S.pantalla().anchoT;
					var a = '8%'
					if(parseInt(pt) <= 700){
						a = "11%";
					}
					if(parseInt(pt) <= 480){
						a = "15%";
					}
					return a;
				};
			S(v).stylo("width",getInputwidth()).atrib({
				type:'text',
				maxlength:2,
				size:8
			}).sp('click focus',function(e){
				e.cancelEv();
				var h = S(this).alto();
				var p=S(this).posicion();
				if(parent.padre == null){
					parent.agregar('body');
				}
				parent.stylo({
					top : parseInt(p.top + h) +"px",
					left: p.left + 'px'
				})
				parent.Efecto(opt.efectoIn);
			})
		})
	};
	var rangDefault = {
		orientacion:"horizontal",
		min:0,
		max:100,
		value:50,
		interval:1,
		size: "100%",
		fondo: "#036B03",
		cambio: null
	}
	Shell.range = function(obj){
		var elem = S("input[type='range']");
		if(S.existe("input[type='range']")){
			elem.range(obj);
		}
		return this;
	};
	Shell.sr.range=function(obj){
		var elem = this.thisElement;
		var getOrientacionRange = function(os){
			var classs = "";
			var size = {};
			if(os.orientacion.toUpperCase() == "HORIZONTAL"){
				classs = "slide_horizontal";
				size = {"width":os.size};
			}
			else if(os.orientacion.toUpperCase() == "VERTICAL"){
				classs = "slide_vertical";
				size = {'height':os.size,"width":"3%"};
			}
			return {
				clas:classs,
				size:size
				};
		}
		var tanto = function(max,value){
				return ((value*100)/max);
			}
		var getPosicionRange = function(a,i,o){
			var nuevovalor = tanto(o.max,a)+"%";
			var gr = (o.orientacion.toUpperCase() == "HORIZONTAL")?'90deg':'0deg';
			return "linear-gradient("+gr+","+o.fondo+" "+nuevovalor+", #FFFFFF 10%)";
		}
		S.asigFun(elem,function(v){
			S(v).data('se','range');
			var opt = S.ampliar({},rangDefault,obj);
			if(S(v).atrib("orient") != null){
				opt.orientacion = S(v).atrib("orient");
			}
			else{
				S(v).atrib("orient",opt.orientacion);
			}
			var gO = getOrientacionRange(opt);
			var valor;
			S(v).AddClass(gO.clas).stylo(gO.size);
			S(v).atrib({
				min: (S(v).atrib("min") != null)?S(v).atrib("min"):opt.min,
				max: (S(v).atrib("max") != null)?S(v).atrib("max"):opt.max,
				value: (S(v).atrib("value") != null)?S(v).atrib("value"):opt.value,
				step: (S(v).atrib("step") != null)?S(v).atrib("step"):opt.interval
			})
			opt.min = (S(v).atrib("min") != null)?S(v).atrib("min"):opt.min;
			opt.max = (S(v).atrib("max") != null)?S(v).atrib("max"):opt.max;
			opt.value = (S(v).atrib("value") != null)?S(v).atrib("value"):opt.value;
			opt.interval = (S(v).atrib("step") != null)?S(v).atrib("step"):opt.interval;
			var gr = (opt.orientacion.toUpperCase() == "HORIZONTAL")?'90deg':'0deg';
			S(v).stylo({
				background:"linear-gradient("+gr+","+opt.fondo+" "+tanto(opt.max,opt.value)+"%, #FFFFFF 10%)"
			})
			S(v).click(function(){
				valor = S(this).valor();
			}).sp('input change',function(){
				var newpos = getPosicionRange(S(this).valor(),valor,opt);
				S(this).stylo({
					background:newpos
				})
				if(S.esFuncion(opt.cambio)){
					opt.cambio.call(this,S(this).valor());
				}
			})
		})
		return this;
	};
	Shell.sr.ac = function(matriz){
		var elem = this.thisElement;
		var e = 1;
		var matris;
		var listas;
		S.asigFun(elem,function(v){
			S(v).data('se','ac');
			var parent,lista;
			if(matris != matriz){
				matris = matriz;
				listas = "ac"+e;
				parent = S('datalist',{
						id:"ac"+e,
						AddClass:"Shell_Autocomplete"
					}).antes(v);
				if(S.esArray(matris) && S.ObjLength(matris) > 0){
					S.forEach(matris,function(i,v){
						S('option',{
								value:v,
								label:v
						}).agregar(parent);
					})
				}
				S(v).atrib({
					list:"ac"+e
				});
				e++;
			}
			else{
				S(v).atrib({
					list:(!S.esUndefined(listas))?listas:"ac"+e
				});
			}
		})
		return this;
	};
	var SimpleColorDefaults = {
		title: 'SimpleColor',
		fn:null,
		efectoIn:	'basigIn',
		efectoOut:	'basigOut'
	}
	Shell.SimpleColor = function(obj){
		var ss  = S('input[type="color"]');
			if(ss.length != 0){
				ss.SimpleColor(obj);
			}
			return ss;
	}
	Shell.sr.SimpleColor = function(obj){
		var elem = this.thisElement;
		S.asigFun(elem,function(colors){
			if(S(colors).data('se') != 'SimpleColor'){
				S(colors).data('se','SimpleColor');
				var opt = S.ampliar({},SimpleColorDefaults,obj);
				var parent,head, contenido,footer,btnOk, r, g ,b, vr, vg, vb,spanValo;
				var getValuesThis = function(){
					var red = r.valor();
					var green = g.valor();
					var blue = b.valor();
					return "#"+S.Rgb_Hex(red,green,blue);
				};
				var refreshSwatch = function() {
					var red = r.valor();
					var green = g.valor();
					var blue = b.valor();
					vr.html(red);
					vg.html(green);
					vb.html(blue);
					rgba = "#"+S.Rgb_Hex(red,green,blue);
					spanValo.html(rgba).stylo({
						"background-color":rgba
					});
				}
				var createSC = function(inp){
					parent = S("div",{
							AddClass:'SMcolorpicker',
							stylo:{
								width:"550px",
								display:'none'
							},
						}).agregar('body');
					head = S('header',{
						AddClass:'titles',
						html:"<h3>"+opt.title+"</h3>"
					}).agregar(parent);
					contenido = S('section',{
						AddClass:'privados',
						stylo:{
							width: '90%',
							height: '13em'
						}
					}).agregar(parent);
					closess = S('button',{
							AddClass:"close",
							html:"<span class='Shellicon-cancel'></span>"
						}).click(function(){
							removeSC();
						}).agregar(head);
					footer = S('footer',{}).agregar(parent);
					btnOk = S('button',{
						AddClass:"Ok",
						html:'Ok'
					}).click(function(){
						if(colors.nodeName == "INPUT"){
							papa = S(colors).padre;
							if(S(papa).Classexiste("color")){
								S(papa).stylo('background',getValuesThis());
							}
							S(colors).valor(getValuesThis());
							
						}
						else{
							S(colors).stylo('background',getValuesThis());
						}
						if(S.esFuncion(opt.fn)){
							opt.fn.call(colors,getValuesThis());
						}
						removeSC();
					})
					.agregar(footer);
					bntClear = S('button',{
						AddClass:"Clear",
						html:'Cerrar'
					}).click(function(){
						removeSC();
					})
					.agregar(footer);
					var val = S(inp).valor();
					var rgb = S.Hex_Rgb(val);
					var cr = rgb.r || 255;
					var cg = rgb.g || 255;
					var cb = rgb.b || 255;
					r = S('input',{
						atrib:{
							type:'range',
							min:0,
							max:255,
							value:cr,
							id:'red',
							AddClass:'selectores'
						}}).range({
							fondo:'#ef2929',
							cambio:refreshSwatch
						}).stylo({
							'box-shadow':' 0px 0px 10px #EF2929',
							'width':'90%',
							'margin-right':' 0.5em'
						})
						.agregar(contenido);
					vr = S('span',{
							id:'vred',
							AddClass:'valore',
							html:cr
						}).agregar(contenido);
					g = S('input',{
						atrib:{
							type:'range',
							min:0,
							max:255,
							value:cg,
							id:'green',
							AddClass:'selectores'
						}}).range({
							fondo:'#8ae234',
							cambio:refreshSwatch
						}).stylo({
							'box-shadow':' 0px 0px 10px #8ae234',
							'width':'90%',
							'margin-right':' 0.5em'
						}).agregar(contenido);
					vg = S('span',{
							id:'vgreen',
							AddClass:'valore',
							html:cg
						}).agregar(contenido);
					b = S('input',{
						atrib:{
							type:'range',
							min:0,
							max:255,
							value:cb,
							id:'blue',
							AddClass:'selectores'
						}}).range({
							fondo:'#729fcf',
							cambio:refreshSwatch
						}).stylo({
							'box-shadow':' 0px 0px 10px #729fcf',
							'width':'90%',
							'margin-right':' 0.5em'
						}).agregar(contenido);
					vb = S('span',{
							id:'vblue',
							AddClass:'valore',
							html:cb
						}).agregar(contenido);
					spanValo = S('div',{
						AddClass:'Shell_Valore',
						atrib:{
							id:'Valors'
						},
						stylo:{
							"box-shadow":'0px 0px 5px #A1A0A0',
							'border-radius':'5px',
							padding:'0.5em',
							width:'24%',
							'-webkit-user-select': 'initial',
							'-moz-user-select': 'initial',
							'user-select': 'initial',
							background:val
						},
						html:val
					}).agregar(contenido);
					S('.selectores').stylo({
						'float': 'left',
						clear: 'left',
						width: '300px',
						margin: '15px',
					})
					var objarr = {
						StyleDragStart:{
							opacity : 1,
							cursor:'move'
						},
						StyleDragStop: {
							opacity : 1,
							cursor:'dafault'
						},
						cursor:'dafault',
						handle:head
					};
					parent.draggable(objarr);
					mostrarSC();
				}
				var mostrarSC = function(){
					parent.Efecto(opt.efectoIn);
					parent.centrar();
				}
				var removeSC = function(){
					parent.Efecto(opt.efectoOut);
					var ms = S.getEfecto(opt.efectoOut);
					setTimeout(function(){
						parent.remover();
					},ms)
				}
				if(colors.nodeName == "INPUT"){
					var clts = S('div',{
						AddClass:'color'
					}).despues(S(colors));
					var k = colors;
					S(colors).remover();
					S(k).agregar(clts);
					clts.stylo('background',(S(k).valor() == "")?"#000":S(k).valor());
					S(k).click(function(e){
						e.cancelEv();
						createSC(this);
					})
				}
				else{
					S(colors).click(function(e){
						e.cancelEv();
						createSC(this);
					})
				}
			}
		})
		return this;
	};
	
	Shell.sr.cssForm = function(){
		var elem = this.thisElement;
		var selector = this.selector;
		var j = ['Calendario','Time','SimpleColor'];
		var newap = function(e,t){
			var d = S('div',{
				AddClass:t
			}).despues(S(e));
			var k = e;
			S(e).remover();
			S(k).agregar(d);
			if(t == 'checkbox' || t == "radio"){
				S('label',{}).agregar(d);
			}
			if(t == 'color'){
				d.stylo('background',(S(k).valor() == "")?"#000":S(k).valor());
				
			}
		}
		Shell.asigFun(elem,function(form){
			if(form.nodeName == 'FORM'){
				var input = S(selector +" input").thisElement;
				Shell.asigFun(input,function(i){
					var t = i.type;
					var k = S(i).data('se');
					if(S.enArray(k,j) == -1){
						switch(t){
							case 'search': 
							case 'checkbox':
							case 'radio': 
							case 'file': 
							case 'color': 
							case 'email': 
								newap(i,t);
							break;
							case 'tel':
								S(i).ValueValido();
								newap(i,t);
							break;
							case 'number':
								S(i).ValueValido();
							break;
							case 'url':
								newap(i,t);
							break;
						}
					}
				})
				var elems = S(selector +" select").thisElement;
				Shell.asigFun(elems,function(se){
					S(se).cssSelect();
				})
			}
			else{
				console.info("S.cssForm\n"+form.nodeName + " No es un elemento valido");
			}
		})
	}
	ShellSelect = {
		elem:null,
		options:null,//[{value:'a',text:'primera letra',selected:true}],
		atribs:null,
		css:null,
		padre:'body'
	}
	ShellOptions = {
		value:null,
		texto:null,
		selected:false
	}
	Shell.cssSelect = function(opt){
		var opt = S.ampliar({},ShellSelect,opt);
		var select = this;
		var create = function(elem){
			papa = S(elem).padre;
			if(!S(papa).Classexiste("Shellselect")){
				var select = S("div",{
					AddClass:'Shellselect privados'						
				}).despues(elem);
				var mos = S('div',{
						AddClass:'titels'
					})
					.agregar(select)
				var u = S('ul',{
						AddClass:'parentoption',
						stylo:{
							transform: 'scaleY(0)'
						}
					}).agregar(select)
					mos.click(function(){
						if(u.stylo("transform") == 'scaleY(1)'){
							u.stylo({
								transform: 'scaleY(0)'
							});
							S(this).stylo('color','#000');
						}
						else{
							u.stylo({
								transform: 'scaleY(1)'
							});
							S(this).stylo('color','#037B03');
						}
					})
				var option = S(elem).hijo();
				if(S.ObjLength(option) != 0){
					S.forEach(option,function(i,v){
						var clase = 'ShellOptions';
						var attr = {};
						if(v.value != undefined){
							attr.value = v.value;
						}
						if(v.selected){
							attr.selected = v.selected;
							mos.html(S(v).texto());
						}
						if(v.nodeName == 'OPTION'){
							clase = 'ShellOptions';
							attr.item = v.index;
						}
						if(v.nodeName == 'OPTGROUP'){
							clase = 'ShellOptGroup';
						}
						var optsl = S("li",{
							AddClass:clase,
							data:attr,
							html:(!S.esUndefined(S(v).html()))?S(v).html():''
						})
						if(v.nodeName == 'OPTION'){
							optsl.click(function(){
								var tit = S(this).texto();
								mos.html(tit);
								var item = S(this).data('item');
								elem.options[item].selected = true;
								u.stylo({
									transform: 'scaleY(0)'
								});
								mos.stylo('color','#000');
								var func = elem.FunAsig;
								S.forEach(func,function(event,fn){
									S.Simula(S(elem),event);
								})
							});
						}
						optsl.agregar(u);
					})
				}
				if(S(elem).atrib("style")){
					var stylo = S(elem).atrib("style");
						stylo = stylo.replace("\"","");
						stylo = stylo.replace(/\s/g,"");
						stylo = stylo.split(';');
						S.forEach(stylo,function(i,s){
							if(s != ""){
								var a = s.split(":");
								select.stylo(a[0],a[1]);
							}
						})
				}
				var k = elem;
				S(elem).remover();
				S(k).agregar(select);
			}
			else{
				return;
			}
		}
		if(opt.elem != null){
			select = S.Element(opt.elem);
			select = select.thisElement;
			S.asigFun(select,function(sed){
				create(sed);
			})
		}
		else{
			var padre = (S.Element(opt.padre))?S.Element(opt.padre).thisElement:S('body');
			select = S('select',{}).agregar(padre);
			if(S.esObj(opt.atribs)){
				select.atrib(opt.atribs);
			}
			if(S.esObj(opt.css)){
				select.stylo(opt.css);
			}
			var options = false;
			if(S.esArray(opt.options)){
				options = opt.options;
				console.dir(options);
			}
			else if(S.esObj(opt.options)){
				options = [opt.options];
			}
			if(S.esArray(options)){
				S.forEach(options,function(i,v){
					var opt = S.ampliar({},ShellOptions,v);
					var atris = {};
					if(opt.selected){
						atris.selected = 'true';
					}
					if(opt.value != null){
						atris.value = opt.value;
					}
					var oti = S('option',{
						atrib:atris,
						text:(opt.texto != null)?opt.texto:""
					}).agregar(select);
				});
			}
			create(select.thisElement);
		}
		return select;
	}
	Shell.sr.cssSelect = function(atrib,css){
		var elem = this.thisElement;
		var opt = {
			elem:elem
			};
		if(!S.esUndefined(atrib) && S.esObj(atrib)){
			opt.atribs = atrib;
		}
		if(!S.esUndefined(css) && S.esObj(css)){
			opt.css = css;
		}
		return Shell.cssSelect(opt);
	}
	
	function fileSoprt(){
		var f = Shell.getSoporte("File");
		if( f.Blob && f.File && f.FileReader && f.FileList){
			return true;
		}
		else{
			return false;
		}
	}
	function FileUploads(e,o,oe){
		var es = (S.esUndefined(e.files))?e:e.files;
			es = (S.esArray(es) || S.esObj(es))?es:[es];
			if(e == es){e = oe;}
		S.forEach(es,function(i,v){
			if(i != 'length'){
				FileMan(v,o,e);
			}
		})
	}
	function FileMan(elem,o,el){
		var opt = S.ampliar({},fileDefaults,o);
		var  FR = new FileReader();
		var tipo= opt.tipo.toLowerCase();
		var completo = opt.completo || function(){
				return this;
		};
		var resultados = function(e){
			var r=e.target.result;
				size=elem.size/1024;
				size=size.toFixed();
				Extension = elem.name.substring(elem.name.lastIndexOf('.') + 1);
				Extension = Extension.toLowerCase();
			if(size >=1024)
			{
				size=size/1024;
				size=size.toFixed();
				size=size+' Mb';
			}
			else
			{
				size=size+' kb';
			}
			if(S.esArray(opt.permitidos) && S.key_existe(0,opt.permitidos)){
				if(S.enArray(Extension,opt.permitidos) == -1){
					var span;
					if(!S.existe('#Fmsmerror')){
						elems = undefined;
						if(opt.area){
							elems = opt.area;
						}else{
							elems =S('span',{}).despues(el);
						}
						span = Shell.error('No se permite la carga de archivos tipo '+elem.type,elems);
						span.atrib("id","Fmsmerror");
					}
					console.error('No se permite la carga de archivos tipo '+elem.type);
					return;
				}
			}
			resul={
				Nombre:elem.name,
				Extension:Extension,
				Tamano:size,
				TamanoT:elem.size,
				Tipo:elem.type,
				Modificacion:elem.lastModifiedDate,
				Resultado:r
			};
			return resul;
		};
		enviao = function(opt,elem){
			S.envio_archivo({
				url:opt.url,
				Data:elem.form,
				completo:opt.completo,
				mientras:opt.mientras,
			});
		};
		FR.onload=function(e)
		{
			var resul=resultados(e);
			if(!opt.carga)
			{
				completo.call(resul);
			}
			if(opt.Ajax != null)
			{
				var ajaxst = S.ampliar({},fileAjaxDefauls,opt.Ajax);
				setTimeout(function(){
					enviao(ajaxst,el);
				},1000);
			}	
		}
		FR.onerror=function(e)
		{
			var sr=e.target.error;
			switch(sr.code)
			{
				case sr.NOT_FOUND_ERR:
					console.error('Archivo no Encontrador');
				break;
				case sr.NOT_READABLE_ERR:
					console.error('Archivo no legible');
				break;
				case sr.ABORT_ERR:
					console.error('Se a Abortado la carga');
				break;
				default:
					console.error('A ocurrido un Error al cargar el Archivo');
				break;
			}
		}
		switch(tipo)
		{
			case "text":
				FR.readAsText(elem,'UTF-8');
			break;
			case 'img':
				FR.readAsDataURL(elem);
			break;
			case 'video':
				FR.readAsBinaryString(elem);
			break;
			case 'array':
				FR.readAsArrayBuffer(elem);
			break;
		}
		if(opt.carga){
			var proseso='';
			var cargaD={
				elem:null,
				valorI:0,
				valorF:100
			};
			proseso = S('progress',{
				atrib:{
					id:'file_carga',
					min:0,
					max:100,
					value:0
				},
				stylo:{
					"-webkit-transition":"all .2s",
					"-moz-transition":"all .2s",
					transition:"all .2s",
					"box-sizing": "content-box",
					height: "0.6em",
					width: "100%",
					'float':'left'
				},
				html:'0%'
			});
			if(!S.existe('#file_carga')){
				FR.onloadstart=function(){
					if(opt.area){
						proseso.agregar(opt.area);
					}else{
						proseso.despues(el);
					}
					S(el).click(function(e){
						if(S.existe('#file_carga')){
							proseso.remover();
						}
					})
				}
			}
			FR.onprogress=function(e)
			{
				if(e.lengthComputable)
				{
					var pro=parseInt(e.loaded / e.total*100);
					proseso.atrib({
						value:pro
					});
					if(pro < 100)
					{
						proseso.html(pro+"%");
					}
					else if(pro == 100)
					{
						proseso.html("100%");
					}
				}
			}
			FR.onloadend=function(e)
			{
				resul=resultados(e);
				completo.call(resul);
			}
		}
	}
	function addClasses(elem){
		if(S(elem).Classexiste('FileEnter')){
			S(elem).AddClass("FileOver");
			S(elem).RemoveClass("FileEnter");
		}
		else{
			S(elem).AddClass("FileEnter");
			S(elem).RemoveClass("FileOver");
		}
	}
	var fileDefaults = {
		evento:'input change',
		area: null,
		completo: null,
		tipo: "text",
		Ajax: null,
		carga: false,
		Arrastrar: false,
		permitidos: []
	};
	var fileAjaxDefauls = {
		completo:null,
		mientras: null,
		url:null
	}
	var envio_archivoDefaults = {
		Data:null,
		completo:null,
		mientras:null,
		url:''
	};
	Shell.envio_archivo = function(obj){
		var opt = S.ampliar({},envio_archivoDefaults,obj);
		var Data,completo,mientras;
		if(opt.Data != null){
			Data=new FormData(opt.Data);
		}else{
			S.errors("Debe haber un FormData para enviar");
			return;
		}
		completo = (S.esFuncion(opt.completo))?opt.completo:function(){};
		mientras = (S.esFuncion(opt.mientras))?opt.mientras:function(){};
		S.Ajax({
			file:true,
			url:opt.url,
			datos:Data,
			completo:function(d){
				completo.call(d);
			},
			mientras:mientras
		})
	}
	Shell.sr.FileUpload = function(obj){
		var elem = this.thisElement;
		S.asigFun(elem,function(fil){
			if(fileSoprt()){
				var opt = S.ampliar({},fileDefaults,obj);
				S(fil).sp(opt.evento,function(e){
					if(S.existe("#Fmsmerror")){
						S("#Fmsmerror").remover();
					}
					FileUploads(this,opt);
				})
				if(opt.Arrastrar){
					var lugar = S.Element(opt.area);
					lugar.AddClass("ShellFU FileOver");
					lugar.dragenter(function(e){
						e.cancelEv();
						e.stopEv();
						e.dataTransfer.dropEffect='copy';
						addClasses(this);
					}).dragleave(function(){
						addClasses(this);
					}).dragover(function(e){
						e.cancelEv();
						e.stopEv();
						e.dataTransfer.dropEffect='copy';
					}).drop(function(e){
						e.cancelEv();
						e.stopEv();
						e.dataTransfer.dropEffect='copy';
						addClasses(this);
						FileUploads(e.dataTransfer.files,opt,fil);
					});
					lugar.click(function(){
						evento = (opt.evento == 'input change')?'change':opt.evento;
						S(fil).Simula(evento);
					})
				}
			}
		})
		return this;
	};
	
	var mensaje = {
		crear:function(elem){
			mensaje.msj = S('div',{
				AddClass:'ShellMsj',
				stylo:{
					transform: "translateX(0px) scale(1)",
					transition: "transform .15s linear",
					"z-index": 5
				}
			});
			if(S.esUndefined(elem)){
				mensaje.msj.agregar('body');
			}
			else{
				mensaje.msj.agregar(elem);
			}
			mensaje.hover(mensaje.msj);
		},
		icon:function(ic){
			var s =S('span',{});
			switch(ic){
				case 'e':
					s.AddClass('Shellicon-cancel-1');
				break;
				case 'i':
					s.AddClass('Shellicon-info');
				break;
				case 'w':
					s.AddClass('Shellicon-attention');
				break;
				default:
					s.AddClass('Shellicon-comment-empty');
				break;
			}
			return s;
		},
		hover:function(e){
			e.hover(function(){
				S(this).stylo({
					transform: "translateX(-11px) scale(1.05)",
					'z-index': 5
				});
			},function(){
				S(this).stylo({
					transform: "translateX(0px) scale(1)",
					'z-index': 0
				});
			})
		},
		newError:function(msj,elem){
			mensaje.crear(elem);
			var icon = mensaje.icon('e').agregar(mensaje.msj);
			var p = S('p',{
				html:'<strong>Error:</strong> '+msj
			}).agregar(mensaje.msj);
			mensaje.msj.AddClass("Error");
			return mensaje.msj;
		},
		newInfo:function(msj,elem){
			mensaje.crear(elem);
			var icon = mensaje.icon('i').agregar(mensaje.msj);
			var p = S('p',{
				html:'<strong>Informaci&oacute;n:</strong> '+msj
			}).agregar(mensaje.msj);
			mensaje.msj.AddClass("Informacion");
			return mensaje.msj;
		},
		newWarning:function(msj,elem){
			mensaje.crear(elem);
			var icon = mensaje.icon('w').agregar(mensaje.msj);
			var p = S('p',{
				html:'<strong>Advertencia:</strong> '+msj
			}).agregar(mensaje.msj);
			mensaje.msj.AddClass("Atencion");
			return mensaje.msj;
		},
		newMsj:function(msj,elem){
			mensaje.crear(elem);
			var icon = mensaje.icon().agregar(mensaje.msj);
			var p = S('p',{
				html:msj
			}).agregar(mensaje.msj);
			return mensaje.msj;
		}
		
	}
	Shell.error = function(mesaje,elem){
		return  mensaje.newError(mesaje,elem);
	};
	Shell.info = function(mesaje,elem){
		return new mensaje.newInfo(mesaje,elem);
	};
	Shell.warning = function(mesaje,elem){
		return new mensaje.newWarning(mesaje,elem);
	};
	Shell.mensaje = function(mesaje,elem){
		return new mensaje.newMsj(mesaje,elem);
	};
	var togglesDefault={
		textoON:'On',
		fondoON:'#00FF00',
		colorON: '#000',
		textoOff:'Off',
		fondoOff:'#FF0000',
		colorOff: '#FFF',
		fn:null
	}
	function valColor(r, g, b, t){
		var c = {
				r:0,
				g:0,
				b:0
			};
			
		var t = (S.esUndefined(t))?false:t;
		if(r == g && g == b && b  == 0){
			c.r = r+120;
			c.g = g+120;
			c.b = b+120;
		}
		else if(r == g && g == b && b  > 0){
			c.r = r+20;
			c.g = g+20;
			c.b = b+20;
		}
		else{
			c.r = r-20;
			c.g = g-20;
			c.b = b-20;
		}
		if(t){
			c = c.join(",")+","+t;
			c = "rgba("+c+")";
		}
		else{
			c = "#"+S.Rgb_Hex(c.r,c.g,c.b);
		}
		return c;
	}
	Shell.sr.Toggle = function(obj){
			var opt = (S.esString(obj))?obj:S.ampliar({},togglesDefault,obj);
			var elem = this.thisElement;
			var inp,swictha,swicthb,on,off,selector;
			function newColorSwict(color){
				var newColor = "";
				if(color.indexOf('rgb') != -1){
					var c = color.replace("rgb(","");
						c = c.replace(")","");
						c = c.split(",");
						newColor = valColor(c[0],c[1],c[2]);
				}
				else if(color.indexOf('rgba') != -1){
					var c = color.replace("rgba(","");
						c = c.replace(")","");
						c = c.split(",");
						newColor = valColor(c[0],c[1],c[2],c[3]);
				}
				else{
					var c = S.Hex_Rgb(color);
					newColor = valColor(c.r,c.g,c.b);
				}
				return newColor;
			}
			function crear_toggles (){
				S(elem).AddClass('ShellToggle');
				inp = S('input',{
					atrib:{
						type:'checkbox',
						name:'toggle',
						id:elem.id+"-toggle"
					}
				}).agregar(elem);
				inp.thisElement.checked = true;
				swicthb = S('div',{
						AddClass:'_Off',
						stylo:{
							background:opt.fondoOff,
							color: opt.colorOff
						}
						}).agregar(elem);
				swictha = S('div',{
						AddClass:'efect _On',
						stylo:{
							background:opt.fondoON,
							color: opt.colorON,
						}
						}).agregar(elem);
				on = S('div',{
						html:opt.textoON
						}).agregar(swictha.thisElement);
				off = S('div',{
						html:opt.textoOff
						}).agregar(swicthb.thisElement);
				selector = S('div',{
							AddClass:'switch',
							stylo:{
								background:newColorSwict(opt.fondoON)
							}
						}).agregar(elem);
			}
			function checkedt(){
				var t = inp.thisElement.checked;
				if(t){
					swictha.stylo({
						width:'0%'
					})
					selector.stylo({
						background:newColorSwict(opt.fondoOff),
						left: '0%'
					})
					inp.thisElement.checked = false;
					if(opt.fn && S.esFuncion(opt.fn)){
						opt.fn.call(inp.thisElement,inp.thisElement.checked);
					}
				}
				else{
					swictha.stylo({
						width:'100%'
					})
					selector.stylo({
						background:newColorSwict(opt.fondoON),
						left: '95%'
					})
					inp.thisElement.checked = true;
					if(opt.fn && S.esFuncion(opt.fn)){
						opt.fn.call(inp.thisElement,inp.thisElement.checked);
					}
				}
			}
			if(S.esObj(opt)){
				crear_toggles();
				S(elem).click(function(e){
					var target = e.target;
					if(target.className == 'switch'){
						checkedt();
					}
				})
			}
			else if(S.esString(opt)){
				if(S.existe("#"+elem.id+"-toggle")){
					return S("#"+elem.id+"-toggle").thisElement.checked;
				}
			}
			return this;
	};
	var menuDefault = {
		posicion:{
			position:'absolute',
			left:'2%',
			top:'3%'
		},
		color:"#fff",
		evento:'click',
		fn:null,
		boton:null
	}
	Shell.sr.menu = function(opt){
		var elem = this.thisElement;
		var opt = S.ampliar({},menuDefault,opt);
		S.asigFun(elem,function(nav){
			var boton,lista;
			S(nav).AddClass("ShellMenu");
			if(S.esObj(opt.posicion)){
				S(nav).posicion(opt.posicion);
			}
			if(opt.boton == null){
				lista = S(nav).prihijo();
				 padreBtn = S('div',{
					 AddClass:'ShellMenuBtn'
					 }).prefijar(nav);
				boton = S('span',{
					AddClass:'Shellicon-menu'
					}).agregar(padreBtn);
				if(opt.color){
					boton.stylo('color',opt.color);
				}
			}
			else{
				lista = S(nav).ulhijo();
				boton = S.Element(opt.boton);
			}
			lista = S(lista);
			lista.AddClass('lista');
			var lest = true;
			
			if(parseInt(opt.posicion.left) <= 50){
				lista.stylo({
					transform: 'translateX(-346px) translateY(80px)'
				});
				lest = true;
			}
			if(parseInt(opt.posicion.left) >= 50 || S.key_existe('right',opt.posicion)){
				lista.stylo({
					transform: 'translateX(-346px) translateY(80px)'
				});
				lest = false;
			}
			lista.visible = false;
			var cerrar = function(){
				if(lest){
					lista.stylo({
						transform:'translateX(-346px) translateY(80px)'
					});
				}
				else{
					lista.stylo({
						transform:'translateX(-346px) translateY(80px)'
					});
				}
				lista.visible = false;
			}
			var Abrir = function(){
				if(lest){
					lista.stylo({
						transform:'translateX(0px) translateY(80px)'
					});
				}
				else{
					lista.stylo({
						transform:'translateX(0px) translateY(80px)'
					});
				}
				lista.visible = true;
			}
			var h = lista.hijo();
			
			if(h.length >= 1){
				S.forEach(h,function(i,v){
					var g = S(v).hijo();
					if(g.length >= 1){
						S.forEach(g,function(o,li){
							if(!S(li).Classexiste('no-active') && 
							(!S.esUndefined(S(li).data('active')) || S(li).data('active') != false|| S(li).data('active') != 'false')){
								S(li).sp(opt.evento,function(ev){
									if(S.esFuncion(opt.fn)){
										opt.fn.call(this,ev);
									}
									cerrar();
								})
							}
							else{
								if(!S(li).Classexiste('no-active') && 
								(S.esUndefined(S(li).data('active')) 
									|| S(li).data('active') == false
									|| S(li).data('active') == "false")){
									S(li).AddClass("no-active");
								}
								var ij = S(li).prihijo();
								if(ij != null){
									if(S(ij).data('role') == 'close'){
										S(ij).AddClass('close');
										S(ij).click(function(){
											cerrar();
										});
									}
								}
							}
						})
					}
				})
			}
			
			boton.click(function(){
				if(lista.visible ){
					cerrar();
				}
				else{
					Abrir();
				}
			})
			if(S.esFuncion(opt.fn)){
				S(".ShellMenu li").sp(opt.evento,function(){
					if(!S.esUndefined(S(this).data('active'))){
					
					}
					opt.fn.call(this,e);
				});
			}
			
		})
		return this;
	}
	var svgDefauls={
		alto:200,
		ancho:300,
		atribs:{},
		stylo:{},
		elems:null,
		parent:"body",
		crear:false,
		viewBox:[]
	}
	var arrastrarDefaults = {
		star:null,
		drag:null,
		stop:null
	}
	var ns = {
		'svg': 'http://www.w3.org/2000/svg',
		'xmlns': 'http://www.w3.org/2000/xmlns/',
		'xlink':'http://www.w3.org/1999/xlink'
	};
	var svg = function(opt){
		if(S.getSoporte("svg")){
			var yo = this.svg = svg.prototype;
			yo.init(opt);
			return yo;
		}
		else{
			S.error("El Navagador "+S.navegador().userAgent+" No soporta SVG");
		}
	};
	var punto = function(cx,cy,r,l,p){
		var a = 360/l;
		var points = ( cx + r ) + "," + cy + " ";
		for(var i=1; i<=l; i++){
			if(S.esUndefined(p)){
				var aRad = ((Math.PI / 180) * (a*i));
			}else{
				var aRad = ((Math.PI / 180) * (a*i))*p;
			}
			var Xp = cx + r * Math.cos(aRad);
            var Yp = cy + r * Math.sin(aRad);
            points += Xp+","+Yp+" ";
		}
		return points;
	}
	function cursorPoint(pt,evt,svg){ 
		pt.x = evt.clientX; 
		pt.y = evt.clientY;
		return pt.matrixTransform(svg.getScreenCTM().inverse());
	}
	svg.prototype = {
		version:"1.0",
		length:0,
		constructor:svg,
		sort: [].sort,
		splice: [].splice,
		init:function(opts){
			var svg,l = 0;
			var opt = S.ampliar({},svgDefauls,opts);
			var parent = S.Element(opt.parent);
			if(opt.crear){
				svg = this.New("svg").agregar(parent);
				l = 1;
			}
			else{
				svg = S(String(opt.elems));
				if(svg == null){
					return;
				}
				else{
					l = 1;
				}
			}	
			var elem = svg;
			svg.stylo({
				width:parseInt(opt.ancho)+"px",
				height:parseInt(opt.alto)+"px"
			});
			var ViewBox ="0 0 ";
			if(S.esArray(opt.viewBox) && S.ObjLength(opt.viewBox) != 0){
				ViewBox += opt.viewBox[0]+" "+opt.viewBox[1];
			}
			else{
				var w = svg.ancho();
				var h = svg.alto();
				ViewBox += w+" "+h;
			}
			svg.atrib({
				viewBox:ViewBox,
				xmlns:ns.svg,
				version:'1.1'
				});
			if(S.esObj(opt.atribs) && S.ObjLength(opt.atribs) != 0){
				svg.atrib(opt.atribs);
			}
			
			if(S.esObj(opt.stylo) && S.ObjLength(opt.stylo) != 0){
				svg.stylo(opt.stylo);
			}
			this.Svg = svg;
			this.opt = opt;
			this.length = l;
			this.padre = parent.thisElement;
			return this;
		},
		svgError:function(msj,meto){
			var m = "SVG ERROR ["+meto+"]: "+msj;
			throw new Error( m );
		},
		New:function(name,paramt){
			var elem = this.Svg;
			var newElem =  document.createElementNS(ns.svg,name);
				newElem = S(newElem);
			if(S.esObj(paramt)){
				S.forEach(paramt,function(k,v){
					if(Shell.sr.hasOwnProperty(k) && k != 'length'){
						newElem[k](v);
					}
					else{
						newElem.thisElement[k] = v;
					}
				})
			}
			return newElem
		},
		atribNS : function(elem,typo,att, valor){
			var elem = elem.thisElement;
			var markarray, attrs = this;
			if(elem.nodeName !== undefined){
				if(S.esObj(typo)){
					S.forEach(typo,function(k,v){
						if(ns.hasOwnProperty(k)){
							S.forEach(v,function(i,j){
								elem.setAttributeNS(ns[k],i,j);
							});
						}
					});
				}
				else{
					if(!S.esUndefined(typo) && 
						(S.esUndefined(valor) || valor == "") && 
						!S.esUndefined(att)){
							markarray=elem.getAttributeNS(ns[typo],att);
					}
					else if(!S.esUndefined(typo) && !S.esUndefined(valor) && !S.esUndefined(att))
					{
						markarray=elem.setAttributeNS(ns[typo], att, valor);
					}
					attrs =  markarray;
				}
			}
			return attrs;
		},
		//Elementos
		linea:function(x,y,st,attr){
			var elem = this.Svg;
			if(!S.esArray(x) || !S.esArray(y)){
				this.svgError("Argumento X e Y deben ser Array [x1,x1] [y1,y2]","Linea");
				return;
			}
			var linea =  this.New("line",{
				atrib:{
					x1:x[0],
					x2:x[1],
					y1:y[0],
					y2:y[1]
				}
			});
			
			if(S.esObj(st)){
				linea.stylo(st);
			}
			if(S.esObj(attr)){
				linea.atrib(attr);
			}
			linea.agregar(elem);
			return linea;
		},
		circulo:function(cx,cy,r,st,attr){
			var elem = this.Svg;
			var circle =  this.New("circle",{
				atrib:{
					cx:cx,
					cy:cy,
					r:r
				}
			});
			
			if(S.esObj(st)){
				circle.stylo(st);
			}
			if(S.esObj(attr)){
				circle.atrib(attr);
			}
			circle.agregar(elem);
			return circle;
		},
		elipse:function(cx,cy,rx,ry,st,attr){
			var elem = this.Svg;
			var elipse =  this.New("ellipse",{
				atrib:{
					cx:cx,
					cy:cy,
					rx:rx,
					ry:ry
				}
			});
			if(S.esObj(st)){
				elipse.stylo(st);
			}
			if(S.esObj(attr)){
				elipse.atrib(attr);
			}
			elipse.agregar(elem);
			return elipse;
		},
		rect:function(x,y,w,h,st,attr){
			var elem = this.Svg;
			var rect =  this.New("rect",{
				atrib:{
					x:x,
					y:y,
					width:w,
					height:h
				}
			});
			if(S.esObj(st)){
				rect.stylo(st);
			}
			if(S.esObj(attr)){
				rect.atrib(attr);
			}
			rect.agregar(elem);
			return rect;
		},
		poligono: function(stroke,points,st,attr){
			var elem = this.Svg;
			var polygon;
			if(stroke){
				polygon =  this.New("polyline");
			}else{
				polygon =  this.New("polygon");
			}
			
			if(S.esString(points)){
				polygon.atrib("points",points);
			}
			else if(S.esArray(points)){
				var puntos = "";
				var l = points.length;
				S.forEach(points,function(i,v){
					if(S.esObj(v)){
						puntos += v.x+","+v.y
						if(l-1 != i){
							puntos+=" ";
						}
					}
				})
				polygon.atrib("points",puntos);
			}
			else if(S.esObj(points)){
				var f = {
					cx:0,
					cy:0,
					lados:0,
					radio:0,
					paso:undefined
				}
				var p=S.ampliar({},f,points);
				polygon.atrib("points",punto(p.cx,p.cy,p.radio,p.lados,p.paso));
			}
			
			if(S.esObj(st)){
				polygon.stylo(st);
			}
			if(S.esObj(attr)){
				polygon.atrib(attr);
			}
			polygon.agregar(elem);
			return polygon;
		},
		texto:function(text,x,y,st,attr){
			var elem = this.Svg;
			var txt = this.New("text",{
				atrib:{
					x:x,
					y:y
				},
				html:text
			});
			if(S.esObj(st)){
				txt.stylo(st);
			}
			if(S.esObj(attr)){
				txt.atrib(attr);
			}
			txt.agregar(elem);
			return txt;
		},
		link:function(url,replace,target,attr,elems){
			var svgs = this.Svg;
			replace = (!S.esUndefined(replace))?replace:false;
			if(S.esObj(replace)){
				attr = replace;
				replace = false;				
			}
			if(S.esObj(target)){
				attr = target;
				target = undefined;				
			}
			if(!S.esBooleno(replace)){
				target = replace;
				replace = false;
			}
			var show = (replace)?"replace":"new";
			var a = this.New("a");
			this.atribNS(a,{
				xlink:{
					href:url,
					show:show
				}
				});
			if(!S.esUndefined(target)){
				a.atrib("target",target);
			}
			if(S.esObj(elems)){
				this.Svg = a;
				var $this = this;
				S.forEach(elems,function(i,k){
					if(svg.hasOwnProperty(i) && i != "length"){
						$this[i](k);
					}
				})
			}
			this.Svg = svgs;
			a.agregar(svgs);
			return a;
		},
		img:function(url,x,y,w,h,st,attr){
			var elem = this.Svg;
			var img = this.New("image",{
				atrib:{
					x:x,
					y:y,
					width:w,
					height:h
				}
			});
			this.atribNS(img,"xlink","href",url);
			if(S.esObj(st)){
				img.stylo(st);
			}
			if(S.esObj(attr)){
				img.atrib(attr);
			}
			img.agregar(elem);
			return img;
		},
		path:function(cd,st,attr){
			var elem = this.Svg;
			var coordenadas = function(obj){
				var d = "";
				var o = S.ampliar({},{
					M:undefined,
					L:undefined,
					V:undefined,
					H:undefined,
					A:undefined,
					Q:undefined,
					T:undefined
				},obj);
				S.forEach(o,function(k,v){
					if(!S.esUndefined(v)){
						d += k+" "+v+" ";
					}
				})
				return d;
			}
			var ds = "";
			if(S.esArray(cd)){
				S.forEach(cd,function(h,c){
					if(S.esObj(c)){
						ds += coordenadas(c);
					}
				})
				ds +=" z";
			}
			else if(S.esObj(cd)){
				ds += coordenadas(cd) + " z";
			}
			else if(S.esString(cd)){
				ds += cd;
			}
			var path = this.New("path",{
				atrib:{
					d : ds
				}
			});
			if(S.esObj(st)){
				path.stylo(st);
			}
			if(S.esObj(attr)){
				path.atrib(attr);
			}
			path.agregar(elem);
			return path;
		},
		textPath:function(txt,path,st,atribs){
			var elem = this.Svg;
			var sts = {},stex = {}, stpa = {}, id="ruta";
			var attr = {}, attx = {}, attrs = {};
			if(S.esArray(st)){
				if(S.ObjLength(st) == 2){
					stex = st[0];
					sts = st[1];
				}
				if(S.ObjLength(st) == 3){
					stex = st[0];
					sts = st[1];
					stpa = st[2];
				}
			}
			else if(S.esObj(st)){
				stex = st;
			}
			if(S.esArray(atribs)){
				if(S.ObjLength(atribs) == 2){
					attr = atribs[0];
					attx = atribs[1];
				}
				if(S.ObjLength(atribs) == 3){
					attr = atribs[0];
					attx = atribs[1];
					attrs = atribs[2];
				}
			}
			else if(S.esObj(atribs)){
				attr = atribs;
			}
			if(!S.key_existe('id',attrs)){
				if(S.existe(id)){
					var i = 0;
					var e = 0;
					do{
						console.log(id+i,i);;
						if(!S.existe(id+i)){
							e = 1;
							attrs.id = id+i;
						}
						i++;
					}while(e == 1);
				}
				else{
					attrs.id = id;
				}
			}
			var ruta = this.path(path,sts,attrs);
			console.dir(attrs);
			var text = this.New("text",{
					stylo:stex,
					atrib:attr
				}).agregar(elem);
			var textPaths = this.New("textPath",{
				atrib:attx,
				stylo:stpa,
				html:txt
			});
			this.atribNS(textPaths,"xlink","href","#"+attrs.id);
			textPaths.agregar(text);
			return text;
		},
		agrupa:function(elems,atribs){
			var elem = this.Svg;
			var g = this.New("g");
			if(S.esObj(atribs)){
				g.atrib(atribs);
			}
			if(S.esObj(elems)){
				$this = this;
				this.Svg = g;
				S.forEach(elems,function(k,v){
					if($this.hasOwnProperty(k)){
						if(S.esString(v)){
							$this[k](v);
						}
						if(S.esArray(v)){
							if(S.esArray(v[0])){
								S.forEach(v,function(i,c){
									$this[k].apply($this,c);
								})
							}
							else{
								$this[k].apply($this,v);
							}
						}
					}
				})
				this.Svg = elem;
			}
			g.agregar(elem);
			return g;
		},
		use:function(elems,atribs){
			var elem = this.Svg;
			var use = this.New("use");
			if(S.esObj(atribs)){
				use.atrib(atribs);
			}
			if(elems.atrib('id') != null){
				this.atribNS(use,"xlink","href","#"+elems.atrib('id'));
			}
			else{
				this.svgError("El elemento no tiene un id","use");
				return;
			}
			use.agregar(elem);
			return use;
		},
		//Stylos
		gradient:function(type,stop,attr){
				var defaults={
					offset:undefined,
					opacity:undefined,
					stopColor:undefined,
					stopOpacity:undefined
				}
				var gradients;
				var elems = this.Svg;
				var defs = (S.existe("defs"))?S("defs"):this.New("defs").prefijar(elems);
				if(type == "lineal" || type == "l"){
					gradients = this.New("linearGradient").agregar(defs);
				}
				else if(type == "radial" || type == "r"){
					gradients = this.New("radialGradient").agregar(defs);
				}
				if(S.esObj(attr)){
					gradients.atrib(attr);
				}
				if(S.esArray(stop)){
					var $this = this;
					S.forEach(stop,function(i,v){
						var v = S.ampliar({},defaults,v);
						var stops = $this.New("stop").agregar(gradients);
						if(!S.esUndefined(v.offset)){
							stops.atrib("offset",v.offset);
						}
						if(!S.esUndefined(v.opacity)){
							stops.atrib("opacity",v.opacity);
						}
						if(!S.esUndefined(v.stopColor)){
							stops.atrib("stop-color",v.stopColor);
						}
						if(!S.esUndefined(v.stopOpacity)){
						stops.atrib("stop-opacity",v.stopOpacity);
					}
				})
			}
			return this;
		},
		transform:function(elem,parament){
			var defaults={
				translada:undefined,//[tx,ty]
				rotar:undefined,//[a,cx,cy]
				scalar:undefined,//[sx,sy]
				sesgar:undefined,//{x:sx,y:sy}
			}
			var elems = elem.thisElement;
			if(S.esObj(parament)){
				var opt = S.ampliar({},defaults,parament);
				var transforma = "";
				if(!S.esUndefined(opt.translada)){
					transforma +="translate(";
					var l = opt.translada.length;
					if(l == 1){
						transforma += opt.translada[0]+") ";
					}
					else{
						transforma += opt.translada[0]+","+opt.translada[1]+") ";
					}
				}
				if(!S.esUndefined(opt.rotar)){
					transforma +="rotate(";
					var l = opt.rotar.length;
					if(l == 1){
						transforma += opt.rotar[0]+") ";
					}
					else if(l == 2){
						transforma += opt.rotar[0]+" "+opt.rotar[1]+") ";
					}
					else{
						transforma += opt.rotar[0]+" "+opt.rotar[1]+" "+opt.rotar[2]+") ";
					}
				}
				if(!S.esUndefined(opt.scalar)){
					transforma +="scale(";
					var l = opt.scalar.length;
					if(l == 1){
						transforma += opt.scalar[0]+") ";
					}
					else{
						transforma += opt.scalar[0]+","+opt.scalar[1]+") ";
					}
				}
				if(!S.esUndefined(opt.sesgar)){
					if(opt.sesgar.hasOwnProperty("x")){
						transforma +="skewX("+opt.sesgar.x+") ";
					}
					if(opt.sesgar.hasOwnProperty("y")){
						transforma +="skewY("+opt.sesgar.y+") ";
					}
				}
				elem.atrib("transform",transforma);
			}
			return elem;
		},
		regilla:function(){
			var $this = this;
			var w 	= this.Svg.ancho(); 
			var h 	= this.Svg.alto(); 
				w 	= parseInt(w);
				h	= parseInt(h);
			var cuadro = function(i,t,a){
				if(a == 0){
					$this.rect(i,t,10,10,{stroke:"none",fill:"#9B9898"});
				}
				else{
					$this.rect(i,t,10,10,{stroke:"none",fill:"#fff"});
				}
			}
			var e = 1, k = 1,g=0;
			for (var t = 1; t <= h; t++){
				for(var i = 1; i<= w; i++){
					if(i == 1){
						e++;
						var a = e % 2;
						cuadro(i,t,a);
					}
					else 
					{
						var a = e % 2;
						cuadro(i,t,a);
					}
					i = i+9;
					e++;
				}
				t = t+9;
			}
			return this.Svg;
		},
		regla:function(){
			var w = this.Svg.ancho(); 
			var h = this.Svg.alto(); 
				w = parseInt(w);
				h = parseInt(h);
				this.texto("Y",25,16);
				this.texto("X",6,37);
				this.texto("0",25,37);
				Lx = this.linea([2,w],[20,20],{
					stroke:"#000",
					"stroke-width":4
				});
				Ly = this.linea([20,20],[2,h],{
					stroke:"#000",
					"stroke-width":4
				});
			var x = w-20;
			var y = h-20;
			this.texto("5",25+50,37);
			return this.Svg;
		},
		animacion:function(elems,attrN,attrT){
			
		},
		arrastrar:function(elem,aopt){
			var padre = this.Svg.thisElement;
			var opt = S.ampliar({},arrastrarDefaults,aopt);
			var pts = padre.createSVGPoint();
			if(!elem){
				return;
			}
			fnMove = function(e){
				var mc = cursorPoint(pts,e,padre);
				elem.atrib({
					x:mc.x,
					y:mc.y
				})
				if(S.esFuncion(opt.drag)){
					opt.drag.call(elem,mc);
				}
			}
			fnFin = function(e){
				elem.stylo({
					curso:'default'
				});
				S.event.Remove(padre);
				S.event.Remove(elem);
				if(S.esFuncion(opt.stop)){
					opt.stop.call(elem,cursorPoint(pts,e,padre));
				}
			}
			elem.mousedown(function(e){
				S(this).stylo({
					curso:'pointer'
				});
				if(S.esFuncion(opt.start)){
					opt.start.call(elem,cursorPoint(pts,e,padre));
				}
				S(padre).mousemove(fnMove);
				S(padre).mouseup(fnFin);
			})
			
		}
	}
	Shell.Svg = svg;
	svg.prototype.init.prototype = Shell.Svg;
	
	window.requestAnimationFrame = (function(){
		return  window.requestAnimationFrame       || 
				window.webkitRequestAnimationFrame || 
				window.mozRequestAnimationFrame    || 
				window.oRequestAnimationFrame      || 
				window.msRequestAnimationFrame     || 
				function(/* function */ callback, /* DOMElement */ element){
					window.setTimeout(callback, 1000 / 60);
				};
	})();
	window.navigator.getUserMedia = (function(){
		var nav =window.navigator;
		return  nav.webkitGetUserMedia 	|| 
				nav.webkitGetUserMedia 	|| 
				nav.mozGetUserMedia   	|| 
				nav.oGetUserMedia    	|| 
				nav.msGetUserMedia   	;
	})();
	window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
	
	if("webkitIndexedDB" in window){
		
		window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
		
		window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
	}
	if("msIndexedDB" in window){
		
		window.IDBTransaction = window.msIDBTransaction;
		
		window.IDBKeyRange = window.msIDBKeyRange;
	}
	
	document.exitFullscreen = (function(){
		return 	document.exitFullscreen 	 ||
				document.mozCancelFullScreen ||
				document.webkitExitFullscreen;
	})();
	window.Shell = window.S = Shell;
	window.parseHex = function(n){
		return parseInt(n, 16);
	};
	window.RegExp.escape = function(string){
		return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
	}
})(window, document);
