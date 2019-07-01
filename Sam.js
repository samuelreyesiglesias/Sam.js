


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

//var $id = $id || {};

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


function $name(identifier){
		return document.getElementsByName(identifier);
}
function $className(id){
	if(id.indexOf(".")==-1){
		return document.getElementsByName(id);
	}else{
		id=id.replace(".","");
		return document.getElementsByClassName(id);
	}
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
