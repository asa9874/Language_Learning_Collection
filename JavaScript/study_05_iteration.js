
document.write("for문 for(n=1;n<10;n++) <br>")
for(n=1;n<10;n++){
    document.write(n+"<br>")
}

document.write("<br><br> while문 <br>var n=1;<br> while(n<10)<br>")
var n=1;
while(n<10){
    document.write(n+"<br>");
    n++;
}

document.write("<br><br> do while문<br>var n=100;<br> do{<br>document.write(n);<br>}while(n<10);<br>")
var n=100;
do{
    document.write(n);
}while(n<10);

document.write("<br><br><br>break <br>for(n=1;n<10;n++) <br>if(n==5){break}<br>")
for(n=1;n<10;n++){
    if(n==5){break}
    document.write(n+"<br>")
}

document.write("<br><br><br>continue <br>for(n=1;n<10;n++) <br>if(n==5){continue}<br>")
for(n=1;n<10;n++){
    if(n==5){continue}
    document.write(n+"<br>")
}

document.write("<br><br><br>label <br>for(n=1;n<10;n++) <br>if(n==5){continue}<br>")
var n=1;
aa:
for(;n<10;n++){
    
    if(n==5){continue aa;}
    document.write(n+"<br>")
    
}

