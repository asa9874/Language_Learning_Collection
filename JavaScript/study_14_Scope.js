
var y;
function Human(){
    var x=3;
    y=5
    document.write(x+"<br>")
}
Human()
//document.write(x)
document.write(y+"<br>"+"<br>"+"<br>")


var z=5;
function test(){
    var z=10
    document.write(z+"<br>")
}
test()
document.write(z+"<br>")

function test2(){
    var z=100
    test()
}
test2()



var q=1;
function test3(){
    q=1001;
}
test3()
document.write(q)
