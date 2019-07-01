/*
//validaciones
function espacios(nodo){
  text=nodo.value;
  var exp=/\s{1,}/
  if(exp.test(text)){
    alert("No dejes espacios en blanco.")
    nodo.focus();
    nodo.className='validar';
    return false;
  }
  nodo.className='';
  return true;
}

*/
function vacios(nodo){
  text=nodo.value;
  var exp=/^$/;
  if(exp.test(text)){
    alert("No puedes dejar vacio");
    nodo.focus();
    return false;
  }
  return true;
}
/*
function correo(nodo){
  text=nodo.value;
  var exp=/^[\w-\.]{3,}@([\w-]{2,}\.)*([\w]{2,}\.)[\w]{2,4}$/;
  if(!exp.test(text)){
    alert("Mail invalido.");
    nodo.select();
    nodo.className='validar';
    return false;
  }
  nodo.className='';
  return true;
}
*/
function telefono(nodo){
  text=nodo.value;
	if(text==""){
		return true;
	}
  var exp0=/^\d{8}$/;
  var exp1=/^\d{4}-\d{4}$/;
  var exp2=/^\d{6,8}$/;
  //otras
  var exp4=/^12345678$/;
  var exp5=/^01234567$/;
  var exp6=/^87654321$/;
  var exp7=/^76543210$/;
  var exp8=/^12/;
  var exp9=/^123/;
  var exp10=/^012/;
  
  if((!exp0.test(text) & !exp1.test(text) & !exp2.test(text)) || (exp4.test(text) || exp5.test(text) || exp6.test(text) || exp7.test(text) || exp8.test(text) || exp9.test(text) || exp10.test(text))){
    alert("Numero invalido.");
    nodo.focus();
    return false;
  }
  return true;
}
/*
function seleccionados(nodo){
  text=nodo.value;
  var exp=/^$/;
  if(exp.test(text)){
    alert("Debes seleccionar un elemento.");
    nodo.className='validar';
    return false;
  }
  nodo.focus();
  nodo.className='';
  return true;
}

function numeros(nodo){
  text=nodo.value;
  var exp=/^\d{1,}$/;
  if(!exp.test(text)){
    alert("El campo debe ser numerico.");
    nodo.focus();
    nodo.className='validar';
    return false;
  }
  return true;
}
*/