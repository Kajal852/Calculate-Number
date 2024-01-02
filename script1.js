/*Harshad Function*/
function harshad(){
    var num,x,y,sum=0;
    num=parseInt(p.value);
    x=num;

    while(x>0){
        y=x%10;
        x=x/10;
        sum+=y;
    }
    if (x%sum==0) 
        document.getElementById("h").innerHTML="Is Harshad";
    else
        document.getElementById("h").innerHTML="Is Not Harshad";
}

/*Palindrome Function*/
function palindrome(){
    var t,n,rem,rev=0;
    n=parseInt(p.value);
    t=n;

    while(n>0){
        rem=n%10;
        n=parseInt(n/10);
        rev=rev*10+rem;                    
    }
    if(rev==t)
    document.getElementById("ans").innerHTML="Is Palindrome";  
    else
    document.getElementById("ans").innerHTML="Is not Palindrome";  
}

/*Prime Function*/
function prime(){
    var n,i,chk=0;
    n=parseInt(document.getElementById("p").value);
    for(i=2; i<n; i++){
        if(n%2==0){
            chk++;
            break;
        }
    }
    if(chk==0)
        document.getElementById("pr").innerHTML= "Is Prime Number";
    else
        document.getElementById("pr").innerHTML= "Is Not Prime Number";                               
}

/*Spy Function*/
function spy(){
    var n,d,s=0,m=1;
    n=parseInt(document.getElementById("p").value);
    while(n>0){
        d=n%10;
        s=s+d;
        m=m*d;
        n=parseInt(n/10);
    }
    if(s==m){
        document.getElementById("s").innerHTML= "Is Spy Number";
    }
    else{
        document.getElementById("s").innerHTML= "Is Not Spy Number";
    }
}

/*Buzz Function*/        
function buzz(){
    var n=parseInt(document.getElementById("p").value);
    if(n%7==0 || n%10==7){
       document.getElementById("b").innerHTML= "Is Buzz Number";                    
    } 
    else{
        document.getElementById("b").innerHTML= "Is Not Buzz Number";                    
    }               
}

/*Special Function*/
function special(){
    var num=parseInt(document.getElementById("p").value);
    var temp=num;
    var sum=0;
    while(num>0){
        var n1=num%10;
        num=parseInt(num/10)
        var f=1;
    for(var i=n1;i>0;i--){
        f=f*i;
    }
    sum=sum+f;
}
if(sum==temp)
    document.getElementById("sp").innerHTML= "Is Special Number";
else
    document.getElementById("sp").innerHTML= "Is Not Special Number";
}

/*Reverse Function*/
function reverse(){
    var num=parseInt(document.getElementById("p").value);
    var n=num;
    var rev=0,r;
    while(n>0) {
        r=n%10;
        n=parseInt(n/10);
        rev=rev*10+r;
    }
    //document.write(p.value+ " Reverse number="+rev).innerHTML;
    document.getElementById("r").innerHTML= "Reverse Number "+rev;
}

/*Magic Function*/
function magic(){
    var num=parseInt(document.getElementById("p").value);
    var n=num;
    var sum=0,r;
    while(n>0) {
        r=n%10;
        n=parseInt(n/10);
        sum=sum+r;
    }
    var n1=sum;
    var rev=0,tmp;
    while(sum>0) {
        tmp=sum%10;
        sum=parseInt(sum/10);
        rev=rev*10+tmp;
    }
    if((n1*rev)==num)
        document.getElementById("m").innerHTML= "Is Magic Number";
    else
        document.getElementById("m").innerHTML= "Is Not Magic Number";
}