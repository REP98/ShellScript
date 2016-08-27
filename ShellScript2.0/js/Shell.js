S(function(){
	S.tooltip();
	S.Calendario({
		elemts:'.description'
	});
	S('body').thisElement.scrollTop=0;
	S.Time();
	S.Tabla();
	S.dialogo();
	S("#menu").menu({
		fn:function(ev){
			var d = S(this).data('active');
			if(d != null){
				var TY = S("#"+d).thisElement.offsetTop;
				S('body').thisElement.scrollTop = TY;
			}
		}
	});
	S("#mifor").cssForm();
	S("#miformulario").cssForm();
	S("#parametross").cssForm();
	S(".forEachExaple").click(function(e){
		e.cancelEv();
		var d = S(this).data("event");
		var code = "";
		switch(d){
			case 'Element':
				code = "<span class='coment1'>//C&oacute;digo</span>\n";
				code += "<span class='privadas'>var</span> p = <span class='shell'>S</span>(<span class='string'>'p'</span>);\n";
				code += "<span class='shell'>S.forEach</span>(p,<span class='privadas'>function</span>(clave,valor){\n";
				code += "\tconsole.log(clave,'=>',valor);\n";
				code += "})\n\n";
				code += "<span class='coment2'>/*\n*resultados\n";
				var p = S("p");
				S.forEach(p,function(clave,valor){
					console.log(clave,valor);
					if(clave != "length"){
						code +=	"* Clave = thisElement\n* Valor = p\n";
					}
				})
				code += "*/</span>\n";
			break;
			case 'Array':
				code = "<span class='coment1'>//C&oacute;digo</span>\n";
				code += "<span class='privadas'>var</span> p = [<span class='string'>'a'</span>,<span class='string'>'b'</span>,<span class='string'>'c'</span>,<span class='string'>'d'</span>];\n";
				code += "<span class='shell'>S.forEach</span>(p,<span class='privadas'>function</span>(clave,valor){\n";
				code += "\tconsole.log(clave,'=>',valor);\n";
				code += "})\n\n";
				code += "<span class='coment2'>/*\n*resultados\n";
				var p = ["a","b","c","d"];
				S.forEach(p,function(clave,valor){
					console.log(clave,valor);
					if(clave != "length"){
						code +=	"* Clave = "+clave+"\n* Valor = "+valor+"\n";
					}
				})
				code += "*/</span>\n";
			break;
			case 'Object':
				code = "<span class='coment1'>//C&oacute;digo</span>\n";
				code += "<span class='privadas'>var</span> p = {a:<span class='number'>0</span>,b:<span class='number'>1</span>,c:<span class='number'>2</span>,d:<span class='number'>3</span>};\n";
				code += "<span class='shell'>S.forEach</span>(p,<span class='privadas'>function</span>(clave,valor){\n";
				code += "\tconsole.log(clave,'=>',valor);\n";
				code += "})\n\n";
				code += "<span class='coment2'>/*\n*resultados\n";
				var p = {a:0,b:1,c:2,d:3};
				S.forEach(p,function(clave,valor){
					console.log(clave,valor);
					if(clave != "length"){
						code +=	"* Clave = "+clave+"\n* Valor = "+valor+"\n";
					}
				})
				code += "*/</span>\n";
			break;
			case 'ArrayAb':
				code = "<span class='coment1'>//C&oacute;digo</span>\n";
				code += "<span class='privadas'>var</span> a = [<span class='string'>'a'</span>,<span class='string'>'b'</span>,<span class='string'>'c'</span>,<span class='string'>'d'</span>];\n";
				code += "<span class='privadas'>var</span> b = [];\n";
				code += "<span class='shell'>S.forEach</span>(a,<span class='privadas'>function</span>(clave,valor){\n";
				code += "\tconsole.log(clave,'=>',valor);\n";
				code += "},b)\n";
				code += "\tconsole.log(b)\n\n";
				code += "<span class='coment2'>/*\n*resultados\nb ahora vale [";
				var a = ["a","b","c","d"];
				var b = [];
				S.forEach(a,function(clave,valor){
					if(clave != "length"){
						code +=	"<span class='string'>"+valor+"</span> ";
					}
				},b)
				console.log(b);
				code += "]*/</span>\n";
			break;
		}
		S('#resulfor').html(code);
	})
	
	S("#url").html("/*{\n"+S.url_active().join(",\n",":")+"''\n}*/");
	S("#nav").html("/*{\n"+S.navegador().join(",\n",":")+"\n}*/");
	S("#pan").html("/*{\n"+S.pantalla().join(",\n",":")+"\n}*/");
	S("#env").validar({
		requerido:S('.req'),
		fn:function(d){
			console.dir(this);//El Botón
			console.dir(d);//El objeto que contiene los datos del formulario
			alert("validado");
		},
		msm:true
	});
	S("#shellval").ValueValido("ShellScript");
	S("#nm").ValueValido("1234567890");
	S("#itn").ValueValido("1234567890");
	S("#cal").reset();
	S("#che").click(function(e){
		e.cancelEv();
		var a = S(".checbox").checked();
		alert(a.join(",<br/>",":"),"ChecBox");
	})
	S("#rad").click(function(e){
		e.cancelEv();
		var a = S(".radios").checked();
		alert(a,"Radio");
	})
	S("#selecion").cssSelect();
	S("#elemento").cssSelect();
	S("#miselect").cssSelect();
	S(".elemSelect").cssSelect();
	S("#selecion, #add").change(function(){
		var a =S(this).seleccion();
		alert(a.join(",<br/>",":"),"Selecion");
	})
	S("#AddSelect").click(function(){
		var a = S("#name").valor();
		var b = S("#valor").valor();
		if(a != "" && b != ""){
			S("#name").valor("");
			S("#valor").valor("");
			S.selected.Add(S("#add"),a,b);
		}
	});
	S("#ReSelect").click(function(){
		var a = S("#nm").valor();
		if(S.esNumero(parseInt(a))){
			S("#nm").valor("");
			S.selected.Remove(S("#add"),a);
		}
	});
	S("#GtSelect").click(function(){
		var a = S("#itn").valor();
		if(S.esNumero(parseInt(a))){
			S("#itn").valor("");
			var v =S.selected.Get(S("#add"),a);
			alert(v.join(",<br/>",":"),"Resultados");
		}
	});
	S("#mov").click(function(){
		S.selected.Move(S("#selec1"),S("#selec2"),3);
	})
	S("#copy").click(function(){
		S.selected.Copy(S("#selec1"),S("#selec2"),0);
	})
	S("#padre").click(function(e){
		var yo = e.target;
		if(yo == this){
			var h = S(this).hijo();
			S.asigFun(h,function(j){
				S(j).stylo("background","#ff0");
			})
		}

	})
	S("#elemento").change(function(){
		var a = S(this).seleccion();
		if(S.esObj(a)){
			var b = a.value;
			var r = S(this).padre;
			var p = S(r).padre;
			
			var color = "#ff0000";
			switch(b){
				case "abuelo":
					p = S(r).abuelo();
					color = "#00ff00";
				break;
				case "Sigher":
					p = S(r).Sigher();
					color = "#0000ff";
				break;
				case "Prevher":
					p = S(r).Prevher();
					color = "rgb(255, 165, 0)";
				break;
			}
			S(p).stylo("background",color);
		}
	})
	S("#hoverdiv").ancho("200px");
	S("#hoverdiv").alto("200px");
	S("#hoverdiv").hover(function(){
		S(this).html("Entr&eacute;  en el Elemento");
		S(this).stylo("background","#0CBB0C");
	},function(){
		S(this).html("Sal&iacute; del Elemento");
		S(this).stylo("background","transparent");
	})
	S("#efectos").change(function(){
		var a = S(this).seleccion();
		if(a != ""){
			S("#efectodiv").Efecto(a.value);
			S("#nameEfect").texto('"'+a.value+'"');
		}
	})
	S("#runAnimation").click(function(e){
		e.cancelEv();
		S("#animatediv").stylo("position","absolute");
		var f = S("#parametross").FormValue();
		S.animate({
			element:S("#animatediv"),
			step:(f.tipo != "")?f.tipo:'caja',
			Animate:(f.Animate != "")?f.Animate:'lineal',
			duracion:f.duracion,
			distancia:f.distancia,
			delay:f.delay
		})
	})
	S("#opendial").click(function(){
		S("#dialogo").show();
	})
	S("#ec").click(function(){
		S.evitCP();
	})
	S("#edita").dblclick(function(){
		S(this).Edit(true);
	}).blur(function(){
		S(this).Edit(false);
	})
	S("#logo").click(function(){
		S('body').FullScreen();
	})
	S("#key_segure").key_segure();
	S("#calendario").Calendario({
		select:function(f){
			alert("has presionado "+f,"Calendario");
		}
	});
	S('#miram').range();
	S('#toggle').Toggle({
		fn:function(v){
			console.dir(v);
			if(v){
				S('#valoresT').html('ON');
			}
			else{
				S('#valoresT').html('OFF');
			}
		}
	});
	var a = [
		'css',
		'css3',
		'douglas crockford',
		'ecmascript',
		'html',
		'html5',
		'java',
		'javascript',
		'json',
		'node.js',
		'pie',
		'shellscript',
		'yui'
	];
	S("#autocomplete").ac(a);
	S.SimpleColor();
	S("#colores").stylo({
		"box-shadow":'0px 0px 5px #A1A0A0',
		'border-radius':'100px',
		padding:'0.5em',
		width:'32px',
		cursor: 'pointer',
		height: '32px',
		"margin-left": '3em',
		"margin-top": '3em'
	}).SimpleColor();
	
	S('#sub').FileUpload({
		carga:true
	});
	S('#foto').FileUpload({
		area:'#imag',
		tipo:'img',
		Arrastrar:true,
		permitidos:['jpg','svg','png','jpeg','gif','bmp'],
		completo:function(){
			var t = this;
			if(S.existe('#imag>img')){
				S('#imag>img').atrib('src',t.Resultado);
			}else{
				S('img',{
					atrib:{
						src:t.Resultado
					},
				AddClass: 'img'
				}).agregar('#imag');
			}
		},
		Ajax:{
			url:'php/file.php',
			completo:function(){
				S('#Fresp').html(this);
			}
		}
	});
	S("#caAja").click(function(){
		S.Ajax({
			url:'php/page1.php',
			metodo:"GET",
			completo:function(d){
				S("#cargarAjax").html(d);
			}
		})
	})
	S("#capageLoada").click(function(){
		S("#cargarpageLoad").pageLoad('php/page1.php');
	})
	S("#enviar").submit({
		url:"php/page2.php",
		completo:function(d){
			S("#resultados").html(d);
		},
		mientras:function(){
			S("#resultados").html("<span class='Shellicon-spin4 animate-spin'></span>");
		}
	});
	S("#capjs").click(function(){
		S("#loadjs").pageLoad('php/page1.html');
	})
	S("i").forEach(function(b,i){
		S(i).html("");
	});
	S("#font").ValueValido('0123654789');
	S("#font").keypress(function(e){
		if(e.keyCode == 13){
			S("i").stylo('font-size',S(this).valor()+"px");
		}
	})
	S('#colorsw').SimpleColor({
		title:'Color de los Iconos',
		fn:function(d){
			var v = S(this).valor();
			console.dir(v);
			S("i").stylo('color',v);
		}
	})
	S("#mocode").click(function(){
		var d = S(this).data('code');
		if(d == "n"){
			S(this).data('code','y');
			S(".i-code").stylo('display','inline-block');
			S(".i-name").stylo('display','none');
			S(this).html("Mostrar Clases");
		}
		else{
			S(this).data('code','n');
			S(".i-code").stylo('display','none');
			S(".i-name").stylo('display','inline-block');
			S(this).html("Mostrar C&oacute;digo");
		}
	})
	var svg = S.Svg({
		parent:"#exaplesvg",
		crear:true
	});
	svg.Svg.stylo({
			borde:"1px solid #000"
		});
	var stylo = {
		stroke: "#000",
		"stroke-width": "1px",
		fill:"#fff"
	};
	//svg.regilla();
	/*svg.gradient("radial",[{
			offset:"5%",
			stopColor:"#f60",
		},{
			offset:"95%",
			stopColor:"#FF6",
		}],
		{
			id:'miradio'
		}
		);
	var c = svg.circulo(50,50,40,{
		fill:"url(#miradio)"
		});
	c.click(function(){
		S(this).Efecto("floating");
	});
	var g = svg.agrupa({
		texto:[
			[],
			['Soy un texto agrupado',20,22,{fill:"#828181","font-size":" 1.5em"}]
			]
		},{id:'texts'});
	svg.transform(g,{translada:[30,20]});*/
	//
	/*
	* document.styleSheets[0].addRule('.red::before','color: green');
	* document.styleSheets[0].insertRule('.red::before { color: green }',0);
	* */
	var r = svg.rect(80,80,75,75,stylo);
	var s = svg.texto('start',20,20,{fill:"#FB4E00","font-size":" 1em"});
	var ds = svg.texto('drag',20,40,{fill:"#FB4E00","font-size":" 1em"});
	var st = svg.texto('stop',20,60,{fill:"#FB4E00","font-size":" 1em"});
	/*
	
	svg.Svg.mousemove(function(e){
		
		t.html("X =  "+mc.x+" Y = "+mc.y);
		r.
	})*/
	svg.arrastrar(r,{
		start:function(d){
			s.html("start: X=>"+d.x+", Y=>"+d.y);
		},
		drag:function(d){
			ds.html("drag: X=>"+d.x+", Y=>"+d.y);
		},
		stop:function(d){
			st.html("stop: X=>"+d.x+", Y=>"+d.y);
		}
	});
})

