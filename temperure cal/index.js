document.getElementById("button").addEventListener("mouseover" ,onclick);

function onclick(){
let celsius = 0;
celsius = document.getElementById("input").value;
let ferhenight = (9/5)*celsius + 32;
if(celsius == 0){
    document.getElementById("h2").innerHTML = "ferhenight: --";
}else{
document.getElementById("h2").innerHTML = "ferhenight: " + ferhenight.toString();}
//alert(ferhenight);
}