S(function(){
	S.contextMenu(function(){
		var msj = "<p>Si te gusta ShellScript descargalo ya <span class=\"download\">aqui</span></p>";
		alert(msj,"ShellScript2.0");
	})
	S("#barra li").click(function(){
		var d = S(this).data("active");
		console.log(d);
		if(d != null){
			S(".seccion").RemoveClass("SliderUP");
			S("#"+d).AddClass("SliderUP");
		}
	})
	S(".contemselects").stylo("height","0em");
	S(".no-selects span").click(function(){
		var p = S(this).padre;
		var tio = S(p).Sigher();
		var d = S(tio).data("alto");
		var down = "Shellicon-down-dir";
		var up = "Shellicon-up-dir";
		if(S(tio).stylo("height") == "0em"){
			if(S(this).Classexiste(down)){
				S(this).RemoveClass(down);
			}
			S(this).AddClass(up);
			S(tio).stylo("height",d);
		}else{
			if(S(this).Classexiste(up)){
				S(this).RemoveClass(up);
			}
			S(this).AddClass(down);
			S(tio).stylo("height","0em");
		}
	})
	S(".selects").click(function(){
		var d = S(this).data("load");
		S(".selects").stylo('border', 'none');
		S(this).stylo('border-left', '3px solid #0CBB0C');
		S("#pages").pageLoad("demo/"+d+".html");
	})
	function p(){
		p = S.pantalla();
		
		if(p.anchoT <= 480){
			S("#barra li").RemoveClass("btn");
			setTimeout(function(){
				S("svg").atrib("viewBox","0 0 "+p.anchoT+" 180");
			},100);
		}
	}
	p();
	S.resize(p);
})
//4437697
//https://dl.boxcloud.com/d/1/VAR01QWUBmK9kxd4yyvkmSdTCJ1d7dL3LcwxaZKUyiCtFYnap5GmrGztzl_DIQ57Gd15RZAZo1gQUgQ1RT2Kvv1MaL34PoUIs__15_BTZCECKR4b4YGfqc1HJJFKj6pRSNBIfsv0kC9r-KTbHdBR6g6SY34w07kRu8rntdbEZepcHWbFIjdenhdqKltZH1_Ty4pp7tJTGKEssXVuzPYp-hFIuAAs2zI_GDnZ9U9h6mZIaKp_24csOpiCWdTR2oJsZ3UmDsJVt8WyvT6R0k0Th3K1pU5h22TY8z2nOoWIDpHbAZ1je9CFSeSoxyw00FwXnEG5AD6WtX9goxOLFeHp1w10FbZsY9y15qQou30imqxHEfCtBcL_VO97yt8Im84OR5UBhmSKX61D_0bHrw1LL5V1JhbmCjB5r15pj_Bf-0VJwP0OEStYdnCCQbTp4xEDzDvkMILveb_NmgTzBgamL_A3j2lKlh3T61bf8keGQ8dvCRpJVSl66f6ZghcabxmeinLUo3oF4lLzRP4zyBfMUrlIRoP0i6dwcfAfV7errjCQf8pyHir8ENeRohOssqqW0jgGIdDBZsPKKWXej32KobO_m2bGwVnchCbQm0M9h8M-UzfTZKCLYhD2MkwkAdKKDX0CYw4Wsd0Pb7lQplrnAWNizOmTn4gpgikMgwiMOwqbhv1PeNAIMx7DxqH-mVLlEztjsEzVdPeZ7SvkVf-6ODWB7eKYEovlZimvNoki4__jmSNFmiaaWg8uGffRhld97KUs7OqL11d3MIfNdQI72-FnIkYbCmqleFfXPc_K2MRuTHVUFpwsk_KIgY4J4QsL6Dx1lTlumiLnhXvyFFIeN0H6uB1bMMNqNZeUBw0cydyVEkQjo2yGLhILsP5bDrP-bbKp76Z_7UzqVlhRR4MMW8EFKeal9cwPMNnKbkomtFwnKiBc5z9Ls9Oq0NMAD_A-u51BA1KmcPGHGm1tqkbcEnPE4TWR0NtF9M8a9_r2wgB5RVv8GSuOgU6UsQ../download
//https://app.box.com/s/5vhstbvupawayj6g4c2qcalvjvbma3xt
