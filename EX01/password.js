function validate()
{
    let firstentry = document.getElementById("fpass");
    let secondentry=document.getElementById("cpass");


    if (firstentry.value==secondentry.value && firstentry.value.length>=8)
    {
        document.getElementById("result").innerHTML = "Valid";
        document.getElementById("fpass").value="";
        document.getElementById("cpass").value="";

    }
    else{
        if (firstentry.value!=secondentry.value){
            document.getElementById("result").innerHTML = "Invalid!!! Passwords do not match. Try again";
        }
        else{
            document.getElementById("result").innerHTML = "Invalid!!! Password must be at least 8 characters long";
        }

    }
    
}