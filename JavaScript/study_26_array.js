
const Arr1=[1,2,3];
const Arr2= new Array(1,2,3);//[1,2,3]
const Arr3= new Array(4);//길이 4인 빈 배열생성

Arr1[1];    //2
Arr1.length;//3
typeof Arr1;//object

Arr1[1]=1;

delete Arr1[0];
Arr1.splice(2,1);


for(let i=0;i<Arr2.length;i++){
    document.write(i+" "+Arr2[i]+"<br>")
}

for(const item of Arr2){
    document.write(item+"<br>")
}



Array.isArray([1,2,3])

Array.from('hello')
Array.from({length:3, 0:1, 2:3, 3:6})

Array.of(1)
Array.of(1,2,3)

[1,2,3].indexOf(2) //1


[1,2].concat([3,4])//[1,2,3,4].

[1,2,3,4].join(":")//1:2:3:4
[1,1,1].push(3)//4

[1,3,4].pop()//4

[1,2,3].reverse()//[3,2,1]

[1,2,3].shift()//1

[1,2,3,4].slice(0,2)//1,2


[1,2,3,4].splice(1,2,3)//[1,3,3,4]
