

//객체 생성
var human={
    name:'KIM',
    gender:'male',
    walk:function(leng){
        document.write(leng+"만큼걸었다."+"<br>")
    }
}

human.walk(10);


//생성자 함수
function Organism(name,life){
    this.name=name;
    this.life=life;
    this.sayname=function(){
        document.write(name+"<br>")
    }
}

var cat= new Organism('cat',10);
var dog= new Organism('dog',30);

cat.sayname();
dog.sayname();




var name="first_name"
var test1={
    'hi-hello':"sds",
    //hi-hello:"sds", '-'연산자 때문에 안됨
    [name]:"Kim",
    1: 10,
}

//document.write(test1.hi-hello)
//document.write(test1[hi-hello]);
document.write(test1['hi-hello']+"<br>")

document.write(test1.first_name)
//document.write(test1[first_name])
document.write(test1['first_name']+"<br>")

//document.write(test1.1+"<br>")
document.write(test1[1]+"<br>")
document.write(test1['1']+"<br>")


test1.first_name="PARK"
document.write(test1.first_name+"<br>")
test1['first_name']="JOE"
document.write(test1.first_name+"<br>")

test1.age= 20;
document.write(test1.age+"<br>")




var test3=['Kim','Park','JOE']
test3.age=20;


for(var index in test3){
    document.write(test3[index]+"<br>")
}

for(var value of test3){
    document.write(value+"<br>")
}








