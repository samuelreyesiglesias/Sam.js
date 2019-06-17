

function $(identifier){ //gets a node 
	if($id(identifier)){				
		return $id(identifier);
	}else if($tagName(identifier)){
		return $tagName(identifier);
	}else if($tagNameNs(identifier)){
		return $tagNameNs(identifier);
	}else if($name(identifier)){
		return $name(identifier);
	}else if($className(identifier)){
		return $className(identifier);
	}
}


//GETTING NODES
function $id(id){
	return document.getElementById(id);
}
function $name(identifier){
	return document.getElementsByName(identifier);
}
function $className(identifier){
	return document.getElementsByClassName(identifier);
}
function $tagName(identifier){
	return document.getElementsByTagName(identifier);
}
function $tagNameNs(identifier){
	return document.getElementsByTagNameNS(identifier);
}

//FUNCTIONS TO CREATE NODES
function $_(typeOfNode){ //create a node
	return document.createElement(typeOfNode);
}
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
function $_del(theNode){
	if(typeof theNode=="object"){
		var currentNode = theNode;
		currentNode.parentNode.removeChild(currentNode);
	}else{
		var currentNode = $(theNode);
		currentNode.parentNode.removeChild(currentNode);		
	}
}

function $_atr(theNode,theAttribute,theValue){
	if(typeof theNode=="object"){
		var currentNode = theNode;
		currentNode.setAttribute(theAttribute,theValue);
	}else{
		var currentNode = $(theNode);
		currentNode.setAttribute(theAttribute,theValue);		
	}
}

function $_class(theNode,theClass){
	if(typeof theNode=="object"){
		var currentNode = theNode;
		currentNode.className=theClass;
	}else{
		var currentNode = $(theNode);
		currentNode.className=theClass;		
	}
}



class St{
	constructor(name) {
		this.name = name;
	}
	sayHi(){
		alert(this.name);
	}
	a(str) { alert(str); }
}


//this document neeeds to be placed at the end of the document.
//or you need to change it to work when the onload event is done.
(function(){	
	//example for create a new element and adding it to our html
	
	/*
	divOne = $_("div"); //here we create a new node or html element 
	divOne.id = "elemento1"; // we assign an id to the element
	divOne.innerHTML = "Hola Mundo"; //we add a content
	$_add($("body")[0],divOne);//we add the element to our html 

	divTwo = $_("div"); //here we create a new node or html element 
	divTwo.id = "elemento2"; // we assign an id to the element
	divTwo.innerHTML = "Hola Mundo2"; //we add a content
	$_add("NEW_1",divTwo);//we add the element to our html givin a parameter of the identifier of one element, it can be ID,name,tag name, etc.
	*/
	
	//if exists an node called "elemento2" we can delete it using an instance of the function $_del , the parameter we need to give is the id,name, name of one tag, the name of a element that has an especific class Name,
	//or simply givin a node directly
	//$_del("elemento2");
	//$_del($("elemento2"));
	
	//Assign a new styke or atribute to our node element
	//$_atr("NEW_1","style","background-color:red");
	
	// we can add a class to our element using the next function
	//$_class("NEW_1","example_of_class");
	
	//var s_=new St();
	//s_.a(alert);
	//s_.a(s_.a);
	
	//var instancia2=new St("Stefany");
	//instancia2.sayHi();
	
	
	
	var input_nombre = $_("input");
	input_nombre.id = "input_nombre";
	$_add("body",input_nombre);
	
	$_atr("input_nombre","style","border-radius:20px;background-color:#efefef;color:#333366;font:bold 11pt arial;padding:5px;border:solid 1px silver");
	$_atr("input_nombre","placeholder","por favor digite su usuario");
	
	
})();