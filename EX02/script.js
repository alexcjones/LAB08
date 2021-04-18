function next(){
    let mynum=findslidenumber();
    console.log(mynum);
    if (mynum!=4){
        mynum+=1;
    }
    else
        mynum=0;
    
    console.log(mynum);
    displayimg(mynum);
}
function previous(){
    let mynum=findslidenumber();
    if (mynum!=0){
        mynum-=1;
    }
    else
        mynum=4;

    displayimg(mynum);
}
function findslidenumber(){
    slide0=document.getElementById("slide0");
    slide1=document.getElementById("slide1");
    slide2=document.getElementById("slide2");
    slide3=document.getElementById("slide3");
    slide4=document.getElementById("slide4");
    let snum=0;

    if (slide0.width!=0){
        snum=0;
        slide0.width=0;
        slide0.height=0;
    }
    else if (slide1.width!=0){
        snum=1;
        slide1.width=0;
        slide1.height=0;
    }
    else if (slide2.width!=0){
        snum=2;
        slide2.width=0;
        slide2.height=0;
    }
    else if (slide3.width!=0){
        snum=3;
        slide3.width=0;
        slide3.height=0;
    }
    else if (slide4.width!=0){
        snum=4;
        slide4.width=0;
        slide4.height=0;
    }
    return snum;
}
function displayimg(number){
    slide0=document.getElementById("slide0");
    slide1=document.getElementById("slide1");
    slide2=document.getElementById("slide2");
    slide3=document.getElementById("slide3");
    slide4=document.getElementById("slide4");
    

    if (number==0){
        slide0.width=800;
        slide0.height=500;
    }
    else if (number==1){
        slide1.width=800;
        slide1.height=500;
    }
    else if (number==2){
        slide2.width=800;
        slide2.height=500;
    }
    else if (number==3){
        slide3.width=800;
        slide3.height=500;
    }
    else if (number==4){
        slide4.width=800;
        slide4.height=500;
    }

}