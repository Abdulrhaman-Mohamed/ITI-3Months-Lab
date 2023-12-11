//var img_2= document.createElement("img");
var node = document.getElementsByTagName("img")[0];
var clone = node.cloneNode(false);
console.log(clone.nodeName);
/*clone.style.color = "red";
clone.style.width = "16px";*/
//var clone = node.cloneNode(true);
document.body.appendChild(clone);
/*
img_2.style.position="absolute";
img_2.style.left = 0;
img_2.style.bottom=0;
img_2.src="./Lab/bear lab/dom.jpg";
document.body.append(img_2);*/

var img_1= document.getElementById("header");
img_1.style.marginLeft="83%";

var list_element = document.getElementById("nav")
list_element.style.listStyle="circle";
list_element.style.listStylePosition="inside";


