


function fun() {document.write(this+"<br>")}
function fun2(){function fun3(){document.write(this+"<br>")} fun3()}
var obj={fun4:function(){function fun5(){document.write(this+"<br>")} fun5()}}
document.write(this+"<br>")
fun();
fun2();
obj.fun4();

document.write("<br><br>")



var obj={fun5:function(){document.write(this+"<br>")}}
obj.fun5()

document.write("<br><br>")


