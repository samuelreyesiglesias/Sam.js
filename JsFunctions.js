function siguiente(ev,id){
		var c=ev.which || ev.keyCode;
		if(c==13){
			$(id).focus();
			return false;
		}
}

function invalidar_enter(ev){
		if(ev.which==13 || ev.keyCode==13){
			return false;
		}else{
			return true;
		}
}

	function eliminarE(v,d,elm,e){
		if(confirm("Seguro que deseas eliminar este elemento?")){
			new Ajax.Request(d,{
				method:'post',parameters:v,onSuccess:
				function(trs){
					//alert(trs.responseText);
					if((trs.responseText||"")=="OK"){
							elemento=$(elm);
							elemento.parentNode.removeChild(elemento);
					}
				}
			});
		}
		var ev=e||window.event;
		ev.cancelBubble=true;
		ev.returnvalue=false;
		if(ev.stopPropagation){
			ev.stopPropagation();
			ev.preventDefault();
		}
	}
	

	
window.size = function(){
  var w = 0;
  var h = 0;
  if(!window.innerWidth){
    if(!(document.documentElement.clientWidth == 0)){
      w = document.documentElement.clientWidth;
      h = document.documentElement.clientHeight;
    }else{
      w = document.body.clientWidth;
      h = document.body.clientHeight;
    }
  }else{
    w = window.innerWidth;
    h = window.innerHeight;
  }
  return {width:w,height:h};
}
window.center = function(){
	var hWnd = (arguments[0] != null) ? arguments[0] : {width:0,height:0};
	var _x = 0;
	var _y = 0;
	var offsetX = 0;
	var offsetY = 0;
	if(!window.pageYOffset){
		if(!(document.documentElement.scrollTop == 0)){
			offsetY = document.documentElement.scrollTop;
			offsetX = document.documentElement.scrollLeft;
    }else{
			offsetY = document.body.scrollTop;
			offsetX = document.body.scrollLeft;
    }
	}else{
		offsetX = window.pageXOffset;
		offsetY = window.pageYOffset;
  }
  _x = ((this.size().width-hWnd.width)/2)+offsetX;
  _y = ((this.size().height-hWnd.height)/2)+offsetY;
  return{x:_x,y:_y};
}


function standarBox(id,w,h){
	var point = window.center();
	var popup = document.getElementById(id);
	fade(popup);
	popup.style.left = (point.x - w) + "px";
	popup.style.top = (point.y - h) + "px";
	popup.style.display = 'inline';
}


function b(v,elm,oc){
		new Ajax.Request("busquedas.ajax.php",{
			method:'post',parameters:v,onSuccess:
				function(trs){
							elemento=$(elm).innerHTML=trs.responseText||"";
							if(oc!=null){
								$(oc).style.display='none';
							}
				}
			});
}

function vVacio(id){
	var exp=/^\s+$/;
	var el=$(id);
	var c=el.value;
	if(c==""){
		alert("No dejar campo vacio");
		el.className='fo';
		el.onblur="this.className=''";
		el.select();
		return false;
	}
	if(exp.test(c)){
		alert("No dejar campo vacio");
		el.className='fo';
		el.onblur="this.className=''";
		el.select();
		return false;
	}
}

function esFecha(x){
	var exp=/^\d{1,2}\/\d{1,2}\/\d{4}$/;
	el=document.getElementById(x)
	vl=el.value;
	if(!exp.test(vl)){
		alert("El campo de fecha es invalido");
		el.className='fo';
		el.onblur="this.className=''";
		el.select();
		return false;
	}
	vl=vl.split("/");
	if(vl[0]>31){
    alert("El campo de fecha es invalido");
		el.className='fo';
		el.onblur="this.className=''";
		el.select();
		return false;
	}else if(vl[0]<=0){
    alert("El dia debe ser mayor a Cero");
		el.className='fo';
		el.onblur="this.className=''";
		el.select();
		return false;
	}else if(vl[1]>12){
    alert("Solo se permite ingresar como maximo el numero 12 para meses");
		el.className='fo';
		el.onblur="this.className=''";
		el.select();
		return false;
	}else if(vl[1]<=0){
    alert("El mes debe ser mayor a Cero");
		el.className='fo';
		el.onblur="this.className=''";
		el.select();
		return false;
	}else if(vl[2]<2009){
    alert("El valor minimo a ingresar en el año es 2009");
		el.className='fo';
		el.onblur="this.className=''";
		el.select();
		return false;
	}
}

