
var a={
    val:5
}
var b=a;
var c={
    val:5
}
document.write(a.val+" "+b.val+"<br>")
document.write((a==b)+"<br>");
document.write((a==c)+"<br>");
b.val=10
document.write(a.val+"<br>"+"<br>")



var a1=10;
var a2=a1;
var a3=10;
document.write((a1==a2)+"<br>")
document.write((a2==a3)+"<br>")


var str="hello";
str="hi";
document.write(str.slice(1)+"<br>")
document.write(str+"<br>")


var aa={
    name:"KIM"
}
var bb=aa;
var cc=aa.name;
aa.name="PARK";
document.write(aa.name+"<br>");
document.write(bb.name+"<br>");
document.write(cc+"<br>"+"<br>"+"<br>"+"<br>");



var test1={
    name:"asa",
    adress:{
        contry:"korea"
    }
}

var test2=Object.assign({},test1)
document.write((test1==test2)+"<br>");
document.write((test1.adress==test2.adress)+"<br>"+"<br>"+"<br>")


Object.freeze(test1)
test1.name="bab" //무시
test1.adress.contry="Japan"
document.write(test1.name+"<br>")
document.write(test1.adress.contry)
