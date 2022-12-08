var i = 0;
var j = 0;
var text1 = "SOE AUNG";
var text2 = "Frontend Developer";
var speed = 180;

setTimeout(typeWriter, 1000);
function typeWriter() {
  if (i < text1.length) {
    document.getElementById("typeout1").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter2, 2500);
function typeWriter2() {
  if (j < text2.length) {
    document.getElementById("typeout2").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}

setTimeout(addclass, 4000);
function addclass() {
  document.getElementById("iconleft").classList.add("fromleft");
  document.getElementById("iconright").classList.add("fromright");
  console.log("sadf");
}
