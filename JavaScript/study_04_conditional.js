
    document.write("var a=1; <br>")
    var a=1;
    if(a==1){
        document.write("a==1 YES <br>")
        if(a%2==0){
            document.write("a는 짝수 <br><br><br><br>")
        }
        else{
            document.write("a는 홀수 <br><br><br><br>")
        }
    }
    else{
        document.write("NO <br>")
    }



    var b=2;
    document.write("var b=2; <br>")
    if(b==1){
        document.write("b==1 1임 <br> <br> <br>")
    }
    else if(b==2){
        document.write("b==2 2임 <br> <br> <br>")
    }
    else{
        document.write("그 외 <br> <br> <br>")
    }

    var c=3;
    document.write("var c=3; <br>")
    switch(c){
        case 1:
            document.write("1임<br>")
            break
        case 2:
            document.write("2임<br>")
            break
        case 3:
            document.write("3임<br>")
            break
        default:
            document.write("아무것도아님<br>")
            break
    }
