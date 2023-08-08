var a= document.getElementById('age');
var b= document.getElementById('height');
var c= document.getElementById('weight');
let d;
let btn1= document.getElementById('btn1');
let out1=document.getElementById('out1');
function myfunc(){
    d= c.value/((b.value/100)*(b.value/100));
    out1.innerHTML = d.toFixed(2);
}

btn1.addEventListener('click',myfunc);
