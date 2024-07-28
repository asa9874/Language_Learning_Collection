
//객체 리터럴
var obj1={};
obj1.age=20;

//Object() 생성자
var obj2= new Object();
obj2.age=20;

//생성자
function Person(name){this.name=name;}

//프로토타입객체에 메소드 정의
Person.prototype.setname= function(name){this.name=name}

//인스턴스생성
var human= new Person("KIM")
//메소드 호출
//human.__proto__ == Person.prototype
human.setname("PARK")







//상속
var Parent=(function(){
    function Parent(name){this.name=name;}
    Parent.prototype.sayname=function(){document.write(this.name);};
    return Parent;
}());

var child2= Object.create(Parent.prototype)

child2.name="Kim";
document.write(child2.name+"<br>"); // Kim
child2.sayname(); // Kim