function nNumerico(id){
	var exp=/^\d+$/;
	var el=$(id);
	var c=el.value;
	if(!exp.test(c)){
		alert("Debes ingresar un valor numerico.");
		el.className='fo_1';
		el.onblur="this.className=''";
		el.select();
		return false;
	}
}

function dDigitos(d,id){
	var el=$(id);
	var c=el.value;
	if(c.length<d){
		alert("Debes ingresar por lo menos "+d+" digitos.");
		el.className='fo_2';
		el.onblur="this.className=''";
		el.select();
		return false;
	}
}

function generarCodigo(){
		new Ajax.Request("get.code.php",{
		method:"get",
		parameters:"&a=0",
		onSuccess:
		function(e){
			$("codigo_barra").value=e.responseText;
		}
		});
	}
	
    function efect(){
      this.colores=["888888","999999","aaaaaa","bbbbbb","cccccc","dddddd","ffffff"];
      this.i=0;
      this.obj=null;
      this.intervalo=200;
      this.ejecutar=function(){
        this.obj.style.backgroundColor="#"+this.colores[this.i];
        this.i++;
        if(this.i<=this.colores.length-1){
          setInterval('obj_['+(obj_.length-1)+'].ejecutar()',this.intervalo);
        }
      }
    }
    obj_=new Array();
    function fade(k){
      l=obj_.length;
      obj_[l]=new efect();
      obj_[l].obj=k;
      obj_[l].ejecutar();
    }
            
	function $Nodo(tipo){
		return document.createElement(tipo);
	}
	function $tNodo(t){
		return document.createTextNode(t);
	}
	function $aNodos(n1,n2){
		for(i=0;i<=n2.length-1;i++){
			n1.appendChild(n2[i]);
		}
	}	
	function $limpiar(a){
		for(i=0;i<=a.length-1;i++){
			document.getElementById(a[i]).value="";
		}
	}
	function $ev(el){
		if(el.addEventListener){
			el.addEventListener("mouseover",function(){el.style.backgroundColor='#d9d9d9';el.className="f2";},false);
			el.addEventListener("mouseout",function(){el.style.backgroundColor='#ffffff';el.className="";},false);
		}else{
			el.attachEvent("onmouseover",function(){el.style.backgroundColor='#d9d9d9';el.className="f2";})
			el.attachEvent("onmouseout",function(){el.style.backgroundColor='#d9d9d9';el.className="f2";})
		}
	}
	
    x=(window.screen.width/2)-(600/2);
		y=(window.screen.height/2)-(700/2);
		function guardarNumero(id,numero){
      if(isNaN(numero)){
        alert("El valor ingresado debe ser numerico");
        el=document.getElementById(id+"NUM");
        el.className='fo_1';
        el.onblur="this.className=''";
        el.select();
        return false;
      }
			new Ajax.Request("datos.factura.php",{
				method:"post",parameters:"&id="+id+"&numero="+numero,onSuccess:
				function(res){
					res=res.responseText||"";
					if(res=="OK"){
            alert("Numero de Factura modificado correctamente.");
						fade(document.getElementById(id+"NUM"));
					}
				}
			});
		}
		
		function eq0(r){
			return valor=r==0 || r=="" || r==0.00 || r=="0.00";
		}
		
		function Num(event){
			// 8 -> borrado			// 9 -> tabulador			// 37-40 -> flechas			// 188 -> .			// 190 -> ,    
			c=event.keyCode||event.which;
			if (c==8 || c==9 || c>=37 && c<=40 || c==188 || c==190){
        // permitimos determinadas teclas, no hacemos nada
			}else	if((c<48 || c>57)){
				if(c==97){
					agregarDetalle();
					clean_precios();
				}
				if(c==120){
          document.getElementById("form_adding").reset();
          document.getElementById("busquedaproducto").select();
          clean_precios();
				}
				event.cancelBubble=true;
				event.returnValue=false;
				if(event.stopPropagation){
					event.stopPropagation();
					event.preventDefault();
				}
			}
		}
		
		
		function xcerrar(a){
      for(i=0;i<=a.length-1;i++){
        a[i].style.display='none';
      }
		}