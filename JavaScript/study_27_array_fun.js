
//[4,12,5].sort()//[12,4,5]
//[4,12,5].sort(function(a,b){return a-b;})//[4,5,12]


[1,2,3,4].forEach(function(item){
    document.write(item +" ");
});


document.write([1,2,3,4].map(function(a){return a+3}))


document.write([1,2,3,4].filter(function(a){if(a>2){return a}}))


[4,2,5,6].some(function(item){return item==6})//true
[4,2,5,6].every(function(item){return item>1})//true

