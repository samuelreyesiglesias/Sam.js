
//Mini Library Sam.Js
//[Free License]
//if you want to notify some problem or want to collaborate in this project please 
//send me a message to samuelreyesiglesias@gmail.com
//THanks for using this..

//Easy way to access a node and change some of its attributes
function $(identifier,theAction=false){ //gets a node 
	action=null;
	var theNode;
	if(typeof identifier=="string"){
		identifier=identifier.split(":");
		if(identifier.length>1){
			action=identifier[1];
			identifier=identifier[0];
		}else{
			identifier=identifier[0]
		}
		if($id(identifier)){				
			theNode= $id(identifier);
		}else if($tagName(identifier)){
			theNode= $tagName(identifier);
		}else if($tagNameNs(identifier)){
			theNode= $tagNameNs(identifier);
		}else if($name(identifier)){
			theNode= $name(identifier);
		}else if($className(identifier)){
			theNode= $className(identifier);
		}
	}if(typeof identifier=="object"){
		//alert(typeof identifier);
		if(theAction!=false){
			action=theAction;
			theNode=identifier;
		}
	}
	if(action=="displayNone"){
		theNode.style.display="none";
	}else if(action=="displayBlock"){		
		theNode.style.display="block";
	}else if(action=="displayInline"){		
		theNode.style.display="inline";
	}else if(action=="displayInlineBlock"){		
		theNode.style.display="inline-block";
	}
	return theNode;
}





//GETTING NODES
//Getting a node by its ID Name
function $id(id){
	var internalNode;
	if(id.indexOf("#")==-1){
		internalNode=document.getElementById(id);
	}else{
		id=id.replace("#","");
	    internalNode = document.getElementById(id);		
	}
	return internalNode;
}

//Getting a node using its name 
function $name(identifier){
		return document.getElementsByName(identifier);
}
//Getting a node using the Class Name 
function $className(id){
	if(id.indexOf(".")==-1){
		return document.getElementsByName(id);
	}else{
		id=id.replace(".","");
		return document.getElementsByClassName(id);
	}
}
//Getting a node using the tag Name of the Element
function $tagName(identifier){
	return document.getElementsByTagName(identifier);
}
//Getting a node using its tag name space
function $tagNameNs(identifier){
	return document.getElementsByTagNameNS(identifier);
}

//FUNCTIONS TO CREATE NODES
function $_(typeOfNode){ //create a node
	return document.createElement(typeOfNode);
}

//Adding a new node to a parent Element
function $_add(aParentNode,aChild){ // add a node
	if(typeof aParentNode=="object"){
		aParentNode.appendChild(aChild);
	}else{
		var aParentNode = $(aParentNode);
		if(typeof aParentNode[0] == "object"){
			aParentNode[0].appendChild(aChild);					
		}else{
			aParentNode.appendChild(aChild);					
		}
	}
}

//Deleting a node
function $_del(theNode){
	if(typeof theNode=="object"){
		var currentNode = theNode;
		currentNode.parentNode.removeChild(currentNode);
	}else{
		var currentNode = $(theNode);
		currentNode.parentNode.removeChild(currentNode);		
	}
}

//Setting an attribute to one node  
function $_atr(theNode,theAttribute,theValue){
	if(typeof theNode=="object"){
		var currentNode = theNode;
		currentNode.setAttribute(theAttribute,theValue);
	}else{
		var currentNode = $(theNode);
		currentNode.setAttribute(theAttribute,theValue);		
	}
}

//Adding a new Class to one node
function $_class(theNode,theClass){
	if(typeof theNode=="object"){
		var currentNode = theNode;
		currentNode.className=theClass;
	}else{
		var currentNode = $(theNode);
		currentNode.className=theClass;		
	}
}



//AJAX FUNCTION 
var aj=function(){
this.j=function(url,obj){
	metodo=obj.metodo;
	parametros=obj.parametros;
	f=obj.eureka;
	if(window.XMLHttpRequest){
		a=new window.XMLHttpRequest();
	}else{
		try{
			a=new ActiveXObject("microsoft.XMLHTTP");
		}catch(e){
			a=new ActiveXObject("Msxml2.XMLHTTP");
		}
	}
	if(metodo=="get" || metodo=="GET"){
		a.open(metodo,url+"?"+parametros,true);
		a.send(null);
	}else{
		a.open(metodo,url,true);
		a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		a.send(parametros);
	}
	a.onreadystatechange=function(){
		if(a.readyState==4){
			f(a.responseText||"");
		}
	}
}
}


evento=function(e,f){
	var codigo=e.keyCode || e.which;
	if(codigo==13){
		eval(f);
	}
}

//CREATE EFFECT
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


function validar_correo(nodo){
	text=nodo.value;
	var exp=/^[\w-\.]{3,}@([\w-]{2,}\.)*([\w]{2,}\.)[\w]{2,4}$/;
	if(!exp.test(text)){
		alert("Ingresa un correo valido.");
		nodo.select();
		return false;
	}
	return true;
}


function eliminarE(v,d,elm,e){
try{
		if(confirm("Seguro que deseas eliminar este elemento?")){
			ajax=new aj();
			ajax.j(d,{
				metodo:'post',parametros:v,eureka:
				function(trs){
					//alert(trs.responseText);
					if((trs)=="OK"){
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
}catch(e){
	alert(e);
}
}

comp=true;
jindex=0;
mover=function(){
	jindex+=1;
	x=$('contenedor_slider');
	posx=posx+2;
	coordenadas=posx+"px center";
	x.style.backgroundPosition=coordenadas;
	if(jindex<350){
		setTimeout("mover()","1");
	}
}


(function(){	
	

	//Options to access an element an manage the appereance

	/*
	$("Mascara:displayBlock"); // document.getElementBy##(ElementIdentifier).style.display="block"
	$("Mascara:displayNone"); //  document.getElementBy##(ElementIdentifier).style.display="none"
	$("Mascara:displayInline"); // document.getElementBy##(ElementIdentifier).style.display="inline"
	$("Mascara:displayInlineBlock"); //document.getElementBy##(ElementIdentifier).style.display="inline-block"
	*/


	//There are two ways to access and show or hide elements
	/*
	$($("Mascara"),"displayNone"); //two ways for display or hide the elements
	$("Mascara:displayBlock"); // second way
	*/

})();
