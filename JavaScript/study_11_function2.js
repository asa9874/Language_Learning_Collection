
function run(){
    document.write(10 +"<br>")
}
run.event="달리기";
run.fastrun= function(leng){
    document.write(leng*100+"<br>"+"<br><br>")
}

run()
document.write(run.event+"<br>")
run.fastrun(10)


function people(func){
    document.write(func())
}

function bar(){
    return bar.caller;
}

people(bar)
document.write(bar()+"<br>"+"<br>")



function test1(a,b,c){};
document.write(test1.length+"<br>");
document.write(test1.name+"<br><br><br>");



(function test2(){
    a="hi"
    document.write(a+"<br>");
}());

(function (){
    a="hello"
    document.write(a+"<br><br><br>");
}());



function parent(){
    var parentname="아빠";
    function child(){
        var childname="자식";
        document.write(parentname+"<br>");
        document.write(childname+"<br>");
    }
    child()
    document.write(parentname+"<br>");
    //document.write(childname)
}
parent();
//child();







setTimeout(function(){
    document.write("hi")
},1001111);{
}

