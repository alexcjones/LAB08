function change(){
   
    a=document.getElementById("red2");
    b=document.getElementById("green2");
    c=document.getElementById("blue2");
    document.body.style.backgroundColor='rgb(' + a.value + ',' + b.value + ',' + c.value + ')';

    bd=document.getElementById("bord")
    
    a1=document.getElementById("red1");
    b1=document.getElementById("green1");
    c1=document.getElementById("blue1");
    d=document.getElementById("width");
    bd.style.borderColor= 'rgb(' + a1.value + ',' + b1.value + ',' + c1.value + ')';
    bd.style.borderWidth=d.value+"px";
}