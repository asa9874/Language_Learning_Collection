
var arr1=[4,25,16,23];
document.write(arr1.join(" ")+"<br>");
document.write(arr1.concat(56)+"<br>");
document.write(arr1.reverse()+"<br>") ;
document.write(arr1.sort(function(a,b) {return a-b;})+"<br>");
document.write(arr1.sort(function(a,b) {return b-a;})+"<br>");
document.write(arr1.slice(1,4)+"<br><br><br>");


document.write(arr1.splice(1,2,44)+"<br>");
document.write(arr1+"<br>");
arr1.pop();
document.write(arr1+"<br>");
arr1.push(22);
document.write(arr1+"<br><br><br>");


document.write(arr1+"<br>");
arr1.shift();
document.write(arr1+"<br>");
arr1.unshift(11);
document.write(arr1+"<br><br><br>");

document.write(arr1+"<br>");
function plus(item,index){document.write(item+1+",")}
arr1.forEach(plus)

document.write("<br>"+arr1);
function plus2(item){return item+1}
document.write("<br>"+arr1.map(plus2)+"<br><br><br>")


document.write(arr1.filter(function(a){return a>11})+"<br>")

document.write(arr1.indexOf(22))
