
var num;
var obj=null;
document.write("var num;"+"<br>")
document.write("var obj=null;"+"<br>"+"<br>"+"<br>")
document.write("1의 타입 : "+typeof(1)+"<br>");
document.write("A의 타입 : "+typeof("A")+"<br>");
document.write("true의 타입 : "+typeof(true)+"<br>");
document.write("[1,2,3]의 타입 : "+typeof([1,2,3])+"<br>");
document.write("{name:'홍길동'}의 타입 : "+typeof("{name:'홍길동'}")+"<br>");
document.write("num의 타입 : "+typeof(num)+"<br>");
document.write("obj의 타입 : "+typeof(obj)+"<br>"+"<br>"+"<br>"+"<br>");



document.write("변수선언"+"<br>");
document.write("var x;"+"<br>");
document.write("var y=10;"+"<br>");
document.write("var x=y;"+"<br>");
document.write("var a,b,c;"+"<br>");
document.write("var d=1,e=3;"+"<br>");
document.write("var f=g=h;"+"<br>");
document.write("var q=4+1;"+"<br>"+"<br>"+"<br>");



function fun1(){
    globval=4;
}
function fun2(){
    var globval=411;
}
globval=44;
fun1();
document.write(globval+"<br>");
fun2();
document.write(globval);
