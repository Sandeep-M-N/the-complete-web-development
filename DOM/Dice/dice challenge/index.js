var random1=Math.floor(Math.random()*6)+1;
var randomimg1="images/" + "dice" + random1 + ".png"
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg1)

var random2=Math.floor(Math.random()*6)+1;
var randomimg2="images/" + "dice" + random2 + ".png"
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2)
