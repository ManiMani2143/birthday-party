function Name(){
    var name=document.getElementById("Username").value;
    if(name.length==0){
        document.getElementById("Namespan").innerHTML="Name is required"
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        document.getElementById("Namespan").innerHTML="Write full name"
        return false;

    }
    document.getElementById("Namespan").innerHTML='Valid <i class="fa-regular fa-circle-check fa-1x"></i>';
    return true;
}

function Email(){
    var email=document.getElementById("EMail").value;
    if(email.length==0){
        document.getElementById("Emailspan").innerHTML='Email is required';
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById("Emailspan").innerHTML='Email Invalid'

    return false;
    }
    document.getElementById("Emailspan").innerHTML='Valid<i class="fa-regular fa-circle-check fa-1x"></i>'
    return true;
    
}
